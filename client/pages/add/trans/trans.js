const qcloud = require('../../../vendor/wafer2-client-sdk/index.js');
const config = require('../../../config.js')
Page({
	data: {
		startDate: '2000-01-01',
		endDate: '2200-12-31',
		pickDate: '',
		licenseArr: [
			['黑', '吉', '辽', '京', '沪', '津', '渝', '冀', '晋', '蒙', '浙', '川', '渝', '粤', '鄂', '赣', '冀', '鲁', '苏', '皖', '湘', '琼', '贵', '桂', '云', '藏', '陕', '甘', '宁', '青', '豫', '闽', '新'],
			['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
		],
		multiIndex: [0, 0],
		item: {
			company: "请选择",
			unitprice: "",
			amount: "",
			truck_license: "",
			tsn: '',
			tsp: "",
			ts: "请选择"
		},
		aid: ""
	},
	onLoad(options) {
		console.log('onLoad');
		this.data.aid = options.aid;
	},
	onShow() {
		console.log('onShow');
		this.initData();
		if(this.data.item.ts != "请选择") {
			var str1 = this.data.item.ts.split(' | ')[0];
			var str2 = this.data.item.ts.split(' | ')[1];
			var tsn = "item.tsn";
			var tsp = "item.tsp";
			this.setData({
				[tsn]: str1,
				[tsp]: str2
			});
		}
	},
	initData() {
		//初始化数据
		var year = "item[year]",
			month = "item[month]",
			day = "item[day]";
		this.setData({
			pickDate: this.getDateofAll().today
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
			today: today
		}
	},
	bindChange(e) {
		var val = e.detail.value;
		console.log(val)
		var year = "item[year]",
			month = "item[month]",
			day = "item[day]";
		this.setData({
			pickDate: val,
			year: val.split('-')[0],
			month: val.split('-')[1],
			day: val.split('-')[2]
		});
	},
	bindMultiPickerChange(e) {
		console.log(e.detail.value)
		this.setData({
			multiIndex: e.detail.value
		})
	},
	bindUnitPriceInput(e) {
		var unitprice = "item.unitprice";
		this.setData({
			[unitprice]: parseFloat(e.detail.value)
		})
	},
	bindAmountInput(e) {
		var amount = "item.amount";
		this.setData({
			[amount]: parseFloat(e.detail.value)
		})
	},
	bindTruckLisenceInput(e) {
		var truck_license = "item.truck_license";
		this.setData({
			[truck_license]: e.detail.value
		})
	},
	navToTruckSources() {
		wx.navigateTo({
			url: '../../list/truckSources/truckSources'
		});
	},
	navToCompanies() {
		// 进入客户单位
		wx.navigateTo({
			url: "../../list/companies/companies"
		});
	},
	saveAdd() {
		var that = this;
		if(this.data.item.company == "请选择") {
			wx.showToast({
				title: "请选择去向单位",
				icon: 'none'
			});
		} else if(!this.data.item.unitprice) {
			wx.showToast({
				title: "请输入运费单价",
				icon: 'none'
			});
		} else if(!this.data.item.amount) {
			wx.showToast({
				title: "请输入装货吨数",
				icon: 'none'
			});
		} else if(!this.data.item.truck_license) {
			wx.showToast({
				title: "请输入车牌号码",
				icon: 'none'
			});
		} else if(this.data.item.ts == "请选择") {
			wx.showToast({
				title: "请选择车辆来源",
				icon: 'none'
			});
		} else {
			wx.showLoading({
				title: '保存中...',
			})

			let postData = {
				company: this.data.item.company,
				trans_date: this.data.pickDate,
				truck_license: this.data.licenseArr[0][this.data.multiIndex[0]] + this.data.licenseArr[1][this.data.multiIndex[1]] + this.data.item.truck_license,
				truck_source: {
					tsn: this.data.item.tsn,
					tsp: this.data.item.tsp
				},
				freight_unit: this.data.item.unitprice,
				trans_amount: this.data.item.amount
			}

			console.log(data);
			qcloud.request({
				url: config.service.addTrans,
				login: true,
				data: {
					trans_info: postData,
					aid: that.data.aid
				},
				method: "POST",
				success: res => {
					let data = res.data
					console.log(res);
					//								if(!data.code) {
					//									wx.hideLoading()
					//									wx.showToast({
					//										title: '添加记录成功！',
					//									})
					//									wx.navigateBack({
					//										delta: 1 //返回上一级页面
					//									})
					//								} else {
					//									wx.showToast({
					//										icon: 'none',
					//										title: '添加记录失败',
					//									})
					//								}
					//			
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