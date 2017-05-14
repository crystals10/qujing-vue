<template>
  <div id="user-analysis" class="analysis-wrap">
    <div class="analysis-header">
      <span class="title">行家分析</span>
      <!-- <span class='tip'>（对本站所有行家的管理）</span> -->
    </div>
    <div class="analysis-content">
      <div class="filter-wrap">
        <div class="filter-item">
          <mu-radio label="最近7天" name="type" nativeValue="7" v-model='m_recent_day' @change='f_get_statistic_auto' class="filter-radio"/>
          <mu-radio label="最近30天" name="type" nativeValue="30" v-model='m_recent_day' @change='f_get_statistic_auto' class="filter-radio" />
          <mu-radio label="最近60天" name="type" nativeValue="60" v-model='m_recent_day' @change='f_get_statistic_auto' class="filter-radio" />
          <mu-radio label="自定义时间" name="type" nativeValue="0" v-model='m_recent_day' class="filter-radio" />
          <div class="date-picker-wrap" v-show='m_recent_day == "0"'>
            <mu-date-picker container="inline" @change='f_change_start' hintText="选择起始时间"/> -
            <mu-date-picker container="inline" @change='f_change_end' hintText="选择结束时间"/>
            <mu-raised-button label='查询数据' primary @click='f_get_statistic_define' />
          </div>
        </div>
      </div>
       <chartjs-line class="chart-wrap"
        :datalabel= "'行家分析'"
        :beginzero="true"
        :datasetfill="false"
        :legenddisplay="false"
        :labels="m_labels"
        :data="m_datas"
        :bordercolor="m_color"
        :pointborderwidth='4'
        :pointbordercolor="m_color"
        :pointhoverbackgroundcolor="m_color"
        :pointhoverbordercolor="m_color"
        :bind="true"
        ></chartjs-line>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-analysis",
  data: function() {
    return {
      m_loading: true,
      m_labels: [],
      m_datas: [],
      m_start_date: '',
      m_end_date: '',
      m_recent_day: '7',
      m_color: 'rgba(126, 87, 194, 0.7)'
    }
  },
  mounted() {
    this.f_get_statistic_auto()
  },
  methods: {
    f_cal_less_ten (num) {
      if (num < 10) {
        return '0' + num
      } else {
        return '' + num
      }
    },
    f_formatDate (value) {
      let date = new Date(value)
      let year = date.getYear() + 1900
      let month = date.getMonth() + 1
      let day = date.getDate()
      return '' + year + this.f_cal_less_ten(month) + this.f_cal_less_ten(day)
    },
    f_get_recent_days () {
      this.m_end_date = this.f_formatDate(new Date().setDate(new Date().getDate() - 1))
      this.m_start_date = this.f_formatDate(new Date().setDate(new Date().getDate() - parseInt(this.m_recent_day) - 1))
    },
    f_get_statistic_auto () {
      this.f_get_recent_days()
      this.f_get_statistic_base()
    },
    f_get_statistic_define () {
      if (this.m_end_date - this.m_start_date < 0) {
        this.$warn('起始时间不能大于结束时间')
        return
      }
      this.get_statistic_base()
    },
    f_get_statistic_base () {
      this.m_loading = true
      this.m_datas = []
      this.get_statistic('master', {
        startDate: parseInt(this.m_start_date),
        endDate: parseInt(this.m_end_date)
      }).then(function (data) {
        if (data.status == 'ok') {
          this.m_datas = data.result.sums.value
          this.m_labels = data.result.sums.date
          this.m_loading = false
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_change_start (value) {
      this.m_start_date = value.replace(/-/g, '')
    },
    f_change_end (value) {
      this.m_end_date = value.replace(/-/g, '')
    }
  }
}
</script>
<style lang="scss">
@import "./analysis.scss";
</style>
