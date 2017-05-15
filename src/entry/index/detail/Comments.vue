<template>
  <div id="comments">
    <div class="comment-wrap">
      <p class="header">约见者评论
        <span class='tip' v-if='data.length > 0'>共 {{data.length}} 条评论</span>
      </p>
      <template v-if='data.length > 0'>
        <template v-for='(item, index) in data'>
          <div class="comment-item" :key='index'>
            <mu-avatar class='avatar' :src='item.avatar'></mu-avatar>
            <div class="comment-detail">
              <p class="comment-content-header"><span>{{item.nickName}}</span>·<span>{{item.createTime | timestampFormat}}</span></p>
              <p class="comment-content">{{item.content}}</p>
              <p class='tip'>约见过：<span class='em'>{{item.skillTitle}}</span></p>
            </div>
          </div>
        </template>
      </template>
      <template v-else>
        <p class='no-comments'>
          暂时没有评论🙊🙊🙊
        </p>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "comments",
  data: function data() {
    return {}
  },
  props:['data']
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#comments{
  .comment-wrap{
    border-top: 1px dashed #eee;
    padding:0px 20px;
    background-color: #fff;
    .header{
      font-size: 16px;
      font-weight: bold;
      padding: 6px 0;
      .tip{
        font-size: 13px;
        color: #666;
      }
    }
    .no-comments{
      padding: 15px;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .comment-item{
      padding-left: 50px;
      position: relative;
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px dashed #eee;
      min-height: 50px;
      .avatar{
        position: absolute;
        top: 8px;
        left:0;
      }
      .comment-content-header{
        font-weight: bold;
        line-height: 20px;
        height:20px;
      }
      .comment-detail{
        font-size: 13px;
        color: #666;
        text-align: justify;
        .comment-content{
          padding-bottom: 4px;
        }
        .tip{
          font-size: 12px;
          .em{
            color: $primary-color;
          }
        }
      }
    }
  }
}
</style>
