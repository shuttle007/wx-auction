Page({
	data: {
		showLeft1: false,
        showLeft2: false,
        showRight1: false,
        showRigh2: false,
		companies: [{
				id: 1,
				company: "大牧人牧业有限公司"
			},
			{
				id: 2,
				company: "双胞胎牧业有限公司"
			}
		]
	},
	onLoad() {
		console.log('onLoad');
	},
	onShow() {
		console.log('onshow');
	},
	toggleLeft1() {
        this.setData({
            showLeft1: !this.data.showLeft1
        });
    },
    toggleLeft2() {
        this.setData({
            showLeft2: !this.data.showLeft2
        });
    },
    toggleRight1() {
        this.setData({
            showRight1: !this.data.showRight1
        });
    },
    toggleRight2() {
        this.setData({
            showRight2: !this.data.showRight2
        });
    },
	navBack(e) {
		var company = e.currentTarget.dataset.param;
		let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
		let prevPage = pages[pages.length - 2];
		console.log(company);
		var com = "item.company";
	    prevPage.setData({
	      [com]: company
	    });
		wx.navigateBack({
			delta: 1 //返回上一级页面
		})
	},
	navToAddCompany() {
		wx.navigateTo({
			url: '../../add/company/company',
		})
	}
})