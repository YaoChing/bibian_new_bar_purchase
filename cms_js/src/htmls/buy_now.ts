export default () => {
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
                <img src="https://image.biccamera.com/img/00000006355924_A01.jpg" alt="">
              </div>
              <div class="p-text">
                <h2>GR-Q23FGNGL冰箱LG SIGNITURE銀色[4門/左右對開門型/676L]《基本裝機費安排》</h2>
                <p>
                  家電現在對藝術作品進化了。
                  LG SIGNATURE本來應該有家電的到極限追求那個本質和價值，不要的要素切掉，真地對家電需要的性能和使用方便，
                  是把設計美以最尖端的技術換成形狀的LG的高級名牌。
                  是翻新正因為是綜合家電廠商才完成的傳統的家電的想法的那樣的特別的產品。
                </p>
                <div class="introgroup">
                  <select id="count" name="count">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <div class="price">
                    JPY <span class="redcolor">15,290</span>
                  </div>
                </div>
              </div>
            </div>
            <h2>選項</h2>
            <div class="p-option">
              <div class="optionbox">
                <label for="option1" name="oplabel">選擇一</label>
                <input type="radio" id="inlineRadio1" value="o1" name="option1">
                <label for="inlineRadio1">這是選擇一</label>
                <input type="radio" id="inlineRadio2" value="o2" name="option1">
                <label for="inlineRadio2">這是選擇二</label>
              </div>
              <div class="optionbox">
                <label for="option2" name="oplabel">選擇二</label>
                <select id="option2" name="count">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div class="optionbox">
                <label for="note" name="oplabel">備註</label>
                <input type="text" id="note" placeholder="請註明商品尺碼、顏色、種類等資訊">
              </div>
              <div class="optionbox button">
                <input type="button" value="加入購物車" onclick="window.location='#addcart';">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}