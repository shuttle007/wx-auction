// pages/add/trucksInSource/trucksInSource.js
Page({

  data: {
    items: [
      {
        date: "2018-09-08",
        truck_license: "黑A8533",
        beforeAmount: "200",
        afterAmount: "180",
        checked: false,
        owner:"宋晓峰  | 13652478841"
      },
      {
        date: "2018-09-17",
        truck_license: "辽A8533",
        beforeAmount: "100",
        afterAmount: "80",
        checked: false,
        owner: "宋晓峰"
      },
      {
        date: "2018-09-25",
        truck_license: "辽A8557",
        beforeAmount: "50",
        afterAmount: "47",
        checked: false,
        owner: "宋晓峰"
      }
    ],
    num: 0
  },
  toggleSelect: function (e) {
    var id = e.currentTarget.dataset.id;
    var item = 'items[' + id + '].checked';
    this.setData({
      [item]: !this.data.items[id].checked
    });

    var newNum = 0;
    for (var item of this.data.items) {
      if (item.checked) {
        newNum++;
      }
    }
    this.setData({
      num: newNum
    });
  },
  saveAdd:function(){
//  wx.navigateTo({
//    url: '../freight/freight?truck_source=' + this.data.items[0].owner +'&truck_num=' + this.data.num,
//  })
		let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
		let prevPage = pages[pages.length - 3];//获取上上页的page信息
		var ts = "item.ts"
		prevPage.setData({
			[ts]:this.data.items[0].owner,
			truck_num:this.data.num
		})
		wx.navigateBack({
			delta:2
		});
  }
})