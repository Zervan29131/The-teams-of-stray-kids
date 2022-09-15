// miniprogram/pages/info/devTeam/devTeam.js
const config = require('../../../config.js');
const text_cfg = config.text;
const share_text = text_cfg.app_name + ' - ' + text_cfg.info.share_tip;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_cfg: text_cfg,
    github_link: "https://github.com/sysucats/zhongdamaopu",
    update_log: [
      {
        version: "v1.1.2",
        content: [
          "处理science的bug",
        ],
        time: "2021/03/25"
      },   {
        version: "v1.1.1",
        content: [
          "取消了赞赏码",
        ],
        time: "2021/03/24"
      },   {
        version: "v1.1.0",
        content: [
          "更改主题色调为#21cefe",
        ],
        time: "2021/03/23"
      }, {
        version: "v1.0.1",
        content: [

          "整理内部逻辑",
        ],
        time: "2021/03/22"
      }, 
      
      {
      version: "v1.0.0",
      content: [
        "喵旺小分队上线",
      ],
      time: "2021/03/21"
    },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    return {
      title: share_text
    }
  },

  copyOpenSourceLink: function () {
    wx.setClipboardData({
      data: this.data.github_link,
    });
  }
})