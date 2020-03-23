import Cart from "../../libs/Cart";
import Product from "../../libs/Product";

import { itemStyle } from "./configs/css";
import bar_container from "../../htmls/bar_container";
import buy_now from "../../htmls/buy_now";
import add_cart from "../../htmls/add_cart";
import estimatedcost from "../../htmls/estimatedcost";

class Render{

  private _cssStype = itemStyle();

  private _insertCss(code: any) {
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
    this._insertCss(this._cssStype);
  }

  initBarContainer() {
    this.initCss();

    let barContainerHtml = '<div class="bibibar"></div>';

    (document.body as HTMLBodyElement).innerHTML += barContainerHtml;

    this.initCartBar();
  }

  initCartBar() {
    let product = Product.getProductData();
    let barBannerHtml = bar_container();

    barBannerHtml += buy_now(product);
    barBannerHtml += add_cart();
    barBannerHtml += estimatedcost();

    (document.querySelector(".bibibar") as HTMLElement).innerHTML += barBannerHtml; 
    // click greenbtn had been used in bar_container html
    (document.querySelector(".bibibar_c a.greenbtn") as HTMLElement).onclick = () => {
      // 處理購物物品並回傳購物資訊到service
      Product.regenAndSendItemData();
    }
    // btn had been used in buy_now html
    (document.querySelector(".addCart input") as HTMLElement).onclick = () => {
      // 處理購物物品並回傳購物資訊到service
      Product.regenAndSendItemData();
    };
    // shopcount had been used in bar_container html
    (document.querySelector(".bibibar_c div.shopcount") as HTMLElement).onclick = () => {
      // 取得購物車總資訊並顯示購買清單
      Cart.regenAndShowData();
    };
    // checkOut btn had been used in add_cart html
    (document.querySelector(".checkOut input") as HTMLElement).onclick = () => {
      // 取得購物車總資訊並顯示購買清單
      Cart.regenAndShowData();
    };
  }

  testCall() {
    console.log("Render init");
  }
}

export default (new Render());