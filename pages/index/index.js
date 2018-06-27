const app = getApp()
var flag=0;
var daily = [];//长度为5的数组，存放当前城市5天的天气情况
const wtrImgUrl={
  "晴":"http://pic.caigoubao.cc/603511/%E6%99%B4.png",
  "多云": "http://pic.caigoubao.cc/603511/%E5%A4%9A%E4%BA%91.png",
  "晴间多云": "http://pic.caigoubao.cc/603511/%E5%A4%9A%E4%BA%91.png",
  "大部多云":"http://pic.caigoubao.cc/603511/%E9%98%B4.png",
  "阴": "http://pic.caigoubao.cc/603511/%E9%98%B4.png",
  "阵雨": "http://pic.caigoubao.cc/603511/%E9%98%B5%E9%9B%A8.png",
  "雷阵雨": "http://pic.caigoubao.cc/603511/%E9%9B%B7%E9%98%B5%E9%9B%A8.png",
  "雷阵雨伴有冰雹": "http://pic.caigoubao.cc/603511/%E9%9B%A8%E5%A4%B9%E9%9B%AA.png",
  "小雨": "http://pic.caigoubao.cc/603511/%E5%B0%8F%E9%9B%A8.png",
  "中雨": "http://pic.caigoubao.cc/603511/%E4%B8%AD%E9%9B%A8.png",
  "大雨": "http://pic.caigoubao.cc/603511/%E5%A4%A7%E9%9B%A8.png",
  "暴雨": "http://pic.caigoubao.cc/603511/%E6%9A%B4%E9%9B%A8.png",
  "大暴雨": "http://pic.caigoubao.cc/603511/%E6%9A%B4%E9%9B%A8.png",
  "特大暴雨": "http://pic.caigoubao.cc/603511/%E6%9A%B4%E9%9B%A8.png",
  "冻雨": "http://pic.caigoubao.cc/603511/%E6%9A%B4%E9%9B%A8.png",
  "雨夹雪": "http://pic.caigoubao.cc/603511/%E9%9B%A8%E5%A4%B9%E9%9B%AA.png",
  "阵雪": "http://pic.caigoubao.cc/603511/%E5%B0%8F%E9%9B%AA.png",
  "小雪": "http://pic.caigoubao.cc/603511/%E5%B0%8F%E9%9B%AA.png",
  "中雪": "http://pic.caigoubao.cc/603511/%E5%A4%A7%E9%9B%AA.png",
  "大雪": "http://pic.caigoubao.cc/603511/%E5%A4%A7%E9%9B%AA.png",
  "暴雪": "http://pic.caigoubao.cc/603511/%E5%A4%A7%E9%9B%AA.png",
  "浮尘": "http://pic.caigoubao.cc/603511/%E6%B5%AE%E5%B0%98.png",
  "扬沙": "http://pic.caigoubao.cc/603511/%E6%B5%AE%E5%B0%98.png",
  "沙尘暴": "http://pic.caigoubao.cc/603511/%E6%B2%99%E5%B0%98%E6%9A%B4.png",
  "强沙尘暴": "http://pic.caigoubao.cc/603511/%E6%B2%99%E5%B0%98%E6%9A%B4.png",
  "雾": "http://pic.caigoubao.cc/603511/%E9%9B%BE.png",
  "霾": "http://pic.caigoubao.cc/603511/%E9%9B%BE%E9%9C%BE.png",
  "风": "http://pic.caigoubao.cc/603511/%E9%A3%8E.png",
  "大风": "http://pic.caigoubao.cc/603511/%E5%A4%A7%E9%A3%8E.png",
  "飓风": "http://pic.caigoubao.cc/603511/%E9%BE%99%E5%8D%B7%E9%A3%8E.png",
  "热带风暴": "http://pic.caigoubao.cc/603511/%E9%BE%99%E5%8D%B7%E9%A3%8E.png",
  "龙卷风": "http://pic.caigoubao.cc/603511/%E9%BE%99%E5%8D%B7%E9%A3%8E.png",
  "冷": "？",
  "热": "？",
  "未知": "？",
}

