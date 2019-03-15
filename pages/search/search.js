// pages/search/search.js
Page({
  data: {
    hostList: []//页面显示的数据
  },
  searchValueInput: function (e) {//输入时实时调用搜索方法
    this.search(e.detail.value)
  },
  confirml: function (e) {//软件盘 搜索按钮 调用（此方法可以不用）
    this.search(e.detail.value)
  },
  search: function (key) {//搜索方法 key 用户输入的查询字段
    var This = this;
    var hosList = wx.getStorage({
      key: 'hosList',
      success: function (res) {//从storage中取出存储的数据
        /**       if(key == ""){//用户没有输入 全部显示
                  This.setData({
                    hosList:res.data
                  })
                  return;
                } */
        var arr = []; //临时数组 用于存放匹配到的数据
        for (let i in res.data) {
          res.data[i].show = false; //所有数据隐藏
          if (res.data[i].search.indexOf(key) >= 0) {   //查找
            res.data[i].show = true;//匹配到的数据显示
            arr.push(res.data[i])
          }
        }
        if (arr.length == 0) {
          This.setData({
            hosList: [{ show: true, name: '无相关数据' }]
          })
        }
        else {
          This.setData({
            hosList: arr //找到的数据在页面显示
          })
        }
      },
    })
  },
  /**生命周期函数  监听页面加载 */
  onLoad: function (options) {
    var hosList = [
      { id: 101, name: '英超联赛', show: true, search: "01英超联赛" },
      { id: 102, name: '电信宽带', show: true, search: "02电信宽带" },
      { id: 103, name: '大一新生', show: true, search: "03大一新生" },
      { id: 104, name: '小米爆炸', show: true, search: "04小米爆炸伤人" }
    ]//后台取得的数据（可以时在其他页面的获取，比如登陆的时候获取）show是用来控制词条数据否显示 search 匹配搜索的内容
    wx.setStorage({//获取的时候存储在本地
      key: 'hosList',
      data: hosList,
    })
    this.setData({
      hosList: hosList//页面加载时 显示所有数据
    })
  },
  quxiao: function () {
    wx.navigateTo({
      url: '../home/home',
    })
  },
});
