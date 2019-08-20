### zzhjoker-lazyimg

这是一个 图片懒加载的 js 插件

### 安装

```javascript
npm install zzhjoker-lazyimg --save
```

### 使用例子

```javascript
import lazyImage from 'lazyImage'
lazyImage({
  attr: 'data-src',
  placeholder: '打包后的占位符图片路径',
  errorCallback: function() {
    console.log('图片加载失败处理 this-> 失败img')
  },
  callback: function(img: any) {
    console.log('当开始替换图片真实路径回调')
  }
})
```

```html
<img alt="" data-src="../resource/timg1.jpg" />
<img alt="" data-src="../resource/timg2.jpg" />
<img alt="" data-src="../resource/timg3.jpg" />
<img alt="" data-src="../resource/timg4.jpg" />
```

### 参数说明

```javascript
attr //必传参数，控制想要使用懒加载的img
placeholder //占位符图片
errorCallback //图片错误时回调
callback //开始替换图片时回调,返回参数当前被替换的img
```
