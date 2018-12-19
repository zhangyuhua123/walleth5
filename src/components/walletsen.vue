<template>
  <div class="privates" style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <article class="post-content mobile">
      <div class="divider top"></div>
      <main class="rhythm">
        <p style='margin-bottom:5%;margin-top:8%;'>Wallet User Guide</p>
        <p>You are required to backup your mnemonic phrase whenever you create a new wallet. Please write down your mnemonic phrase on paper in right order and secure them in a safe place.</p>
        <p>1.Click on ‘Manage Wallet’ on the ‘Me’. page, select the wallet you need to backup
          <img src="../assets/images/1-en.png" alt="file"></p>
        <p>2.Click “Backup Mnemonic”-&gt;input password
          <img src="../assets/images/2-en.png" alt="file"></p>
        <p>Note: The password is same as the one used to create the wallet. The mnemonic phrase is important for recovering your wallet or resetting your wallet passwords. Write them down on paper and secure it in a safe place.</p>
        <!-- <p>3.Prepare a piece of paper and pen,then write it down carefully,in order to prevent the paper get lost,you’d better write more than one piece.</p>
        <p>4.In order to make sure the mnemonic that you backup is correct,you’d better import mnemonic again to verify.</p>
        <p>note:you should keep the enviroment is safe when you are backup wallet,because once the mnemonic was leaked,everybody can steal your asset and cannot find it back. -->
          <img src="../assets/images/3-en.png" alt="file"></p>
        <p style='margin-bottom:5%;margin-top:8%;color:#fff;'>Backup keystore</p>
        <p>1.Click on ‘Manage Wallet’ under the ‘Me’ tab and select the wallet you wish to export from the list.</p>
        <p><img src="../assets/images/1-en.png" alt="file"></p>
        <p>2.Select ‘Export Keystore’ and enter your password
          <img src="../assets/images/2-en.png" alt="file"></p>
        <p>3.Click ‘Got it’ to close the pop-up window and then click on ‘Copy Keystore’ at the bottom of the page. Alternatively, you may select'QR Code'and click on'Show QR code'to scan.</p>
        <p><img src="../assets/images/4-en.png" alt="file"></p>
      </main>
    </article>
  </div>
</template>
<style lang="scss"  >
h1 {
    color: RGBA(13, 14, 16, 1);
     font-size: 16px;
}
ul li {
    list-style: none;
    color: RGBA(13, 14, 16, 1);
    font-size: 14px;
}
p {
    font-size: 14px;
    font-family: "Helvetica Neue,Helvetica,Arial,sans-serif";
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
export default {
    data() {}
};
</script>
