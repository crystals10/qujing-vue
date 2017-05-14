<template>
  <div id="apply-manage" class="manage-wrap">
     <div class="manage-header">
       <span class="title">认证行家</span>
       <!-- <span class='tip'>（对本站所有行家的管理）</span> -->
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
              <mu-radio label="审核中的行家" name="type" nativeValue='0' @change='f_get_apply_list' v-model='m_type' class="filter-radio"/>
              <mu-radio label="被拒绝的行家" name="type" nativeValue='2' @change='f_get_apply_list' v-model='m_type' class="filter-radio"/>
            </div>
          </div>
          <mu-table class="manage-table" :fixedHeader=true :enableSelectAll=true  :multiSelectable=true :selectable=true :showCheckbox=false :height="m_tbody_height" @rowClick='f_select_row'>
            <div class='loading-wrap'  v-show='m_loading_check_list'>
              <img src="../../../assets/loading.svg" class="loading-svg">
              <p class='loading-word'>正在加载信息</p>
            </div>
            <div class='tip-wrap'  v-show='!m_loading_check_list && m_check_list.length == 0'>
              <mu-icon value='pets' :size='80' />
              <p class='loading-word'>暂无信息</p>
            </div>
           <mu-thead slot="header" class='manage-thead'>
             <mu-tr>
               <mu-th tooltip="申请者昵称">申请者昵称</mu-th>
               <mu-th tooltip="头像">头像</mu-th>
               <mu-th tooltip="申请时间">申请时间</mu-th>
               <mu-th tooltip="状态">操作</mu-th>
             </mu-tr>
           </mu-thead>
           <mu-tbody class='manage-tbody'>
             <template v-if='m_check_list.length != 0'>
               <mu-tr v-for='item,index in m_check_list' :key='index'>
                 <mu-td>{{item.nickname}}</mu-td>
                 <mu-td><img :src="item.avatar" class="avatar"></mu-td>
                 <mu-td>{{item.createTime | timestampFormat}}</mu-td>
                 <mu-td>
                    <mu-flat-button label="拒绝" v-show='item.result == 0' v-on:click='f_open_dialog(item.applyId, $event)' secondary/>
                    <mu-flat-button label="通过" v-show='item.result == 0' v-on:click='f_pass_apply(item.applyId, $event)' primary/>
                    <mu-flat-button label="撤销" v-show='item.result == 2' v-on:click='f_cancel_reject_apply(item.applyId, $event)' primary/>
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
          <div class='loading-wrap'  v-show='m_loading_check_info'>
            <img src="../../../assets/loading.svg" class="loading-svg">
            <p class='loading-word'>正在加载信息</p>
          </div>
          <div class='tip-wrap'  v-show='!m_loading_check_info && m_check_list.length == 0'>
            <mu-icon value='pets' :size='80' />
            <p class='loading-word'>暂无信息</p>
          </div>
          <!-- 用户基本信息 -->
          <div class="info-wrap-item" v-if='m_check_info'>
            <p class='header-wrap'><span class="header-title">基本信息</span></p>
            <!-- <p class='single-line-p'>
              <span class='label'>用户头像：</span>
              <img :src="m_check_info.user.avatar" class="avatar" alt="">
            </p> -->
            <p class='single-line-p'>
              <span class='label'>用户昵称：</span>
              <span class='content'>{{m_check_info.user.nickname}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>用户类型：</span>
              <span class='content'>{{m_check_info.user.type=="c"?'普通用户':(m_check_info.user.type=="m"?'行家':'已下架的行家')}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>用户状态：</span>
              <span class='content'>{{m_check_info.user.status=="1"?'正常用户':'黑名单用户'}}</span>
            </p>
            <p class='single-line-p' v-if='m_check_info.apply.result == "2"'>
              <span class='label'>拒绝原因：</span>
              <span class='content'>{{m_check_info.apply.rejectReason}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>入学年份：</span>
              <span class="content">{{m_check_info.user.grade}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>专业院系：</span>
              <span class="content">{{m_check_info.user.major}}</span>
            </p>
            <p class='single-line-p'><span class='label'>学&nbsp;生&nbsp;证：</span>
              <img src="../../../assets/id.png" alt="">
            </p>
          </div>
          <!-- 行家认证信息 -->
          <div class="info-wrap-item" v-if='m_check_info'>
            <p class='header-wrap'><span class="header-title">认证信息</span></p>
            <p class='single-line-p'>
              <span class='label'>真实姓名：</span>
              <span class="content">{{m_check_info.apply.name}}</span>
            </p>
            <p class='single-line-p'><span class='label'>认证头衔：</span>
              <span class="content">{{m_check_info.apply.title}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>个人介绍：</span>
              <span class="content">{{m_check_info.apply.introduce}}</span>
            </p>
            <p class='single-line-p' v-if='m_check_info.apply.prize'>
              <span class='label'>获奖记录：</span>
              <span class="content">{{m_check_info.apply.prize}}</span>
            </p>
            <p class='single-line-p' v-if='m_check_info.apply.prove'>
              <span class='label'>证&nbsp;名&nbsp;人：</span>
              <span class="content">{{m_check_info.apply.prove}}</span>
            </p>
            <p class='single-line-p' v-if='m_check_info.apply.works'>
              <span class='label'>作品链接：</span>
              <a class="content" :href="m_check_info.apply.works" target="_blank">点此前往</a>
            </p>
            <p class='single-line-p'>
              <span class='label'>微&nbsp;信&nbsp;号：</span>
              <span class="content">{{m_check_info.apply.wechat}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>手&nbsp;机&nbsp;号：</span>
              <span class="content">{{m_check_info.apply.phone}}</span>
            </p>
          </div>
        </div>
      </div>
     </div>
     <mu-dialog dialogClass="black-reason" bodyClass='dialog-body' :open='m_black_dialog'>
       <mu-text-field label='拒绝原因是：' v-model='m_black_reason' inputClass="reject-input" multiLine fullWidth :rows="2" :rowsMax="4" :maxLength="40"/>
       <mu-flat-button label="取消" slot="actions" @click='f_close_dialog' primary/>
       <mu-flat-button label="确定" slot="actions" @click='f_reject_apply' primary/>
     </mu-dialog>
  </div>
</template>
<script>
export default {
  name: "apply-manage",
  data: function data() {
    return {
      m_selected_tr: null,
      m_type: '0',
      m_black_reason: '',
      m_black_dialog: false,
      m_cur_applyId: '',
      m_loading_check_list: true,
      m_loading_check_info: true,
      m_tbody_height: '460px',
      m_check_list: [],
      m_check_info: null
    }
  },
  mounted () {
    this.f_get_apply_list()
  },
  methods: {
    f_select_row(index, tr){
      if (this.m_selected_tr) {
        this.m_selected_tr.$el.style = ''
      }
      this.m_selected_tr = tr
      tr.$el.style='background-color:#f5f5f5;'
    },
    f_get_apply_list () {
      this.m_loading_check_list = true
      this.m_loading_check_info = true
      this.m_check_list = []
      this.m_check_info = null
      this.get_apply_list({result: parseInt(this.m_type)}).then(function (data) {
        if (data.status == 'ok') {
          this.m_check_list = data.result
          if (this.m_check_list.length > 0) {
            this.f_get_apply_info(this.m_check_list[0].applyId)
          } else {
            this.m_loading_check_info = false
          }
          this.m_loading_check_list = false
        }
      })
    },
    f_get_apply_info (applyId) {
      this.m_loading_check_info = true
      this.m_check_info = null
      this.get_apply_info(applyId).then(function (data) {
        this.m_check_info = data.result
        this.m_loading_check_info = false
      })
    },
    f_open_dialog(applyId, event) {
      event.stopPropagation()
      this.m_cur_applyId = applyId
      this.m_black_dialog = true
    },
    f_close_dialog(){
      this.m_black_dialog = false
    },
    f_pass_apply (applyId, event) {
      event.stopPropagation()
      this.pass_apply(applyId).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('操作成功')
          this.f_get_apply_list()
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_cancel_reject_apply (applyId, event) {
      event.stopPropagation()
      this.cancel_reject_apply(applyId).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('操作成功')
          this.f_get_apply_list()
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_reject_apply () {
      if (this.m_black_reason.trim() == '') {
        this.$warn('请填写拒绝的原因')
        return
      }
      this.reject_apply({
        rejectReason: this.m_black_reason,
        applyId: this.m_cur_applyId
      }).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('操作成功')
          this.f_close_dialog()
          this.f_get_apply_list()
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
