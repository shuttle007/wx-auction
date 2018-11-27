Page({
	data: {
		YearsAndMonths: [
			['2018','2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',],
			['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
		],
		multiIndex: [0, 0],
		items: [{
				date: "07-21",
				infos: [{
						id: "1",
						company: "双胞胎牧业有限公司",
						amount: 30,
						license: "黑A3Q906"
					},
					{
						id: "2",
						company: "大牧人牧业有限公司",
						amount: 80,
						license: "黑AX1823"
					},
					{
						id: "3",
						company: "哈尔滨乐平牧业有限公司",
						amount: 40,
						license: "黑AL8533"
					}
				]
			},
			{
				date: "07-25",
				infos: [{
						id: "4",
						company: "双胞胎牧业有限公司",
						amount: 50,
						license: "黑AL8533"
					},
					{
						id: "5",
						company: "远大牧业有限公司",
						amount: 65,
						license: "黑A9897"
					}
				]
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
			url: "../../detail/trans/trans?param=" + param
		});
	},
	changeYearAndMonth(e) {
		console.log(e.detail)
		this.setData({
			multiIndex: e.detail.value
		})
	},
	changeCompany() {
		var that = this;
		//modal of expends type
		wx.showActionSheet({
			itemList: ['大牧人', '双胞胎', '海大'],
			success: function(res) {
				var type = "filters.type";
				switch(res.tapIndex) {
					case 0:
						that.setData({

						});
						break;
					case 1:
						that.setData({

						});
						break;
					case 2:
						that.setData({

						});
						break;
					case 3:
						//取消
						break;
				}
			},
			fail: function(res) {
				console.log(res.errMsg)
				console.log('已取消');
			}
		})
	}
})