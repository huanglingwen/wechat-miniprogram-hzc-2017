// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: true,
    messages: [{
      image:"/pages/image/15.jpg",
      name: "傲娇猫",
      last: "想要么，想要就求我"
    }, {
        image: "/pages/image/14.jpg",
        name: "委屈猫",
        last: "委屈巴巴"
    }, {
        image: "/pages/image/12.jpg",
        name: "猥琐猫",
        last: "你老婆在我家"
    }, {
        image: "/pages/image/13.jpg",
        name: "拽拽猫",
        last: "求你咋滴"
    }, {
        image: "/pages/image/b1.jpg",
        name: "皇帝猫",
        last: "大胆刁民"
    }, {
        image: "/pages/image/11.jpg",
        name: "暴躁猫",
        last: "走开，傻逼"
    }, {
        image: "/pages/image/16.jpg",
        name: "智障猫",
        last: "略略略"
    }, {
      image: "/pages/image/t7.png",
      name: "魔枪士",
      last: "Lancer"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onEnd: function () {
    
    var that = this;
    var data = that.data;
    that.setData({
      isEnd: true /*,
      messages: data.messages.concat([{
        name: "Tom",
        last: "Hello!"
      }, {
        name: "john",
        last: "yes."
      }]) */
    });

  }
})