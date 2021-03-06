//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

let userInfo

const UNPROMPTED = 0
const UNAUTHORIZED = 1
const AUTHORIZED = 2

App({
	onLaunch: function() {
		qcloud.setLoginUrl(config.service.loginUrl)
	},
	data: {
		locationAuthType: UNPROMPTED
	},
	login({
		success,
		error
	}) {
		wx.getSetting({
			success: res => {
				if(res.authSetting['scope.userInfo'] === false) {

					this.data.locationAuthType = UNAUTHORIZED
					// 已拒绝授权
					wx.showModal({
						title: '提示',
						content: '请授权我们获取您的用户信息',
						showCancel: false
					})
					error && error()
				} else {
					this.data.locationAuthType = AUTHORIZED
					this.doQcloudLogin({
						success,
						error
					})
				}
			}
		})
	},

	doQcloudLogin({
		success,
		error
	}) {
		// 调用 qcloud 登陆接口
		qcloud.login({
			success: result => {
				console.log('qcloud')
				if(result) {
					console.log('首次登录')
					let userInfo = result
					success && success({
						userInfo
					})
				} else {
					console.log('不是首次登录')
					// 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
					this.getUserInfo({
						success,
						error
					})
				}
			},
			fail: () => {
				error && error()
			}
		})
	},

	getUserInfo({
		success,
		error
	}) {
		if(userInfo) return userInfo

		qcloud.request({
			url: config.service.user,
			login: true,
			success: result => {
				let data = result.data
				console.log(data)
				if(!data.code) {
					let userInfo = data.data

					success && success({
						userInfo
					})
				} else {
					error && error()
				}
			},
			fail: () => {
				error && error()
			}
		})
	},

	checkSession({
		success,
		error
	}) {
		if(userInfo) {
			return success && success({
				userInfo
			})
		}

		wx.checkSession({
			success: () => {
				this.getUserInfo({
					success: res => {
						userInfo = res.userInfo
						console.log(userInfo)
						success && success({
							userInfo
						})
					},
					fail: () => {

						error && error()
					}
				})
			},
			fail: () => {
				error && error()
			}
		})
	}
})