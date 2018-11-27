Page({
	data: {
		startDate: '2000-01-01',
		endDate: '2200-12-31',
		pickDate: '',
		item: {
			date: "2018-05-14",
			type: "送礼",
			sum: 20000
		},
		url: ""
	},
	onLoad() {
		console.log('onLoad');
	},
	onShow() {
		console.log('onshow');
		this.initData();
	},
	initData() {
		//初始化数据
		var year = "item[year]",
			month = "item[month]",
			day = "item[day]";
		this.setData({
			pickDate: this.getDateofAll().today,
			year: this.getDateofAll().year,
			month: this.getDateofAll().month,
			day: this.getDateofAll().day,
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
	navToTrucksSource() {
		wx.navigateTo({
			url: '../../list/truckSources/truckSources',
		})
	},
	showTypeModal: function() {
		var that = this;
		//modal of expends type
		wx.showActionSheet({
			itemList: ['送礼', '请客吃饭', '其他'],
			success: function(res) {
				var type = 'item.type';

				switch(res.tapIndex) {
					case 0:
						that.setData({
							[type]: '送礼'
						});
						break;
					case 1:
						that.setData({
							[type]: '请客吃饭'
						});
						break;
					case 2:
						that.setData({
							[type]: '其他'
						});
						break;
				}
			},
			fail: function(res) {
				console.log(res.errMsg)
				console.log('已取消');
			}
		})
	},
	navToEdit(e) {
		var param = e.currentTarget.dataset.param;
		wx.navigateTo({
			url: "../edit/edit?param=" + param
		});
	},
	saveToDetail() {
		wx.navigateBack({
			delta: 1
		});
	}

})