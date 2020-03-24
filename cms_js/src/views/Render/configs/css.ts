export const itemStyle = () => {
  return `
    @charset "UTF-8";
    .tempcontent {
      margin: 0px auto;
      background: #ffffff; 
    }

    .tempcontent .head {
      background-image: url(https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/topbg.png);
      margin: 0px auto;
      text-align: center; 
    }

    .tempcontent .content {
      width: 1200px;
      margin: 0px auto;
      padding-top: 1px; 
    }
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0; 
    }
    
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield; 
    }
    
    .lightcolor {
      color: blue; 
    }

    .bibibar {
      position: fixed;
      bottom: 15px;
      width: 100%;
      margin: 0px auto;
      text-align: center; 
      z-index: 999;
    }
    
    .bibibar .bibibar_c {
      width: 950px;
      margin: 0px auto;
      position: relative;
      background: #ffda45;
      padding: 10px 10px;
      left: 0px;
      right: 0px;
      box-shadow: 0px 0px 4px #000; 
    }
    
    .bibibar .bibibar_c ul {
      list-style: none;
      margin: 0px;
      padding: 0px;
      display: table; 
    }
    
    .bibibar .bibibar_c ul li {
      list-style: none;
      margin: 0px;
      padding: 0px;
      display: inline;
      vertical-align: middle;
      padding: 0px 5px; 
    }
    
    .bibibar .bibibar_c ul li img {
      vertical-align: middle; 
    }
    
    .bibibar .bibibar_c ul li a {
      text-decoration: none;
      font-size: 12px; 
    }
    
    .bibibar .bibibar_c ul li div.shopcount {
      background: url(https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/carticon.png) bottom center;
      width: 40px;
      height: 35px;
      display: inline-block;
      background-repeat: no-repeat;
      cursor: pointer; 
    }
    
    .bibibar .bibibar_c ul li div.shopcount span.count_n {
      font-size: 18px;
      text-align: center;
      font-family: sans-serif;
      padding-left: 5px; 
    }
    
    .bibibar .bibibar_c ul li .logo {
      text-align: left;
      width: 350px;
      padding-right: 3px; 
    }
    
    .bibibar .bibibar_c ul li ul.subbar {
      background: #ffffff;
      display: inline-block;
      padding: 10px 20px 10px 20px;
      margin-left: 13px;
      line-height: 15px;
      border-radius: 5px; 
    }
    
    .bibibar .bibibar_c ul li ul.subbar li {
      vertical-align: middle; 
    }
    
    .bibibar .modal-window {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.6);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s; 
    }
    
    .bibibar .modal-window:target {
      visibility: visible;
      opacity: 1;
      pointer-events: auto; 
    }
    
    .bibibar .modal-window > div.modal-main {
      width: 700px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 15px;
      background: #ffffff;
      border-radius: 8px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-header {
      border-bottom: 1px solid #ececec;
      text-align: left; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-header .modal-logo {
      width: 350px;
      padding: 10px 0px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content {
      position: relative; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content h2 {
      padding: 0;
      margin: 0;
      text-align: left;
      font-family: '微軟正黑體';
      font-weight: normal;
      padding: 15px 0px;
      font-size: 17px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content h2.light {
      background: #edffe8;
      padding: 20px 20px;
      color: #0a7512;
      font-weight: 900;
      margin: 20px 0px;
      border-radius: 10px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content:after {
      content: "";
      display: table;
      clear: both; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .p-intro {
      border-top: 1px solid #ececec;
      border-bottom: 1px solid #ececec;
      font-family: '微軟正黑體';
      height: 250px;
      display: inline-block; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .p-intro .p-image {
      width: 250px;
      float: left;
      position: relative;
      text-align: left;
      height: 250px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .p-intro .p-image img {
      width: 250px;
      height: 250px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .p-intro .p-text {
      width: 450px;
      float: right;
      vertical-align: top;
      position: relative;
      height: 250px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .p-intro .p-text h2 {
      padding: 0;
      margin: 0;
      text-align: left;
      font-size: 18px;
      font-weight: 800;
      padding: 10px 20px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .p-intro .p-text p {
      text-align: left;
      padding: 0;
      margin: 0;
      padding: 0px 20px;
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .introgroup {
      margin: 15px 0px;
      height: 10px;
      position: relative;
      top: 70px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .introgroup select[name=count] {
      padding: 3px 7px;
      width: 70px;
      background: #f7fff8;
      font-size: 20px;
      text-align: left;
      position: absolute;
      left: 20px;
      border: 1px solid #ececec;
      border-radius: 5px;
      bottom: -6px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .introgroup .price {
      position: absolute;
      right: 20px;
      line-height: 1;
      bottom: 0px;
      font-size: 20px;
      font-weight: 900; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .introgroup .price span.redcolor {
      color: #f00; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option {
      text-align: left; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox {
      padding: 10px;
      border-top: 1px solid #ececec;
      border-left: 1px solid #ececec;
      border-right: 1px solid #ececec;
      position: relative; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox label[name=oplabel] {
      font-size: 14px;
      width: 60px;
      display: inline-block;
      padding: 0px 10px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox select {
      width: 250px;
      padding: 5px 0px;
      font-size: 14px;
      background: #f7fff8; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox input[type=text],
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox input[type=password], .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox input[type=number] {
      padding: 5px 0px;
      background: #ffffff;
      outline: none;
      border: 1px solid #ececec;
      padding: 6px 10px;
      font-size: 14px;
      width: 550px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox input[type=text]#receiveaddress {
      width: 380px !important; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox input[type=text]#receivecode {
      width: 40px !important; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox.button {
      position: relative;
      border-right: none;
      border-left: none;
      height: 40px;
      text-align: right; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form .p-option div.optionbox.button input[type=button] {
      width: 250px;
      position: relative;
      padding: 10px 0px;
      font-size: 13px;
      right: 0px;
      background: #a9ffb4;
      border: 1px solid #4dd85f;
      outline: none;
      border-radius: 5px;
      color: #026d0f; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount {
      height: 105px;
      position: relative;
      top: 0px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount span.dollar {
      font-size: 10px;
      padding: 0px 5px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount span.orderprice {
      font-size: 2em;
      color: #d00000;
      vertical-align: top;
      font-family: sans-serif;
      font-weight: normal; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount span.memoprice {
      font-size: 12px;
      display: inline-block; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount span.subprice {
      color: #d00000;
      font-size: 18px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount .price {
      width: 280px;
      line-height: 90px;
      height: 90px;
      text-align: center;
      vertical-align: middle;
      float: left;
      position: relative;
      border: 1px solid #ececec;
      font-size: 15px;
      font-family: '微軟正黑體';
      font-weight: bold; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount .otherprice {
      border: 1px solid #ececec;
      width: 400px;
      height: 90px;
      float: right;
      position: relative; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount .otherprice .otherprice_area {
      text-align: left; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount .otherprice .otherprice_area ul {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 380px;
      transform: translate(-50%, -50%); 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount .otherprice .otherprice_area ul li {
      font-size: 10px;
      display: inline-block;
      padding: 8px 0px;
      line-height: 15px;
      font-size: 15px;
      font-family: '微軟正黑體';
      font-weight: bold; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount .otherprice .otherprice_area ul li:nth-child(odd) {
      width: 230px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .totalcount:after {
      content: "";
      display: table;
      clear: both; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content ul {
      margin: 0px;
      padding: 0px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content ul li {
      list-style: none; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .orderbox {
      height: 350px;
      overflow-y: scroll; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform label[name=oplabel] {
      width: 80px !important; }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro {
      height: 200px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .p-image {
      width: 200px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .p-image img {
      width: 200px;
      height: 200px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .p-text {
      width: 480px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .p-text .introgroup {
      top: 30px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .goodinfo {
      position: absolute;
      left: 20px;
      bottom: 0px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .goodinfo input[type="button"] {
      background: none;
      outline: none;
      margin: 0px;
      padding: 0px;
      border: none;
      background-image: url(https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/images/caret-square-down-regular.svg);
      width: 25px;
      height: 20px;
      background-position: center center;
      background-repeat: no-repeat;
      cursor: pointer;
      position: relative;
      top: 3px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .goodinfo .ordermemo {
      background: #000;
      color: #ffffff;
      display: inline-block;
      position: absolute;
      padding: 7px 10px;
      line-height: 14px;
      display: none;
      top: 30px;
      z-index: 99;
      left: -8px;
      width: 150px;
      border-radius: 5px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .goodinfo .ordermemo ul li {
      line-height: 17px;
      font-size: 14px;
      text-align: left; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .goodinfo .ordermemo:before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 7px 5px;
      border-color: transparent transparent #000000 transparent;
      position: absolute;
      top: -6px;
      left: 0;
      right: 0;
      margin: 0px auto;
      text-align: center; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .goodinfo input:focus + div.ordermemo {
      display: block; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content form.orderform .p-intro .deleteicon {
      width: 17px;
      position: absolute;
      right: 10px;
      top: -160px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .loginform {
      width: 350px;
      float: left; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .loginform .optionbox {
      border: none !important;
      padding: 5px 10px !important; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .loginform .optionbox input[type=text],
    .bibibar .modal-window > div.modal-main .modal-content .loginform .optionbox input[type=password], .bibibar .modal-window > div.modal-main .modal-content .loginform .optionbox input[type=number] {
      width: 305px !important; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .loginform .optionbox.button.login input[type=button] {
      display: block;
      margin: 0px auto;
      background: #ffda45;
      color: #000000;
      border: none;
      outline: none;
      padding: 10px 0px !important;
      width: 100% !important;
      border-radius: 5px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content a.subtext {
      text-align: center;
      font-size: 12px; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content a.subtext.signup {
      background: #0090eb;
      border-radius: 5px;
      display: inline-block;
      width: 320px;
      padding: 10px 0px;
      color: #ffffff;
      text-decoration: none; 
    }
    
    .bibibar .modal-window > div.modal-main .modal-content .divider {
      height: 100%;
      width: 1px;
      background: #ececec;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: 0px auto;
      text-align: center;
      left: 0;
      right: 0; 
    }

    .modal-close {
      color: #aaa;
      line-height: 50px;
      font-size: 20px;
      position: absolute;
      right: 0;
      font-family: monospace, sans-serif;
      text-align: center;
      top: 0;
      width: 50px;
      text-decoration: none; 
    }

    .modal-close:hover {
      color: black; 
    }
  `
}