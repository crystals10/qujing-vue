<template>
  <div id="user-manage" class="manage-wrap">
     <div class="manage-header">
       <span class="title">用户管理</span>
       <span class='tip'>（对本站所有用户的管理）</span>
       <!-- <div class="search-wrap">
         <mu-text-field icon='search' fullWidth hintText='搜索用户昵称' hintTextClass='hint-text' inputClass='search-input' underlineFocusClass='underline-focus'>
         </mu-text-field>
       </div> -->
     </div>
     <div class="manage-content">
      <div class="content-left">
        <div class="manage-table-wrap">
          <div class="filter-wrap">
            <div class="filter-item">
              <mu-radio label="正常用户" name="status" nativeValue="1" @change='f_get_user_list' v-model='m_user_status' class="filter-radio"/>
              <mu-radio label="黑名单用户" name="status" nativeValue="0" @change='f_get_user_list' v-model='m_user_status' class="filter-radio"/>
            </div>
          </div>
          <mu-table class="manage-table" :fixedHeader=true :showCheckbox=false :height="m_tbody_height" @rowClick='f_select_row'>
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
               <mu-th tooltip="拉黑原因" v-if='m_user_status=="0"'>拉黑原因</mu-th>
               <mu-th tooltip="状态">操作</mu-th>
             </mu-tr>
           </mu-thead>
           <mu-tbody class='manage-tbody'>
             <template v-if='m_user_list.length != 0'>
               <mu-tr v-for='item,index in m_user_list' :key='index'>
                 <mu-td>{{item.nickname}}</mu-td>
                 <mu-td><img :src="item.avatar" class="avatar"></mu-td>
                 <mu-td>{{item.createTime | timestampFormat}}</mu-td>
                 <mu-td v-if='item.status == 0'>{{item.deleteReason | ellipsis(9)}}</mu-td>
                 <mu-td>
                   <template v-if='item.status==1'>
                     <mu-flat-button label="拉黑" v-on:click='f_open_black_dialog(item, $event)' secondary/>
                     <mu-flat-button label="修改信息" :to='"/editinfo/" + item.userId' primary/>
                   </template>
                   <template v-else-if='item.status==0'>
                     <mu-flat-button label="移除黑名单" v-on:click='f_remove_black_list(item, $event)' primary/>
                   </template>
                 </mu-td>
               </mu-tr>
             </template>
           </mu-tbody>
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
            <!-- <p class='single-line-p'>
              <span class='label'>用户头像：</span>
              <img :src="m_user_info.user.avatar" class="avatar" alt="">
            </p> -->
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
            <p class='single-line-p' v-if='m_user_info.user.status=="0"'>
              <span class='label'>拉黑原因：</span>
              <span class='content'>{{m_user_info.user.deleteReason}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>入学年份：</span>
              <span class="content">{{m_user_info.user.grade}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>专业院系：</span>
              <span class="content">{{m_user_info.user.major}}</span>
            </p>
            <p class='single-line-p'><span class='label'>学&nbsp;生&nbsp;证：</span>
              <img :src="m_user_info.user.studentCard" alt="">
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
      <mu-dialog dialogClass="black-reason" bodyClass='dialog-body' :open='m_black_dialog'>
        <mu-text-field label='加入黑名单的原因是：' v-model='m_black_reason' inputClass="reject-input" multiLine fullWidth :rows="2" :rowsMax="4" :maxLength="100"/>
        <mu-flat-button label="取消" slot="actions" @click='f_close_black_dialog' primary/>
        <mu-flat-button label="确定" slot="actions" @click='f_add_black_list' primary/>
      </mu-dialog>
     </div>
  </div>
</template>
<script>
export default {
  name: "user-manage",
  data: function data() {
    return {
      m_selected_tr: null,
      m_cur_black_item: null,
      m_user_status: '1',
      m_user_type: 'c',
      m_black_dialog: false,
      m_black_reason: '',
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
    f_open_black_dialog (item, event) {
      event.stopPropagation()
      this.m_cur_black_item = item
      this.m_black_dialog = true
    },
    f_close_black_dialog () {
      this.m_black_dialog = false
    },
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
          } else {
            this.m_loading_user_info = false
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
    f_add_black_list () {
      event.stopPropagation()
      if (this.m_black_reason.trim() == '') {
        this.$warn('请填写加入黑名单的原因')
        return
      }
      this.add_black_list(this.m_cur_black_item.userId, {deleteReason: this.m_black_reason}).then(function (data) {
        if (data.status == 'ok') {
          this.m_cur_black_item.status = 0
          this.$warn('操作成功！')
          this.f_close_black_dialog()
          this.f_get_user_list()
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_remove_black_list (item, event) {
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
@import "./manage.scss";
</style>
