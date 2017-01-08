
var helloData = {
    name:'WeChat',
    currentIp:'currentIp'
}

Page({
    data:helloData,
    stopViva:function(e){
        wx.pauseBackgroundAudio({
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
    },
    getViva:function(e){
        wx.getBackgroundAudioPlayerState({
          success: function(res){
            console.log(res)
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
    viva:function(e){
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
    },
    record:function(e){
        wx.startRecord({
          success: function(res){
            var tempFilePath = res.tempFilePath
            console.log(tempFilePath)
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
    voice: function(e){
        
    },
    picture:function(e){
        wx.chooseImage({
          count: 9, // 最多可以选择的图片张数，默认9
          sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
          sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
          success: function(res){
              console.log('success')
              wx.getImageInfo({
                src: res.tempFilePaths[0],
                success: function(res){
                  console.log(res)
                },
                fail: function() {
                  // fail
                },
                complete: function() {
                  // complete
                }
              })
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
    scanCode:function(e){
        wx.scanCode({
          success: function(res){
            console.log(res)
          },
          fail: function() {
            console.log('fail')
          },
          complete: function() {
            // complete
          }
        })
    },
    changeName:function(e){
        var thePage = this
        wx.request({
          url: 'http://www.paperpass.com/get-now-ip-1',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
              
              thePage.setData({
                  currentIp:res.data
              })
              
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
        
    }
}

)