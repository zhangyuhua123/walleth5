<template>
  <div class="helpconcat">
    <div style="margin-top:0.8rem">
      <div v-for='(item,index) in arrbtn' :key='index' >
        <mt-header :class="{myheader:isMyheader}">
          <router-link to="/contact" slot="left" disabled>
            <mt-button>{{item.title}}</mt-button>
          </router-link>
          <mt-button icon="" slot="right">
            <a :href="item.address">{{item.count}}</a>
          </mt-button>
        </mt-header>
      </div>
    </div>
    <div>
      <div v-for='(item,index) in arrbtn2' :key='index' >
        <mt-header :class="{myheader:isMyheader}">
          <router-link to="/contact" slot="left" disabled>
            <mt-button>{{item.title}}</mt-button>
          </router-link>
          <mt-button icon="" slot="right">
            <a>{{item.count}}</a>
          </mt-button>
        </mt-header>
      </div>
    </div>
  </div>
</template>
<style lang="scss"  >
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
            isMyheader: true,
            isSearch: true,
            isButton: true,
            topStatus: "",
            arrbtn: [
                {
                    title: "电报群",
                    count: "https://t.me/hpbfans",
                    address: "https://t.me/hpbfans"
                },
                {
                    title: "新浪微博",
                    count: "@芯链",
                    address: "https://weibo.com/xinlianorg"
                },
                {

                    title: "官网",
                    count: "www.hpb.io",
                    address: "https://www.hpb.io"
                }
            ],
            arrbtn2: [
                {
                    title: "微信公众号",
                    count: "XinLianOrg",
                    address:
                        "https://mp.weixin.qq.com/profile?src=3&timestamp=1535957431&ver=1&signature=yEGP4V1FxAHpJrVu4LJo26*SYYTqekmQg3TDq34pSwpsciSzqE1KAhYtmUlqj4UGOrEHlJaHUYvASXjGPlCjFw=="
                }
            ],
            title: "",
            content: ""
        };
    },
    methods: {}
};
</script>
