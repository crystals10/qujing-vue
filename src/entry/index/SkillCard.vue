<template>
  <div class="skill-card-item">
    <div class="avatar-wrap">
      <mu-avatar src='http://www.muse-ui.org/images/uicon.jpg' :size='46' ></mu-avatar>
      <p class="name">掐断</p>
    </div>
    <div class="skill-card-content">
      <p class="header">做一款互联网产品没有你想象中</p>
      <p class='info-item'>
        <mu-icon value='person_pin_circle'></mu-icon><span>冰岩作坊前队长</span>
      </p>
      <p class='info-item'>
        <mu-icon value='bookmark_border'></mu-icon><span>15人想见</span>
      </p>
      <p class='info-item'>
        <mu-icon value='attach_money'></mu-icon><span>80元/1小时</span>
      </p>
      <mu-flat-button label='查看详情' class='detail' labelClass='detail-label'/>
    </div>
  </div>
</template>
<script>
export default {
  name: "skill-card",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import '../../scss/_variables.scss';
.skill-card-item{
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width:96%;
  background-color: #fff;
  padding:10px;
  position: relative;
  border-radius: 4px;
  padding-left: 70px;
  &:last-child{
    margin-top: 0;
  }
  .avatar-wrap{
    position: absolute;
    top:10px;
    left:10px;
    width:46px;
    .name{
      font-size: 15px;
      font-weight: bold;
      text-align: center;
    }
  }
  .skill-card-content{
    border-left: 1px dashed #ddd;
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
        font-size: 16px;
        color: #666;
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
