 <template>
     <div class="memorizing " style="height:100%;padding: 0 0.24rem;"  >
       <!-- <h1 style="text-align:center;font-size:18px;line-height:1.3;margin-bottom:0.5rem;margin-top:0.8rem;font-weight:500;color:rgba(255,255,255,0.8)">什么是助记词?</h1> -->
       <p style='margin-bottom:8%;margin-top:8%;color:#fff;font-size:18px;'>{{title}}</p>
       <p style='margin-bottom:8%;' v-html="content" class="limit"></p>
       <!-- <p style='margin-bottom:8%;'>PS: 用户可以使用备份的助记词, 重新导入 HPB , 用新的密码生成一个新的 Keystore, 用这种方法来修改钱包密码。</p> -->
     </div>
</template>
<style lang="scss"  >
p{
  font-size: 14px;
  font-family: "微软雅黑";
  line-height: 24px;
  margin-bottom: 0.4rem;
  font-weight: 500;
  text-align: left;
  line-height: 0.5rem;
  letter-spacing: 1px
 }
.memorizing .limit img{
 width: 100%!important;
}
</style>
<script>
export default {
  data(){
    return {
      value:'',
      isSearch:true,
      isButton:true,
      content:'',
      title:''
    }
  },
  mounted(){
    this.articleobj = this.$route.params;
    this.content = this.$route.params.content;
    this.title = this.$route.params.title
  }
};
</script>
