<template>
  <div class="keystore " style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <p style='margin-bottom:5%;margin-top:8%;' class="title-intro">What is a keystore?</p>
    <p>The Keystore is an encrypted version of your private key in JSON format. It is a fancy version of your private key that is protected by a password of your choosing. When this Keystore is used in conjunction with a password it has the private key. It is safer than the private key because you need a password to access it. When you are creating your password make sure it is strong and not the same as your email, or other social media account passwords. This should be a new password that has a mixture of punctuations, letters and numbers. </p>
    <p>The Keystore on HPB Wallet is a string and not a JSON text file. If you want to import another wallet using a Keyfile you need to open and view it in a text editor. Then, copy and paste that to HPB Wallet under 'Keystore.' Do not alter any of the information in the text file. </p>
    <p style='word-break:break-all'>Here is an example of what a Keystore looks like: {"version":3,"id":"b7467fcb-3c8b-41be-bccf-73d43a08c1b7","address":"540f18196da5a533fa36577a81de55f0a2f4e751","Crypto":{"ciphertext":"78ed11b8b6bf29b00f52b42b8542df0e4a6ac078e626af7edcf885c3b68154a4","cipherparams":{"iv":"4516579601d96695fe30ace985a9066f"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"6276cfda7d40872352c801db5871e5a3368a8d0994cea39ed936760db78d1cdc","n":1024,"r":8,"p":1},"mac":"d889a5dc609c3f312a41394cc47640676d2612501a6f8c837ed55598158336db"}}
    </p>
    <p>Remember: Make sure you backup your Keystore regularly! If you remember your password you can backup your Keystore again. HPB Wallet cannot reset your password or retrieve your keystore. The keystore is only on your phone, you must keep it in a safe place outside of your phone. Make sure it is a place that only you can access. </p>
  </div>
</template>
<style lang="scss"  >
.keystore p {
    // word-break: break-all;
    font-size: 14px;
    font-family: "微软雅黑";
    line-height: 24px;
    margin-bottom: 0.4rem;
    font-weight: 500;
    color:RGBA(13, 14, 16, 1);
    text-align: left;
    line-height: 0.4rem;
    letter-spacing: 1px;
    margin-bottom: 6%;
}
</style>

