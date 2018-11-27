Page({
	data: {
		item: {
			date: "2018-05-14",
			amount: 40,
			company: "山东大开发牧业有限公司",
			unitprice: 30,
			tl:"黑A8923",
			tsn:"王海洋",
			tsp:"13703655206"
		}
	},
	onLoad() {
		console.log('onload')
	},
	onShow() {
		console.log('onshow');
		//加载数据
		//根据id，查询出库信息表，赋值给item

	},
	navToEdit(e) {
		var id = e.currentTarget.dataset.id;
		wx.navigateTo({
			url: "../../edit/trans/trans?id=" + id
		});
	},
	showDelModal() {
		wx.showModal({
			title: '提示',
			content: '确认删除此记录？',
			success: function(res) {
				if(res.confirm) {
					console.log('是')
					//数据库删除此条信息
					//跳转回上一页列表页
					wx.navigateBack({
						delta: 1
					});
				} else if(res.cancel) {
					console.log('已取消')
				}
			}
		})
	}

})