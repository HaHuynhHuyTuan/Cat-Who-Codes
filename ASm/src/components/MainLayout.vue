<template>
    <div>
      <Navbar />
      <router-view /> <!-- Chỗ này sẽ hiển thị nội dung của các component con -->
    </div>
  </template>
  
  <script>
import Navbar from './Navbar.vue';  
  export default {
    components: {
      Navbar,
    },
  };
  </script>
  