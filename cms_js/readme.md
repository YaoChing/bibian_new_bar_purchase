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

        在src根目錄底下放置主要程式檔案bicamera.ts，再從該檔案呼叫renders裡的Biccamera來做UI計算，替代相關參數後，render到html中。

        在renders/Biccamera中

        + configs資料夾主要會放共用變數設定，css設定等
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

---

建置操作流程如下

程式目錄路徑為 /opt/html/bibian_new_bar
檔案建置程式路徑為 /opt/html/service_init.sh

ssh登入主機後，指令輸入

```bash
sh /opt/html/service_init.sh {服務代號}
```

在/opt/html/bibian_new_bar/src跟/opt/html/bibian_new_bar/src/renders底下就會出現剛建置的代號名稱目錄及檔案，就可直些新增修改來進行程式處理。

另外最重要一點，要在webpack.config.js中加入之後要genarator出來的檔案參數

```javascript
...
module.exports = {
  ...
  entry: {
    {服務代號}: './{服務代號}.ts' // 這部分記得要加，不然npm run watch/build不會出現檔案哦
  },
  ...
}
```

最後cd進入程式目錄/opt/html/bibian_new_bar，輸入指令npm run watch就能進行開發。開發完畢後，指令輸入npm run build就能產生編譯js在dist中

