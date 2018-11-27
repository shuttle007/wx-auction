Page({
	data: {
		YearsAndMonths: [
			['2018','2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',],
			['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
		],
		multiIndex: [0, 0],
		items: [{
				date: "08-01",
				companies: [{
						id: "1",
						company_name: "黑龙江双胞胎牧业有限公司",
						company_sum: 100000
					},
					{
						id: "2",
						company_name: "大牧人牧业有限公司",
						company_sum: 120000
					},
					{
						id: "3",
						company_name: "海大牧业有限公司",
						company_sum: 120000
					}
				]
			},
			{
				date: "08-11",
				companies: [{
						id: "4",
						company_name: "海大牧业有限公司",
						company_sum: 80000
					},
					{
						id: "5",
						company_name: "远大牧业有限公司",
						company_sum: 220000
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
		var id = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: "../../detail/income/income?id=" + id
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