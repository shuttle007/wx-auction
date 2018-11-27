Page({
	data: {
		YearsAndMonths: [
			['2018','2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',],
			['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
		],
		multiIndex: [0, 0],
		items: [{
				date: "09-02",
				sum: "20000"
			},
			{
				date: "09-21",
				sum: "30000"
			}
		]
	},
	onLoad() {
		console.log('onLoad');
	},
	onShow() {
		console.log('onshow');
	},
	changeYearAndMonth(e) {
		console.log(e.detail)
		this.setData({
			multiIndex: e.detail.value
		})
	},
	navToDetail(e) {
		var param = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: "../../detail/ckf/ckf?param=" + param
		});
	}
})