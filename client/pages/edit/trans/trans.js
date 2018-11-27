Page({
	data: {
		startDate: '2000-01-01',
		endDate: '2200-12-31',
		pickDate: '',
		item: {
			year: "",
			month: "",
			day: "",
			amount: 40,
			company: "山东大开发牧业有限公司",
			unitprice: 30,
			tl:"黑A8923",
			tsn:"宋晓峰",
			tsp:"13703655206"
		}
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
	navToTruckSources() {
		//进入车辆来源页
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
	navToEdit(e) {
		var param = e.currentTarget.dataset.param;
		wx.navigateTo({
			url: "../edit/edit?param=" + param
		});
	},
	saveToDetail() {
		wx.navigateBack({
			delta:1
		});
	}
})