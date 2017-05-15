<template>
  <div id="banner">
    <div class="banner-inner">
      <div class="slogan">
        <p class="big">行家指路</p>
        <p class="line"></p>
        <p class="big">省却人情</p>
        <p class="slogan-intro"> <span class='em'>取经</span> - 校内知识、技能共享平台 </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../scss/_variables.scss';
.banner-inner{
  height:220px;
  background: url('../../../assets/banner/banner.jpg') no-repeat center center;
  background-size: cover;
  .slogan{
    margin: auto;
    padding: 10px;
    text-align: center;
    width: 280px;
    position: relative;
    top: 40px;
    border-radius: 2px;
    background-color: rgba(#fff, 0.9);
    color:$purple-color;
    .big{
      font-size: 18px;
      color:$purple-color;
      font-weight: bold;
    }
    .em{
      font-weight: bolder;
    }
    .slogan-intro{
      margin-top: 10px;
    }
    .line{
      height:2px;
      font-size: 0;
      margin: auto;
      width: 76px;
      margin-top: 4px;
      margin-bottom: 4px;
      background-color: $purple-color;
    }
  }
}
</style>
