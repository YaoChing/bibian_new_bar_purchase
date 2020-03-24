export interface ItemsProps {
  id: string,
  name: string,
  discription: string,
  spec: string,
  memo: string,
  price: string,
  image: string
}

const Item = (data: ItemsProps) => {
  return `
    <div class="p-intro">
      <div class="p-image">
          <img src="${data.image}" alt="">
      </div>
      <div class="p-text">
          <h2>${data.name}</h2>
          <p>
            ${data.discription}
          </p>
          <div class="introgroup">
              <div class="goodinfo">商品規格<input type="button" class="goodinfobtn">
                  <div class="ordermemo">
                      <ul>
                          <li>選擇一：${data.spec}</li>
                          <li>備註：${data.memo}</li>
                      </ul>
                  </div>
              </div>
              <div class="price">
                  JPY <span class="redcolor">${data.price}</span>
              </div>
              <div class="deleteicon">
                  <img src="https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/trash-alt-solid.svg" alt="" onclick="deleteCart(${data.id});">
              </div>
          </div>
      </div>
    </div>
  `;
}

export default (data: ItemsProps[]) => {
  let itemHtml = ``;
  let i = 0;

  while(i < data.length) {
    let value = data[i];

    itemHtml += Item(value);

    i += 1;
  }

  return `
    <form class="orderform">
      <div class="orderbox">
        ${itemHtml}
      </div>
      <div class="p-option">
        <div class="optionbox button closeCart">
          <input type="button" value="結帳">
        </div>
      </div>
    </form>
  `;
}