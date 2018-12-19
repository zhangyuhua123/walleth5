<template>
     <div class="memorizing " style="height:100%;padding-left:7%;width:90%;">
       <h1 style="text-align:center;font-size:24px;line-height:1.3;margin-bottom:1rem;margin-top:0.8rem;font-weight:normal">What is a mnemonic?</h1>
       <p>The mnemonic is used to derive multiple private keys. It is a unique wallet phrase that gives you a human readable format of words to backup your wallet for recovery. It is typically a phrase that allows you to access an infinite number of accounts. At its purest form it is a patter of letters, words or associations that help you remember the information easily. It is used by Ledger, TREZOR, MetaMask, Jaxx and others.</p>
       <p>The accounts you can access with this phrase are determined by the "path." HPB allows for you to import a wallet using the mnemonic from different paths. However, you cannot export a private key on HPB.</p>
       <p>Here is an example of what it should look like: scissors invite lock maple supreme raw rapid void congress muscle digital elegant little brisk hair mango congress clump</p>
       <p>Remember: We do not save your wallet password and mnemonic in our server, once forgotten, it cannot be recovered.</p>
     </div>
</template>
<style lang="scss"  >
p{
  font-size: 14px;
  font-family: "微软雅黑";
  line-height: 24px;
  margin-bottom: 0.4rem;
  color:#000
}
</style>

<script>
export default {
  data(){
    return {
      value:'',
      isSearch:true,
      isButton:true

    }
  }
};
</script>
