// pages/answer/answer.js
const { $Message } = require('../../dist/base/index');
Page({
  data: {
    visible5: false,
    actions5: [
      {
        name: '取消'
      },
      {
        name: '发布',
        color: '#29883e',
        loading: false
      }
    ]
  },
  handleOpen5() {
    this.setData({
      visible5: true
    });
  },

  handleClick5({ detail }) {
    if (detail.index === 0) {
      this.setData({
        visible5: false
      });
    } else {
      const action = [...this.data.actions5];
      action[1].loading = true;

      this.setData({
        actions5: action
      });

      setTimeout(() => {
        action[1].loading = false;
        this.setData({
          visible5: false,
          actions5: action
        });
        $Message({
          content: '发布成功！',
          type: 'success'
        });
      },300);
    }
  },
  back:function(){
    wx.navigateTo({
      url:'../answer_list/answer_list'
    })
  }
});