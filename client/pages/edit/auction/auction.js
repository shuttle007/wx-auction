Page({
	data: {
		auction: {
			date: "2018年9月8日",
			sum: "1340",
			amount: "800",
			waterin: "20"
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
	saveEditAuction() {
		this.auction.date = this.year + " " + this.month + " " + this.day
		// 提交信息
		//回到标的列表页
		wx.navigateTo({
			url: '../auctions/auctions',
		})
	},
	navToEdit(e) {
		var param = e.currentTarget.data.param;

		//进入编辑页
		wx.navigateTo({
			url: '../edit/edit?param=' + param,
		})
	}

})