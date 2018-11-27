Page({
	data: {
		items: [{
				id: "1",
				company: "双胞胎牧业有限公司",
			},
			{
				id: "2",
				company: "大牧人牧业有限公司",
			},
			{
				id: "3",
				company: "哈尔滨乐平牧业有限公司",
			}
		]
	},
	onLoad() {
		console.log('onLoad');
	},
	onShow() {
		console.log('onshow');
	},
	navToArrivalMore(e) {
		var id = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: "../arrivalMore/arrivalMore?id=" + id
		});
	}
})