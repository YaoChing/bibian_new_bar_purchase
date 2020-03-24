import _cart from "../../libs/cart";
import _product from "./libs/product";
import { regenAndShowData } from "./libs/reGenHtml";

import { itemStyle } from "./configs/css";
import bar_container from "./views/bar_container";
import buy_now from "./views/buy_now";
import add_cart from "./views/add_cart";
import estimatedcost from "./views/estimatedcost";

let cart = new _cart();

class Render{

  private _cssStype = itemStyle();

  private _appendCss(code: any) {
    let style: any;

    style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = code;
    } else {
      style.innerHTML = code;
    }

    return document.getElementsByTagName("head")[0].appendChild(style); 
  }

  initCss() {
    this._appendCss(this._cssStype);
  }

  initBarContainer() {
    // append css
    this.initCss();
    // 處理container ===== start
    let barContainerHtml = '<div class="bibibar"></div>';

    (document.body as HTMLBodyElement).innerHTML += barContainerHtml;
    // 處理container ===== end
    // 處理商品資訊並append到html中
    this.initCartBar();
  }

  initCartBar() {
    // 取得商品資訊
    let product = _product.getProductData();
    // 處理html ===== start
    let barBannerHtml = bar_container();

    barBannerHtml += buy_now(product);
    barBannerHtml += add_cart();
    barBannerHtml += estimatedcost();
    // 處理html ===== end

    // append html
    (document.querySelector(".bibibar") as HTMLElement).innerHTML += barBannerHtml; 
    // click greenbtn had been used in bar_container html
    (document.querySelector(".bibibar_c a.greenbtn") as HTMLElement).onclick = () => {
      // 處理購物物品並回傳購物資訊到service
      _product.regenAndSendItemData();
    }
    // btn had been used in buy_now html
    (document.querySelector(".addCart input") as HTMLElement).onclick = () => {
      // 處理購物物品並回傳購物資訊到service
      _product.regenAndSendItemData();
    };
    // shopcount had been used in bar_container html
    (document.querySelector(".bibibar_c div.shopcount") as HTMLElement).onclick = () => {
      // 取得購物車總資訊並顯示購買清單
      regenAndShowData();
    };
    // checkOut btn had been used in add_cart html
    (document.querySelector(".checkOut input") as HTMLElement).onclick = () => {
      // 取得購物車總資訊並顯示購買清單
      regenAndShowData();
    };
    // 取得購物車狀態
    cart.getCartStatus((result) => {
      let num = 0;

      if(result["status"] && !result["data"]["is_checkout"]) {
        num = result["data"]["count"];
      }

      (document.querySelector(".bibibar_c .shopcount .count_n") as HTMLElement).innerText = ((typeof num === 'number') ? num.toString() : num);
    })
  }
}

export default (new Render());