<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/images/banner1.jpg" class="d-block w-100" alt="Hình ảnh 1" />
      </div>
      <div class="carousel-item">
        <img src="../assets/images/banner2.jpg" class="d-block w-100" alt="Hình ảnh 2" />
      </div>
      <div class="carousel-item">
        <img src="../assets/images/banner3.jpg" class="d-block w-100" alt="Hình ảnh 3" />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="row">
    <div class="col-sm-3">
      <!-- Categories -->
      <h3 class="text-info mt-2">Chuyên mục</h3>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Chế độ tập</a>
          <span class="badge bg-primary rounded-pill">12</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
          <span class="badge bg-primary rounded-pill">63</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Cảm nang cuộc sống</a>
          <span class="badge bg-primary rounded-pill">99</span>
        </li>
      </ul>

      <!-- Featured Articles -->
    <!-- Featured Articles -->
    <div class="bg-muted border p-4 bg-white">
            <h3 class="text-info mt-2">Bài viết nổi bật</h3>
            <div class="list-group">
              <!-- Featured Item 1 -->
              <a href="#" class="list-group-item list-group-item-action border-0">
                <div class="row">
                  <div class="col-sm-6 mb-2">
                    <img src="../assets/images/corevalue.jpg" style="height: 90px; width: 90px; margin-right: 10px" />
                  </div>
                  <div class="col-sm-6">
                    <h6>Biết ơn đời, đời sẽ thương ta</h6>
                    <span class="bi bi-chat-left-fill">30</span>
                  </div>
                </div>
              </a>
  
              <!-- Featured Item 2 -->
              <a href="#" class="list-group-item list-group-item-action border-0">
                <div class="row">
                  <div class="col-sm-6 mb-2">
                    <img src="../assets/images/sesameoil_300x300.jpg" style="height: 90px; width: 90px; margin-right: 10px" />
                  </div>
                  <div class="col-sm-6">
                    <h6>10 công dụng bất ngờ từ dầu dừa</h6>
                    <span class="bi bi-chat-left-fill">15</span>
                  </div>
                </div>
              </a>
  
              <!-- Featured Item 3 -->
              <a href="#" class="list-group-item list-group-item-action border-0">
                <div class="row">
                  <div class="col-sm-6 mb-2">
                    <img src="../assets/images/spinach_300x300.jpg" style="height: 90px; width: 90px; margin-right: 10px" />
                  </div>
                  <div class="col-sm-6">
                    <h6>Lợi ích khi ăn rau mỗi ngày</h6>
                    <span class="bi bi-chat-left-fill">15</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
    <div class="col-sm-9">
      <h2 class="text-info mb-3">Tất cả bài viết</h2>
      <div class="row">
        <div class="container mt-5">
          <h2 class="text-center">Tạo Bài Đăng Mới</h2>
          <form @submit.prevent="submitPost">
            <div class="mb-3">
              <input v-model="newPost.title" placeholder="Tiêu đề" class="form-control" required />
            </div>
            <div class="mb-3">
              <textarea v-model="newPost.content" placeholder="Nội dung" class="form-control" rows="5" required></textarea>
            </div>
            <div class="mb-3">
              <input type="file" @change="handleImageUpload" accept="image/*" class="form-control" />
              <div v-if="imagePreview" class="mt-2">
                <img :src="imagePreview" alt="Hình ảnh xem trước" class="img-thumbnail" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Đăng Bài</button>
          </form>

          <div class="mt-5">
            <h2>Danh Sách Bài Viết</h2>
            <div v-for="(post, index) in posts" :key="index" class="post mb-3 p-3">
              <h3 class="text-success">{{ post.title }}</h3>
              <div v-if="post.image" class="mt-2">
                <img :src="post.image" alt="Hình ảnh bài viết" class="img-thumbnail" />
              </div>
              <p>{{ post.content }}</p>

              <!-- Xóa bài viết -->
              <button @click="deletePost(index)" class="btn btn-danger">Xóa</button>

              <!-- Chỉnh sửa bài viết -->
              <button @click="editPost(index)" class="btn btn-warning">Chỉnh sửa</button>

              <!-- Comments Section -->
              <div v-if="post.comments && post.comments.length > 0" class="comments-section mt-4">
                <h4>Bình luận:</h4>
                <div v-for="(comment, commentIndex) in post.comments" :key="commentIndex" class="comment mt-3">
                  <div class="d-flex justify-content-between">
                    <strong>{{ comment.username }}</strong>
                    <small>{{ comment.timestamp }}</small>
                  </div>
                  <p>{{ comment.content }}</p>
                </div>
              </div>

              <!-- Add a Comment Form -->
              <div class="mt-4">
                <h5>Thêm bình luận</h5>
                <form @submit.prevent="addComment(post)">
                  <div class="mb-3">
                    <textarea v-model="post.newComment.content" placeholder="Nội dung bình luận" class="form-control" rows="3" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Đăng bình luận</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import thư viện js-cookie
import Cookies from 'js-cookie';

export default {
  name: "BlogPage",
  data() {
    return {
      username: Cookies.get('fullname'),  // Lấy tên người dùng từ cookie
      newPost: {
        title: "",
        content: "",
        image: null
      },
      posts: [], // Bài viết sẽ được lấy từ localStorage khi trang tải lại
      imagePreview: null,
    };
  },
  created() {
    // Khi trang tải lại, lấy bài viết từ localStorage
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      this.posts = JSON.parse(savedPosts);
    }
  },
  methods: {
    submitPost() {
      const post = {
        ...this.newPost,
        image: this.imagePreview,
        comments: [],
        newComment: { username: "", content: "" }
      };
      
      // Thêm bài viết vào mảng bài viết
      this.posts.push(post);
      
      // Lưu bài viết vào localStorage
      localStorage.setItem('posts', JSON.stringify(this.posts));

      this.newPost.title = "";
      this.newPost.content = "";
      this.imagePreview = null;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    addComment(post) {
      const timestamp = new Date().toLocaleString();
      const newComment = {
        username: post.newComment.username || this.username || "Khách",  // Nếu không có tên người dùng, sử dụng 'Khách'
        content: post.newComment.content,
        timestamp: timestamp
      };
      post.comments.push(newComment);
      post.newComment.username = '';
      post.newComment.content = '';

      // Lưu lại bài viết cùng bình luận vào localStorage
      localStorage.setItem('posts', JSON.stringify(this.posts));
    },
    deletePost(index) {
      // Xóa bài viết khỏi mảng
      this.posts.splice(index, 1);

      // Cập nhật lại localStorage sau khi xóa
      localStorage.setItem('posts', JSON.stringify(this.posts));
    },
    editPost(index) {
      // Cập nhật thông tin bài viết vào form
      const post = this.posts[index];
      this.newPost.title = post.title;
      this.newPost.content = post.content;
      this.imagePreview = post.image;

      // Xóa bài viết cũ khỏi mảng và thay thế bằng bài viết đã chỉnh sửa
      this.deletePost(index);
    }
  }
};
</script>

<style scoped>
.post {
  border-radius: 10px;
  background-color: #f9f9f9;
}
.comment {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
