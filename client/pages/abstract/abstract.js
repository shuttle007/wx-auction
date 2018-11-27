Page({
	data: {
		checked: false
	},
	hasread: function() {
		const url = '../auctions/auctions'
		wx.redirectTo({
			url
		});
	}
})