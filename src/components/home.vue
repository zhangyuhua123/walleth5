<template>
  <div class="help">
     <mt-loadmore>
      <div class="help-footer">
        <mt-button size="large" :class="{help_button:isButton}" @click="btn(item.title,item.content)" v-for='(item,index) in arrbtn' :key='index' >{{item.title}}<i class="mint-cell-allow-right" style='font-size:20px'></i></mt-button>
      </div>
     </mt-loadmore>
  </div>
</template>
<style lang="scss"  >
@import '../assets/css/help';
</style>
<script>
import services from '../assets/js/service'
import {GetQueryString} from "../assets/js/util"
export default {
  data(){
    return {
      value:'',
      isSearch:true,
      isButton:true,
      topStatus: '',
      arrbtn:{},
      title:'',
      content:''
    }
  },
    mounted(){
       GetQueryString('?')
       var id = GetQueryString('?');
       console.log('id',id)
       this.$http({
        method: 'post',
        url: this.service.BASE_URL+'HpbComponent/cms/question',
        data:['1',id]
     }).then((res)=>{
       var arr = res.data[2].list
       this.arrbtn = arr
     })
     .catch((err)=>{
       console.log(err)
     })
    },
  methods:{
    btn(title,content){
         this.title = title;
         this.content = content
      this.$router.push({name: 'memorizing',params:{
        content:this.content,
        title:this.title
      }});
    },
    loadTop(){
    }
  }
};
</script>
