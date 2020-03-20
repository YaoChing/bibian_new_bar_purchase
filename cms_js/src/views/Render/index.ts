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
    let barBannerHtml = bar_container();

    barBannerHtml += buy_now();
    barBannerHtml += add_cart();
    barBannerHtml += estimatedcost();

    (document.querySelector(".bibibar") as HTMLElement).innerHTML += barBannerHtml; 
  }

  testCall() {
    console.log("Render init");
  }
}

export default (new Render());