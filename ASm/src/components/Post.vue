<template>
  <!-- Carousel -->
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

  <!-- Sidebar and Articles -->
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
        <div class="container m-2">
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

          <h2 class="m-3">Danh sách bài viết</h2>

        </div>

        <!-- Blog Section with Featured Articles -->
        <div class="col-md-6 mb-4" v-for="(post, index) in posts" :key="index">
          <div class="border p-3 bg-white" style="border-radius: 5px;">
            <h5>{{ post.title }} <span class="bi bi-chat-left-fill">{{ post.commentsCount || 0 }}</span></h5>
            <img :src="post.image" style="width: 100%;" class="mx-auto d-block" />
            <p>{{ post.content }}</p>
          </div>
        </div>
        
        <!-- Blog 1 -->
        <div class="col-md-6 mb-4">
              <div class="border p-3 bg-white" style="border-radius: 5px;">
                <h5>Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                  <span class="bi bi-chat-left-fill">16</span>
                </h5>
                <img src="../assets/images/tap-piltes.jpg" style="width: 100%;" class="mx-auto d-block" />
                <p>
                  Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dài hơn, kéo giãn hơn...
                </p>
              </div>
            </div>
  
            <!-- Blog 2 -->
            <div class="col-md-6 mb-4">
              <div class="border p-3 bg-white" style="border-radius: 5px;">
                <h5>Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn
                  <span class="bi bi-chat-left-fill">10</span>
                </h5>
                <img src="../assets/images/tap-pilates1.jpg" style="width: 100%;" class="mx-auto d-block" />
                <p>
                  Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh, bộ môn này đã trở thành một cơn sốt...
                </p>
              </div>
            </div>
  
           
        <!-- Pagination -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      newPost: {
        title: "",
        content: "",
        image: null
      },
      posts: [],
      imagePreview: null,
      currentPage: 1,
      totalPages: 3,
    };
  },
  methods: {
    submitPost() {
      const post = {
        ...this.newPost,
        image: this.imagePreview,
        comments: [],
        newComment: { username: '', content: '' }
      };
      this.posts.push(post);
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
        username: post.newComment.username,
        content: post.newComment.content,
        timestamp: timestamp
      };
      post.comments.push(newComment);
      post.newComment.username = '';
      post.newComment.content = '';
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
.post {
  border-radius: 10px;
  background-color: #f9f9f9;
}
.highlighted {
  background-color: #f1f1f1;
}
.comment {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>