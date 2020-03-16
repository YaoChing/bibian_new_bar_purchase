+ 測試環境建置
<br>
  + 設定

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
<br>
  + 建立cartID
    <br>
    ```
    GET /get_init_cart
    ```

    ##### Parameters

    |Name|Type|Required|Description|
    |---|---|---|---|

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        cartID: 12345
      }
    }
    ```
    <br>

  + 加入商品到購物車
    <br>
    ```
    GET /update_cart
    ```

    ##### Parameters

    |Name|Type|Required|Description|
    |---|:---|:---:|---|
    |productID|string|V|商品ID|
    |productName|string|V|商品名稱|
    |productPrice|string|V|商品價格|
    |productCount|number|V|購買數量|
    |productSummary|string|V|商品說明|
    |productImage|string|V|商品圖片|
    |productMemo|string|V|商品備註|

    ```

    ```

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        count: 2
      }
    }
    ```
    <br>

  + 刪除商品從購物車
    <br>
    ```
    GET /update_cart
    ```

    ##### Parameters

    |Name|Type|Required|Description|
    |---|:---|:---:|---|
    |productID|string|V|商品ID|

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        count: 2
      }
    }
    ```
    <br>

  + 取得購物車商品項總數
    <br>
    ```
    GET /get_items_count
    ```

    ##### Parameters

    |Name|Type|Required|Description|
    |---|:---|:---:|---|
    |productID|string|V|商品ID|

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        count: 2
      }
    }
    ```
    <br>

  + 取得購物車結帳狀態
    <br>
    ```
    GET /get_cart_status
    ```

    ##### Parameters

    |Name|Type|Required|Description|
    |---|:---|:---:|---|
    |productID|string|V|商品ID|

    ##### Response Result

    ```
    {
      status: true,
      message: ""
      data: {
        isCheckout: 0
      }
    }
    ```
    <br>