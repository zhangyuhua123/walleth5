<template>
  <div class="mnemonicen " style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <!-- <h1 style="">钱包备份常见问题以及钱包创建的常见问题</h1> -->
    <p style='margin-bottom:5%;margin-top:8%;' class="title-intro">What is a mnemonic?</p>
    <p>The mnemonic is used to derive multiple private keys. It is a unique wallet phrase that gives you a human readable format of words to backup your wallet for recovery. It is typically a phrase that allows you to access an infinite number of accounts. At its purest form it is a patter of letters, words or associations that help you remember the information easily. It is used by Ledger, TREZOR, MetaMask, Jaxx and others. </p>
    <p>The accounts you can access with this phrase are determined by the "path." HPB Wallet allows for you to import a wallet using the mnemonic from different paths. However, you cannot export a private key on HPB Wallet.</p>
    <p>Here is an example of what it should look like: scissors invite lock maple supreme raw rapid void congress muscle digital elegant little brisk hair mango congress clump</p>
    <p>Remember: We do not save your wallet password and mnemonic in our server, once forgotten, it cannot be recovered.</p>
  </div>
</template>
<style lang="scss"  >
.mnemonicen p {
    // word-break: break-all;
    margin-bottom:6%;
    font-size: 14px;
    font-family: "Helvetica Neue,Helvetica,Arial,sans-serif";
    line-height: 24px;
    margin-bottom: 0.4rem;
    font-weight: 500;
    color:RGBA(13, 14, 16, 1);
    text-align: left;
    line-height: 0.4rem;
    letter-spacing: 1px;
}
</style>

