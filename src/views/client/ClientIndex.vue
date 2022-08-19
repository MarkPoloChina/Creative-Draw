<template>
  <header class="client-header">
    <div class="header-logo">CreativeDraw</div>
    <div class="header-right"></div>
  </header>
  <div class="client-main">
    <div class="main-sidebar">
      <div class="sidebar-1">111</div>
      <div class="sidebar-2">222</div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.client-header {
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .header-right {
    background-image: linear-gradient(
      to right,
      $color-main-blue-1,
      $color-main-blue-2
    );
    width: 400px;
    height: 100%;
    border-radius: 0 0 0 30px;
  }
}
.client-main {
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .main-sidebar {
    background-color: #d9e5f5;
    height: 100%;
    width: 550px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0 130px 0 0;
    .sidebar-1 {
      height: 100%;
      width: 250px;
      background-image: linear-gradient(
        to bottom,
        $color-main-blue-1,
        $color-main-blue-2
      );
      border-radius: 0 130px 0 0;
    }
    .sidebar-2 {
      height: 100%;
    }
  }
}
</style>
