Page({
	data: {
		items: [{
				date: "2018.09.05",
				license: "辽B7898",
				after_amount: 40
			},
			{
				date: "2018.09.03",
				license: "黑B7898",
				after_amount: 30
			},
			{
				date: "2018.09.01",
				license: "辽A7238",
				after_amount: 20
			}
		]
	},
	onLoad() {
		console.log('onLoad');
	},
	onShow() {
		console.log('onshow');
	},
	navToDetail(e) {
		var param = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: "../../detail/arrival/arrival?param=" + param
		});
	}
})