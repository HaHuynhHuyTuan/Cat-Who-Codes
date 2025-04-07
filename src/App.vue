<template>
  <!-- Hiển thị Navbar nếu không ở trang SignUp -->
  <Navbar v-if="showNavbar" />
  <RouterView style="min-height: 100vh;" />
  <footer class="row bg-dark text-white text-center p-3 mt-5">
    <p>Tuanhhht00576@fpt.edu.vn</p>
  </footer>
</template>
<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// Hàm tính toán để xác định có hiển thị Navbar không
const showNavbar = computed(() => {
  return !route.path.includes('SignUp'); // Ẩn Navbar khi path chứa 'SignUp'
});
</script>
