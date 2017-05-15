<template>
  <div id="manage-home">
     <div class="home-header clearfix">
       <p class="item">
         <span class='num'>{{mp_statistic.user}}</span>
         <span class="tip">总用户数</span>
       </p>
       <p class="item">
         <span class='num'>{{mp_statistic.master}}</span>
         <span class="tip">当前行家数</span>
       </p>
       <p class="item">
         <span class='num'>{{mp_statistic.apply}}</span>
         <span class="tip">未处理行家申请数</span>
       </p>
       <p class="item">
         <span class='num'>{{mp_statistic.skill}}</span>
         <span class="tip">总技能数</span>
       </p>
       <p class="item">
         <span class='num'>{{mp_statistic.order}}</span>
         <span class="tip">总约见数</span>
       </p>
       <p class="item">
         <span class='num none'>{{mp_statistic.finishOrder}}</span>
         <span class="tip">已完成约见数</span>
       </p>
     </div>
     <div id="aboutus">
       <p class='title'>关于『取经』想说的一点话</p>
       <p>引用并擅自修改《南方人物周刊》中的一句话：<br /></p>
       <p><br /></p>
       <blockquote>
         <p>
           <strong>在“有趣然而无用”大行其道的当下，</strong>
           <strong>取经所促成的每一次经验交谈都明确指向“有用”。</strong>
         </p>
       </blockquote>
       <p><br /></p>
       <p>「取经」的目的其实很简单。</p>
       <p><br /></p>
       <p>我在大学期间听过的讲座屈指可数，我觉得台上的人很不容易，首先他不可能了解台下人的状况，其次他有很多话不能当太多人的面说，甚至连粗口都不方便爆，最后只能讲成功方面的事情。听多了就感觉没意思了。而且听他讲完之后，想加个微信都很困难。</p>
       <p><br /></p>
       <p>我还尝试了很多次线下一对一的交谈，找了很多朋友要某个人的微信号，然后请他出来喝咖啡，闲聊一会儿就结束了，也没有个明确的主题，最后可能还要欠下人情债。想想也是，本来就占用了别人的时间，为什么还要臆想别人有认真帮助你的义务呢。</p>
       <p><br /></p>
       <p>感觉我已经很久没体验过“有用”的经验交谈了。这并不是一个好现象，我们应该去解决它。</p>
       <p><br /></p>
       <p><strong>你别说，有时候「付费」还真是一件严肃且不低俗的事情。</strong></p>
       <p><br /></p>
       <p>它会让双方都认真对待这次约见，且付费是唯一的负担。</p>
       <p><br /></p>
       <p>所以，我们在华科里找到了一些有一技之长的同学，给想要进行“有用”的一对一经验交谈的同学，提供有偿约见服务。</p>
       <p><br /></p>
       <p style="white-space: normal;">
         <span style="color: #7e57c2;">
           <strong>你只需要付几十块，便可以选择华科里的行家和你交流适合你的主题。互联网、绘画、摄影、出国、烘焙、化妆等等。</strong>
         </span>
       </p>
       <p><br /></p>
       <p>有人和我说，如果要付费的话我更愿意去找专业的人：</p>
       <p>1）找专业的人价格是非常高的。</p>
       <p>2）时间成本交通成本也是不低的。</p>
       <p>3）层次差距大并不是好事，想象一下，马云跟你讲“赚钱真他妈容易啊”，你能理解吗？<br /></p>
       <p>4）华科里最专业的人，对比外面的平均水平，不知道高到哪儿去了。</p>
       <p><br /></p>
       <p><strong><span style="color: #7e57c2;">综上，「取经」就这样诞生了。</span></strong><br /></p>
     </div>
  </div>
</template>
<script>
export default {
  name: "manage-home",
  data: function data() {
    return {
      mp_statistic: {}
    }
  },
  mounted(){
    this.get_statistic_count().then(function (data) {
      if (data.status == 'ok') {
        this.mp_statistic = data.result
      } else {
        this.$warn(data.message)
      }
    })
  },
  methods:{

  }
}
</script>
<style lang="scss">
@import "../../scss/_variables.scss";
#manage-home{
  .home-header{
    border-bottom: 1px solid #ddd;
    padding-top: 40px;
    padding-bottom: 40px;
    .item{
      font-size: 14px;
      width:16.6%;
      display: inline-block;
      float: left;
      text-align:center;
      position: relative;
      height: 80px;
      .num{
        color: $primary-color;
        display: inline-block;
        width: 100%;
        font-size: 40px;
        line-height: 80px;
        border-right: 1px dashed #ddd;
        position: relative;
        bottom: 10px;
        &.none{
          border-right: none;
        }
      }
      .tip{
        font-size: 14px;
        position: absolute;
        width: 100%;
        color: #666;
        left: 0;
        bottom: 0px;
      }
    }
  }
}
#aboutus{
  text-align: justify;
  background-color: #fff;
  padding: 20px 30px;
  img{
    width: 100%;
  }
  .title{
    font-size: 18px;
    color: #7e57c2;
    text-align: center;
  }
}
</style>
