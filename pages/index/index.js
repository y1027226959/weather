const app = getApp()
var flag=0;
var daily = [];//长度为5的数组，存放当前城市5天的天气情况
const wtrImgUrl={
  "晴":"http://imagehosting.biz/images/2018/06/27/919a9dca05189037.png",
  "多云": "http://imagehosting.biz/images/2018/06/27/4ff08438ca143366.png",
  "晴间多云": "http://imagehosting.biz/images/2018/06/27/4ff08438ca143366.png",
  "大部多云":"http://imagehosting.biz/images/2018/06/27/6a56636f0638692b.png",
  "阴": "http://imagehosting.biz/images/2018/06/27/6a56636f0638692b.png",
  "阵雨": "http://imagehosting.biz/images/2018/06/27/eefbe5be98fdfe9b.png",
  "雷阵雨": "http://imagehosting.biz/images/2018/06/27/e4e913cc22939c9e.png",
  "雷阵雨伴有冰雹": "http://imagehosting.biz/images/2018/06/27/0c291fe4988b0614.png",
  "小雨": "http://imagehosting.biz/images/2018/06/27/666b53a3b5ceb2a3.png",
  "中雨": "http://imagehosting.biz/images/2018/06/27/f095cf921962fd9c.png",
  "大雨": "http://imagehosting.biz/images/2018/06/27/7d723576ced49101.png",
  "暴雨": "http://imagehosting.biz/images/2018/06/27/3e97542ad152a944.png",
  "大暴雨": "http://imagehosting.biz/images/2018/06/27/3e97542ad152a944.png",
  "特大暴雨": "http://imagehosting.biz/images/2018/06/27/3e97542ad152a944.png",
  "冻雨": "http://imagehosting.biz/images/2018/06/27/3e97542ad152a944.png",
  "雨夹雪": "http://imagehosting.biz/images/2018/06/27/0c291fe4988b0614.png",
  "阵雪": "http://imagehosting.biz/images/2018/06/27/6345e8a03cfc39da.png",
  "小雪": "http://imagehosting.biz/images/2018/06/27/6345e8a03cfc39da.png",
  "中雪": "http://imagehosting.biz/images/2018/06/27/a9531cce0516ac51.png",
  "大雪": "http://imagehosting.biz/images/2018/06/27/a9531cce0516ac51.png",
  "暴雪": "http://imagehosting.biz/images/2018/06/27/a9531cce0516ac51.png",
  "浮尘": "http://imagehosting.biz/images/2018/06/27/a6b22c4f200bdcf8.png",
  "扬沙": "http://imagehosting.biz/images/2018/06/27/a6b22c4f200bdcf8.png",
  "沙尘暴": "http://imagehosting.biz/images/2018/06/27/e54e09d16b2286f8.png",
  "强沙尘暴": "http://imagehosting.biz/images/2018/06/27/e54e09d16b2286f8.png",
  "雾": "http://imagehosting.biz/images/2018/06/27/465fe85b53bb9818.png",
  "霾": "http://imagehosting.biz/images/2018/06/27/8afd8be4680c21bf.png",
  "风": "http://imagehosting.biz/images/2018/06/27/fdc44ea375965e08.png",
  "大风": "http://imagehosting.biz/images/2018/06/27/35ce979f321c0127.png",
  "飓风": "http://imagehosting.biz/images/2018/06/27/94591f76404a648f.png",
  "热带风暴": "http://imagehosting.biz/images/2018/06/27/94591f76404a648f.png",
  "龙卷风": "http://imagehosting.biz/images/2018/06/27/94591f76404a648f.png",
  "冷": "？",
  "热": "？",
  "未知": "？",
}

