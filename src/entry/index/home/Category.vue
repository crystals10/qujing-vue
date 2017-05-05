<template>
  <div id="category">
    <mu-flexbox class="category-flexbox">
      <mu-flexbox-item class="flex-item">
        <mu-flat-button icon='music_note' to="/home/music" iconClass='category-icon' labelClass='category-label'  label='音乐'></mu-flat-button>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-item">
        <mu-flat-button icon='photo_camera' to="/home/photo" iconClass='category-icon' labelClass='category-label'  label='摄影'></mu-flat-button>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-item">
        <mu-flat-button icon='palette' to="/home/design" iconClass='category-icon' labelClass='category-label'  label='设计'></mu-flat-button>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-item">
        <mu-flat-button icon='airplanemode_active' to="/home/aboard" iconClass='category-icon' labelClass='category-label'  label='留学'></mu-flat-button>
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox class="category-flexbox">
      <mu-flexbox-item class="flex-item">
        <mu-flat-button icon='work' to="/home/work" iconClass='category-icon' labelClass='category-label'  label='工作'></mu-flat-button>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-item">
        <mu-flat-button icon='laptop' to="/home/net" iconClass='category-icon' labelClass='category-label' label='互联网'></mu-flat-button>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-item">
        <mu-flat-button icon='local_library' to="/home/study" iconClass='category-icon' labelClass='category-label'  label='学习'></mu-flat-button>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-item">
        <mu-flat-button icon='directions_bike' to="/home/fit" iconClass='category-icon' labelClass='category-label'  label='运动'></mu-flat-button>
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>
<script>
export default {
  name: "category",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#category{
  padding:10px;
  background-color: #fff;
  .category-flexbox{
    margin-top: 6px;
    &:first-child{
      margin-top: 0;
    }
  }
  .category-icon{
    color: #757575;
    margin-left: 0;
    font-size: 18px;
  }
  .category-label{
    padding-right: 2px;
    font-size: 13px;
  }
  .router-link-active{
    .category-icon{
      color: $primary-color;
    }
    .category-label{
      color: $primary-color;
    }
  }
}

</style>
