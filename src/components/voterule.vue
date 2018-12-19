<template>
  <div class="memorizing " style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <p style='margin-bottom:5%;margin-top:8%;color:#fff;' class="title-intro">投票规则：</p>
    <p>1 投票周期 </p>
    <p>在每个节点竞选周期（三个月）内，每24小时进行一次投票，该投票用于节点的奖励计算（增发Token的三分之一部分的分配，参考节点计划）</p>
    <p>2 票数统计 </p>
    <p>钱包系统在每一轮投票之前的24小时内，随机选取一个区块，根据该区块，确定系统每个账户的余额，该余额即为每个账户所拥有的票数，票数在本轮将会固定不变，不会因为账户的转入转出而发生变化。 </p>
    <p>3 投票 </p>
    <p>用户需打开钱包软件进行投票（可参考钱包使用说明）。用户投票后，系统将自动按照上一轮的投票数目，在本轮进行投票。 </p>
    <p>a 若本轮的票数比上一轮多，多出的票将不会自动投出，用户需要手动更改设置。</p>
    <p>b 若本轮的票数比上一轮少，则会根据上一轮的投票比例，自动投出。</p>
    <p>举例：第一轮票数为100票，分别向A B两个账户各投出50票。第二轮票数为80票，则自动向AB两个账户各投出40票。</p>
    <p>4 计票</p>
    <p>各个节点每一轮得到的票数，将用于计算下一轮的系统奖励，每一轮所得票数，将会在下一轮开始时自动清零</p>
    <p>举例：节点A本轮得到的票为50，系统总票数为1000;则下一轮中，1/3的新增Token中，将有50/1000为节点A的奖励。</p>
  </div>
</template>
<style lang="scss"  >
.memorizing p {
    font-size: 14px;
    font-family: "微软雅黑";
    line-height: 24px;
    margin-bottom: 0.4rem;
    font-weight: 500;
    color: RGBA(13, 14, 16, 1);
    text-align: left;
    line-height: 0.37rem;
    letter-spacing: 1px;
    margin-bottom: 6%;
}
</style>

<script>
export default {
    data() {
        return {};
    }
};
</script>
