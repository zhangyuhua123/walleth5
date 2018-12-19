<template>
  <div class="privates" style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <article class="post-content mobile">
      <div class="divider top"></div>
      <main class="rhythm">
        <p style="margin-bottom:5%;margin-top:8%;">备份助记词</p>
        <p>HPB Wallet 推荐新手小白用户备份助记词, 关于助记词的重要性以及注意事项</p>
        <ul>
          <li>点击 ”我” -&gt; 管理钱包 -&gt; 选择你需要备份的钱包</li>
        </ul>
        <p><img src="../assets/images/ch-1.png" alt="file"></p>
        <ul>
          <li>点击 ”备份助记词” -&gt; 输入密码</li>
        </ul>
        <p><img src="../assets/images/ch-2.png" alt="file"></p>
        <p>
          <strong>注: 该密码是用来得到助记词的密码, 是你创建该钱包的密码, 也是</strong>交易密码
          <strong>, 但是助记词本身是不需要密码就可以进行转账交易的, 如果你不明白其中的逻辑</strong>
        </p>
        <ul>
          <li>准备好一张纸和笔, 按照顺序认真抄写下助记词, 确保字迹干净清晰。当然为了防止这张纸丢失, 你应该多抄写几份, 放在不同的地方, 以备不时之需。</li>
        </ul>
        <p><img src="../assets/images/3.png" alt="file"></p>
        <ul>
          <li>
            <strong>将刚刚抄写下的助记词, 重新导入 HPB Wallet, 看看生成的钱包地址是不是目标钱包地址, 以验证备份准确无误。</strong>
          </li>
        </ul>
        <p>
          <strong>注意: 抄写助记词的时候应该确保周围没有他人以及摄像头, 一旦助记词泄露, 由于区块链具有匿名性, 哪怕是你认为身边最亲近的人盗取, 也无从得知, 而且一旦被盗, 资产将无法追回!</strong>
        </p>
        <p style="margin-bottom:5%;margin-top:8%;">导出 Keystore</p>
        <ul>
          <li>点击 ”我” -&gt; 管理钱包 -&gt; 选择你需要备份的钱包</li>
        </ul>
        <p><img src="../assets/images/ch-1.png" alt="file"></p>
        <ul>
          <li>点击 “导出 Keystore” -&gt; 输入密码</li>
        </ul>
        <p><img src="../assets/images/ch-2.png" alt="file"></p>
        <ul>
          <li>可以选择 ”复制 Keystore” 也可以选择显示 ”二维码”, 以供其他设备扫描</li>
        </ul>
        <p><img src="../assets/images/ch-4.png" alt="file"></p>

      </main>
    </article>
  </div>
</template>
<style lang="scss"  >
h1 {
    color: RGBA(13, 14, 16, 1);
    font-size: 16px;
}
ul li{
  list-style: none;
  color: RGBA(13, 14, 16, 1);
  font-size: 14px;
}
p {
    font-size: 14px;
    font-family: "微软雅黑";
    line-height: 24px;
    margin-bottom: 6%;
    color: RGBA(13, 14, 16, 1);
}
.rhythm p img,
.rhythm figure img {
    display: block;
    margin: 24px auto 1em;
}
.rhythm img {
    max-width: 100%;
    height: auto;
}
img {
    border-style: none;
    vertical-align: middle;
}
</style>
<script>
// export default {
//     // data() {
//     // }
// };
</script>
