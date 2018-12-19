<template>
  <div class="memorizing " style="height:100%;padding:0 4%;width:100%;box-sizing: border-box;">
    <p style='margin-bottom:5%;margin-top:8%;' class="title-intro">Voting rules:</p>
    <p>1. Voting Period: Each HPB coin can be used to cast one vote every 24 hours, which will be accounted for calculating the node's reward for that day. In order to qualify for the 1/3 blockreward allocation for elected BOE Nodes (specified in the Node Incentive section of the Node Plan) the node must receive at least one vote.</p>
    <p>2. Vote source: Eligible amount of HPB coin for voting is captured with a random snapshot of the wallet balance of the previous day. The eligible amount for voting stays the same within the same round of voting and will not change if the balance in the wallet changes.</p>
    <p>3. Voting: Voting is done on the HPB Wallet App (download the wallet and see the Wallet User Manual for instructions). For user-friendliness of the automatic voting mechanism, votes can be automated based on a percentage allocation. The following scenarios apply: </p>
    <p>-  Additional funds added to the wallet are not automatically considered for voting, and need to be manually added to the automated voting mechanism</p>
    <p>-  If funds are less than originally specified, the voting allocation will use the percentage allocation based on the remaining funds (random snapshot)</p>
    <p>4.Vote Count: Votes received are used to calculate the blockreward for each round. Any votes received are cleared and reset to zero for the next round of voting on the next day.</p>
    <p>5.Vote Withdrawal: Withdrawing votes already submitted within the same round/ day of voting. Votes withdrawn within the same day/ round can be used to vote for other BOE nodes.</p>
  </div>
</template>
<style lang="scss"  >
.memorizing p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0.4rem;
    font-weight: 500;
    color: RGBA(13, 14, 16, 1);
    text-align: left;
    line-height: 0.37rem;
    letter-spacing: 1px;
    margin-bottom: 6%;
    font-family: "Helvetica Neue,Helvetica,Arial,sans-serif";
}
</style>
