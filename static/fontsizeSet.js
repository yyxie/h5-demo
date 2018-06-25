var dpr, scale, timer, rem
var style = document.createElement('style')
var metaEl = document.createElement('meta')
var refreshRem = function () {
  var c = '}'
  var width = document.documentElement.clientWidth
  var isPhone = window.navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
  if (!isPhone && width > 1024) {
    width = 640
    c = 'max-width:' + width + 'px;margin-right:auto!important;margin-left:auto!important;}'
  }
  window.rem = rem = width / 10
  style.innerHTML = 'html{font-size:' + rem + 'px!important;}' + c
}

dpr = window.devicePixelRatio || 1
scale = 1 / dpr

document.documentElement.setAttribute('data-dpr', dpr)
metaEl.setAttribute('name', 'viewport')
metaEl.setAttribute('content', 'target-densitydpi=device-dpi, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
document.documentElement.firstElementChild.appendChild(metaEl)
document.documentElement.firstElementChild.appendChild(style)

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
