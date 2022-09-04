<template>
  <div class="login-panel">
    <div>
      <p>扫描二维码登录</p>
      <img :src="'data:image/png;base64,' + base64" v-if="base64 != ''" />
      <p>请使用<span style="color:rgb(80, 193, 49)">微信手机端</span>扫码登录</p>
    </div>
    <!-- <div class="div-line"></div>
    <div>2</div> -->
  </div>
</template>
<script setup>
// eslint-disable-next-line no-undef
defineProps({
  base64: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
.login-panel {
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px 0 20px;
  }
  .div-line {
    border-right: 1px solid rgb(186, 186, 186);
    height: 75%;
  }
}
</style>
