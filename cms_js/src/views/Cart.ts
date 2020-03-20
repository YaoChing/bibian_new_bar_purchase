import { fetchData } from "../libs/fetchData";

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

  updateCart(productData: ProductProps) {
    let data = {
      status: "update_cart",
      item: productData
    }
    
    fetchData("", data, this.cb);
  }
  
  deleteCart(id: string) {
    let data = {
      status: "delete_cart",
      item: {
        productID: 12345
      }
    }
    
    fetchData("", data, this.cb);
  }
  
  getItemsList() {
    let data = {
      status: "get_items_list"
    }
    
    fetchData("", data, this.cb);
  }
  
  getCartStatus() {
    let data = {
      status: "get_cart_status"
    }
    
    fetchData("", data, this.cb);
  }
  
  cb(result: any) {}

  testCall() {
    console.log("Cart init");
  }
}

export default (new Cart());