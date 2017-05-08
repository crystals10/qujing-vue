<template>
  <div id="user">
    <div class="user-back">
      <mu-avatar src='http://www.muse-ui.org/images/uicon.jpg' class="avatar-wrap" :size='100' >
        <img src="../../../assets/vip.png" class='vip' alt="vip">
      </mu-avatar>
    </div>
    <div class="intro-wrap">
      <p class='name'>子衿</p>
      <p class="job">冰岩作坊前队长</p>
      <p class="other">
        <span class="other-item"> <span class="em">9</span>人见过</span>
        <span class="other-item"> <span class="em">20</span>人想过</span>
        <span class="other-item"> <span class="em">9.0</span>分</span>
      </p>
    </div>

    <div class="list-wrap">
      <mu-list>
        <mu-list-item class='list-item' title="个人信息">
          <mu-icon slot="left" value="account_circle"/>
        </mu-list-item>
        <mu-list-item href='/index.html' class='list-item' title="成为行家">
          <mu-icon slot="left" value="stars"/>
        </mu-list-item>
        <mu-list-item to='skill' class='list-item' title="技能管理">
          <mu-icon slot="left" value="book"/>
        </mu-list-item>
        <mu-list-item to='/message' class='list-item' title="约见管理">
          <mu-icon slot="left" value="email"/>
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-list-item class='list-item' title="如何使用取经">
          <mu-icon slot="left" value="help_outline"/>
        </mu-list-item>
        <mu-list-item to="/aboutus" class='list-item' title="关于我们">
          <mu-icon slot="left" value="place"/>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>
<script>
export default {
  name: "user",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#user{
  .user-back{
    height:140px;
    background: url('../../../assets/user_back.jpg') no-repeat center center #fff;
    background-size: cover;
    position: relative;
    .avatar-wrap{
      position: absolute;
      left:50%;
      bottom: -20px;
      transform: translateX(-50%);
      padding: 2px;
      border-radius: 50%;
      background-color: #fff;
      .vip{
        position: absolute;
        width:20px;
        height: 20px;
        top:0px;
        right: 10px;
        transform: rotateZ(30deg);
      }
    }
  }
  .intro-wrap{
    text-align: center;
    // border-bottom: 1px dashed #eee;
    background-color: #fff;
    padding-top: 20px;
    .name{
      font-size: 16px;
      font-weight: bold;
    }
    .job{
      font-size: 12px;
      color:#666;
    }
    .other{
      padding: 10px;
      .other-item{
        display: inline-block;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        color:#666;
        padding: 0 10px;
        border-right: 1px dashed #ddd;
        &:last-child{
          border-right: none;
        }
      }
      .em{
        color:$primary-color;
        font-weight: bolder;
      }
    }
  }
  .list-wrap{
    .mu-list{
      padding:0;
      margin-top: 10px;
      background-color: #fff;
    }
    .mu-item{
      padding-left: 46px;
      min-height: 50px;
      padding-top: 14px;
      padding-bottom: 14px;
      border-bottom: 1px solid #eee;
      .mu-icon{
        color:#999;
        font-size: 20px;
      }
      .mu-item-title{
        color: #666;
        font-size: 14px;
      }
    }
  }
}
</style>
