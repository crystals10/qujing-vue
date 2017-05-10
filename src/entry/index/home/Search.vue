<template>
  <div id="search">
    <mu-text-field icon='search' v-model='m_input' fullWidth hintText='搜索技能或行家' hintTextClass='hint-text' inputClass='search-input' underlineFocusClass='underline-focus' @change='f_search'>
    </mu-text-field>
  </div>
</template>
<script>
export default {
  name: "search",
  data: function data() {
    return {
      m_input:''
    }
  },
  methods: {
    f_search (value) {
      this.$emit('search', this.m_input)
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
