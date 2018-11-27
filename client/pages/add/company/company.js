Page({
	data: {
		company: ""
	},
	saveCompany: function() {
		wx.navigateBack({
			//回到上一页
			delta: 1
		});
	}
})