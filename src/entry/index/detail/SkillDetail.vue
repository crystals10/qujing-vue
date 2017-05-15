<template>
  <div class="skill-detail-item">
    <p class="skill-header">
      <span class='tag'>{{tagName}}</span>
      <span class='title'>{{data.title}}</span>
      <span class="em">{{data.totalPrice}}￥/{{data.totalTime}}h</span>
    </p>
    <p class="skill-content">{{data.description}}</p>
    <p class="skill-works" v-if='data.works'><a :href="data.works" target="_blank">点此查看该技能相应作品</a></p>
  </div>
</template>
<script>
export default {
  name: "skill-detail",
  data: function data() {
    return {}
  },
  props:['data', 'tagName']
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
.skill-detail-item{
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px dashed #eee;
  &:last-child{
    border-bottom: none;
  }
  .skill-header{
    position: relative;
    padding-right: 90px;
    padding-top: 10px;
    padding-bottom: 10px;
    .tag{
      font-size: 12px;
      padding: 0 2px;
      border: 1px solid $primary-color;
      color: $primary-color;
      border-radius: 4px;
      height: 18px;
      line-height:18px;
      display: inline-block;
    }
    .title{
      font-weight: bold;
    }
    .em{
      position: absolute;
      font-weight: bold;
      color: $primary-color;
      top:10px;
      right:0;
    }
  }
  .skill-content{
    text-align: justify;
    color: #666;
    font-size:12px;
  }
  .skill-works{
    text-align: right;
    font-size: 12px;
  }
}
</style>
