const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config = require('../../config.js');

//const app = getApp()
Page({
	data: {},
	onTapLogin() {
		this.doQcloudLogin({
			success: ({userInfo}) => {
				console.log(1)
			}
		})
	},
	checkSession({success,error}) {
		wx.checkSession({
			success: () => {
				this.getUserInfo({success,error})
				console.log(2)
			},
			fail: () => {
				error && error()
				console.log(3)
			}
		})
	},
	doQcloudLogin({success,error}) {
		// 调用 qcloud 登陆接口
		qcloud.login({
			success: result => {
				console.log(4)
				//当首次登录时，result不为空
				if(result) {
					console.log(5)
					let userInfo = result
					success && success({
						userInfo
					})
				} else {
					console.log(6)
					// 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
					this.getUserInfo({success,error})
				}
				//				wx.redirectTo({
				//					url:"../index/index"
				//				});
				console.log(result)
			},
			fail: () => {
				console.log(7)
				error && error()
			}
		})
	},
	getUserInfo({success,error}) {
		qcloud.request({
			url: config.service.requestUrl,
			login: true,
			success: result => {
				let data = result.data
				if(!data.code) {
					let userInfo = data.data
					success && success({userInfo})
				console.log(8)
					
				} else {
				console.log(10)
					error && error()
				}
			},
			fail: () => {
				error && error()
				console.log(9)
			}
		})
	},
	getPhoneNumber2() {
		console.log(2)
	}
})