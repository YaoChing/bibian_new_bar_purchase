export interface AmountProps {
  totalCost: string,
  productCost: string,
  productCostForCurrency: string,
  serviceCost: string,
  internalFee: string,
  internalFeeForCurrency: string,
  airFee: string
}

export default (props: AmountProps) => {
  return `
    <h2>預估費用</h2>
    <div class="totalcount">
      <div class="price">
        總費用<span class="dollar">TWD</span><span class="orderprice">${props.totalCost}</span>
      </div>
      <div class="otherprice">
        <div class="otherprice_area">
          <ul>
            <li>商品總價<span class="dollar">TWD</span><span class="subprice">${props.productCost}</span><span class="memoprice">(JPY ${props.productCostForCurrency})</span></li>
            <li>服務費<span class="dollar">TWD</span><span class="subprice">${props.serviceCost}</span></li>
            <li>國內運費<span class="dollar">TWD</span><span class="subprice">${props.internalFee}</span><span class="memoprice">(JPY ${props.internalFeeForCurrency})</span></li>
            <li>日本空運<span class="dollar">TWD</span><span class="subprice">${props.airFee}</span></li>
          </ul>
        </div>
      </div>
    </div>
  `;
}