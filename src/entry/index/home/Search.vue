<template>
  <div id="search">
    <mu-text-field icon='search' fullWidth hintText='搜索技能或行家' hintTextClass='hint-text' inputClass='search-input' underlineFocusClass='underline-focus'>
    </mu-text-field>
  </div>
</template>
<script>
export default {
  name: "search",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#search{
  background-color: #fff;
  padding-right:20px;
  margin-top: 5px;
  .hint-text{
    font-size: 12px;
  }
  .search-input{
    font-size: 13px;
    color: $primary-color;
  }
  .underline-focus{
    height: 1px;
  }
}
</style>
