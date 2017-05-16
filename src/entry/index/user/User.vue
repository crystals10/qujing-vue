<template>
  <div id="user">
    <div class="user-back">
      <mu-avatar :src='m_self_info.avatar' class="avatar-wrap" :size='100' />
    </div>
    <div class="intro-wrap" v-if='m_current_is_login'>
      <p class='name'>{{m_self_info.nickname}}</p>
      <p class="job">{{m_self_info.grade}}级{{m_self_info.major}}</p>
      <p class="title" v-if='m_current_user_type !="m" && m_apply_info'>
        行家认证申请信息：{{m_apply_info.title}}-{{m_apply_info.name}}
      </p>
      <p class="title" v-if='m_apply_info.result == "0"'>
        行家认证状态： <span class="status">待审核</span>
      </p>
      <p class="title" v-if='m_apply_info.result == "2"'>
        行家认证状态： <span class="status">被拒绝</span>
      </p>
      <p class="title" v-if='m_apply_info.result == "2"'>
        原因如下： <span class="status">{{m_apply_info.rejectReason}}</span>
      </p>
      <p class="title" v-if='m_current_user_type =="m"'>
          <svg viewBox="0 0 20 20" class="vip-svg" aria-hidden="true">
            <g>
              <g fill="none" fill-rule="evenodd">
                <path d="M.64 11.39c1.068.895 1.808 2.733 1.66 4.113l.022-.196c-.147 1.384.856 2.4 2.24 2.278l-.198.016c1.387-.12 3.21.656 4.083 1.735l-.125-.154c.876 1.085 2.304 1.093 3.195.028l-.127.152c.895-1.068 2.733-1.808 4.113-1.66l-.198-.022c1.386.147 2.402-.856 2.28-2.238l.016.197c-.12-1.388.656-3.212 1.735-4.084l-.154.125c1.084-.876 1.093-2.304.028-3.195l.152.127c-1.068-.895-1.808-2.732-1.66-4.113l-.022.198c.147-1.386-.856-2.4-2.24-2.28l.198-.016c-1.387.122-3.21-.655-4.083-1.734l.125.153C10.802-.265 9.374-.274 8.483.79L8.61.64c-.895 1.068-2.733 1.808-4.113 1.662l.198.02c-1.386-.147-2.4.857-2.28 2.24L2.4 4.363c.12 1.387-.656 3.21-1.735 4.084l.154-.126C-.265 9.2-.274 10.626.79 11.517L.64 11.39z" fill="#7e57c2"></path>
                <path d="M7.78 13.728l-2.633-3s-.458-.704.242-1.36c.7-.658 1.327-.22 1.327-.22L8.67 11.28l4.696-4.93s.663-.35 1.3.197c.635.545.27 1.382.27 1.382s-3.467 3.857-5.377 5.78c-.98.93-1.78.018-1.78.018z" fill="#FFF"></path>
              </g>
            </g>
          </svg>
          行家认证信息：{{m_self_info.title}}-{{m_self_info.name}}</p>
      <p class="other" v-if='m_current_user_type == "m"'>
        <span class="other-item"> <span class="em">{{m_self_info.orderedTimes}}</span>人见过</span>
        <span class="other-item"> <span class="em">{{m_self_info.orderTimes}}</span>人想见</span>
        <span class="other-item"> <span class="em">{{m_self_info.score || '暂无评分'}}
           <template v-if='m_self_info.score'>分</template></span></span>
      </p>
    </div>
    <div v-else>
      <div class="intro-wrap">
        <mu-flat-button label='点此登录' @click='f_login' class='login-button' primary/>
      </div>
    </div>

    <div class="list-wrap">
      <mu-list>
        <mu-list-item @click='f_edit_info' class='list-item' title="修改信息">
          <mu-icon slot="left" value="account_circle"/>
        </mu-list-item>
        <mu-list-item v-if='m_current_user_type =="c"' href='/auth.html' class='list-item' title="认证行家">
          <mu-icon slot="left" value="stars"/>
        </mu-list-item>
        <!-- <mu-list-item v-if='m_current_user_type =="m"' class='list-item' title="重新认证">
          <mu-icon slot="left" value="stars"/>
        </mu-list-item> -->
        <!-- <mu-list-item href='/auth.html' class='list-item' title="修改认证信息"> -->
          <!-- <mu-icon slot="left" value="mode_edit"/>
        </mu-list-item> -->
        <mu-list-item to='skill' class='list-item' title="技能管理">
          <mu-icon slot="left" value="book"/>
        </mu-list-item>
        <mu-list-item to='/message' class='list-item' title="约见管理">
          <mu-icon slot="left" value="email"/>
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-list-item class='list-item' title="如何使用取经">
          <mu-icon slot="left" value="help_outline"/>
        </mu-list-item>
        <mu-list-item to="/aboutus" class='list-item' title="关于我们">
          <mu-icon slot="left" value="place"/>
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-list-item @click='f_open_dialog' v-if='m_current_is_login' class='list-item' title="退出登录">
          <mu-icon slot="left" value="blur_off"/>
        </mu-list-item>
      </mu-list>
    </div>

    <mu-dialog class="confirm-dialog" bodyClass='confirm-dialog-body' title="确定要退出登录吗？" titleClass="dialog-title" :open='m_dialog'>
      <mu-flat-button label="取消" slot="actions" @click='f_close_dialog' primary/>
      <mu-flat-button label="确定" slot="actions" @click='f_logout' primary/>
    </mu-dialog>
  </div>
