export default () => {
  return `
    <div id="addcart" class="modal-window">
      <div class="modal-main">
        <a href="#" title="Close" class="modal-close">X</a>
        <div class="modal-header">
          <img src="https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/logo-computer.png" alt="" class="modal-logo">
        </div>
        <div class="modal-content">
          <h2 class="light">商品已加入購物車</h2>
          <form>
            <div class="p-option">
              <div class="optionbox button">
                <input type="button" value="確認結帳" onclick="window.location='#estimatedcost';">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}