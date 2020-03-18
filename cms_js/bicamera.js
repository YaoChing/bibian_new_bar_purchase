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

function getProdID(url) {
  var prodIDRe = /https:\/\/www\.biccamera\.com\/bc\/item\/([0-9]+)\//g;
  var prodIDArray = prodIDRe.exec(url);
  var prodID = (prodIDArray) ? prodIDArray[1] : 0;

  return prodID;
}

function getProductData() {
  var prodName = document.querySelector("#PROD-CURRENT-NAME").innerText.trim();
  var prodPrice1 = document.querySelectorAll("tr.bcs_variationOff")[0].querySelector(".bcs_proper");

  if(prodPrice1) {
    prodPrice1 = prodPrice1.innerText.trim().split(/\s/)[0];
    
    var tempIndex = prodPrice1.indexOf("円");

    prodPrice1 = prodPrice1.slice(0,tempIndex) + "円";
  }

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
        prodID: prodID,
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
    spec: spec,
    maxNum: maxNum
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

getProductData();
console.log(productData);