const wtrBg = {
  "晴": "http://imagehosting.biz/images/2018/06/27/sunny.jpg",
  "多云": "http://imagehosting.biz/images/2018/06/27/cloudy.jpg",
  "晴间多云": "http://imagehosting.biz/images/2018/06/27/cloudy.jpg",
  "大部多云": "http://imagehosting.biz/images/2018/06/27/cloudy.jpg",
  "阴": "http://imagehosting.biz/images/2018/06/27/cloudy.jpg",
  "阵雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "雷阵雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "雷阵雨伴有冰雹": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "小雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "中雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "大雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "暴雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "大暴雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "特大暴雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "冻雨": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "雨夹雪": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "阵雪": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "小雪": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "中雪": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "大雪": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "暴雪": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "浮尘": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "扬沙": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "沙尘暴": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "强沙尘暴": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "雾": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "霾": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "风": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "大风": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "飓风": "http://imagehosting.biz/images/2018/06/27/snowy.jpg",
  "热带风暴": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "龙卷风": "http://imagehosting.biz/images/2018/06/27/rainny.jpg",
  "冷": "？",
  "热": "？",
  "未知": "？",
}

const airSituationClr={
  "优":"rgb(0,176,80)",
  "良":"rgb(146,208,80)",
  "轻度污染":"rgb(238,133,62)",
  "中度污染":"rgb(197,90,17)",
  "重度污染":"rgb(180,53,18)",
  "严重污染":"rgb(192,0,0)"
}

const primary_pollutant={
  "":""
}

Page({
  data: {
    /*motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')*/
    city:" ",
    wtrtxt:" ",
    wtrimg:" ",
    key: "galvrrn3fnjuv9lm"
  },
  
  whatIsPrimaryPollutant:function(event){
    wx.showModal({
      title:"主要污染物有什么",
      content:"室外大气污染物主要包括：粉尘/可吸入颗粒物、二氧化硫、氮氧化合物、一氧化碳等。"
    })
  },

  onLoad:function(options){
    if (!options.city) { this.setData({ city: "乌鲁木齐" }) } else {this.setData({city: options.city})}

    /**获取手机系统，匹配样式，达到兼容 */
    var res = wx.getSystemInfoSync()
    var bt=res.windowHeight*.2;
    var tp=res.windowHeight*.13+res.windowWidth/750*440;
    var space=res.windowHeight*.02;
    //console.log(res);
    if(res.platform.indexOf("ios")+1){
      this.setData({
        wtrAttr_1:"left",
        wtrVal_1:"285rpx",
        bt:bt,
        tp:tp,
        sp:space
      })
    }else{
      this.setData({
        wtrAttr_1: "margin-top",
        wtrVal_1: "205rpx",
        bt:bt,
        tp: tp,
        sp: space,
        sqareStyle:"display:flex;"
      })
    }

    /**异步请求访问接口，获取当天详细天气 */
    var that = this;
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json',
      data: {
        key: that.data.key,
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
        //console.log(res.data.results[0].now);
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
        key:that.data.key,
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
        for(var i =0;i<5;i++){
          Object.assign(res.data.results[0].daily[i], { url:wtrImgUrl[res.data.results[0].daily[i]["text_day"]]})
          if (res.data.results[0].daily[i].wind_direction=="无持续风向")
            res.data.results[0].daily[i].wind_direction ="不定";
        }
        //console.log(res.data.results[0].daily)
        that.setData({
          daily:res.data.results[0].daily
        })
      }
    })
    /**异步请求访问接口，获取当前城市当天空气质量 */
    wx.request({
      url: 'https://api.seniverse.com/v3/air/now.json',
      data: {
        key: that.data.key,
        location: that.data.city,
        language: "zh-Hans",
        scope: "city"
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.results[0].air.city);
        var ifIsGood = "";
        if (!(res.data.results[0].air.city.quality.length - 1)) ifIsGood = "font-size:3.5em;";
        var primary_pollutant = res.data.results[0].air.city.primary_pollutant ;
        if (!primary_pollutant) primary_pollutant = "无";
        that.setData({
          air: res.data.results[0].air.city,
          airQualClr: airSituationClr[res.data.results[0].air.city.quality],
          ifIsGood:ifIsGood,
          primary_pollutant: primary_pollutant
        })
      }
    })
  },
})