<template>
  <div id="manage-nav">
    <mu-list>
      <p class='header'>用户管理</p>
      <mu-list-item class='list-item' title="新增用户" />
      <mu-list-item class='list-item' title="所有用户" />
    </mu-list>
    <mu-list>
      <p class='header'>约见管理</p>
      <mu-list-item class='list-item' title="已拒绝" />
      <mu-list-item class='list-item' title="待处理" />
      <mu-list-item class='list-item' title="已完成" />
      <mu-list-item class='list-item' title="进行中" />
    </mu-list>
    <mu-list>
      <p class='header'>行家管理</p>
      <mu-list-item class='list-item' title="待审核" />
      <mu-list-item class='list-item' title="已认证" />
      <mu-list-item class='list-item' title="已拒绝" />
    </mu-list>
    <mu-list>
      <p class='header'>账号设置</p>
      <mu-list-item class='list-item' title="账号安全" />
    </mu-list>
  </div>
</template>
<script>
export default {
  name: "manage-nav",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
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
</style>
