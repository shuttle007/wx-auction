Page({
	data: {
		startDate: '2000-01-01',
		endDate: '2200-12-31',
		pickDate: '',
		item: {
			year: "",
			month: "",
			day: "",
			date: "",
			sum: "",
			remark: ""
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
	saveAdd() {
		//回到标的正文页
		wx.navigateBack({
			delta: 1
		})
	}
})