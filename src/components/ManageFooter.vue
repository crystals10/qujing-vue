<template>
  <div id="manager-footer">
    <ul class="links">
        <li class="link-item"><a href="#" target="_blank">用户协议</a></li>
        <li class="link-item"><a href="mailto:cmm@bingyan.net" target="_blank">用户反馈</a></li>
        <li class="link-item"><a href="http://www.bingyan.net" target="_blank">关于我们</a></li>
        <li class="link-item"><p class="copyright">Copyright © 2017 Zijin. All Rights Reserved.</p></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "manager-footer",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
#manager-footer{
  background-color: #FFF;
  padding: 24px 0;
  min-width: 1100px;
  .links{
    font-size: 12px;
    list-style: none;
    text-align: center;
    .link-item{
      display: inline-block;
      vertical-align: middle;
      padding: 0 1em;
      line-height: 1em;
      border-left: 1px solid #d9dadc;
      &:first-child{
        border-left: none;
      }
      a{
        color: inherit;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
