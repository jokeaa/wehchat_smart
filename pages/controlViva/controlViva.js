// pages/controlViva/controlViva.js

Page({
 
  data:{
    status:"play"
  },
  audioPlay:function(e){
      var thePage = this
      wx.getBackgroundAudioPlayerState({
          success: function(res){
            console.log(res)
            switch (res.status) {
              case 2:
                  wx.playBackgroundAudio({
                    dataUrl: 'http://qqma.tingge123.com:823/mp3/2015-11-09/1447026796.mp3',
                    success: function(res){
                      console.log('success viva')
                    },
                    fail: function() {
                      // fail
                    },
                    complete: function() {
                      // complete
                    }
                  })
                  break;
              case 1:
                  wx.pauseBackgroundAudio()
                  thePage.setData({
                    status:"pause"
                  })
                  break;
              case 0:
                  wx.playBackgroundAudio({
                      dataUrl: 'http://qqma.tingge123.com:823/mp3/2015-11-09/1447026796.mp3',
                      success: function(res){
                        console.log('success viva')
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