const wtrBg = {
  "晴": "http://pic.caigoubao.cc/603511/sunny.jpg",
  "多云": "http://pic.caigoubao.cc/603511/cloudy.jpg",
  "晴间多云": "http://pic.caigoubao.cc/603511/cloudy.jpg",
  "大部多云": "http://pic.caigoubao.cc/603511/cloudy.jpg",
  "阴": "http://pic.caigoubao.cc/603511/cloudy.jpg",
  "阵雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "雷阵雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "雷阵雨伴有冰雹": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "小雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "中雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "大雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "暴雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "大暴雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "特大暴雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "冻雨": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "雨夹雪": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "阵雪": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "小雪": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "中雪": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "大雪": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "暴雪": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "浮尘": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "扬沙": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "沙尘暴": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "强沙尘暴": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "雾": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "霾": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "风": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "大风": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "飓风": "http://pic.caigoubao.cc/603511/snowy.jpg",
  "热带风暴": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "龙卷风": "http://pic.caigoubao.cc/603511/rainny.jpg",
  "冷": "？",
  "热": "？",
  "未知": "？",
}

Page({
  data: {
    /*motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')*/
    city:" ",
    wtrtxt:" ",
    wtrimg:" "
  },
  
  onLoad:function(options){
    if (!options.city) { this.setData({ city: "南京" }) } else {this.setData({city: options.city})}

    /**获取手机系统，匹配样式，达到兼容 */
    var res = wx.getSystemInfoSync()
    var bt=res.windowHeight*.2;
    var tp=res.windowHeight*.13+res.windowWidth/750*440;
    console.log(res);
    if(res.platform.indexOf("ios")+1){
      this.setData({
        wtrAttr_1:"left",
        wtrVal_1:"285rpx",
        bt:bt,
        tp:tp
      })
    }else{
      this.setData({
        wtrAttr_1: "margin-top",
        wtrVal_1: "205rpx",
        bt:bt,
        tp:tp
      })
    }

    /**异步请求访问接口，获取当天详细天气 */
    var that = this;
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json',
      data: {
        key: "galvrrn3fnjuv9lm",
        location: that.data.city,
        language: "zh-Hans",
        unit: "c",
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var barr1=[],barr2=[];
        barr1.push({ id: "湿度", val:res.data.results[0].now["humidity"]+"%"});
        barr1.push({ id: "气压", val:res.data.results[0].now["pressure"]+"hpa"});
        barr1.push({ id: "能见度", val: res.data.results[0].now["visibility"]+"km"});
        barr2.push({ id: "风速", val: res.data.results[0].now["wind_speed"]+"m/s" });
        barr2.push({ id: "风级", val: res.data.results[0].now["wind_scale"] });
        barr2.push({ id: "风向", val: res.data.results[0].now["wind_direction"] });
        that.setData({
          today: res.data.results[0].now,
          wtrimg:wtrImgUrl[res.data.results[0].now["text"]],
          wtrtxt:res.data.results[0].now["text"],
          temp: res.data.results[0].now["temperature"],
          bg:wtrBg[res.data.results[0].now["text"]],
          bar1:barr1,
          bar2:barr2
        })
      }
    })
    /**异步请求访问接口，获取未来五天的天气预报 */
    var that=this;
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/daily.json',
      data: {
        key:"galvrrn3fnjuv9lm",
        location:that.data.city,
        language:"zh-Hans",
        unit:"c",
        start:1,
        days:5
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        for(var i =0;i<5;i++)
          Object.assign(res.data.results[0].daily[i], { url:wtrImgUrl[res.data.results[0].daily[i]["text_day"]]})
        console.log(res.data.results[0].daily)
        that.setData({
          daily:res.data.results[0].daily
        })
      }
    })
    /**异步请求访问接口，获取当前城市当天空气质量 */
    wx.request({
      url: 'https://api.seniverse.com/v3/air/now.json',
      data: {
        key: "galvrrn3fnjuv9lm",
        location: that.data.city,
        language: "zh-Hans",
        scope: "city"
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          air: res.data.results[0].air
        })
      }
    })
  },
})