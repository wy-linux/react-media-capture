### React Hook 封装的MediaCapture组件，提供本地录制视频/音频的功能
```shell
1. npm install  下载相关依赖
2. npm run start 启动项目
3. npm run build 打包组件，可自由导出使用
```
###### 捕获画面
![图片见assets目录](https://github.com/wy-linux/react-media-capture/blob/master/src/assets/capture-display.png)
+ Chrome标签页
+ 窗口
+ 整个屏幕
+ 左下角：分享标签页中的音频（只有系统音效可以捕获）<b>勾选</b>
  > 如果想捕获麦克风音频，请使用“捕获麦克风音频”
```javascript
export function useDisplayMediaCapture<T extends HTMLVideoElement>() {
  let stream  = await navigator.mediaDevices.getDisplayMedia()
  //......
}
```
###### 捕获麦克风音频
```JavaScript
export function useUserMediaCapture<T extends HTMLAudioElement>() {
  let stream  = await navigator.mediaDevices.getUserMedia()
  //......
}
```
###### 媒体流传输到服务端，合成音频与视频
```javascript
//TODO
```
###### 多人实时在线视频通话
```javascript
//TODO
```