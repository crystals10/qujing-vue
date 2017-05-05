<template>
  <div id="message">
    <!-- <mu-appbar title="约见管理" class='appbar' titleClass="appbar-title"></mu-appbar> -->
    <mu-tabs class='message-tabs' :value="m_active_tab" @change="handleTabChange">
      <mu-tab value="tab1" title="约见我的"/>
      <mu-tab value="tab2" title="我约见的"/>
    </mu-tabs>
    <template v-if='m_active_tab == "tab1"'>
      <div class="card-wrap">
        <div class="card-item-1">
          <div class="top-section">
            <div class="extra-info">
              <p class='small'>message</p>
              <p>由取经快递发送</p>
            </div>
            <div class="top-line"></div>
            <div class="card-content">
              <p class="center em"><span class="name">子矜</span>  <span class="tip">想向您请教</span></p>
              <p class="em">两小时教你搭建『取经』这个网站包括后台如果很长呢</p>
              <p class="intro em"><span class="tip">这是他的描述：</span>我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。</p>
              <p class='time'>2017.03.03</p>
            </div>
            <div class="bottom-line"></div>
          </div>
          <div class="bottom-section">
            <div class="button-wrap">
              <mu-flat-button label='狠心拒绝' class='button' labelClass='button-label' primary />
              <mu-flat-button label='答应约见' class='button' labelClass='button-label' primary />
            </div>
            <div class="code-wrap">
                <p class='power-by'> POWERED BY BINGYAN STUDIO</p>
            </div>
          </div>
        </div>
        <div class="card-item-1">
          <div class="top-section">
            <div class="extra-info">
              <p class='small'>message</p>
              <p>由取经快递发送</p>
            </div>
            <div class="top-line"></div>
            <div class="card-content">
              <p class="center em"><span class="name">子矜</span>  <span class="tip">想向您请教</span></p>
              <p class="em">两小时教你搭建『取经』这个网站包括后台如果很长呢</p>
              <p class="intro em"><span class="tip">这是他的描述：</span>我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。</p>
              <p class='time'>2017.03.03</p>
            </div>
            <div class="bottom-line"></div>
          </div>
          <div class="bottom-section">
            <div class="button-wrap">
              <mu-flat-button label='狠心拒绝' class='button' labelClass='button-label' primary />
              <mu-flat-button label='答应约见' class='button' labelClass='button-label' primary />
            </div>
            <div class="code-wrap">
                <p class='power-by'> POWERED BY BINGYAN STUDIO</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if='m_active_tab == "tab2"'>
      <div class="card-item-2">
        <div class="top-section">
          <div class="extra-info">
            <p class='small'>message</p>
            <p>由取经快递发送</p>
          </div>
          <div class="top-line"></div>
          <div class="card-content">
            <p class="center em"><span class="name">子矜</span> <span class="action">拒绝了您</span> <span class="tip">想向您请教</span></p>
            <p class="em">两小时教你搭建『取经』这个网站包括后台如果很长呢</p>
            <p class="intro em"><span class="tip">这是他的描述：</span>我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。</p>
            <p class='time'>2017.03.03</p>
          </div>
          <div class="bottom-line"></div>
        </div>
        <div class="bottom-section">
          <div class="button-wrap">
            <mu-flat-button label='狠心拒绝' class='button' labelClass='button-label' primary />
            <mu-flat-button label='答应约见' class='button' labelClass='button-label' primary />
          </div>
          <div class="code-wrap">
              <p class='power-by'> POWERED BY BINGYAN STUDIO</p>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>
<script>
export default {
  name: "message",
  data: function data() {
    return {
      m_active_tab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.m_active_tab = val
    },
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#message{
  .appbar{
    height: 50px;
    .appbar-title{
      text-align: center;
      font-size: 16px;
    }
  }
  .message-tabs{
    margin: 0 auto 10px;
  }
  .card-wrap{
    padding: 10px 20px;
    .card-item-1{
      margin: 0 auto 20px;
      &:last-child{
        margin-bottom: 0;
      }
      .top-section{
        min-height: 60px;
        background-color: $primary-color;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        position: relative;
        .extra-info{
          width:140px;
          height:40px;
          position: absolute;
          top:0;
          left:50%;
          transform: translateX(-50%);
          background-color: #fff;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          text-align: center;
          .small{
            font-size: 12px;
            color: $primary-color;
          }
          p{
            font-size: 12px;
            color: $primary-color;
          }
        }
        .top-line{
          width: 90%;
          margin: auto;
          height: 50px;
          border-bottom: 1px dashed #fce118;
        }
        .card-content{
          padding: 10px 0;
          width:86%;
          margin: auto;
          .em{
            color: #fff;
            font-weight: bold;
            text-align: justify;
            margin-bottom: 6px;
          }
          .center{
            text-align: center;
          }
          .tip{
            color: #aaa;
            font-size: 13px;
          }
          .name{
            font-size: 16px;
          }
          .time{
            font-size: 12px;
            text-align: right;
            color: #fff;
          }
        }
        .bottom-line{
          width: 90%;
          height: 10px;
          margin: auto;
          border-top: 1px dashed #fce118;
        }
      }
      .bottom-section{
        min-height: 40px;
        position: relative;
        .button-wrap{
          text-align: center;
          padding:10px 0;
          background-color: #fff;
          .button{
            margin-right: 40px;
            &:last-child{
              margin-right: 0;
            }
          }
          .button-label{
            color: #fff;
            font-size: 12px;
            background-color: $primary-color;
          }
        }
        &:before{
          content: '';
          height:20px;
          width:20px;
          border-radius: 50%;
          background-color: $background-color;
          position: absolute;
          top:-10px;
          left:-10px;
        }
        &:after{
          content: '';
          height:20px;
          width:20px;
          border-radius: 50%;
          background-color: $background-color;
          position: absolute;
          top:-10px;
          right:-10px;
        }
        .code-wrap{
          padding:6px;
          background-color: #e0e0e0;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          font-style: italic;
          font-size: 12px;
          text-align: center;
          color: #aaa;
        }
      }
    }
  }
}
</style>