</template>
<script>
export default {
  name: "user",
  data: function data() {
    return {
      m_dialog: false,
      m_self_info: {},
      m_apply_info: {}
    }
  },
  mounted () {
    this.f_init()
  },
  methods: {
    f_init () {
      this.is_login().then(function (data) {
        if (data.status == 'ok') {
          this.f_get_self_info()
          this.f_get_latest_apply_info()
        }
      })
    },
    f_login () {
      this.$showRegisterPanel(0, function () {
        this.f_init()
      }.bind(this))
    },
    f_get_self_info () {
      this.fetch_self_info().then(function (data) {
        this.m_self_info = data.result
      })
    },
    f_get_latest_apply_info(){
      this.get_latest_apply_info().then(function (data) {
        this.m_apply_info = data.result
      })
    },
    f_edit_info () {
      if (!this.m_current_is_login) {
        this.$warn('请先登录')
        return
      } else {
        this.$router.push('/info')
      }
    },
    f_logout () {
      this.logout().then(function (data) {
        if (data.status == 'unlogin' || data.status == 'ok') {
          this.$warn('退出登录成功')
          this.f_close_dialog()
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_close_dialog() {
      this.m_dialog = false
    },
    f_open_dialog() {
      this.m_dialog = true
    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#user{
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;
  .user-back{
    height:140px;
    background: url('../../../assets/user_back.jpg') no-repeat center center #fff;
    background-size: cover;
    position: relative;
    .avatar-wrap{
      position: absolute;
      left:50%;
      bottom: -20px;
      transform: translateX(-50%);
      padding: 2px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #eee;
    }
  }
  .intro-wrap{
    text-align: center;
    border-bottom: 1px dashed #eee;
    background-color: #fff;
    padding-top: 20px;
    padding-bottom: 10px;
    .login-button{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .name{
      font-size: 16px;
      font-weight: bold;
    }
    .job,.title{
      font-size: 12px;
      color:#666;
    }
    .title{
      height: 24px;
      line-height: 24px;
      vertical-align: middle;
      .vip-svg{
        height: 16px;
        width: 16px;
        display: inline-block;
        vertical-align: middle;
      }
      .status{
        color: $primary-color;
      }
    }
    .other{
      margin-top: 10px;
      .other-item{
        display: inline-block;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        color:#666;
        padding: 0 10px;
        border-right: 1px dashed #ddd;
        &:last-child{
          border-right: none;
        }
      }
      .em{
        color:$primary-color;
        font-weight: bolder;
      }
    }
  }
  .list-wrap{
    .mu-list{
      padding:0;
      margin-top: 10px;
      background-color: #fff;
    }
    .mu-item{
      padding-left: 46px;
      min-height: 46px;
      padding-top: 14px;
      padding-bottom: 14px;
      border-bottom: 1px solid #eee;
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
}
</style>
