+ 測試環境建置
<br>

  |網站用途|網址|
  |---|---|
  |呈現iframe|nbwww.bibian.co.jp|
  |提供客戶端JS|nbcms.bibian.co.jp|
  |偽裝客戶端|nbcms.testcms.co.jp|

  + 修改hosts
  ```
  vim /etc/hosts

  127.0.0.1 nbwww.bibian.co.jp nbcms.bibian.co.jp nbcms.testcms.co.jp
  ```
  <br>

+ 流程說明

  + 建立session_id / jwt當購物車ID
  + 建立紀錄檔，分為兩種狀態
      + 未登入時，紀錄購物車ID，建立時間
      + 已登入時，紀錄購物車ID，guid，建立時間
  + 建立一筆空購物車資料到資料庫來做購買紀錄，欄位需有
      + cartID, GUID, cartContents, cartDelivery, cartIsCheckout, expireTime
  + 回傳購物車ID到前端並紀錄到cookie中
  + cookie存活時間為七天

  ```
  // 紀錄檔購物車結構
  {
    cartID: 12345,
    guid: "",
    created_at: "2020-03-16 14:23:00",
    carts: [],
    delivery: {},
    is_checkout: 0
  }
  ```
  <br>

+ 狀態說明

  流程前兩步驟可以套過JS or iframe處理，但是不是要用iframe處理，需測試客戶端對iframe的安全性狀況來判定
  <br>

+ 需要的API

  + 建立cartID

    ```
    GET /get_init_cart
    ```

    ##### Parameters

    ```
    {
      serviceName: "bicamera.com/www"
    }
    ```

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        cartID: 12345
      },
      error: 0
    }
    ```

  + 加入商品到購物車

    ```
    GET /update_cart
    ```

    ##### Parameters
    
    ```
    {
      cartID: 12345
      item: {
        productID: 12345,
        productName: "EH-CNA9B-VP ヘアードライヤー ナノケア ビビッドピンク [国内専用]",
        productPrice: "18,740円",
        productCount: 1,
        productSummary: "<b>「ナノイー」＆ダブルミネラル*で、キューティクルを密着させ、指通りのよいまとまりのある髪へ。</b><br><br>摩擦ダメージや紫外線に強い髪へ。地肌から毛先、肌までケアできる５つのモードを搭載。<br>*ダブルミネラルとは、２つの亜鉛電極から発生されるミネラルマイナスイオンです。",
        productImage: "https://image.biccamera.com/img/00000006980965_A01.jpg?sr.dw=320&sr.jqh=60&sr.dh=320&sr.mat=1",
        productMemo: ""
      }
    }
    ```

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        count: 1
      },
      error: 0
    }
    ```

  + 刪除商品從購物車

    ```
    GET /update_cart
    ```

    ##### Parameters

    ```
    {
      cartID: 12345
      item: {
        productID: 12345
      }
    }
    ```

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        count: 0
      },
      error: 0
    }
    ```

  + 取得購物車商品項總數
  
    ```
    GET /get_items_count
    ```

    ##### Parameters

    ```
    {
      cartID: 12345
    }
    ```

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        count: 0
      },
      error: 0
    }
    ```

  + 取得購物車狀態
  
    ```
    GET /get_cart_status
    ```

    ##### Parameters

    ```
    {
      cartID: 12345
    }
    ```

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        is_checkout: true,
        is_expire: false
      },
      error: 0
    }
    ```