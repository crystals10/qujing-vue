<template>
  <div id="major-manage" class="manage-wrap">
     <div class="manage-header">
       <span class="title">行家管理</span>
       <span class='tip'>（对本站所有行家的管理）</span>
       <div class="search-wrap">
         <mu-text-field icon='search' fullWidth hintText='搜索用户昵称' hintTextClass='hint-text' inputClass='search-input' underlineFocusClass='underline-focus'>
         </mu-text-field>
       </div>
     </div>
     <div class="manage-content">
      <div class="content-left">
        <div class="manage-table-wrap">
          <div class="filter-wrap">
            <div class="filter-item">
              <mu-radio label="在线的行家" name="type" nativeValue="m" @change='f_get_user_list' v-model='m_user_type' class="filter-radio"/>
              <mu-radio label="已下架的行家" name="type" nativeValue="m_c" @change='f_get_user_list' v-model='m_user_type' class="filter-radio"/>
            </div>
          </div>
          <mu-table class="manage-table" :fixedHeader=true :enableSelectAll=true  :multiSelectable=true :selectable=true :showCheckbox=true :height="m_tbody_height" @rowClick='f_select_row'>
            <div class='loading-wrap'  v-show='m_loading_user_list'>
              <img src="../../../assets/loading.svg" class="loading-svg">
              <p class='loading-word'>正在加载信息</p>
            </div>
            <div class='tip-wrap'  v-show='!m_loading_user_list && m_user_list.length == 0'>
              <mu-icon value='pets' :size='80' />
              <p class='loading-word'>暂无信息</p>
            </div>
           <mu-thead slot="header" class='manage-thead'>
             <mu-tr>
               <mu-th tooltip="昵称">昵称</mu-th>
               <mu-th tooltip="真实姓名">真实姓名</mu-th>
               <mu-th tooltip="注册时间">注册时间</mu-th>
               <mu-th tooltip="状态">操作</mu-th>
             </mu-tr>
           </mu-thead>
           <mu-tbody class='manage-tbody'>
             <template v-if='m_user_list.length != 0'>
               <mu-tr v-for='item,index in m_user_list' :key='index'>
                 <mu-td>{{item.nickname}}</mu-td>
                 <mu-td>{{item.name}}</mu-td>
                 <mu-td>{{item.createTime | timestampFormat}}</mu-td>
                 <mu-td>
                   <template v-if='item.type=="m"'>
                     <mu-flat-button label="下架该行家" secondary/>
                   </template>
                   <template v-else-if='item.status==0'>
                     <mu-flat-button label="重新上架该行家" primary/>
                   </template>
                 </mu-td>
               </mu-tr>
             </template>
           </mu-tbody>
           <mu-tfoot slot="footer" class='manage-tfoot'>
             <mu-tr>
               <mu-td>
                <mu-flat-button label="批量下架" secondary/>
                <mu-flat-button label="批量上架" primary/>
               </mu-td>
             </mu-tr>
           </mu-tfoot>
         </mu-table>
        </div>
      </div>
      <div class="content-right">
        <div class="info-wrap">
          <p class='info-header'>用户信息</p>

          <div class='loading-wrap'  v-show='m_loading_user_info'>
            <img src="../../../assets/loading.svg" class="loading-svg">
            <p class='loading-word'>正在加载信息</p>
          </div>

          <div class='tip-wrap'  v-show='!m_loading_user_info && m_user_list.length == 0'>
            <mu-icon value='pets' :size='80' />
            <p class='loading-word'>暂无信息</p>
          </div>
          <!-- 用户基本信息 -->
          <div class="info-wrap-item" v-if='m_user_info'>
            <p class='header-wrap'><span class="header-title">基本信息</span></p>
            <p class='single-line-p'>
              <span class='label'>用户头像：</span>
              <img :src="m_user_info.user.avatar" class="avatar" alt="">
            </p>
            <p class='single-line-p'>
              <span class='label'>用户昵称：</span>
              <span class='content'>{{m_user_info.user.nickname}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>用户类型：</span>
              <span class='content'>{{m_user_info.user.type=="c"?'普通用户':(m_user_info.user.type=="m"?'行家':已下架的行家)}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>用户状态：</span>
              <span class='content'>{{m_user_info.user.status=="1"?'正常用户':'黑名单用户'}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>入学年份：</span>
              <span class="content">{{m_user_info.user.grade}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>专业院系：</span>
              <span class="content">{{m_user_info.user.major}}</span>
            </p>
            <!-- <p class='single-line-p'><span class='label'>约&nbsp;见&nbsp;过：</span>10人</p> -->
            <p class='single-line-p'><span class='label'>学&nbsp;生&nbsp;证：</span>
              <img src="../../../assets/id.png" alt="">
            </p>
          </div>

          <!-- 行家认证信息 -->
          <div class="info-wrap-item" v-if='m_user_info && m_user_info.user.type=="m"'>
            <p class='header-wrap'><span class="header-title">认证信息</span></p>
            <p class='single-line-p'>
              <span class='label'>真实姓名：</span>
              <span class="content">{{m_user_info.user.name}}</span>
            </p>
            <p class='single-line-p'><span class='label'>认证头衔：</span>
              <span class="content">{{m_user_info.user.title}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>微&nbsp;信&nbsp;号：</span>
              <span class="content">{{m_user_info.user.wechat}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>手&nbsp;机&nbsp;号：</span>
              <span class="content">{{m_user_info.user.phone}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>个人介绍：</span>
              <span class="content">{{m_user_info.user.introduce}}</span>
            </p>
            <p class='single-line-p' v-if='m_user_info.user.works'>
              <span class='label'>作品链接：</span>
              <a class="content" :href="m_user_info.user.works" target="_blank">点此前往</a>
            </p>
          </div>

          <!-- 行家的技能列表 -->
          <div class="info-wrap-item" v-if='m_user_info'>
            <p class='header-wrap'><span class="header-title">技能列表</span></p>

            <div class='tip-wrap'  v-show='m_user_info.skills.length ==0'>
              <mu-icon value='pets' :size='80' />
              <p class='loading-word'>该行家没有发布任何技能</p>
            </div>

            <div class="skill-item" v-for='item,index in m_user_info.skills'>
              <p class='single-line-p'>
                <span class='label'>技能标题：</span>
                <span class="content">{{item.skill.title}}</span>
              </p>
              <p class='single-line-p'><span class='label'>技能介绍：</span>
                <span class="content">{{item.skill.description}}</span>
              </p>
              <p class='single-line-p'>
                <span class='label'>技能价格：</span>
                <span class="content">{{item.skill.totalPrice}}元/{{item.skill.totalTime}}小时</span>
              </p>
              <p class='single-line-p'>
                <span class='label'>技能标签：</span>
                <span class="content">{{item.tagName}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>
<script>
export default {
  name: "major-manage",
  data: function data() {
    return {
      m_selected_tr: null,
      m_user_status: '1',
      m_user_type: 'm',
      m_loading_user_list: true,
      m_loading_user_info: true,
      m_tbody_height: '460px',
      m_user_list: [],
      m_user_info: null
    }
  },
  mounted () {
    this.f_get_user_list()
  },
  methods: {
    f_select_row(index, tr){
      if (this.m_selected_tr) {
        this.m_selected_tr.$el.style = ''
      }
      this.m_selected_tr = tr
      tr.$el.style='background-color:#f5f5f5;'
      this.f_get_user_info(this.m_user_list[index].userId)
    },
    f_get_user_list () {
      this.m_loading_user_list = true
      this.m_user_list = []
      this.m_user_info = null
      this.get_user_list({
        status: this.m_user_status,
        type: this.m_user_type
      }).then(function (data) {
        if (data.status == 'ok') {
          this.m_user_list = data.result
          if (this.m_user_list.length > 0) {
            this.f_get_user_info(this.m_user_list[0].userId)
          }
          this.m_loading_user_list = false
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_get_user_info (userId) {
      this.m_loading_user_info = true
      this.m_user_info = null
      this.get_user_info(userId).then(function (data) {
        if (data.status == 'ok') {
          this.m_user_info = data.result
          this.m_loading_user_info = false
        } else {
          this.$warn(data.message)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "../../../scss/_variables.scss";
#major-manage{
  position: relative;
  .manage-header{
    height: 70px;
    line-height: 70px;
    padding-left: 40px;
    position:relative;
    border-bottom: 1px solid #ddd;
    .title{
      font-size: 20px;
    }
    .search-wrap{
      position: absolute;
      height:100%;
      right:0;
      top:0;
      width:320px;
      padding-right: 20px;
      .mu-text-field{
        font-size: 14px;
      }
    }
  }
  .manage-content{
    padding-right: 300px;
    position: relative;
    min-height: 400px;
    height: 100%;
    .content-right{
      position: absolute;
      right:20px;
      width:280px;
      height: 100%;
      top:0;
      padding-top: 20px;
      padding-bottom: 20px;
      .loading-wrap,.tip-wrap{
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        color: rgba($primary-color, 0.7);
        .loading-svg{
          width:50px;
        }
        .loading-word{
          margin-top: 10px;
        }
      }
      .info-wrap{
        height: 100%;
        overflow: auto;
        padding:50px 10px 10px;
        border:1px solid #ddd;
        .info-header{
          height: 50px;
          line-height: 50px;
          position: absolute;
          top:20px;
          left:0;
          width:100%;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          border: 1px solid #ddd;
          background-color: #fff;
          z-index: 2;
        }
        &::-webkit-scrollbar {
          width:4px;
        }
        /* 滚动槽 */
        &::-webkit-scrollbar-track {
          -webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
          border-radius:4px;
        }
        /* 滚动条滑块 */
        &::-webkit-scrollbar-thumb {
          border-radius:4px;
          background:rgba(0,0,0,0.1);
          -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
        }
      }
      .info-wrap-item{
        border-bottom: 1px dashed rgba($primary-color, 0.7);
        &:last-child{
          border-bottom: none;
        }
      }
      .header-wrap{
        padding-bottom: 10px;
        .header-title{
          display: inline-block;
          line-height: 50px;
          height: 50px;
          color: rgba($primary-color, 0.7);
          font-size: 16px;
          font-weight: bold;
          padding-right: 10px;
          border-bottom: 4px solid rgba($primary-color, 0.7);
        }
      }
      img{
        max-width: 100%;
        border-radius: 4px;
        &.avatar{
          width:50px;
          height:50px;
          border-radius: 50%;
        }
      }
      .single-line-p{
        min-height: 26px;
        padding-left: 70px;
        position: relative;
        line-height: 26px;
        font-size: 13px;
        color: #555;
        .label{
          height: 26px;
          line-height: 26px;
          position: absolute;
          top:0;
          left:0;
          width: 70px;
          font-weight: bold;
          color: rgba($primary-color, 0.7);
        }
        .content{
          line-height: 1.4;
          display: inline-block;
          text-align: justify;
        }
      }
      .skill-item{
        padding: 5px;
        border-radius: 4px;
        border: 1px dashed rgba($primary-color, 0.3);
        margin-bottom: 6px;
      }
    }
    .content-left{
      padding:20px;
      .manage-table-wrap{
        .loading-wrap,.tip-wrap{
          text-align: center;
          padding-top: 20px;
          padding-bottom: 20px;
          display: table-caption;
          color: rgba($primary-color, 0.7);
          .loading-svg{
            width:50px;
          }
          .loading-word{
            margin-top: 10px;
          }
        }
        .filter-wrap{
          border: 1px solid #ddd;
          border-bottom: none;
          padding: 15px 0 15px 20px;
          .filter-item{
            height: 30px;
            line-height:30px;
          }
          .filter-label{
            font-weight: bold;
            display: inline-block;
            vertical-align: middle;
          }
          .mu-radio{
            vertical-align: middle;
            margin-right: 20px;
          }
          .mu-radio-icon{
            height: 18px;
            width: 18px;
            margin-right: 4px;
            .mu-radio-svg-icon{
              width: 18px;
              height: 18px;
            }
          }
          .mu-radio-label{
            font-size: 14px;
          }

        }
        .manage-table{
          border: 1px solid #ddd;
          .mu-th{
            font-size: 14px;
            color: #333;
            font-weight: bold;
          }
          .manage-tbody{
            .mu-flat-button{
              height: 30px;
              line-height: 30px;
              left:-4px;
            }
            .mu-flat-button-label{
              padding-left: 4px;
              padding-right: 4px;
              font-size: 14px;
            }
            .mu-tr{
              &.selected{
                background-color: #fff;
              }
              &.active{
                background-color: #f5f5f5;
              }
              &:last-child{
                border-bottom: 1px solid rgba(#000, 0.24);
              }
            }
          }
          .manage-tfoot{
            .mu-flat-button{
              height: 30px;
              line-height: 30px;
              left: -16px;
            }
          }
        }
      }
    }
  }
}
</style>
