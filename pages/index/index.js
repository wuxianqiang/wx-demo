//index.js
//获取应用实例
const app = getApp()
let lazyload;

Page({
  data: {
  },
  onReady: function () {
    wx.redirectTo({
      url: '/packageA/pages/dog/dog',
    })
  }
})