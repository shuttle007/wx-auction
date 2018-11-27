const qcloud = require('../../vendor/wafer2-client-sdk/index');
Page({
	data: {
		message: "abc",
		auctions: []
	},
	onLoad() {

	},
	onShow() {
		console.log('onshow');
		this.getAuctions();
	},
	getAuctions() {
		qcloud.request({
			url: config.service.auctions,
			success: result => {
				console.log(result)
				this.setData({
					auctions: result.data.data
				});
			},
			fail: result => {
				console.log('error!')
			}
		});
	},
	navToAuction() {
		wx.navigateTo({
			url: '../auction/auction',
		})
	},
	navToAddAuction() {
		wx.navigateTo({
			url: '../add/auction/auction',
		})
	}
})