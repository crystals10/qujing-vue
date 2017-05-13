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
        <div class="manage-table-wrap">
          <div class="filter-wrap">
            <div class="filter-item">
              <span class='filter-label'>选择用户状态：</span>
              <!-- <mu-radio label="所有状态" name="status" nativeValue="" @change='f_get_user_list' v-model='m_user_status' class="filter-radio"/> -->
              <mu-radio label="正常用户" name="status" nativeValue="1" @change='f_get_user_list' v-model='m_user_status' class="filter-radio"/>
              <mu-radio label="黑名单用户" name="status" nativeValue="0" @change='f_get_user_list' v-model='m_user_status' class="filter-radio"/>
            </div>
            <!-- <div class="filter-item">
              <span class='filter-label'>选择用户类型：</span>
              <mu-radio label="所有类型" name="type" nativeValue="" @change='f_get_user_list' v-model='m_user_type' class="filter-radio"/>
              <mu-radio label="普通用户" name="type" nativeValue="c" @change='f_get_user_list' v-model='m_user_type' class="filter-radio"/>
              <mu-radio label="行家用户" name="type" nativeValue="m" @change='f_get_user_list' v-model='m_user_type' class="filter-radio"/>
              <mu-radio label="已下架行家用户" name="type" nativeValue="m_c" @change='f_get_user_list' v-model='m_user_type' class="filter-radio"/>
            </div> -->
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
               <mu-th tooltip="ID">昵称</mu-th>
               <mu-th tooltip="名称">头像</mu-th>
               <mu-th tooltip="用户类型">注册时间</mu-th>
               <mu-th tooltip="状态">操作</mu-th>
             </mu-tr>
           </mu-thead>
           <mu-tbody class='manage-tbody'>
             <template v-if='m_user_list.length != 0'>
               <mu-tr v-for='item,index in m_user_list' :key='index'>
                 <mu-td>{{item.nickname}}</mu-td>
                 <mu-td><img :src="item.avatar" class="avatar"></mu-td>
                 <mu-td>{{item.createTime | timestampFormat}}</mu-td>
                 <mu-td>
                   <template v-if='item.status==1'>
                     <mu-flat-button label="加入黑名单" v-on:click='f_add_black_list(item)' secondary/>
                   </template>
                   <template v-else-if='item.status==0'>
                     <mu-flat-button label="移除黑名单" v-on:click='f_remove_black_list(item)' primary/>
                   </template>
                 </mu-td>
               </mu-tr>
             </template>
           </mu-tbody>
           <mu-tfoot slot="footer" class='manage-tfoot'>
             <mu-tr>
               <mu-td>
                <mu-flat-button label="批量加入黑名单" secondary/>
                <mu-flat-button label="批量移除黑名单" primary/>
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
              <span class='label'>用户状态：</span>
              <span class='content'>{{m_user_info.user.status=="1"?'正常':'被加入黑名单'}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>用户类型：</span>
              <span class='content'>非行家的普通用户</span>
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

          <!-- 用户约见信息 -->
          <div class="info-wrap-item" v-if='m_user_info'>
            <p class='header-wrap'><span class="header-title">约见信息（{{m_user_info.fromOrders.length}}条记录）</span></p>
            <div class='tip-wrap'  v-show='m_user_info.fromOrders.length==0'>
              <mu-icon value='pets' :size='80' />
              <p class='loading-word'>该用户暂时没有约见过任何人</p>
            </div>
            <div class="skill-item" v-for="item,index in m_user_info.fromOrders">
              <p class='single-line-p'>
                <span class='label'>约见行家：</span>
                <span class="content">{{item.toUserName}}</span>
              </p>
              <p class='single-line-p'>
                <span class='label'>约见技能：</span>
                <span class="content">{{item.skillTitle}}</span>
              </p>
              <p class='single-line-p'>
                <span class='label'>个人描述：</span>
                <span class="content">{{item.orderIntroduction}}</span>
              </p>
              <p class='single-line-p'>
                <span class='label'>约见时间：</span>
                <span class="content">{{item.createTime | timestampFormat}}</span>
              </p>
              <p class='single-line-p'>
                <span class='label'>约见状态：</span>
                <span class="content">
                  <template v-if='item.result==0'>等待行家同意</template>
                  <template v-else-if='item.result==1'>行家已同意</template>
                  <template v-else-if='item.result==2'>行家已拒绝</template>
                  <template v-else-if='item.result==3'>约见已完成</template>
                  <template v-else-if='item.result==4'>约见被用户取消</template>
                </span>
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
  name: "user-manage",
  data: function data() {
    return {
      m_selected_tr: null,
      m_user_status: '1',
      m_user_type: 'c',
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
    },
    f_add_black_list (item) {
      event.stopPropagation()
      this.add_black_list(item.userId, {deleteReason: '正在测试删除'}).then(function (data) {
        if (data.status == 'ok') {
          item.status = 0
          this.$warn('操作成功！')
          this.f_get_user_list()
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_remove_black_list (item) {
      event.stopPropagation()
      this.remove_black_list(item.userId).then(function (data) {
        if (data.status == 'ok') {
          item.status = 1
          this.$warn('操作成功！')
          this.f_get_user_list()
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
#user-manage{
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
              left:-12px;
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
            .avatar{
              height:40px;
              width:40px;
              border-radius: 50%;
              vertical-align: middle;
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
