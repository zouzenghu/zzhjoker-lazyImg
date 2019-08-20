//函数节流
export default function throttle(
  method: any,
  context: any,
  timer: number = 1000
): any {
  let id: any
  return function(
    attr: string,
    imageList: any[string],
    bodyHeihgt: number,
    callback?: any
  ): void {
    clearInterval(id)
    id = setTimeout(() => {
      method.call(context, imageList, bodyHeihgt, attr, callback)
    }, timer)
  }
}
