var dpr, scale, timer, rem
var style = document.createElement('style')
var metaEl = document.createElement('meta')
dpr = Math.floor(window.devicePixelRatio || 1) //对于有dpr不是整数的设备进行向下取整
scale = 1 / dpr

/**
 * 通过获取dpr对网页进行缩放，并设置字体
 */
var refreshRem = function () {
  var c = '}'
  var width = document.documentElement.clientWidth
  var isMobile = window.navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
  if (!isMobile && width > 1024) { //非手机端
    width = 640
    c = 'max-width:' + width + 'px;margin-right:auto!important;margin-left:auto!important;}'
  }
  window.rem = rem = width / 10
  style.innerHTML = 'html{font-size:' + rem + 'px!important;}' + c
}

document.documentElement.setAttribute('data-dpr', dpr)

metaEl.setAttribute('name', 'viewport')
metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
document.documentElement.firstElementChild.appendChild(metaEl)
document.documentElement.firstElementChild.appendChild(style)

if (document.documentElement.clientWidth === 980) {
  metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1')
}

refreshRem()

window.addEventListener('resize', function () {
  clearTimeout(timer)
  timer = setTimeout(refreshRem, 300)
}, false)

window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    clearTimeout(timer)
    timer = setTimeout(refreshRem, 300)
  }
}, false)
