<template>
  <div class="helpconcat">
    <div>
      <div v-for='(item,index) in arrbtn' :key='index' style="padding: 0 10px;">
        <mt-header :class="{myheader:isMyheader}">
          <router-link to="/" slot="left">
            <mt-button>{{item.title}}</mt-button>
          </router-link>
          <mt-button icon="" slot="right" >
            <a :href="item.address">{{item.count}}</a>
          </mt-button>
        </mt-header>
      </div>
    </div>
    <div>
      <div v-for='(item,index) in arrbtn2' :key='index' style="padding: 0 10px;">
        <mt-header :class="{myheader:isMyheader}">
          <router-link to="/" slot="left">
            <mt-button>{{item.title}}</mt-button>
          </router-link>
          <mt-button icon="" slot="right" >
            <a :href="item.address">{{item.count}}</a>
          </mt-button>
        </mt-header>
      </div>
    </div>
    <div>
      <div v-for='(item,index) in arrbtn3' :key='index' style="padding: 0 10px;">
        <mt-header :class="{myheader:isMyheader}">
          <router-link to="/" slot="left">
            <mt-button>{{item.title}}</mt-button>
          </router-link>
          <mt-button icon="" slot="right" >
            <a :href="item.address">{{item.count}}</a>
          </mt-button>
        </mt-header>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.helpconcat{
  background:RGBA(255, 255, 255, 1)
}

.helpconcat > div {
    margin: 0;
    // border-radius: 10px;
    // background: rgba(46, 47, 71, 1);
    // border: 1px solid rgba(46, 47, 71, 1);
    font-family: "PingFangSC";
}
.helpconcat .myheader {
    height: 0.9rem;
    font-size: 15px;
    line-height: 0.42rem;
    background:RGBA(255, 255, 255, 1);
    padding: 0 0.3rem;
    border-bottom: 1px solid RGBA(232, 234, 247, 1)
}
.helpconcat .is-left > a {
    color: RGBA(46, 47, 71, 1);
    font-weight: normal;
}
.helpconcat .mint-button-text a {
    color: RGBA(74, 95, 226, 1);
}
</style>
<script>
export default {
    data() {
        return {
            value: "",
            isMyheader:true,
            isSearch: true,
            isButton: true,
            topStatus: "",
             arrbtn: [
                { title: "HPB Global", count: "https://t.me/hpbglobal",address:"https://t.me/hpbglobal"},
                { title: "HPB Fans", count: "https://t.me/hpbfans",address:"https://t.me/hpbfans" },
                { title: "Facebook", count: "HPB Blockchain",address:"https://www.facebook.com/HPBGlobal/"},
            ],
            arrbtn2:[
              { title: "Twitter", count: "@HPB_Global",address:"https://twitter.com/HPB_Global"},
              { title: "Reddit", count: " r/HPB_Global",address:"https://www.reddit.com/r/HPB_Global/"},
              { title: "In", count: "HPB Blockchain",address:"https://www.linkedin.com/company/high-performance-blockchain/"},
            ],
            arrbtn3:[
               { title: "HPB Website", count: "www.hpb.io",address:"https://www.hpb.io"},
               { title: "Github", count: "hpb-project",address:"https://github.com/hpb-project" }
            ],
            title: "",
          content: ""
        };
    },
};
</script>
