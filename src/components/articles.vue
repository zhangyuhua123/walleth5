<template>
  <div class="articles" v-if='articleres!=""'>
    <h2 class="title">{{articleres.title}}</h2>
    <div class="author">
      <div class="left">
        <div class="right" v-if='articleres!=""'> {{articleres| actDateFormat}} {{from}} </div>
      </div>
      <span style="font-size:15px;color:RGBA(46, 47, 71, 1)">{{articleres.author}}</span>
    </div>
    <div class="bcg" v-if="articleres.images!=''">
      <img v-lazy="articleres.images" style="height:100%;width:100%">
    </div>
    <div class="articleslist">
      <div v-html='articleres.content' class="limit"></div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/css/articles";
.articles {
    font-size: 14px;
}
ul,
ol {
    list-style: none;
}
.articles .limit img {
    width: 100% !important;
    margin-bottom: 0.2rem;
}
.title {
    font-weight: 500;
    margin-top: 0.4rem;
    font-size: 24px;
    font-weight: 500
}
.articles .right {
    margin-right: 10px;
}
</style>
<script>
var moment = require("moment");
moment().format();
import { formatDate } from "../assets/js/date";
import { GetQueryString } from "../assets/js/util";
import service from "../assets/js/service";
export default {
    name: "articles",
    data() {
        return {
            value: "",
            isSearch: true,
            isButton: true,
            articleres: "",
            language:0,
            from:''

        };
    },
    // watch:{
    //   value:function(articleres){
    //     console.log('ssssss',articleres.languageType)

    //   }
    // },
    filters: {
        actDateFormat(articleres) {
          // console.log('lan======',articleres)

            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var halfamonth = day * 15;
            var month = day * 30;
            var now = new Date().getTime();
            var diffValue = now - articleres.publishTime;
            if (diffValue < 0) {
                return;
            }
            var monthC = diffValue / month;
            var weekC = diffValue / (7 * day);
            var dayC = diffValue / day;
            var hourC = diffValue / hour;
            var minC = diffValue / minute;
            if(articleres.languageType===0){
                if (monthC >= 1) {
                  return  parseInt(monthC) + "月前 来自";
              } else if (weekC >= 1) {
                return  parseInt(weekC) + "周前  来自";
              } else if (dayC >= 1) {
                return  parseInt(dayC) + "天前  来自";
              } else if (hourC >= 1) {
                return parseInt(hourC) + "小时前  来自";
              } else if (minC >= 1) {

                return parseInt(minC) + "分钟前  来自";
              } else
              return '刚刚 来自';
            }else{

                if (monthC >= 1) {
                  return  parseInt(monthC) + " month ago from";
              } else if (weekC >= 1) {
                return  parseInt(weekC) + " week ago from";
              } else if (dayC >= 1) {
                return  parseInt(dayC) + " day ago from";
              } else if (hourC >= 1) {
                return parseInt(hourC) + " h ago from";
              } else if (minC >= 1) {
                return parseInt(minC) + " min ago from";
              } else
              return 'just now from';
              }
        }
    },
    mounted() {
        GetQueryString("?");
        var id = GetQueryString("?")
        this.$http({
            method: "post",
            url: this.service.BASE_URL + "HpbComponent/cms/content",
            data: [id]
        })
            .then(res => {
                if (res.data[1] == "成功") {
                    this.articleres = res.data[2];
                }
            })
            .catch(err => {
                console.log(err);
            });


    }
};
</script>
