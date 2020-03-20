export default () => {
  return `
    <div class="bibibar_c">
      <ul>
        <li><img src="https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/logo.png" alt="" class="logo"></li>
        <li>
          <a href="#buynow" class="bluebtn">
            <img src="https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/bluebtn.png" alt="">
          </a>
        </li>
        <li>
          <a href="#addcart" class="greenbtn">
            <img src="https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/greenbtn.png" alt="">
          </a>
        </li>
        <li>
          <div class="shopcount"  onclick="window.location='#estimatedcost';">
            <span class="count_n">5</span>
          </div>
        </li>
        <li>
          <ul class="subbar">
            <li><a href="#">如何使用</a></li>
            <li><a href="#">費用試算</a></li>
            <li><a href="#">新手上路</a></li>
          </ul>
        </li>
      </ul>
    </div>
  `;
}