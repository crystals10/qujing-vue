<template>
  <div id="major-manage" class="manage-wrap">
     <div class="manage-header">
       <span class="title">行家管理</span>
       <span class='tip'>（对本站所有行家的管理）</span>
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
              <mu-radio label="在线的行家" name="type" nativeValue="m" @change='f_get_user_list' v-model='m_user_type' class="filter-radio"/>
              <mu-radio label="已下架的行家" name="type" nativeValue="m-c" @change='f_get_user_list' v-model='m_user_type' class="filter-radio"/>
            </div>
          </div>
          <mu-table class="manage-table" :fixedHeader=true :enableSelectAll=true  :multiSelectable=true :selectable=true :showCheckbox=false :height="m_tbody_height" @rowClick='f_select_row'>
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
               <mu-th tooltip="头像">头像</mu-th>
               <mu-th tooltip="注册时间">注册时间</mu-th>
               <mu-th tooltip="状态">操作</mu-th>
             </mu-tr>
           </mu-thead>
           <mu-tbody class='manage-tbody'>
             <template v-if='m_user_list.length != 0'>
               <mu-tr v-for='item,index in m_user_list' :key='index'>
                 <mu-td>{{item.nickname}}</mu-td>
                 <mu-td>{{item.name}}</mu-td>
                 <mu-td> <img :src="item.avatar" class="avatar"></mu-td>
                 <mu-td>{{item.createTime | timestampFormat}}</mu-td>
                 <mu-td>
                   <template v-if='item.type=="m"'>
                     <mu-flat-button label="下架" @click='f_open_dialog(item, $event)' secondary/>
                     <mu-flat-button label="修改信息" target='_blank' :to='"/editinfo/" + item.userId' primary/>
                   </template>
                   <template v-else-if='item.type=="m-c"'>
                     <mu-flat-button label="重新上架该行家" @click='f_on_shelf_master(item, $event)' primary/>
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
            <p class='single-line-p'>
              <span class='label'>用户昵称：</span>
              <span class='content'>{{m_user_info.user.nickname}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>用户类型：</span>
              <span class='content'>{{m_user_info.user.type=="c"?'普通用户':(m_user_info.user.type=="m"?'行家':'已下架的行家')}}</span>
            </p>
            <p class='single-line-p'>
              <span class='label'>用户状态：</span>
              <span class='content'>{{m_user_info.user.status=="1"?'正常用户':'黑名单用户'}}</span>
            </p>
            <p class='single-line-p' v-if='m_user_info.user.type=="m-c"'>
              <span class='label'>下架原因：</span>
              <span class='content'>{{m_user_info.user.shelveReason}}</span>
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
              <img :src="m_user_info.user.studentCard" alt="">
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
     <mu-dialog dialogClass="black-reason" bodyClass='dialog-body' :open='m_black_dialog'>
       <mu-text-field label='下架原因是：' v-model='m_black_reason' inputClass="reject-input" multiLine fullWidth :rows="2" :rowsMax="4" :maxLength="40"/>
       <mu-flat-button label="取消" slot="actions" @click='f_close_dialog' primary/>
       <mu-flat-button label="确定" slot="actions" @click='f_off_shelf_master' primary/>
     </mu-dialog>
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
      m_black_reason: '',
      m_black_dialog: false,
      m_cur_black_item: null,
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
    f_open_dialog(item, event) {
      event.stopPropagation()
      this.m_cur_black_item = item
      this.m_black_dialog = true
    },
    f_close_dialog(){
      this.m_black_dialog = false
    },
    f_off_shelf_master () {
      if (this.m_black_reason.trim() == '') {
        this.$warn('请填写下架的原因')
        return
      }
      this.off_shelf_master(this.m_cur_black_item.userId, {shelveReason: this.m_black_reason}).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('操作成功！')
          this.f_close_dialog()
          this.f_get_user_list()
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_on_shelf_master (item, event) {
      event.stopPropagation()
      this.on_shelf_master(item.userId).then(function (data) {
        if (data.status == 'ok') {
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
