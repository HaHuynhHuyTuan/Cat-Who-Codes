<template>
    <div class="container mt-3">
      <!-- Tab Navigation -->
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#register">Đăng ký</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#login">Đăng nhập</a>
        </li>
      </ul>
  
      <div class="tab-content">
        <!-- Login Tab -->
        <div id="login" class="container tab-pane active">
          <h2 class="mt-3">Đăng Nhập</h2>
          <form @submit.prevent="validateLogin" class="needs-validation" novalidate>
            <div class="mb-3">
              <label for="email-login" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email-login"
                v-model="loginEmail"
                placeholder="Nhập email"
                required
              />
              <div class="invalid-feedback">Vui lòng nhập email hợp lệ.</div>
            </div>
            <div class="mb-3">
              <label for="password-login" class="form-label">Mật Khẩu</label>
              <input
                type="password"
                class="form-control"
                id="password-login"
                v-model="loginPassword"
                placeholder="Nhập mật khẩu"
                required
              />
              <div class="invalid-feedback">Vui lòng nhập mật khẩu.</div>
            </div>
            <button type="submit" class="btn btn-primary">Đăng Nhập</button>
          </form>
        </div>
  
        <!-- Register Tab -->
        <div id="register" class="container tab-pane fade">
          <h2 class="mt-3">Đăng Ký</h2>
          <form @submit.prevent="validateRegister" class="needs-validation" novalidate>
            <div class="mb-3">
              <label for="fullname" class="form-label">Họ và Tên</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                v-model="fullname"
                placeholder="Nhập họ và tên"
                required
              />
              <div class="invalid-feedback">Vui lòng nhập họ và tên.</div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="Nhập email"
                required
              />
              <div class="invalid-feedback">Vui lòng nhập một địa chỉ email hợp lệ.</div>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Số Điện Thoại</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                v-model="phone"
                placeholder="Nhập số điện thoại"
                required
              />
              <div class="invalid-feedback">Vui lòng nhập số điện thoại hợp lệ.</div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Mật Khẩu</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Nhập mật khẩu"
                required
              />
              <div class="invalid-feedback">Mật khẩu phải có ít nhất 8 ký tự.</div>
            </div>
            <div class="mb-3">
              <label for="confirm-password" class="form-label">Xác Nhận Mật Khẩu</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                v-model="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                required
              />
              <div class="invalid-feedback">Mật khẩu không khớp.</div>
            </div>
            <div class="mb-3">
              <label>Giới Tính</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  v-model="gender"
                  required
                />
                <label class="form-check-label" for="male">Nam</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  v-model="gender"
                  required
                />
                <label class="form-check-label" for="female">Nữ</label>
              </div>
            </div>
            <div class="mb-3">
              <label for="language" class="form-label">Ngôn Ngữ</label>
              <select class="form-select" id="language" v-model="language" required>
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
              <div class="invalid-feedback">Vui lòng chọn ngôn ngữ.</div>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="terms"
                v-model="terms"
                required
              />
              <label class="form-check-label" for="terms">
                Tôi đồng ý với các điều khoản và điều kiện
              </label>
              <div class="invalid-feedback">
                Bạn phải đồng ý với các điều khoản và điều kiện.
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Đăng Ký</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Import thư viện js-cookie
  import Cookies from 'js-cookie';
  
  export default {
    data() {
      return {
        // Login fields
        loginEmail: "",
        loginPassword: "",
  
        // Register fields
        fullname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "male",
        language: "vi",
        terms: false,
  
      };
    },
    methods: {
      validateLogin() {
        const form = document.querySelector("#login form");
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          return;
        }
        // Save username (fullname) in cookie after login
        const storedUsername = Cookies.get('fullname');
        this.username = storedUsername || "Người dùng chưa đăng nhập";
        this.isLoggedIn = true;
        this.$router.replace('/AddPost');
      },
      validateRegister() {
        const form = document.querySelector("#register form");
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          return;
        }
        // Save fullname in cookie after successful registration
        Cookies.set('fullname', this.fullname);
        this.username = this.fullname;
        this.isLoggedIn = true;
        alert("Đăng ký thành công!");
      },
      addComment() {
        if (this.commentText) {
          this.comments.push({ username: this.username, text: this.commentText });
          this.commentText = ""; // Clear the input
        }
      }
    },
    mounted() {
      // Check if user is already logged in
      const storedUsername = Cookies.get('fullname');
      if (storedUsername) {
        this.username = storedUsername;
        this.isLoggedIn = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .comment-section {
    margin-top: 20px;
  }
  .comment {
    margin-bottom: 15px;
  }
  textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  