import Vue from 'vue'
import Router from 'vue-router'
const home =()=>import('@/components/home')  //按钮页面
const services =()=>import('@/components/services') //服务条款
const servicesen =()=>import('@/components/servicesen')
const privates =()=>import('@/components/privates') //明文私钥
const privatesen =()=>import('@/components/privatesen') //明文私钥
const memorizing =()=>import('@/components/memorizing') //常见问题
const articles =()=>import('@/components/articles') //文章详情
const mnemonic =()=>import('@/components/mnemonic') //助记词
const mnemonicen =()=>import('@/components/mnemonicen')
const keystore =()=>import('@/components/keystore') //keystore
const keystoreen =()=>import('@/components/keystoreen')
const contact =()=>import('@/components/contact')
const contacten =()=>import('@/components/contacten')
const wallets =()=>import('@/components/wallets')
const walletsen =()=>import('@/components/walletsen')
const agreement =()=>import('@/components/agreement')
const agreementen =()=>import('@/components/agreementen')
const gasprice =()=>import('@/components/gasprice')
const gaspriceen =()=>import('@/components/gaspriceen')
const voterule =()=>import('@/components/voterule')
const voteruleen =()=>import('@/components/voteruleen')
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/wallet',
      redirect: '/wallet/articles',
    },
    {
      path: '/wallet/home',
      name: 'home',
      component: home
    },
    {
      path: '/wallet/gasprice',
      name: 'gasprice',
      component: gasprice
    },
    {
      path: '/wallet/gaspriceen',
      name: 'gaspriceen',
      component: gaspriceen
    },
    {
      path: '/wallet/contact',
      name: 'contact',
      component: contact
    },
    //voterule
    {
      path: '/wallet/voterule',
      name: 'voterule',
      component: voterule
    },
    {
      path: '/wallet/voteruleen',
      name: 'voteruleen',
      component: voteruleen
    },
    {
      path: '/wallet/contacten',
      name: 'contacten',
      component: contacten
    },

    {
      path: '/wallet/memorizing',
      name: 'memorizing',
      component: memorizing
    },
    {
      path: '/wallet/privates',
      name: 'privates',
      component: privates
    },
    {
      path: '/wallet/privatesen',
      name: 'privatesen',
      component: privatesen
    },
    {
      path: '/wallet/services',
      name: 'services',
      component:services
    },
    {
      path: '/wallet/servicesen',
      name: 'servicesen',
      component:servicesen
    },
    {
      path: '/wallet/articles',
      name: 'articles',
      component:articles,
      meta: {
        title:"文章详情",
        content: 'disable'
      }
    },
    {
      path: '/wallet/mnemonic',
      name: 'mnemonic',
      component:mnemonic
    },
    {
      path: '/wallet/mnemonicen',
      name: 'mnemonicen',
      component:mnemonicen
    },
    {
      path: '/wallet/keystore',
      name: 'keystore',
      component:keystore
    },
    {
      path: '/wallet/keystoreen',
      name: 'keystoreen',
      component:keystoreen
    },
    {
      path: '/wallet/wallets',
      name: 'wallets',
      component:wallets
    },
    {
      path: '/wallet/walletsen',
      name: 'walletsen',
      component:walletsen
    },
    {
      path: '/wallet/agreement',
      name: 'agreement',
      component:agreement
    },
    {
      path: '/wallet/agreementen',
      name: 'agreementen',
      component:agreementen
    }
  ]
})
