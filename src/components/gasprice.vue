<template>
  <div class="memorizing " style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <p style='margin-bottom:5%;margin-top:8%;' class="title-intro">什么是 GAS费用?</p>
    <p>在一个公有链上, 任何人都可以读写数据。读取数据是免费的, 但是向公有链中写数据时需要花费一定费用的, 这种开销有助于阻止垃圾内容, 并通过支付保护其安全性。 网络上的高性能节点(每个包含账本拷贝的连接设备被称作节点) 都可以参与记账，通过收取GAS费用的方式来保护网络。由于记账需要计算能力和电费, 所以高性能节点的服务需要得到一定的报酬, 这也是高性能节点收益的由来。</p>
    <p>高性能节点会优先打包 gas 合理，gas price 高的交易。如果用户交易时所支付的GAS费非常低, 那么这笔交易可能不会被节点打包, 从而造成交易失败。</p>
    <p>HPB钱包 的交易费用 (也是HPB的交易费用) = gas 数量 * gas price (gas 单价, 以hpb计价)</p>
  </div>
</template>
<style lang="scss"  >
.memorizing p {
    font-size: 14px;
    font-family: "微软雅黑";
    line-height: 24px;
    margin-bottom: 0.4rem;
    font-weight: 500;
    color:RGBA(13, 14, 16, 1);
    text-align: left;
    line-height: 0.37rem;
    letter-spacing: 1px;
    margin-bottom: 6%;
}
</style>
