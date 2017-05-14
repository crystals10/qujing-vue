<template>
  <div id="user-manage" class="manage-wrap">
     <div class="manage-header">
       <span class="title">用户管理</span>
       <span class='tip'>（对本站所有用户的管理）</span>
       <div class="search-wrap">
         <mu-text-field icon='search' fullWidth hintText='搜索用户昵称' hintTextClass='hint-text' inputClass='search-input' underlineFocusClass='underline-focus'>
         </mu-text-field>
       </div>
     </div>
     <div class="manage-content">
      <div class="content-left">
      </div>
      <div class="content-right">
      </div>
     </div>
  </div>
</template>
<script>
export default {
  name: "user-manage",
  data: function data() {
    return {

    }
  },
  props:[],
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
@import "../manage.scss";
</style>
