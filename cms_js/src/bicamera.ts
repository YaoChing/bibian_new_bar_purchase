import Cart from "./views/Cart";
import Render from "./views/Render";
import Product from "./views/Product";

console.log("========== call render");
Render.testCall();

console.log("========== Cart render");
Cart.testCall();

console.log("========== Product render");
Product.testCall();

Render.initBarContainer();

// let data = Product.getProductData();

// console.log(data);

// var s = document.createElement("script");
// s.type = "text/javascript";
// s.src = "https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/cms_js/bicamera.min.js";
// s.charset="utf-8"
// document.head.append(s);