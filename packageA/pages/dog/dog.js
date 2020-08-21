const app = getApp()
let lazyload;
const pageCommonBehavior = require('../../../common/page-common-behavior')
Page({
  behaviors: [pageCommonBehavior],
  data: {
  },
  onReady: function () {
    // wx.redirectTo({
    //   url: '/packageA/pages/cat',
    // })
  }
})