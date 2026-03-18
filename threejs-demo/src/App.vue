<script setup lang="ts">
// 引入ThreeDemo组件（路径要和你的文件位置一致）
import ThreeDemo from './components/ThreeDemo.vue'
</script>

<template>
  <!-- 只显示ThreeDemo组件，去掉所有默认内容 -->
  <ThreeDemo />
</template>

<style scoped>
/* 可选：清空默认样式，避免干扰 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
