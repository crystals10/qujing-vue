<template>
  <div id="app">
    <banner></banner>
    <mu-list class="school-list">
      <p class='header'>选择你想查看的取经分站：</p>
      <template v-for='item,index in m_sub_list'>
        <mu-list-item class="school-item" :href='"/#/home?token=" + item.token' :title="item.schoolName">
          <mu-icon value="send" slot="right"/>
        </mu-list-item>
      </template>
    </mu-list>
    <div class="apply-wrap">
      <mu-raised-button to='open' label='申请开通您学校的取经分站' primary />
    </div>
  </div>
</template>

<script>
import Banner from './Banner'
export default {
  name: 'app',
  data () {
    return {
      m_sub_list: []
    }
  },
  mounted() {
    this.get_sub_list().then(function (data) {
      if (data.status == 'ok') {
        this.m_sub_list = data.result
      } else {
        this.$warn(data.message)
      }
    })
  },
  methods: {

  },
  components: {
    Banner
  }
}
</script>
<style lang="scss">
@import '../../scss/_variables.scss';
#app {
  .school-list{
    background-color: #fff;
    padding: 0;
    margin-top: 10px;
    .header{
      height:50px;
      line-height: 50px;
      font-size: 16px;
      padding-left: 10px;
      color: $primary-color;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
    }
    .school-item{
      border-bottom: 1px solid #eee;
    }
    .mu-item{
      min-height: 40px;
      padding-top: 15px;
      padding-bottom: 15px;
      font-size: 14px;
      .mu-item-title{
        font-size: 14px;
        color: #666;
      }
      .mu-icon{
        font-size: 18px;
        color: #999;
      }
    }
  }
  .apply-wrap{
    margin-top: 20px;
    text-align: center;
    .mu-raised-button {
      border-radius: 40px;
      line-height: 44px;
      height: 44px;
      width: 240px;
    }
  }
}
</style>
