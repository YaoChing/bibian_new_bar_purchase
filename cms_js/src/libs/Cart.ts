import { fetchData } from "./fetchData";

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

class Cart{

  private _apiUrl = "";

  updateCart(productData: ProductProps, cb: (result: any) => void) {
    let data = {
      status: "update_cart",
      item: productData
    }
    
    // fetchData("", data, cb);
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
    
    // fetchData("", data, cb);
  }
  
  getCartStatus(cb: (result: any) => void) {
    let data = {
      status: "get_cart_status"
    }
    
    // fetchData("", data, cb);

    cb({
      status: true,
      message: "",
      data: {
        is_checkout: false,
        count: 10
      },
      error: 0
    })
  }
  
  cb(result: any) {}

  testCall() {
    console.log("Cart init");
  }
}

export default Cart;