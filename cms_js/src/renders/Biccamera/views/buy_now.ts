export interface ProductProps {
  id: string,
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

export default (props: ProductProps) => {
  console.log("buy now html in");

  let selectCountHtml = ``;
  let i = 1;

  while(i <= props.maxNum) {
    selectCountHtml += `<option value=${i}>${i}</option>`;
    i += 1;
  }

  let specHtml = ``;

  i = 0;
  let j = 1;

  while(i <= props.spec.length) {
    let value = props.spec[i];

    if(value) {
      specHtml += `
        <input type="radio" name="prodSpec" id="inlineRadio${j}" value="${value.prodID}" name="option${j}" ${(value.prodID === props.id) ? 'checked' : ''}>
        <label for="inlineRadio1">${value.prodSubName}</label>
      `;

      j += 1;
    }
    
    i += 1;
  }

  return `
    <div id="buynow" class="modal-window">
      <div class="modal-main">
        <a href="#" title="Close" class="modal-close">X</a>
        <div class="modal-header">
          <img src="https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/logo-computer.png" alt="" class="modal-logo">
        </div>
        <div class="modal-content">
          <h2>Biccamera 專用購物車</h2>
          <form>
            <div class="p-intro">
              <div class="p-image">
                <img src="${props.image}" alt="">
              </div>
              <div class="p-text">
                <h2>${props.name}</h2>
                <p>
                  ${(props.description1) ? props.description1 : props.description2}
                </p>
                <div class="introgroup">
                  <select id="count" name="count">
                    ${selectCountHtml}
                  </select>
                  <div class="price">
                    JPY <span class="redcolor">${props.discount}</span>
                  </div>
                </div>
              </div>
            </div>
            <h2>選項</h2>
            <div class="p-option">
              <div class="optionbox">
                <label for="option1" name="oplabel">選擇一</label>
                ${specHtml}
              </div>
              <div class="optionbox">
                <label for="note" name="oplabel">備註</label>
                <input type="text" id="note" placeholder="請註明商品尺碼、顏色、種類等資訊">
              </div>
              <div class="optionbox button addCart">
                <input type="button" value="加入購物車">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}