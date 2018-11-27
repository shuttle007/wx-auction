const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config = require('../../config.js')
Page({
	data: {
		price: "",
		amount: "",
		waterin:"",
		trans_all: "",
		trans_now: "",
		percent:0,
		aid:""
	},
	onLoad(options) {
		//设置全局变量
		console.log('onLoad')
		var that = this;
		this.data.aid = options.aid;
		qcloud.request({
			url: config.service.host + '/weapp/auction',
			login: true,
			data:{
				aid : options.aid
			},
			method: "POST",
			success: res => {
				console.log(res)
				let data = res.data;
				if(!data.code) {
					that.setData(data.data);
					that.setData({
						percent:parseInt(that.data.trans_now / that.data.trans_all * 100)
					});
				}
			},
			fail: result => {
			}
		});
	},
	onShow() {
		console.log('onShow')
	},
	//编辑标的
	navToEditAuction() {
		wx.navigateTo({
			url: '../edit/auction/auction',
		})
	},
	//编辑贴水贴杂
	navToEditWaterIn() {
		wx.navigateTo({
			url: '../edit/waterin/waterin',
		})
	},
	//记一笔费用
	showTypeModal() {
		//modal of expends type
		wx.showActionSheet({
			itemList: ['缴纳粮款', '运费', '杂费', '缴纳出库费'],
			success: function(res) {
				switch(res.tapIndex) {
					case 0:
						wx.navigateTo({
							url: '../add/lk/lk',
						})
						break;
					case 1:
						wx.navigateTo({
							url: '../add/freight/freight',
						})
						break;
					case 2:
						wx.navigateTo({
							url: '../add/expend/expend',
						})
						break;
					case 3:
						wx.navigateTo({
							url: '../add/ckf/ckf',
						})
						break;
				}
			},
			fail(res) {
				console.log(res.errMsg)
				console.log('已取消');
			}
		})

	},
	//记一笔回款
	navToAddIncome() {
		wx.navigateTo({
			url: '../add/income/income',
		})
	},
	//出库登记
	navToAddTrans() {
		wx.navigateTo({
			url: '../add/trans/trans?auction_id=' + this.data.aid,
		})
	},
	//到货登记
	navToAddArrival() {
		wx.navigateTo({
			url: '../add/arrival/arrival',
		})
	},
	//查看详情
	navToAuctionDetail() {
		wx.navigateTo({
			url: '../auctionDetail/auctionDetail',
		})
	}
})