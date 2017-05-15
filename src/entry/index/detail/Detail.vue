<template>
  <div id="detail">
    <div class="detail-back">
      <mu-avatar :src='m_user_info.avatar' class="avatar-wrap" :size='100' ></mu-avatar>
    </div>
    <div class="intro-wrap">
      <p class='name'>{{m_user_info.name}}</p>
      <p class="job">{{m_user_info.grade}}级{{m_user_info.major}}学生</p>
      <p class="title">
          <svg viewBox="0 0 20 20" class="vip-svg" aria-hidden="true">
            <g>
              <g fill="none" fill-rule="evenodd">
                <path d="M.64 11.39c1.068.895 1.808 2.733 1.66 4.113l.022-.196c-.147 1.384.856 2.4 2.24 2.278l-.198.016c1.387-.12 3.21.656 4.083 1.735l-.125-.154c.876 1.085 2.304 1.093 3.195.028l-.127.152c.895-1.068 2.733-1.808 4.113-1.66l-.198-.022c1.386.147 2.402-.856 2.28-2.238l.016.197c-.12-1.388.656-3.212 1.735-4.084l-.154.125c1.084-.876 1.093-2.304.028-3.195l.152.127c-1.068-.895-1.808-2.732-1.66-4.113l-.022.198c.147-1.386-.856-2.4-2.24-2.28l.198-.016c-1.387.122-3.21-.655-4.083-1.734l.125.153C10.802-.265 9.374-.274 8.483.79L8.61.64c-.895 1.068-2.733 1.808-4.113 1.662l.198.02c-1.386-.147-2.4.857-2.28 2.24L2.4 4.363c.12 1.387-.656 3.21-1.735 4.084l.154-.126C-.265 9.2-.274 10.626.79 11.517L.64 11.39z" fill="#7e57c2"></path>
                <path d="M7.78 13.728l-2.633-3s-.458-.704.242-1.36c.7-.658 1.327-.22 1.327-.22L8.67 11.28l4.696-4.93s.663-.35 1.3.197c.635.545.27 1.382.27 1.382s-3.467 3.857-5.377 5.78c-.98.93-1.78.018-1.78.018z" fill="#FFF"></path>
              </g>
            </g>
          </svg>
          行家认证信息：{{m_user_info.title}}</p>
      <p class="other">
        <span class="other-item"> <span class="em">{{m_user_info.orderTimes || 0}}</span>人见过</span>
        <span class="other-item"> <span class="em">{{m_user_info.orderedTimes || 0}}</span>人想见</span>
        <span class="other-item" v-if='m_user_info.score'> <span class="em" >{{m_user_info.score}}</span>分</span>
        <span class="other-item" v-if='!m_user_info.score'> <span class="em" >暂无评分</span></span>
      </p>
    </div>
    <div class="intro-detail">
      <p class="header">个人信息</p>
      <p class="intro-content">{{m_user_info.introduce}}</p>
    </div>

    <!-- 当前技能的详情 -->
    <div class="skill-wrap">
      <p class="header">技能详情</p>
      <div class="skill-item">
        <p class="skill-header">
          <span class='tag'>{{m_skill_info.tagName}}</span>
          <span class='title'>{{!m_skill_info.skill?'':m_skill_info.skill.title}}</span>
          <span class="em">{{!m_skill_info.skill?'':m_skill_info.skill.totalPrice}}￥/{{!m_skill_info.skill?'':m_skill_info.skill.totalTime}}h</span>
        </p>
        <p class="skill-content">{{!m_skill_info.skill?'':m_skill_info.skill.description}}</p>
      </div>
    </div>

    <!-- 该行家的其他技能 -->
    <div class="skill-wrap other-skill-wrap">
      <p class="header">该行家其他技能</p>
      <div class="skill-item" v-for='item in m_skills_others'>
        <p class="skill-header">
          <span class='tag'>{{item.tagName}}</span>
          <span class='title'>{{item.skill.title}}</span>
          <span class="em">{{item.skill.totalPrice}}￥/{{item.skill.totalTime}}h</span>
        </p>
        <p class="skill-content">{{item.skill.description}}</p>
      </div>
    </div>

    <!-- 用户所有技能的评论 -->
    <comments v-bind:data='m_user_comments' />
    <mu-float-button class="yue-button" @click='f_order' icon='add'></mu-float-button>
  </div>
