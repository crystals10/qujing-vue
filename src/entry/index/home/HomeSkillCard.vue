<template>
  <transition name='card-fade'>
    <div id="home-skill-card-item">
      <div class="avatar-wrap">
        <mu-avatar class="mu-avatar-back" :src='data.avatar' :size='46' />
        <p class="name txt-primary">{{data.userName}}</p>
        <p class='txt-center txt-primary'>{{data.userScore}}分</p>
      </div>
      <div class="skill-card-content">
        <p class="header">{{data.skillTitle}}</p>
        <!-- <p class='info-item'>
          <mu-icon value='perm_identity'></mu-icon><span>{{data.nickname}}</span>
        </p> -->
        <p class='info-item'>
          <mu-icon value='person_pin_circle'></mu-icon><span>{{data.userTitle}}</span>
        </p>
        <p class='info-item'>
          <mu-icon value='loyalty'></mu-icon><span>{{data.tagName}}</span>
        </p>
        <p class='info-item'>
          <mu-icon value='bookmark_border'></mu-icon><span>{{data.skillOrderTimes || 0}}人想见</span>
        </p>
        <p class='info-item'>
          <mu-icon value='attach_money'></mu-icon><span>{{data.totalPrice}}元/{{data.totalTime}}小时</span>
        </p>
        <mu-flat-button label='查看详情' :to="'/detail/'+ data.userId + '/' + data.skillId" class='detail' labelClass='detail-label'/>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "skill-card",
  data: function data() {
    return {}
  },
  props: ['data']
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
.card-fade-enter-active, .card-fade-leave-active {
  transition: all .5s ease;
  bottom: 0;
  opacity: 1;
}
.card-fade-enter, .card-fade-leave-active {
  opacity: 0;
  bottom: -40px;
}
#home-skill-card-item{
  margin: 10px auto;
  background-color: #fff;
  padding:10px;
  position: relative;
  border-radius: 4px;
  padding-left: 70px;
  position: relative;
  box-shadow: 3px 3px 6px #ddd,
              -3px -3px 6px #ddd;
  &:first-child{
    margin-top: 0;
  }
  &:before{
    content: '';
    height:16px;
    width:16px;
    border-radius: 50%;
    background-color: $background-color;
    position: absolute;
    top:-8px;
    left:62px;
    box-shadow: inset 0 -3px 6px #ddd;
  }
  &:after{
    content: '';
    height:16px;
    width:16px;
    border-radius: 50%;
    background-color: $background-color;
    position: absolute;
    bottom:-8px;
    left:62px;
    box-shadow: inset 3px 0px 6px #ddd;
  }
  .avatar-wrap{
    position: absolute;
    top:10px;
    left:10px;
    width:46px;
    .mu-avatar-back{
      border-radius: 50%;
      background-color: #ededed;
    }
    p{
      margin-bottom: 6px;
    }
    .name{
      margin-top: 6px;
      font-size: 13px;
      // font-weight: bold;
      text-align: center;
    }
  }
  .skill-card-content{
    border-left: 1px dashed $primary-color;
    padding-left: 10px;
    position: relative;
    .header{
      letter-spacing: 0px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .info-item{
      height: 22px;
      line-height: 22px;
      .mu-icon{
        vertical-align: middle;
        font-size: 14px;
        color: #999;
        padding-right: 4px;
      }
      span{
        display: inline-block;
        vertical-align: middle;
        font-size: 13px;
        color: #666;
      }
      .em{
        color: $primary-color;
        font-weight: bold;
      }
    }
    .detail{
      height:26px;
      line-height: 26px;
      position: absolute;
      bottom:-4px;
      right:0;
      min-width: 60px;
      .detail-label{
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
