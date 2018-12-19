<template>
  <div class="privates" style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <p style='margin-bottom:5%;margin-top:8%;font-size: 14px;'>What is a private key?</p>
    <p style='word-break:break-all'>Every account is defined by a pair of keys: (1) a private key and (2) a public key. Each account has an address that is derived from the public key by using the last 20 bytes of information. The private key is the secret half of your address/public key. The private key consists of 64 hexadecimal characters that should look like this: 56f759ece75f0ab1b783893cbe390288978d4d4ff24dd233245b4285fcc31cf6. If you misspell any portion of the private key, you will be attempting to access a different wallet. Without your private key you cannot access your funds.</p>
    <p>The private key is an unencrypted private key, unlike the keystore which is encrypted.
    <strong>Anyone with access to your private key can control your wallet.</strong> If you do not have your private key you do not own your wallet. We advise you not keep your private key and simply use your mnemonic or keystore to keep your wallet secure. Since the keystore and mnemonic are encrypted they are safer than the private key. Remember: We do not save your password, once forgotten, it cannot be recovered.</p>
  </div>
</template>
<style lang="scss"  >
p {
    // word-break: break-all;
    font-size: 14px;
    font-family: "Helvetica Neue,Helvetica,Arial,sans-serif";
    line-height: 24px;
    margin-bottom: 6%;
    color:RGBA(13, 14, 16, 1);
}
</style>

<script>
export default {
    data() {
        return {
            value: "",
            isSearch: true,
            isButton: true
        };
    }
};
</script>
