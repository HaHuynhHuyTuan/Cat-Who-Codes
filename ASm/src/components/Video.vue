<template>
    <div class="container">
      <h2 class="text-info mb-4 text-center">VIDEO - ĐỪNG BỎ LỠ</h2>
      <div class="row">
        <!-- Sidebar -->
        <div class="col-sm-4">
          <div class="mb-3">
            <a class="text-info text-decoration-none me-3"><strong>Đọc nhiều</strong></a>
            <a class="text-info text-decoration-none"><strong>Xem nhiều</strong></a>
          </div>
          <div class="bg-muted border p-4 bg-white">
            <div class="list-group">
              <!-- Item 1 -->
              <a href="#" class="list-group-item list-group-item-action border-0">
                <div class="row">
                  <div class="col-sm-5 mb-2">
                    <img
                      src="../assets/images/corevalue.jpg"
                      style="height: 90px; width: 90px; margin-right: 10px;"
                      alt="Core Value"
                    />
                  </div>
                  <div class="col-sm-7">
                    <h6>Biết ơn đời, đời sẽ thương ta</h6>
                    <span class="bi bi-chat-left-fill"> 30</span>
                  </div>
                </div>
              </a>
  
              <!-- Item 2 -->
              <a href="#" class="list-group-item list-group-item-action border-0">
                <div class="row">
                  <div class="col-sm-5 mb-2">
                    <img
                      src="../assets/images/sesameoil_300x300.jpg"
                      style="height: 90px; width: 90px; margin-right: 10px;"
                      alt="Sesame Oil"
                    />
                  </div>
                  <div class="col-sm-7">
                    <h6>10 công dụng bất ngờ từ dầu dừa</h6>
                    <span class="bi bi-chat-left-fill"> 15</span>
                  </div>
                </div>
              </a>
  
              <!-- Item 3 -->
              <a href="#" class="list-group-item list-group-item-action border-0">
                <div class="row">
                  <div class="col-sm-5 mb-2">
                    <img
                      src="../assets/images/spinach_300x300.jpg"
                      style="height: 90px; width: 90px; margin-right: 10px;"
                      alt="Spinach"
                    />
                  </div>
                  <div class="col-sm-7">
                    <h6>Lợi ích khi ăn rau mỗi ngày</h6>
                    <span class="bi bi-chat-left-fill"> 15</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Video Section -->
        <div class="col-sm-8">
          <div class="row">
            <!-- Video 1 -->
            <div class="col-md-5 mb-5 border p-3" style="width: 350px;">
              <img src="../assets/images/video1.jpg" style="width: 100%; height: auto;" alt="Video 1" />
              <div class="fw-bold">Đi xa hơn để trưởng thành hơn</div>
              <div class="video-description">Tuổi trẻ là những chuyến đi, để mong một ngày được nhìn thấy thành công, trưởng thành hơn trong cuộc sống.</div>
            </div>
  
            <!-- Video 2 -->
            <div class="col-md-5 mb-5 border p-3" style="width: 350px;">
              <img src="../assets/images/video2.jpg" style="width: 100%; height: auto;" alt="Video 2" />
              <div class="fw-bold">Chút tâm sự cuối năm</div>
              <div class="video-description">Cuộc sống không dài, hãy làm điều mình yêu, yêu thương hết mình để không phải hối tiếc.</div>
            </div>
  
            <!-- Video 3 -->
            <div class="col-md-5 mb-5 border p-3" style="width: 350px;">
              <img src="../assets/images/video3.jpg" style="width: 100%; height: auto;" alt="Video 3" />
              <div class="fw-bold">Ước gì được về tuổi thơ</div>
              <div class="video-description">Tuổi thơ là giấc mơ đầy màu sắc, là nơi để mọi người tìm lại ký ức ngọt ngào nhất.</div>
            </div>
  
            <!-- Video 4 -->
            <div class="col-md-5 mb-5 border p-3" style="width: 350px;">
              <img src="../assets/images/video4.jpg" style="width: 100%; height: auto;" alt="Video 4" />
              <div class="fw-bold">Ba người thầy vĩ đại</div>
              <div class="video-description">Học hỏi từ những người thầy trong cuộc đời để trở nên vững vàng hơn.</div>
            </div>
  
            <!-- "Xem Thêm" Button -->
            <div class="text-center">
              <a href="#"><button class="btn btn-primary">Xem Thêm</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoSection'
  };
  </script>
  
  <style scoped>
  .video-description {
    font-size: 0.9rem;
    color: #666;
  }
  </style>
  