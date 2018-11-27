const qcloud = require('../../../vendor/wafer2-client-sdk/index.js');
const config = require('../../../config.js')
Page({
	data: {
		startDate: '2000-01-01',
		endDate: '2200-12-31',
		pickDate: '',
		item: {
			create_year: "",
			create_month: "",
			create_day: "",
			price: "",
			amount: "",
			waterin: "",
			trans_all: "",
			trans_now: ""
		},
		url: ""
	},
	onLoad() {
		console.log('onload');
	},
	onShow() {
		console.log('onshow');
		this.initData();
	},
	initData() {
		//初始化数据
		this.setData({
			pickDate: this.getDateofAll().today,
			item: {
				create_year: this.getDateofAll().year,
				create_month: this.getDateofAll().month,
				create_day: this.getDateofAll().day
			}
		});

	},
	getDateofAll() {
		let myDate = new Date();
		let myMonth = myDate.getMonth() + 1;
		if(myMonth < 10) {
			myMonth = '0' + myMonth; //补齐
		}
		let mydate = myDate.getDate();
		if(myDate.getDate() < 10) {
			mydate = '0' + myDate.getDate(); //补齐
		}
		let today = myDate.getFullYear() + '-' + myMonth + '-' + mydate;
		return {
			year: myDate.getFullYear(),
			month: myMonth,
			day: mydate,
			today: today
		}
	},
	bindChange(e) {
		var val = e.detail.value;
		console.log(val)
		this.setData({
			pickDate: val,
			item: {
				create_year: val.split('-')[0],
				create_month: val.split('-')[1],
				create_day: val.split('-')[2]
			}
		});
	},
	bindPriceInput(e) {
		var price = "item.price";
		this.setData({
			[price]: parseFloat(e.detail.value)
		})
	},
	bindAmountInput(e) {
		var amount = "item.amount"
		this.setData({
			[amount]: parseFloat(e.detail.value)
		})
	},
	bindWaterinInput(e) {
		var waterin = "item.waterin"
		this.setData({
			[waterin]: parseFloat(e.detail.value)
		})
	},
	saveAdd() {
		var that = this;
		//计算标的初始库存总量
		var trans_all = this.data.item.amount - (this.data.item.amount * 0.75 * 0.01 * this.data.item.waterin);
		//初始化已出库量为0
		var trans_now = 0;
		var ts = "item.trans_all";
		var tn = "item.trans_now";
		this.setData({
			[ts]: trans_all,
			[tn]: trans_now
		});
		if(!this.data.item.price) {
			wx.showToast({
				title: "请输入成交金额",
				icon: 'none'
			});
		} else if(!this.data.item.amount) {
			wx.showToast({
				title: "请输入成交总量",
				icon: 'none'
			});
		} else if(!this.data.item.waterin) {
			wx.showToast({
				title: "请输入贴水贴杂",
				icon: 'none'
			});
		} else {
			wx.showLoading({
				title: '保存中...',
			})
			qcloud.request({
				url: config.service.addAuction,
				login: true,
				data: that.data.item,
				method: "POST",
				success: res => {
					let data = res.data
					if(!data.code) {
						wx.hideLoading()
						wx.showToast({
							title: '标的添加成功',
						})
						wx.navigateBack({
							delta: 1 //返回上一级页面
						})
					} else {
						wx.showToast({
							icon: 'none',
							title: '添加失败',
						})
					}
					console.log(res)

				},
				fail: res => {
					wx.hideLoading()
					wx.showToast({
						icon: 'none',
						title: '添加失败，请重新添加',
					})
				}
			});
		}

	}
})