</template>
<script>
import Comments from './Comments'
export default {
  name: "detail",
  data: function data() {
    return {
      m_user_id: '',
      m_skill_id: '',
      m_user_info: {},
      m_skill_info: {},
      m_skill_tagName: '',
      m_skills_others: [],
      m_user_comments: []
    }
  },
  mounted: function mounted() {
    this.m_skill_id = this.$route.params.skillId
    this.m_user_id = this.$route.params.userId
    this.f_get_user_info(this.m_user_id)
    this.f_get_skill_info(this.m_skill_id)
    this.f_get_user_comments(this.m_user_id)
    this.f_get_skill_except(this.m_user_id, this.m_skill_id)
  },
  methods: {
    f_get_user_info (userId) {
      this.fetch_user_info(userId).then(function (data) {
        this.m_user_info = data.result
      })
    },
    f_get_skill_info (skillId) {
      this.fetch_skill_info(skillId).then(function (data) {
        this.m_skill_info = data.result
        this.m_skill_tagName = data.result.tagName
      })
    },
    f_get_skill_except(userId, skillId){
      this.fetch_skill_list_except(userId, skillId).then(function (data) {
        this.m_skills_others = data.result
      })
    },
    f_get_user_comments (userId) {
      this.fetch_user_comments(userId).then(function (data) {
        this.m_user_comments = data.result
      })
    },
    f_order () {
      if (this.m_is_login) {
        this.$router.push('/order/' + this.m_user_id)
      } else {
        this.is_login().then(function (data) {
          if (data.status == 'unlogin') {
            this.$warn('请先登录', function () {
              this.$showRegisterPanel(0, function () {
                this.$router.push('/order/' + this.m_user_id)
              }.bind(this))
            }.bind(this), 500)
          } else {
            this.$router.push('/order/' + this.m_user_id)
          }
        })
      }
    }
  },
  components: {
    Comments
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#detail{
  padding-bottom: 10px;
  .detail-back{
    height:180px;
    background: url('../../../assets/detail_back.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
    background-color: #fff;
    .avatar-wrap{
      border: 1px solid #eee;
      position: absolute;
      left:50%;
      bottom: -20px;
      transform: translateX(-50%);
      padding: 2px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
  .intro-wrap{
    text-align: center;
    border-bottom: 1px dashed #eee;
    padding-top: 20px;
    background-color: #fff;
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
    }
    .other{
      padding: 10px;
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
  .intro-detail{
    padding:10px 20px;
    background-color: #fff;
    border-bottom: 1px dashed #eee;
    .header{
      font-size: 16px;
      font-weight: bold;
      padding: 6px 0;
    }
    .intro-content{
      text-align: justify;
      color: #666;
      font-size: 12px;
    }
  }
  .skill-wrap{
    background-color: #fff;
    padding:10px 20px;
    &.other-skill-wrap{
      border-top: 1px dashed #eee;
    }
    .header{
      font-size: 16px;
      font-weight: bold;
    }
    .skill-item{
      padding-top: 5px;
      padding-bottom: 5px;
      border-bottom: 1px dashed #ddd;
      &:first-child{
        padding-top: 0;
      }
      &:last-child{
        border-bottom: none;
      }
      .skill-header{
        position: relative;
        padding-right: 90px;
        padding-top: 10px;
        padding-bottom: 10px;
        .tag{
          font-size: 12px;
          padding: 0 2px;
          border: 1px solid $primary-color;
          color: $primary-color;
          border-radius: 4px;
          height: 18px;
          line-height:18px;
          display: inline-block;
        }
        .title{
          font-weight: bold;
        }
        .em{
          position: absolute;
          font-weight: bold;
          color: $primary-color;
          top:10px;
          right:0;
        }
      }
      .skill-content{
        text-align: justify;
        color: #666;
        font-size:12px;
      }
    }
  }
  .yue-button{
    position: fixed;
    bottom:70px;
    right:20px;
  }
}
</style>
