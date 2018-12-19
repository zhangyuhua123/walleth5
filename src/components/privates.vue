<template>
     <div class="privates" style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
       <p style="margin-bottom:5%;margin-top:8%;">什么是明文私钥?</p>
       <p>我们常说, 你对钱包中资金的控制取决于相应私钥的所有权和控制权。在区块链交易中, 私钥用于生成支付货币所必须的签名, 以证明资金的所有权。私钥必须始终保持机密, 因为一旦泄露给第三方, 相当于该私钥保护下的资产也拱手相让了。它不同于Keystore, Keystore 是加密过后的私钥文件, 只要密码强度足够强, 即使黑客得到 Keystore, 破解难度也足够大。</p>
       <p>存储在用户钱包中的私钥完全独立, 可由用户的钱包软件生成并管理, 无需区块链或者网络连接。用户的钱包地址由公钥经过 keccak256 计算，截取后 40 位 + 0x 得到的。 私钥的样式为 64 位 16 进制的哈希值字符串,
       <p style='word-break:break-all'> 例如: 56f759ece75f0ab1b783893cbe390288978d4d4ff24dd233245b4285fcc31cf6</p>
       <p>PS: 用户可以使用明文私钥导入 HPB Wallet , 用新的密码生成一个新的 Keystore (记得要将旧的 Keystore 删除), 用这种方法来修改钱包密码。</p>
     </div>
</template>
<style lang="scss"  >
.privates h1{
  color:#fff;
}
.privates p{
  font-size: 14px;
  font-family: "微软雅黑";
  line-height: 24px;
  margin-bottom: 6%;
  color:RGBA(13, 14, 16, 1)
}
</style>

