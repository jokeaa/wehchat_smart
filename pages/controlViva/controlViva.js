// pages/controlViva/controlViva.js

Page({
 
  data:{
    status:"play",
    viva_now:"00:00",
    viva_all:"00:00",
    now_value:'0',
    min_value:'0',
    max_value:'100',
  },
  seekViva:function(e){
    this.setData({
      status:"play"
    })
    var now_val = e.detail.value

    wx.playBackgroundAudio({

                    dataUrl: 'http://qqma.tingge123.com:823/mp3/2015-11-09/1447026796.mp3',
                    success: function(res){
                        wx.getBackgroundAudioPlayerState({
                          success: function(res){
                            var audio_res = res.duration
                            switch (res.status){
                              case 2:break;
                              default:
                              wx.seekBackgroundAudio({
                                position: now_val/100*audio_res,
                                success: function(res){
                                  // success
                                },
                                fail: function() {
                                  // fail
                                },
                                complete: function() {
                                  // complete
                                }
                              })
                            }
                            
                          },
                          fail: function() {
                            // fail
                          },
                          complete: function() {
                            // complete
                          }
                        })
                        
                    },
                    fail: function() {
                      // fail
                    },
                    complete: function() {
                      // complete
                    }
                  })
  },
  location:function(e){
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        // console.log(res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  audioPlay:function(e){
      var thePage = this
      wx.getBackgroundAudioPlayerState({
          success: function(res){
            switch (res.status) {
              case 1:
                  wx.pauseBackgroundAudio()
                  thePage.setData({
                    status:"pause"
                  })
                  break;
              default:
                  wx.playBackgroundAudio({
                      dataUrl: 'http://qqma.tingge123.com:823/mp3/2015-11-09/1447026796.mp3',
                      success: function(res){
                        
                      },
                      fail: function() {
                        // fail
                      },
                      complete: function() {
                        // complete
                      }
                  })
                  thePage.setData({
                    status:"play"
                  })
                  break;
            }
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
  },

})