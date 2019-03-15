// pages/home/home.js
var app = getApp()
Page({
  data: {
    bindtapenter: '进入',
    queTitle: "",
    queId: "",
    queHot: "",
    userId:"",
    queImg:""
  },
  suo:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  answer_list: function () {
    wx.navigateTo({
      url: '../answer_list/answer_list'
    })
  },
  onLoad: function () {
   this.list()
  },
  list() {
    wx.request({
      url: 'http://ldh.nat300.top/weqw/user/FindAllQuestion',
      header: {
        "Content-type": "application/json"
      },
      method: 'GET',
      success: (res) => {

        var datas = [];
        for (let queId in res.data) {
          datas[queId] = {
            // id: res.data.question[item].id,
            queTitle: res.data[queId].queTitle,
            userId: res.data[queId].userId,
            queHot: res.data[queId].queHot,
            queId:res.data[queId].queId
            // answer: res.data.question[item].answer,
            // a: res.data.question[item].a,
            // b: res.data.question[item].b,
            // c: res.data.question[item].c,
            // d: res.data.question[item].d
          }
        }
        console.log(datas)
        this.setData({
          dataList: datas
        })

      }
    })
  }


})