Page({
	data: {
		YearsAndMonths: [
			['2018','2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',],
			['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
		],
		multiIndex: [0, 0],
		filters: {
			remark: "送礼",
			type: "全部类别"
		},
		items: [{
				date: "09-02",
				expends: [{
						remark: "送礼",
						sum: "500"
					},
					{
						remark: "请客",
						sum: "400"
					}
				]
			},
			{
				date: "09-21",
				expends: [{
						remark: "送礼",
						sum: "300"
					},
					{
						remark: "送礼",
						sum: "500"
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
			url: "../../detail/expend/expend?param=" + param
		});
	},
	changeYearAndMonth(e) {
		console.log(e.detail)
		this.setData({
			multiIndex: e.detail.value
		})
	},
	showTypeModal() {
		var that = this;
		//modal of expends type
		wx.showActionSheet({
			itemList: ['送礼', '请客吃饭', '其他'],
			success: function(res) {
				var type = "filters.type";
				switch(res.tapIndex) {
					case 0:
						that.setData({
							[type]: "类别（送礼）"
						});
						//送礼列表
						break;
					case 1:
						that.setData({
							[type]: "类别（请客）"
						});
						//请客吃饭列表
						break;
					case 2:
						that.setData({
							[type]: "类别（其他）"
						});
						//其他
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