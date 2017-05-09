<template>
  <div id="manage">
    <div class="manage-back-fixed">
      <div class="manage-back-fixed-inner">
        <div class="iphone-wrap iphone-wrap-1">
          <img class='img-back' src="../../assets/iPhone6.png" alt="">
          <img class="img-front" src="../../assets/display_1.jpeg" alt="">
        </div>
        <div class="iphone-wrap iphone-wrap-2">
          <img class='img-back' src="../../assets/iPhone6.png" alt="">
          <img class="img-front" src="../../assets/display_2.jpeg" alt="">
        </div>
        <p class="name">取经，高校内的技能经验有偿分享平台</p>
        <div class="slogan-wrap">
          <mu-flat-button class='slogan-button' label='申请接入' />
          <mu-flat-button class='slogan-button' label='直接登录' />
        </div>
      </div>
    </div>
    <div class="intro-wrap">
      <div class="intro-inner-wrap">
        <div class="intro-item">
          <div class="intro-word">
            <mu-avatar icon='group' class="intro-icon-wrap" iconClass='intro-icon' :size='100'/>
            <p class='title'>行家指路</p>
            <p class="detail">在『有趣然而无用』大行其道的当下<br>取经所促成的每一次经验交谈<br>都明确指向『有用』</p>
          </div>
        </div>
        <div class="intro-item">
          <div class="intro-word">
            <mu-avatar icon='attach_money' class="intro-icon-wrap" iconClass='intro-icon'  :size='100'/>
            <p class='title'>省却人情</p>
            <p class="detail">「付费」是一件严肃且不低俗的事情<br>它会让双方都认真对待这次约见<br>且付费是唯一的负担</p>
          </div>
        </div>
        <div class="intro-item">
          <div class="intro-word">
            <mu-avatar icon='place'class="intro-icon-wrap" iconClass='intro-icon' :size='100'/>
            <p class='title'>按需服务</p>
            <p class="detail">行家与约见者面对面交谈<br>当面解决疑惑的同时<br>还可以后续跟进</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mp-wrap">
      <mu-raised-button labelClass='label' label='申请开通您学校的取经分站' primary/>
    </div>
    <div class="footer">
      <ul class="links">
          <li class="link-item"><a href="#" target="_blank">用户协议</a></li>
          <li class="link-item"><a href="mailto:cmm@bingyan.net" target="_blank">用户反馈</a></li>
          <li class="link-item"><a href="http://www.bingyan.net" target="_blank">关于我们</a></li>
          <li class="link-item"><p class="copyright">Copyright © 2017 Zijin. All Rights Reserved.</p></li>
      </ul>
  </div>
  </div>
</template>
<script>
export default {
  name: "manage",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import '../../scss/_variables.scss';
#manage{
  .manage-back-fixed{
    height: 600px;
    background:url(../../assets/manage_back.jpg) center center #fff;
    background-size: cover;
    overflow: hidden;
    .manage-back-fixed-inner{
      width:1100px;
      margin: auto;
      height:600px;
      position: relative;
    }
    .iphone-wrap{
      position: absolute;
      width:344px;
      &.iphone-wrap-1{
        left:120px;
        bottom:-200px;
        transform: scale(0.9);
      }
      &.iphone-wrap-2{
        z-index: 1;
        left: -100px;
        bottom: -240px;
        transform: scale(0.8);
      }
      .img-front{
        border-radius: 4px;
        top:86px;
        left:46px;
        position: absolute;
        width:253px;
      }
    }
    .name{
      position: absolute;
      top:80px;
      font-size: 30px;
      color: #fff;
      left: 0;
      right:0;
      text-align: center;
    }
    .slogan-wrap{
      position: absolute;
      right:220px;
      top:300px;
      width:400px;
      .slogan-button{
        margin-right: 40px;
        width:120px;
        color: #fff;
        border: 1px solid #fff;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
  .intro-wrap{
    background-color: #FFF;
    .intro-inner-wrap{
      width:1100px;
      margin: 0 auto;
      padding: 40px 0;
      text-align: center;
    }
    .intro-item{
      padding: 20px;
      width: 300px;
      margin-right: 40px;
      display: inline-block;
      border-radius: 4px;
      text-align: center;
      position: relative;
      &:last-child{
        margin-right: 0;
      }
      .intro-word{
        .title{
          font-size: 18px;
          margin-top: 10px;
        }
        .intro-icon-wrap{
          .intro-icon{
            font-size: 50px;
          }
          background-color: $primary-color;
        }
        .detail{
          margin-top: 10px;
          line-height: 1.6;
        }
      }
    }
  }
  .mp-wrap{
    border-top: 1px dashed #eee;
    border-bottom: 1px dashed #eee;
    padding:40px 0;
    background-color: #fff;
    text-align: center;
    .mu-raised-button{
      width:300px;
      height: 44px;
      line-height: 44px;
      border-radius: 22px;
      .label{
        font-size: 16px;
      }
    }
  }
  .footer{
    background-color: #FFF;
    padding: 24px 0;
    min-width: 1100px;
    .links{
      font-size: 12px;
      list-style: none;
      text-align: center;
      .link-item{
        display: inline-block;
        vertical-align: middle;
        padding: 0 1em;
        line-height: 1em;
        border-left: 1px solid #d9dadc;
        &:first-child{
          border-left: none;
        }
        a{
          color: inherit;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
}

</style>
