<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-8">
                <h1 class="text-center text-primary">Phương pháp tập Pilate giúp hồi phục chấn thương cuộc sống</h1>
                <img src="../assets/images/tap-pilates1.jpg" style="width: 100%;" alt="Hình ảnh bài viết" />
                <p class="mt-2">
                    Pilates là một loại bài tập thể dục kết hợp giữa tâm trí và cơ thể được phát triển vào đầu thế kỷ 20
                    bởi huấn luyện viên thể chất người Đức Joseph Pilates, người mà phương pháp này được đặt theo tên
                    ông.
                    Pilates gọi phương pháp của mình là "Contrology" Phương pháp này được thực hành trên toàn thế giới,
                    đặc biệt là ở các nước phát triển như Úc, Canada, Đức, Hàn Quốc, New Zealand, Các Tiểu vương quốc Ả
                    Rập
                    Thống nhất, Vương quốc Anh và Hoa Kỳ.
                </p>

                <h3>Pilate giúp hồi phục chấn thương nhanh chóng</h3>
                <p>
                    Pilates sử dụng sự kết hợp của khoảng 50 bài tập lặp đi lặp lại để thúc đẩy sự vận động của cơ. Mỗi
                    bài
                    tập đều bắt nguồn từ "năm yếu tố thiết yếu": hơi thở, sự liên kết của cổ, sự ổn định của xương sườn
                    và
                    xương bả vai, sự linh hoạt của xương chậu và sự sử dụng cơ bụng ngang. Mỗi bài tập thường được lặp
                    lại
                    từ ba đến năm lần. Tính đến năm 2023, có hơn 12 triệu người tập Pilates
                </p>
                <img src="../assets/images/tap-piltes.jpg" style="width: 100%;" alt="Hình ảnh bài viết" />
                <h3>Pilate giúp hồi phục chấn thương nhanh chóng</h3>
                <p>
                    Pilates sử dụng sự kết hợp của khoảng 50 bài tập lặp đi lặp lại để thúc đẩy sự vận động của cơ. Mỗi
                    bài
                    tập đều bắt nguồn từ "năm yếu tố thiết yếu": hơi thở, sự liên kết của cổ, sự ổn định của xương sườn
                    và
                    xương bả vai, sự linh hoạt của xương chậu và sự sử dụng cơ bụng ngang. Mỗi bài tập thường được lặp
                    lại
                    từ ba đến năm lần. Tính đến năm 2023, có hơn 12 triệu người tập Pilates
                </p>
            </div>

            <div class="col-md-4">
                <h3>Ý Kiến Độc Giả</h3>
                <form @submit.prevent="submitComment">
                    <div class="mb-3">
                        <label for="comment" class="form-label">Để lại ý kiến của bạn:</label>
                        <textarea v-model="newComment" class="form-control" id="comment" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success">Gửi bình luận</button>
                </form>
                <div class="comments-section mt-3">
                    <h3>Danh sách các bình luận:</h3>
                    <div class="comment" v-for="(comment, index) in comments" :key="index">
                        <p><strong>{{ comment.name }}:</strong> {{ comment.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newComment: "",
            comments: [
                { name: "Bình An", text: "Bài viết rất hữu ích" },
                { name: "Bình An", text: "Cảm ơn bài chia sẻ bổ ích!" }
            ]
        };
    },
    methods: {
        submitComment() {
            if (this.newComment.trim()) {
                this.comments.push({
                    name: "",
                    text: this.newComment
                });
                this.newComment = ""; // Clear the textarea after submission
            }
        }
    }
};
</script>

<style scoped>
/* Add any custom styling here */
</style>