import { lazyImageInterface } from './types/index'
import initImgList from './components/initImgList'
import firstImg from './components/firstImg'
import scroll from './components/scroll'
let lazyImage: lazyImageInterface
lazyImage = function(obj: any) {
  let imgList: any[string] = initImgList(
    obj.attr,
    obj.placeholder,
    obj.errorCallback
  )
  firstImg(imgList, obj)
  scroll(imgList, obj)
}
export default lazyImage
