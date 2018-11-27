Page({
	data: {
		item: {
			date: "2018-05-14",
			sum: 20000
		},
		url: ""
	},
	onLoad(){
		console.log('onload')
	},
	onShow(){
		console.log('onshow');
		//加载数据
		
	},
	navToTrucksSource() {
		wx.navigateTo({
			url: '../../list/truckSources/truckSources',
		})
	},
	showTypeModal() {
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
	}

})