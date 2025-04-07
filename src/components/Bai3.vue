<template>
    <div class="container mt-5">
        <!-- Form đăng ký -->
        <h2 class="text-center">Form Đăng Ký Người Dùng</h2>
        <form @submit.prevent="registerUser" class="mt-4">
            <!-- Họ tên -->
            <div class="form-group">
                <label for="fullname">Họ và tên:</label>
                <input 
                    type="text" 
                    id="fullname" 
                    v-model="user.fullname" 
                    class="form-control" 
                    placeholder="Nhập họ và tên" 
                    required />
            </div>

            <!-- Email -->
            <div class="form-group mt-3">
                <label for="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    v-model="user.email" 
                    class="form-control" 
                    placeholder="Nhập email" 
                    required />
            </div>

            <!-- Mật khẩu -->
            <div class="form-group mt-3">
                <label for="password">Mật khẩu:</label>
                <input 
                    type="password" 
                    id="password" 
                    v-model="user.password" 
                    class="form-control" 
                    placeholder="Nhập mật khẩu" 
                    required />
            </div>

            <!-- Ngày sinh -->
            <div class="form-group mt-3">
                <label for="birthdate">Ngày sinh:</label>
                <input 
                    type="date" 
                    id="birthdate" 
                    v-model="user.birthdate" 
                    class="form-control" 
                    required />
            </div>

            <!-- Giới tính -->
            <div class="form-group mt-3">
                <label>Giới tính:</label>
                <div>
                    <input 
                        type="radio" 
                        id="male" 
                        value="Nam" 
                        v-model="user.gender" 
                        required />
                    <label for="male">Nam</label>

                    <input 
                        type="radio" 
                        id="female" 
                        value="Nữ" 
                        v-model="user.gender" 
                        class="ms-3" />
                    <label for="female">Nữ</label>
                </div>
            </div>

            <!-- Ngôn ngữ -->
            <div class="form-group mt-3">
                <label for="language">Ngôn ngữ:</label>
                <select 
                    id="language" 
                    v-model="user.language" 
                    class="form-control" 
                    required>
                    <option value="" disabled>Chọn ngôn ngữ</option>
                    <option value="Tiếng Việt">Tiếng Việt</option>
                    <option value="English">English</option>
                    <option value="Français">Français</option>
                </select>
            </div>

            <!-- Nút đăng ký -->
            <button type="submit" class="btn btn-primary mt-4">Đăng ký</button>
        </form>

        <!-- Hiển thị thông tin đã đăng ký -->
        <div v-if="isRegistered" class="mt-5">
            <h3>Thông tin người dùng đã đăng ký:</h3>
            <p><strong>Họ và tên:</strong> {{ user.fullname }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Ngày sinh:</strong> {{ user.birthdate }}</p>
            <p><strong>Giới tính:</strong> {{ user.gender }}</p>
            <p><strong>Ngôn ngữ:</strong> {{ user.language }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                fullname: "",
                email: "",
                password: "",
                birthdate: "",
                gender: "",
                language: ""
            },
            isRegistered: false // Cờ để kiểm tra trạng thái đăng ký
        };
    },
    methods: {
        registerUser() {
            // Kiểm tra các trường nhập liệu (cơ bản)
            if (!this.user.fullname || !this.user.email || !this.user.password || !this.user.birthdate || !this.user.gender || !this.user.language) {
                alert("Vui lòng nhập đầy đủ thông tin!");
                return;
            }
            // Đánh dấu là đã đăng ký
            this.isRegistered = true;
            // Xóa mật khẩu để bảo mật (tuỳ chọn)
            this.user.password = "";
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: auto;
}
</style>
