#### 結構說明

系統結構由ES5搭配typescript開發撰寫，使用webpack套件做js編譯。

---

####文件結構

+ src

    這部分包含所有的開發程式，包含主要的js，以及js會import到的其他程式。
    子架構說明如下：

    + libs

        共用的程式會統一放在這邊，通常會放串接api程式碼部分

    + renders

        顯示在前端頁面的元件以及相關程式都會放在這邊，例如css, html。

        以 Biccamera 為例：

        在src根目錄底下放置主要程式檔案bicamera.ts ，再從該檔案呼叫renders裡的Biccamera來做UI計算，替代相關參數後，render到html中。

        在renders/Biccamera中

        + config資料夾主要會放共用變數設定，css設定等
        + libs資料夾主要會放要在前端處理的邏輯程式等
        + views資料夾主要會放要render的html元件等
        + index.ts會是主要呼叫import的程式檔

+ dist

    這邊程式會是webpack編譯過的程式檔案，相關設定請參考webpack.config.js

---

####運用的套件

可以參考package.json

```json
{
  ...,
  "scripts": {
    ...,
    "watch": "webpack --mode development --watch",
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  },
  ...,
  "devDependencies": {
    "ts-loader": "^6.2.1",
    "typescript": "^3.8.3",
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11"
  }
}
```

一般開發時，會使用npm run watch  
正式上線時，會使用npm run build

這兩者的差別在於，編碼後的不同，主要正式上線會做min化跟程式碼替代的處理

主要程式都放置於公司內部gitlab主機上，path url: http://192.168.1.143/ching0072/bibian_new_bar