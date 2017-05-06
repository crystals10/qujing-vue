<template>
<div id='order'>
  <mu-appbar title="预约行家" class='appbar' titleClass="appbar-title" />
  <mu-stepper class="order-stepper" :activeStep="activeStep">
    <mu-step>
      <mu-step-label class="order-step-label">预约</mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label class="order-step-label">行家确认</mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label class="order-step-label">完成</mu-step-label>
    </mu-step>
  </mu-stepper>
  <div class="order-stepper-content">
    <template v-if="activeStep == 0">
      <div class="order-stepper-form">
        <mu-select-field label='选择您请教行家的具体技能' fullWidth v-model='m_select_value' labelClass="input-label" inputClass='input-content'>
          <mu-menu-item v-for="text,index in m_skills" :key="index" :value="index" :title="text" />
        </mu-select-field>
        <mu-text-field label='个人情况描述' labelClass="input-label" inputClass='input-content' multiLine fullWidth :rows="2" :rowsMax="8" :maxLength="400" />
        <mu-text-field label='联系方式（微信号）：' labelClass="input-label" inputClass='input-content'  fullWidth/>
      </div>
    </template>
    <template v-if="activeStep == 1">
      <div class="order-stepper-success">
        <p class='success-text'>预约成功，等待行家确认</p>
        <mu-icon value="check_circle" color="#7e57c2" size='100' />
      </div>
    </template>
    <p class='tip'>注意：见面的时间跟地点将在行家同意后由行家同您共同商定。</p>
    <div class="button-wrap" >
      <mu-raised-button v-if='activeStep == 0' class="order-stepper-button" label="确定预约" primary  @click="handleNext"/>
      <mu-raised-button to='/home' v-if='activeStep == 1' class="order-stepper-button" label="继续浏览行家" primary />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      activeStep: 0,
      m_select_value: 0,
      m_skills:['做一款互联网产品没有你想象的那么难','两小时教你如何搭建取经这个网站及其后台']
    }
  },
  methods: {
    handleNext () {
      this.activeStep++
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/_variables.scss';
#order{
  .appbar{
    height: 50px;
    .appbar-title{
      text-align: center;
      font-size: 16px;
    }
  }
  .order-stepper{
    padding: 0 20px;
    background-color: #fff;
    margin-top: 20px;
    .order-step-label{
      height:50px;
    }
  }
  .order-stepper-content {
    padding: 10px 40px;
    background-color: #fff;
  }
  .order-stepper-form{
    .input-content,.mu-dropDown-menu-text-overflow,{
      font-size: 14px;
      color: $primary-color;
    }
  }
  .order-stepper-success{
    text-align: center;
    .success-text{
      padding-top:10px;
      padding-bottom:10px;
      font-size: 16px;
      color: $primary-color;
      font-weight: bold;
    }
    .mu-icon{
      margin-bottom: 20px;
    }
  }
  .tip{
    text-align: justify;
    font-size: 12px;
    padding-bottom: 10px;
    color: #666;
  }
  .button-wrap{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    .order-stepper-button{
      width: 160px;
    }
  }
}

</style>
