//处理加载图片
export default function callback(
  imgList: any[string],
  clientHeight: number,
  attr: string,
  callback?: any
): void {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  for (let key in imgList) {
    if (
      parseInt(key.slice(key.lastIndexOf('.') + 1)) <=
      scrollTop + clientHeight
    ) {
      let attrs: string = imgList[key].getAttribute(attr)
      if (attrs) {
        callback && callback(imgList[key])
        imgList[key].src = attrs
        imgList[key].removeAttribute(attr)
      }
    }
  }
}
