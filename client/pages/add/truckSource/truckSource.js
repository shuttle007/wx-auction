Page({
  data: {
    truckSourceInfo: {
      tsn: "",
      tsp: "",
    },
    url: ""
  },
  saveAddTruckSource: function () {
    var truckSourceInfo = this.data.truckSourceInfo;
    console.log(truckSourceInfo);
    var url = this.data.url;
    // 提交信息
    // util.ajax(url, truckSourceInfo, 'POST', res => {

    // });
    //回到添加出库信息页
    wx.navigateBack({
      url: '../add/addTrans/addTrans',
    })
  }
})