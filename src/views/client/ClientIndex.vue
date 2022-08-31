<template>
  <header class="client-header">
    <div class="header-logo">
      <img src="@/assets/logo.png" />
    </div>
    <div class="header-right">
      <el-avatar @click="handleLogin"> user </el-avatar>
    </div>
  </header>
  <div class="client-main">
    <div class="main-sidebar">
      <div class="sidebar-1">
        <div class="sidebar-1-ul">
          <ul>
            <li
              v-for="(item, index) in sidebarMenu1"
              :key="index"
              @click="handleSelectMenu(index)"
              :class="activeIndex == index ? 'sidebar-active' : ''"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-2">222</div>
    </div>
    <el-dialog v-model="dialogVisible" title="" width="60%">
      <ClientLogin :base64="base64"></ClientLogin>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import ClientLogin from "../../components/client/ClientLogin.vue";
import Login from "@/api/api";
import { useStore } from "vuex";
const store = reactive({ store: null });
const uuid = ref("");
const base64 = ref("");
const handleSelectMenu = (index) => {
  activeIndex.value = index;
};
const sidebarMenu1 = ["我的文件", "最近修改", "与我协作", "回收站"];
const activeIndex = ref(1);
const timer = reactive({ value: null });
onMounted(() => {
  store.store = useStore();
  uuid.value = (
    Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
  ).toString();
  Login.getQR(uuid.value).then((res) => {
    base64.value = res.data.result;
  });
  timer.value = window.setInterval(() => {
    checkIfScan();
  }, 1000);
});
const dialogVisible = ref(false);
const handleLogin = () => {
  dialogVisible.value = true;
};
const checkIfScan = () => {
  Login.checkIfScan(uuid.value).then((res) => {
    if (res.data.code == 200) {
      window.clearInterval(timer.value)
      store.store.commit("reviseResult", res.data.result);
      console.log('OKKKKKK')
    }
  }).catch((res)=>{
    console.log('BAD NETWORK'+res)
  });
};
</script>
<style lang="scss" scoped>
.client-header {
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .header-logo img {
    height: 60px;
    margin-left: 50px;
  }
  .header-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
    background-image: linear-gradient(
      to right,
      $color-main-blue-1,
      $color-main-blue-2
    );
    width: 350px;
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
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      .sidebar-1-ul {
        ul {
          list-style-type: none;
          li {
            padding: 20px 50px 20px 70px;
            border-radius: 10px 0 0 10px;
            height: 20px;
            text-align: right;
            color: #d9e5f5;
            user-select: none;
            cursor: pointer;
            &:hover {
              background-color: #d9e5f57f;
            }
            &.sidebar-active {
              background-color: #d9e5f5;
              color: #58595d;
            }
          }
        }
      }
    }
    .sidebar-2 {
      height: 100%;
    }
  }
}
:deep(.el-dialog) {
  border-radius: 10px;
}
</style>
