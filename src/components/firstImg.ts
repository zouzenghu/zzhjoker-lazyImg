export default function firstImg(imgList: any[string], obj: any) {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  let clientHeight = document.documentElement.clientHeight
  if (scrollTop === 0 || document.body.scrollHeight < clientHeight) {
    for (let key in imgList) {
      if (parseInt(key.slice(key.lastIndexOf('.') + 1)) <= clientHeight) {
        let attrs: string = imgList[key].getAttribute(obj.attr)
        if (attrs) {
          imgList[key].src = attrs
          imgList[key].removeAttribute(obj.attr)
        }
      }
    }
  } else {
    for (let key in imgList) {
      if (
        parseInt(key.slice(key.lastIndexOf('.') + 1)) <=
        scrollTop + clientHeight
      ) {
        let attrs: string = imgList[key].getAttribute(obj.attr)
        if (attrs) {
          imgList[key].src = attrs
          imgList[key].removeAttribute(obj.attr)
        }
      }
    }
  }
}
