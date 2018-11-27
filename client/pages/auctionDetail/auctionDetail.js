Page({
	data: {
		profit: 320000,
		freight_payed: 32200,
		unincome: 43000,
		unfreight: 5000
	},
	navToTransList() {
		wx.navigateTo({
			url: "../list/trans/trans"
		});
	},
	navToArrivalList() {
		wx.navigateTo({
			url: "../list/arrivals/arrivals"
		});
	},
	navToIncomeList() {
		wx.navigateTo({
			url: "../list/incomes/incomes"
		});
	},
	navToFreightList() {
		wx.navigateTo({
			url: "../list/freights/freights"
		});
	},
	navToExpendList() {
		wx.navigateTo({
			url: "../list/expends/expends"
		});
	},
	navToCKFList() {
		wx.navigateTo({
			url: "../list/ckfs/ckfs"
		});
	},
	navToUnincomeList() {
		wx.navigateTo({
			url: "../list/unincomes/unincomes"
		});
	},
	navToUnFreightList() {
		wx.navigateTo({
			url: "../list/unfreights/unfreights"
		});
	}
})