    <template>
        <div>
            <h4 class="text-primary">Bình Luận</h4>
            <!-- Hiển thị danh sách bình luận -->
            <div v-for="(comment, index) in comments" :key="index" class="mb-3">
                <strong>{{ comment.name }}</strong>: {{ comment.text }}
            </div>

            <!-- Form thêm bình luận -->
            <div v-if="user.isLoggedIn" class="mt-3">
                <h5>Chào, {{ user.name }}! Hãy để lại bình luận:</h5>
                <form @submit.prevent="addComment">
                    <div class="mb-3">
                        <textarea 
                            v-model="newCommentText" 
                            class="form-control" 
                            rows="3" 
                            placeholder="Nhập bình luận của bạn..." 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Gửi</button>
                </form>
            </div>

            <!-- Hiển thị thông báo khi chưa đăng nhập -->
            <div v-else>
                <p class="text-danger">Bạn cần đăng nhập để bình luận.</p>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: {
            comments: {
                type: Array,
                required: true
            },
            user: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                newCommentText: ""
            };
        },
        methods: {
            addComment() {
                const newComment = {
                    name: this.user.name,
                    text: this.newCommentText
                };
                this.$emit("add-comment", newComment);
                this.newCommentText = ""; // Clear input after submitting
            }
        }
    };
    </script>
