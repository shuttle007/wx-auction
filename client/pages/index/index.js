const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config = require('../../config.js')
const app = getApp();

const WEATHERTITLE = "查看当前天气"
Page({
	data: {
		userInfo: null,
		locationAuthType: app.data.locationAuthType,
		profit: 0,
		num: 0,
		weather: WEATHERTITLE,
		location: {
			latitude: "",
			longitude: "",
			province: "",
			city: "",
			area: ""
		}
	},
	onTapLogin1() {},
	onTapLogin2() {
		var that = this;
		wx.showLoading({
			title: "登录中..."
		});
		app.login({
			success: ({
				userInfo
			}) => {
				wx.showLoading({
					title: '加载标的列表...'
				});
				this.setData({
					userInfo,
					locationAuthType: app.data.locationAuthType
				});
				that.getAuctions();
			},
			error: () => {
				this.setData({
					locationAuthType: app.data.locationAuthType
				})
			}
		})
	},
	onLoad() {
		console.log('onLoad')
	},
	onShow() {
		console.log('onShow')
		var that = this;
		// 同步授权状态
		this.setData({
			locationAuthType: app.data.locationAuthType
		})
		app.checkSession({
			success: ({
				userInfo
			}) => {
				this.setData({
					userInfo
				})
				
				wx.showLoading({
					title: '加载标的列表...'
				});
				that.getAuctions();
			}
		})
	},
	getAuctions() {
		qcloud.request({
			url: config.service.auctions,
			login: true,
			method: "GET",
			success: res => {
				let data = res.data;
				if(!data.code) {
					wx.hideLoading();
					//获取返回的标的列表
					this.setData({
						items: res.data.data,
						num: res.data.data.length
					});

				}
			},
			fail: result => {
				wx.hideLoading()
				wx.showToast({
					icon: 'none',
					title: '获取标的列表失败',
				})
			}
		});
	},
	navToAuction(e) {
		var id = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: '../auction/auction?aid='+id,
		})
	},
	navToAddAuction() {
		wx.navigateTo({
			url: '../add/auction/auction',
		})
	},
	navToAuctions() {
		wx.navigateTo({
			url: '../auctions/auctions',
		})
	},
	//获取用户地理位置权限
	getWeather() {
		var that = this;
		if(this.data.weather == WEATHERTITLE) {
			wx.getLocation({
				type: "gcj02",
				success: function(res) {
					const rla = res.latitude;
					const rlo = res.longitude;
					wx.request({
						url: "https://free-api.heweather.com/s6/weather/forecast?location=" + rla + ',' + rlo + "&key=" + "439cc621e1c84c389fd34b916904b197" + "&group=cn",
						success: function(res) {
							var data = res.data.HeWeather6[0];
							console.log(data.basic);
							var latitude = "location.latitude";
							var longitude = "location.longitude";
							var province = "location.province";
							var city = "location.city";
							var area = "location.area";
							that.setData({
								[latitude]: rla,
								[longitude]: rlo,
								[province]: data.basic.admin_area,
								[city]: data.basic.parent_city,
								[area]: data.basic.location,
								weather: data.daily_forecast[0].tmp_min + "°C - " + data.daily_forecast[0].tmp_max + "°C " + data.daily_forecast[0].cond_txt_d
							});
							//保存用户地理位置至user表
							qcloud.request({
								url: config.service.location,
								login: true,
								data: that.data.location,
								method: "POST",
								success: res => {
									let data = res.data;
									if(!data.code) {
										console.log('地理位置后台获取成功')
									}
								},
								fail: result => {
									console.log('地理位置后台获取失败')									
								}
							});
						},
						error: function() {
							console.log('')
						}
					});
				},
				fail: function() {
					wx.getSetting({
						success: function(res) {
							var statu = res.authSetting;
							if(!statu['scope.userLocation']) {
								wx.showModal({
									title: '是否授权当前位置',
									content: '需要获取您的地理位置，否则将无法获取当前天气状况',
									success: function(tip) {
										if(tip.confirm) {
											wx.openSetting({
												success: function(data) {
													if(data.authSetting["scope.userLocation"] === true) {
														wx.showToast({
															title: '授权成功',
															icon: 'success',
															duration: 2000
														})
														wx.getLocation({
															type: 'wgs84',
															success(res) {
																const latitude = res.latitude
																const longitude = res.longitude
																const speed = res.speed
																const accuracy = res.accuracy
																console.log(latitude);
																console.log(longitude);
																console.log(speed);
																console.log(accuracy);
																that.setData({
																	latitude,
																	longitude
																});
																wx.request({
																	url: "https://free-api.heweather.com/s6/weather/forecast?location=" + that.data.latitude + ',' + that.data.longitude + "&key=" + "439cc621e1c84c389fd34b916904b197" + "&group=cn",
																	success: function(res) {
																		var data = res.data.HeWeather6[0];
																		console.log(data);
																		console.log(data.basic);
																		//将地理位置信息存储到user表中
																		that.setData({
																			province: data.basic.admin_area,
																			city: data.basic.parent_city,
																			area: data.basic.location,
																			weather: data.daily_forecast[0].tmp_min + "°C - " + data.daily_forecast[0].tmp_max + "°C " + data.daily_forecast[0].cond_txt_d
																		});
																	},
																	error: function() {
																		console.log('')
																	}
																});
															},
															error() {
																console.log('error！')
															}
														})
													} else {
														wx.showToast({
															title: '授权失败，请重新授权',
															icon: 'success',
															duration: 2000
														})
													}
												}
											})
										}
									}
								})
							}
						},
						fail: function(res) {
							wx.showToast({
								title: '调用授权窗口失败',
								icon: 'success',
								duration: 1000
							})
						}
					})
				}
			})
		}
	}

})