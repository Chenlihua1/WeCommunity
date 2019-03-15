// pages/advice/advice.js
//获取应用实例  
var app = getApp()
Page({
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    friendNews: [{
      icon: '../../img/orange.png',
      text: '小橘子',
      url: '../index/index.js',
      isunread: true,
      unreadNum: 99
    }, {
      icon: '../../img/pineapple.png',
      text: '大菠萝',
      isunread: true,
      unreadNum: 3
    }, {
      icon: '../../img/watermelon.png',
      text: '大西瓜',
      isunread: true,
      unreadNum: 1
    }, {
      icon: '../../img/persimmon.png',
      text: '大柿子',
      isunread: true,
      unreadNum: 3
    }, {
      icon: '../../img/starfruit.png',
      text: '杨桃姐姐',
      isunread: true,
      unreadNum: 7
    }, {
      icon: '../../img/grape.png',
      text: '葡萄儿砸',
      isunread: true,
      unreadNum: 2
    }, {
      icon: '../../img/pomegranate.png',
      text: '石榴兄弟',
      isunread: true,
      unreadNum: 19
    }]
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})  