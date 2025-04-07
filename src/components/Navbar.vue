<template>
    <div>
        <!-- Thanh Điều Hướng (Navigation"Menu") -->
        <nav class="navbar navbar-expand-sm bg-black navbar-dark">
            <a class="navbar-brand" href="#">
                <img src="../assets/images/logo-energy-pilates.png" alt="" style="width: 150px;" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/AddPost"><i class="fa-solid fa-list"></i>Bài viết</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Video"><i class="fa-solid fa-film"></i> Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/GioiThieu"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/PostDetail"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
                    </li>
                </ul>
                <ul class="navbar-nav d-flex">
                    <li class="nav-item">
                        <a class="nav-link" @click="changeLanguage('vi')">Tiếng Việt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="changeLanguage('en')">Tiếng Anh</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>
export default {
    methods: {
        changeLanguage(language) {
            console.log(`Language changed to: ${language}`);
        },
    },
};
</script>
