Page({
	data: {
		YearsAndMonths: [
			['2018','2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',],
			['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
		],
		multiIndex: [0, 0],
		items: [{
				date: "08-01",
				sources: [{
						name: "小赵",
						phone: "13703655206",
						infos: [{
								id: "1",
								license: "辽A89833",
								sum: 34000
							},
							{
								id: "2",
								license: "辽C8454",
								sum: 34000
							},
							{
								id: "3",
								license: "黑A8644",
								sum: 34000
							}
						]
					},
					{
						name: "小刘",
						phone: "13703655206",
						infos: [{
							id: "4",
							license: "辽A89833",
							sum: 34000
						}]
					}
				]
			},
			{
				date: "08-11",
				sources: [{
					name: "小王",
					phone: "13703655206",
					infos: [{
							id: "5",
							license: "辽A89833",
							sum: 34000
						},
						{
							id: "6",
							license: "辽C8454",
							sum: 34000
						}
					]
				}]
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
			url: "../../detail/freight/freight?param=" + param
		});
	},
	changeSource() {
		var that = this;
		//modal of expends type
		wx.showActionSheet({
			itemList: ['小王', '小赵', '小刘'],
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