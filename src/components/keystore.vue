<template>
  <div class="keystore " style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <p style='margin-bottom:5%;margin-top:8%;' class="title-intro">什么是 Keystore文件?</p>
    <p>Keystore 文件是以太坊钱包存储私钥的一种文件格式 (JSON)。它使用用户自定义密码加密，以起到一定程度上的保护作用, 而保护的程度取决于用户加密该钱包的密码强度, 如果类似于 123456 这样的密码, 是极为不安全的。 在使用 Keystore 时有两点需要注意: 1. 使用不常用, 并且尽可能复杂的密码加密 Keystore 文件; 2. 一定要记住加密 Keystore 的密码, 一旦忘记密码, 那么你就失去了 Keystore 的使用权, 并且HPB Wallet无法帮你找回密码, 所以一定要妥善保管好 Keystore 以及密码。</p>
    <p>下面是 keystore 的样式: </p>
    <p style="word-break:break-all">{"version":3,"id":"b7467fcb-3c8b-41be-bccf-73d43a08c1b7","address":"540f18196da5a533fa36577 a81de55f0a2f4e751","Crypto":{"ciphertext":"78ed11b8b6bf29b00f52b42b8542df0e4a 6ac078e626af 7edcf885c3b68154a4","cipherparams":{"iv":"4516579601d96695fe30ace985a9066f"},"cipher":" aes -128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"6276cfda7d40872352c801db5871e5a 33 68a8 d0994cea39ed936760db78d1cdc", "n":1024,"r":8,"p":1},"mac":"d889a5dc609c3f312a41394c c47 640676d2612501a6f8c837ed5559815 8336db"}}
    </p>
  </div>
</template>
<style lang="scss"  >
.keystore p {
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
