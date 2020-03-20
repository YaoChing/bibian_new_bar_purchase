export interface ProductProps {
  name: string,
  price: string,
  discount: string,
  image: string,
  description1: string,
  description2: string,
  descriptionWithoutHtml1: string,
  descriptionWithoutHtml2: string,
  spec: any[],
  weight: string,
  maxNum: number
}

class Product{

  public productData: ProductProps = {
    name: "",
    price: "",
    discount: "",
    image: "",
    description1: "",
    description2: "",
    descriptionWithoutHtml1: "",
    descriptionWithoutHtml2: "",
    spec: [],
    weight: "",
    maxNum: 0
  }

  private _itemData = {
    id: "",
    name: "",
    price: 0,
    image: "",
    description: "",
    num: 0
  }

  private _prodIDRe = /https\:\/\/www\.biccamera\.com\/bc\/item\/([0-9]+)\//g;

  private _getProdID(url: string) {
    if(!url.match(this._prodIDRe)) {
      return ""
    }

    let prodIDArray = this._prodIDRe.exec(url);
    let prodID = (prodIDArray) ? prodIDArray[1] : "";
  
    return prodID;
  }

  getProductName() {
    let prodName: string = (document.querySelector("#PROD-CURRENT-NAME") as HTMLElement).innerText.trim();

    this.productData["name"] = prodName;
  }

  getProductPriceCost() {
    let prodPriceCost: any = (document.querySelectorAll("tr.bcs_variationOff")[0].querySelector(".bcs_proper") as HTMLElement);
  
    if(prodPriceCost) {
      prodPriceCost = prodPriceCost.innerText.trim().split(/\s/)[0];
      
      let tempIndex = prodPriceCost.indexOf("円");
  
      prodPriceCost = prodPriceCost.slice(0,tempIndex) + "円";
    }

    this.productData["price"] = prodPriceCost;
  }

  getProductPriceDiscount() {
    let prodPriceDiscount = (document.querySelectorAll("tr.bcs_variationOff")[1].querySelector(".bcs_price strong") as HTMLElement).innerText.trim();

    this.productData["discount"] = prodPriceDiscount;
  }

  getProductDescription1() {
    let prodDescription1 = (document.querySelector("#bcs_detailBase") as HTMLElement).innerHTML.trim();

    this.productData["description1"] = prodDescription1;
  }

  getProductDescription2() {
    let prodDescription2 = (document.querySelector("#bcs_cmsIncludeContents") as HTMLElement).innerHTML.trim();
    
    this.productData["description2"] = prodDescription2;
  }

  getProductDescriptionWithoutHtml1() {
    let prodDescriptionWithoutHtml1 = (document.querySelector("#bcs_detailBase") as HTMLElement).innerText.replace(/\n/g, '').trim();

    this.productData["descriptionWithoutHtml1"] = prodDescriptionWithoutHtml1;
  }

  getProductDescriptionWithoutHtml2() {
    let prodDescriptionWithoutHtml2 = (document.querySelector("#bcs_cmsIncludeContents") as HTMLElement).innerText.replace(/\n/g, '').trim();

    this.productData["descriptionWithoutHtml2"] = prodDescriptionWithoutHtml2;
  }

  getProductImage() {
    let prodImage = (document.querySelector("#PROD-CURRENT-IMG") as HTMLImageElement).src.trim();

    this.productData["image"] = prodImage;
  }

  getProductSpec() {
    let specATemp = document.querySelectorAll(".bcs_variSlider a");
    let specImgTemp = document.querySelectorAll(".bcs_variSlider img");
    let i = 0;
    let spec = [{
      prodID: this._getProdID(location.href),
      prodSubName: this.productData.name,
      prodSubImg: this.productData.image
    }];
    let existID = [];
    

    while(i < specATemp.length) {
      let aTemp = (specATemp[i] as HTMLLinkElement);
      let imgTemp = (specImgTemp[i] as HTMLImageElement);
      let prodID = this._getProdID(aTemp.href.trim());

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

    this.productData["spec"] = spec;
  }

  getProductWeight() {
    let tempTable = (document.querySelector("#bcs_detail") as HTMLElement).querySelectorAll("table");
    let i = 0;
    let weightStr = ""

    while(i < tempTable.length) {
      let tempValue = tempTable[i].innerText;

      if(!tempValue) continue;

      let data = tempValue.split(/\n/);

      for(let key in data) {
        var value = data[key];

        if(typeof value === 'string' && value.match(/重量/g)) {
          var sReg = /([0-9\.]+(k|ｋ|K|Ｋ)?(g|ｇ|G|Ｇ))/g;
          var result = sReg.exec(value);
          weightStr = (result) ? result[1] : "";
        }
      }

      i += 1
    }

    this.productData["weight"] = weightStr;
  }

  getBuyMaxCount() {
    let maxNum: any = 0;
    let maxNumTemp = (document.querySelector(".bcs_num input") as HTMLInputElement);
  
    if(!maxNumTemp) {
      maxNum = document.querySelectorAll(".bcs_num select option").length;
    } else {
      maxNum = maxNumTemp.value;
    }
  
    maxNum = (typeof maxNum === 'string') ? parseInt(maxNum) : maxNum;

    this.productData["maxNum"] = maxNum;
  }

  getProductData() {
    this.getProductName();
    this.getProductPriceCost();
    this.getProductPriceDiscount();
    this.getProductImage();
    this.getProductDescription1();
    this.getProductDescription2();
    this.getProductDescriptionWithoutHtml1();
    this.getProductDescriptionWithoutHtml2();   
    this.getProductSpec(); 
    this.getBuyMaxCount();
    this.getProductWeight();

    return this.productData;
  }

  testCall() {
    console.log("Product init");
  }
}

export default (new Product());