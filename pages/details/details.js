// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  comment:function(){
    wx.navigateTo({
      url: '../comment/comment',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})