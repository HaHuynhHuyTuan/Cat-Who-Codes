<template>
  <div id="app">
    <!-- Form Đăng Nhập -->
    <div v-if="!isLoggedIn" class="login-form">
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="Nhập email"
          />
          <span v-if="!isEmailValid && email !== ''" class="error">
            Email không hợp lệ
          </span>
        </div>
        <div>
          <label for="password">Mật khẩu:</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="Nhập mật khẩu"
          />
          <span v-if="!isPasswordValid && password !== ''" class="error">
            Mật khẩu phải có ít nhất 6 ký tự
          </span>
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>

    <!-- Sau khi đăng nhập -->
    <div v-else class="welcome-section">
      <h2>Chào mừng, {{ email }}!</h2>
      <button @click="handleLogout">Đăng xuất</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      email: "",
      password: "",
      isLoggedIn: false,
    };
  },
  computed: {
    isEmailValid() {
      // Kiểm tra định dạng email
      return /\S+@\S+\.\S+/.test(this.email);
    },
    isPasswordValid() {
      // Mật khẩu phải có ít nhất 6 ký tự
      return this.password.length >= 3;
    },
  },
  methods: {
    handleLogin() {
      if (this.isEmailValid && this.isPasswordValid) {
        this.isLoggedIn = true;
      } else {
        alert("Vui lòng kiểm tra lại email và mật khẩu!");
      }
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.login-form,
.welcome-section {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 16px;
  display: block;
}
</style>
