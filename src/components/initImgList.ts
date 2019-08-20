//初始化img数组
export default function initImageList(
  attr: string,
  placeholder?: string,
  errorCallback?: any
): any[] {
  let domList: any[] | null = Array.prototype.slice.call(
    document.querySelectorAll(`[${attr}]`)
  )
  let imglist: any[string] = []
  domList.forEach((val: any) => {
    if (placeholder) {
      if (!val.src) {
        val.src = placeholder
      }
    }
    let arrts = val.getAttribute(attr)
    let top = val.offsetTop
    val.onerror = errorCallback
    imglist[`${arrts}.${top}`] = val
    imglist.length++
  })
  domList = null
  return imglist
}
