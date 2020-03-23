import { fetchData } from "../libs/fetchData";
import { goToBibianCart } from "../libs/redirectUrl";
import total_amount from "../htmls/total_amount";
import total_items from "../htmls/total_items";

export interface ProductProps {
  name: string,
  price: string,
  discount: string,
  image: string,
  description: string,
  descriptionWithoutHtml: string,
  spec: any[],
  maxNum: number
}

export interface CartListProps {
  amount: {
    totalCost: string,
    productCost: string,
    productCostForCurrency: string,
    serviceCost: string,
    internalFee: string,
    internalFeeForCurrency: string,
    airFee: string
  },
  items: {
    id: string,
    name: string,
    discription: string
    spec: string,
    memo: string,
    price: string,
    image: string
  }[]
}

class Cart{

  private _apiUrl = "";

  updateCart(productData: ProductProps, cb: (result: any) => void) {
    let data = {
      status: "update_cart",
      item: productData
    }
    
    fetchData("", data, cb);
  }
  
  deleteCart(id: string, cb: (result: any) => void) {
    let data = {
      status: "delete_cart",
      item: {
        productID: id
      }
    }

    cb(data);

    // fetchData("", data, cb);
  }
  
  getItemsList(cb: (result: any) => void) {
    let data = {
      status: "get_items_list"
    }
    
    fetchData("", data, cb);
  }
  
  getCartStatus(cb: (result: any) => void) {
    let data = {
      status: "get_cart_status"
    }
    
    fetchData("", data, cb);
  }
  
  cb(result: any) {}

  regenHtml(temp: CartListProps) {
    // 取得購物車清單
    let html = ``;

    html += total_amount(temp.amount);
    html += total_items(temp.items);

    (document.querySelector("div#estimatedcost div.modal-content") as HTMLElement).innerHTML = html; 
  }

  regenAndShowData() {
    let temp = {
      amount: {
        totalCost: "1,998,900",
        productCost: "8,592",
        productCostForCurrency: "15,290",
        serviceCost: "100",
        internalFee: "108",
        internalFeeForCurrency: "385",
        airFee: "100"
      },
      items: [{
        id: "12345",
        name: "GR-Q23FGNGL冰箱LG SIGNITURE銀色[4門/左右對開門型/676L]《基本裝機費安排》",
        discription: "家電現在對藝術作品進化了。LG SIGNATURE本來應該有家電的到極限追求那個本質和價值，不要的要素切掉，真地對家電需要的性能和使用方便，是把設計美以最尖端的技術換成形狀的LG的高級名牌。是翻新正因為是綜合家電廠商才完成的傳統的家電的想法的那樣的特別的產品。",
        spec: "藍色",
        memo: "請小心包裝",
        price: "15,290",
        image: "https://image.biccamera.com/img/00000006355924_A01.jpg?sr.dw=600&sr.dh=600&sr.jqh=60&sr.mat=1"
      }, {
        id: "23456",
        name: "GR-Q23FGNGL冰箱LG SIGNITURE銀色[4門/左右對開門型/676L]《基本裝機費安排》",
        discription: "家電現在對藝術作品進化了。LG SIGNATURE本來應該有家電的到極限追求那個本質和價值，不要的要素切掉，真地對家電需要的性能和使用方便，是把設計美以最尖端的技術換成形狀的LG的高級名牌。是翻新正因為是綜合家電廠商才完成的傳統的家電的想法的那樣的特別的產品。",
        spec: "藍色",
        memo: "請小心包裝",
        price: "15,290",
        image: "https://image.biccamera.com/img/00000006355924_A01.jpg?sr.dw=600&sr.dh=600&sr.jqh=60&sr.mat=1"
      }]
    }

    // 重新處理html資料
    this.regenHtml(temp);

    // btn had been used in estimatedcose html
    (document.querySelector(".closeCart input") as HTMLElement).onclick = () => {
      // 導向到bibian購買頁面
      goToBibianCart();
    };
    // 顯示下一cut
    window.location.href ='#estimatedcost';
  }

  testCall() {
    console.log("Cart init");
  }
}

let cart = new Cart();

// 提供全域呼叫使用
(window as any).deleteCart = (id: string) => {
  cart.deleteCart(id, (result) => {
    console.log(result);

    let temp = {
      amount: {
        totalCost: "1,997,900",
        productCost: "4,592",
        productCostForCurrency: "14,290",
        serviceCost: "100",
        internalFee: "108",
        internalFeeForCurrency: "305",
        airFee: "100"
      },
      items: [{
        id: "23456",
        name: "GR-Q23FGNGL冰箱LG SIGNITURE銀色[4門/左右對開門型/676L]《基本裝機費安排》",
        discription: "家電現在對藝術作品進化了。LG SIGNATURE本來應該有家電的到極限追求那個本質和價值，不要的要素切掉，真地對家電需要的性能和使用方便，是把設計美以最尖端的技術換成形狀的LG的高級名牌。是翻新正因為是綜合家電廠商才完成的傳統的家電的想法的那樣的特別的產品。",
        spec: "藍色",
        memo: "請小心包裝",
        price: "15,290",
        image: "https://image.biccamera.com/img/00000006355924_A01.jpg?sr.dw=600&sr.dh=600&sr.jqh=60&sr.mat=1"
      }]
    }
  
    cart.regenHtml(temp);
  });
}

export default cart;