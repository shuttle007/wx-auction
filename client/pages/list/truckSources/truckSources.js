Page({
	data: {
		trucksources: [
			{
				name: "宋晓峰",
				phone: "13703655206"
			},
			{
				name: "宋小宝",
				phone: "13915161718"
			},
			{
				name: "乔杉",
				phone: "13615478034"
			},
			{
				name: "贾玲",
				phone: "13604518977"
			}
		]
	},
	onLoad() {
		console.log('onLoad');
	},
	onShow() {
		console.log('onshow');
	},
	navBack(e) {
		var name = e.currentTarget.dataset.name,
			  phone = e.currentTarget.dataset.phone;
		let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
		let prevPage = pages[pages.length - 2];
		var ts = "item.ts";
		prevPage.setData({
			[ts]: name + " | " + phone
		});
		wx.navigateBack({
			delta: 1 //返回上一级页面
		})
	},
	navToAddTruckSource() {
		wx.navigateTo({
			url: '../../add/truckSource/truckSource',
		})
	}
})