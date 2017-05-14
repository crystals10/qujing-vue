<template>
  <div id="manage-nav">
    <mu-list>
      <p class='header'>管理</p>
      <mu-list-item to='/userManage'  class='list-item' title="用户管理" />
      <mu-list-item to='/majorManage' class='list-item' title="行家管理" />
      <mu-list-item to='/applyManage' class='list-item' title="行家认证" />
    </mu-list>
    <mu-list>
      <p class='header'>数据分析</p>
      <mu-list-item to='/accessAnalysis' class='list-item' title="技能分析" />
      <mu-list-item to='/userAnalysis' class='list-item' title="用户分析" />
      <mu-list-item to='/orderAnalysis' class='list-item' title="约见分析" />
      <mu-list-item to='/majorAnalysis' class='list-item' title="行家分析" />
    </mu-list>
    <mu-list>
      <p class='header'>高级设置</p>
      <mu-list-item to='/accountSetting' class='list-item' title="账号设置" />
    </mu-list>
  </div>
</template>
<script>
export default {
  name: "manage-nav",
  data: function data() {
    return {}
  }
}
</script>
<style lang="scss">
@import '../../scss/_variables.scss';
#manage-nav{
  .mu-list{
    border-bottom: 1px solid #eee;
    .header{
      font-size: 16px;
      height: 44px;
      line-height: 44px;
      padding-left: 20px;
      color: #444;
    }
  }
  .mu-item{
    padding-left: 46px;
    min-height: 36px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 50px;
  }
  .mu-icon{
    color:#999;
    font-size: 20px;
  }
  .mu-item-title{
    color: #666;
    font-size: 14px;
  }
  .router-link-active{
    background-color: rgba($primary-color, 0.7);
    .mu-item-title{
      color: #fff;
    }
  }
}
</style>
