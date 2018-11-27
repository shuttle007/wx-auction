Page({
	data: {
		value: ""
	},
	saveEdit() {
		console.log('已保存');
		//传后台成功后进行跳转页面
		//...
		wx.navigateBack({
			delta:1
		});
	}

})