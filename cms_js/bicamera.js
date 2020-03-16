var productData = {
  name: "",
  price: 0,
  description: "",
  descriptionWithoutHtml: "",
  spec: [],
  maxNum: 0
}
var itemData = {
  id: "",
  name: "",
  price: 0,
  description: "",
  image: "",
  num: 0
}
var cartID = "";
var cmsDomain = ".testcms.co.jp";
var expire_days = 7;

function getProdID(url) {
  var prodIDRe = /https:\/\/www\.biccamera\.com\/bc\/item\/([0-9]+)\//g;
  var prodIDArray = prodIDRe.exec(url);
  var prodID = (prodIDArray) ? prodIDArray[1] : 0;

  return prodID;
}

function getProductData() {
  var prodName = document.querySelector("#PROD-CURRENT-NAME").innerText.trim();
  var prodPrice1 = document.querySelectorAll("tr.bcs_variationOff")[0].querySelector(".bcs_proper");

  prodPrice1 = (prodPrice1) ? prodPrice1.innerText.replace(/\n/g, ' ').trim() : prodPrice1;

  var prodPrice2 = document.querySelectorAll("tr.bcs_variationOff")[1].querySelector(".bcs_price strong").innerText.trim();
  var prodDescription1 = document.querySelector("#bcs_detailBase").innerHTML.trim();
  var prodDescription2 = document.querySelector("#bcs_cmsIncludeContents").innerHTML.trim();
  var prodDescriptionWithoutHtml1 = document.querySelector("#bcs_detailBase").innerText.replace(/\n/g, '').trim();
  var prodDescriptionWithoutHtml2 = document.querySelector("#bcs_cmsIncludeContents").innerText.replace(/\n/g, '').trim();
  var prodImage = document.querySelector("#PROD-CURRENT-IMG").src.trim();
  var specATemp = document.querySelectorAll(".bcs_variSlider a");
  var specImgTemp = document.querySelectorAll(".bcs_variSlider img");
  var i = 0;
  var spec = [{
    prodID: getProdID(location.href),
    prodSubName: prodName,
    prodSubImg: prodImage
  }];
  var existID = [];
  var maxNum = 0;

  while(i < specATemp.length) {
    var aTemp = specATemp[i];
    var imgTemp = specImgTemp[i];
    var prodID = getProdID(aTemp.href.trim());

    if(imgTemp && imgTemp.alt && existID.indexOf(prodID) <= -1) {
      existID.push(prodID);

      spec.push({
        prodID,
        prodSubName: imgTemp.alt.trim(),
        prodSubImg: imgTemp.src.trim()
      });
    } 
    i += 1;
  }

  var maxNumTemp = document.querySelector(".bcs_num input");

  if(!maxNumTemp) {
    maxNum = document.querySelectorAll(".bcs_num select option").length
  } else {
    maxNum = maxNumTemp.value;
  }

  maxNum = (typeof maxNum === 'string') ? parseInt(maxNum) : maxNum;

  productData = {
    name: prodName,
    price1: prodPrice1,
    price2: prodPrice2,
    description: (prodDescription1) ? prodDescription1 : prodDescription2,
    descriptionWithoutHtml: (prodDescriptionWithoutHtml1) ? prodDescriptionWithoutHtml1 : prodDescriptionWithoutHtml2,
    spec,
    maxNum
  }
}

function fetchData(url, data, cb) {
  var formData = new FormData();

  formData.append('data', JSON.stringify(data));

  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.onreadystatechange = function(e) {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      if(xhr.status === 200) {
        cb(xhr.responseText);
      }
    }
  }
  xhr.send(formData);
}



function setCartCookie() {
  var d = new Date();

  d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));

  var expires = "expires=" + d.toGMTString();

  document.cookie = "cartID=" + cartID + "; " + expires + "; domain=" + cmsDomain + "; path=/";
}

function deleteCartCookie() {
  document.cookie = "cartID=; expires = Thu, 01 Jan 1970 00:00:00 GMT; domain=" + cmsDomain + "; path=/";
}

function initCart(cb) {
  fetchData("http://nbwww.bibian.co.jp/bicamera/get_token_id", {}, cb);
}

function getCartID() {
  if(document.cookie) {
    cartID = document.cookie.replace(/(?:(?:^|.*;\s*)cartID\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if(!cartID) {
      initCart(function(result) {
        cartID = result;
        setCartCookie();
      })
    }
  } else {
    initCart(function(result) {
      cartID = result;
      setCartCookie();
    })
  }
}

function getResponseResult(result) {
  console.log(result);
}

// getCartID();
// console.log(cartID);
// deleteCartCookie();

getProductData();
console.log(productData);