+ 測試環境建置

	網站用途|網址
	---|---
	呈現iframe|nbwww.bibian.co.jp
	提供客戶端JS|nbcms.bibian.co.jp
	偽裝客戶端|nbcms.testcms.co.jp
	
	+ 修改hosts

		```bash
		vim /etc/hosts
		
		127.0.0.1 nbwww.bibian.co.jp nbcms.bibian.co.jp nbcms.testcms.co.jp
		```
		
+ 流程說明

	+ 建立session_id / jwt當購物車ID
	  + 建立紀錄檔，分為兩種狀態
	      + 未登入時，紀錄購物車ID，建立時間
	      + 已登入時，紀錄購物車ID，guid，建立時間
	  + 建立一筆空購物車資料到資料庫來做購買紀錄，欄位需有
	      + cartID, GUID, cartContents, cartDelivery, cartIsCheckout, expireTime
	  + 回傳購物車ID到前端並紀錄到cookie中
	  + cookie存活時間為七天
	
	  ```bash
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
---  
	  
+ 狀態說明

  流程前兩步驟可以套過JS or iframe處理，但是不是要用iframe處理，需測試客戶端對iframe的安全性狀況來判定
  
---  

+ 需要的API

    API URL 需請後端工程師協助提供，目前暫定為 /go_to_api.php

    ##### 加入商品到購物車
    
    說明：當點選加入購物車時使用
    
    ```
    POST /go_to_api.php
    ```

    ##### Parameters
        
    ```
    {
        status: update_cart
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
            count: 1 // 購物車內商品項總數
        },
        error: 0
    }
    ```
    
    ---

    ##### 刪除商品從購物車
    
    說明：當點選刪除購物車時使用
    
    ```
    POST /go_to_api.php
    ```
    
    ##### Parameters
    
    ```
    {
        status: delete_cart
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
            count: 0 // 購物車內商品項總數
        },
        error: 0
    }
    ```
    
    ---

    ##### 取得購物車商品項
    
    說明：當點選bar上的購物車圖示時使用
      
    ```
    POST /go_to_api.php
    ```
    
    ##### Parameters
    
    ```
    {
        status: get_items_list
    }
    ```
    
    ##### Response Result
    
    ```
    {
        status: true,
        message: ""
        data: {
            carts: [
              {
                  productID: 12345,
                  productName: "EH-CNA9B-VP ヘアードライヤー ナノケア ビビッドピンク [国内専用]",
                  productPrice: "18,740円",
                  productCount: 1,
                  productSummary: "<b>「ナノイー」＆ダブルミネラル*で、キューティクルを密着させ、指通りのよいまとまりのある髪へ。</b><br><br>摩擦ダメージや紫外線に強い髪へ。地肌から毛先、肌までケアできる５つのモードを搭載。<br>*ダブルミネラルとは、２つの亜鉛電極から発生されるミネラルマイナスイオンです。",
                  productImage: "https://image.biccamera.com/img/00000006980965_A01.jpg?sr.dw=320&sr.jqh=60&sr.dh=320&sr.mat=1",
                  productMemo: ""
              },
              .....
            ],
            amount: {
                totalCost: "1,997,900", // 購物車總金額（TWD）
                productCost: "4,592", // 購物車商品總金額（TWD）
                productCostForCurrency: "14,290", // 購物車商品換算匯率總金額（JPY）
                serviceCost: "100", // 購物車服務費金額（TWD）
                internalFee: "108", // 購物車國內運費金額（TWD）
                internalFeeForCurrency: "305", // 購物車國內運費換算匯率金額（JPY）
                airFee: "100" // 空運費用金額（TWD）
            }
        },
        error: 0
    }
    ```

    ---

    ##### 取得購物車狀態
    
    說明：當頁面進入時使用
    
    ```
    POST /go_to_api.php
    ```
    
    ##### Parameters
    
    ```
    {
        status: get_cart_status
    }
    ```
    
    ##### Response Result
    
    ```
    {
        status: true,
        message: ""
        data: {
            is_checkout: true, // 是否已經結帳
            count: 0 // 取得購物車商品項總數
        },
        error: 0
    }
    ```  
	  
---

#### To Check List

- [ ] 取得 api url
- [ ] 加入商品到購物車
- [ ] 刪除商品從購物車
- [ ] 取得購物車商品項
- [ ] 取得購物車狀態