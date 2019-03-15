// pages/answer_list/answer_list.js
Page({

  data: {

  },
  answer: function () {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  details: function () {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})