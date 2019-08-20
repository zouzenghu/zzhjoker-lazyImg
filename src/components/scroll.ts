//页面监听滚动事件
import throttle from './throttle'
import callback from './callback'
export default function scroll(imgList: any[string], obj: any): void {
  let throttleCallback = throttle(callback, null, 50)
  let clientHeight = document.documentElement.clientHeight
  window.addEventListener('scroll', e => {
    throttleCallback(obj.attr, imgList, clientHeight, obj.callback)
  })
}
