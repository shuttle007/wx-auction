Page({
	data: {
		waterin: ""
	},
	onLoad() {
		console.log('onload')
	},
	onShow() {
		console.log('onshow');
		//加载数据
	},
	saveEditWaterin() {
		globalStore.commit("get_waterin", this.waterin)
		console.log(this.waterin);
		wx.navigateBack({
			delta: 1 //返回上一级页面
		})
	}

})