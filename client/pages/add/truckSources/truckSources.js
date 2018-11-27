Page({
  data: {
    trucksources:[
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
  navToTrucksInSource:function(){
    wx.navigateTo({
      url: '../trucksInSource/trucksInSource'
    })
  },
  navToAddTruckSource:function(){
    wx.navigateTo({
      url: '../../add/truckSource/truckSource'
    })
  }
})