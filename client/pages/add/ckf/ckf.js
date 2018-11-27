Page({
	data: {
		item: {
			sum: ""
		}
	},
	onShow() {
		this.data.item.sum = ""
	},
	saveAdd() {
		//回到标的正文页
		wx.navigateBack({
			delta: 1
		})
	}
})