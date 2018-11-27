Page({
	data: {
		item: {
			date: "2018-05-14",
			truck_license: "辽A89323",
			company: "双胞胎牧业有限公司",
			after_amount: 20
		}
	},
	onLoad(){
		console.log('onload')
	},
	onShow(){
		console.log('onshow');
		//加载数据
		//根据id，查询出库信息表，赋值给item
		
	},
	navToEdit(e) {
		wx.navigateTo({
			url: "../../edit/arrival/arrival"
		});
	},
	showDelModal() {
		wx.showModal({
			title: '提示',
			content: '确认删除此记录？',
			success: function(res) {
				if(res.confirm) {
					console.log('是')
					//删除操作
					//数据库删除此条信息
					//跳转回上一页列表页
					wx.navigateBack({
						delta:1
					});
				} else if(res.cancel) {
					console.log('已取消')
				}
			}
		})
	}

})