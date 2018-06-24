const app = getApp()
var flag=0;
var daily = [];//长度为5的数组，存放当前城市5天的天气情况

Page({
  data: {
    /*motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')*/
    city:" ",
    wtrimg:"http://pic.caigoubao.cc/603511/%E6%99%B4.png"
  },
  onLoad:function(options){
    if (!options.city) { this.setData({ city: "南京" }) } else {this.setData({city: options.city})}

    /**异步请求访问接口，格式化json */
    var that=this;
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/daily.json',
      data: {
        key:"galvrrn3fnjuv9lm",
        location:that.data.city,
        language:"zh-Hans",
        unit:"c",
        start:0,
        days:5
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          daily:res.data.results[0].daily
        })
      }
    })
    console.log(this.data)
    
  },
})