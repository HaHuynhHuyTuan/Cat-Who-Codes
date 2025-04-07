<template>
    <div class="container">
      <div class="row">
        <!-- About Me Card -->
        <div class="col-sm-4">
          <h2 class="text-dark m-3">About me</h2>
          <div class="card blog bg-light">
            <br>
            <img src="../assets/images/avatar.png" class="card-img-top rounded-circle px-4" />
            <div class="card-body bg-light">
              <br>
              <h5 class="card-title">Introductions</h5>
              <p class="card-text">{{ profile.intro }}</p>
              <p class="card-text">Quote: "{{ profile.quote }}"</p>
              <p class="card-text">Fullname: {{ profile.fullname }}</p>
              <p class="card-text">Email: {{ profile.email }}</p>
              <p class="card-text">Mobile: {{ profile.mobile }}</p>
            </div>
          </div>
        </div>
  
        <!-- Personal Details Form -->
        <div class="col-sm-8">
          <h2 class="text-dark m-3">Profile</h2>
          <div class="card blog bg-light-subtle">
            <div class="card-body bg-light-subtle">
              <form @submit.prevent="updateProfile">
                <div class="mb-3">
                  <label for="fullname" class="form-label">Fullname</label>
                  <input type="text" class="form-control" id="fullname" v-model="tempProfile.fullname" placeholder="Truong Anh Duc"/>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="tempProfile.email" placeholder="ductats00511@fpt.edu.vn"/>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Mobile</label>
                  <input type="tel" class="form-control" id="phone" v-model="tempProfile.mobile" placeholder="09********"/>
                </div>
                <div class="mb-3">
                  <label for="quote" class="form-label">Quote</label>
                  <input type="text" class="form-control" id="quote" v-model="tempProfile.quote" placeholder="Si vis pacem, para bellum"/>
                </div>
                <div class="mb-3">
                  <label for="intro" class="form-label">Introductions</label>
                  <input type="text" class="form-control" id="intro" v-model="tempProfile.intro" placeholder="..."/>
                </div>
                <button type="submit" class="btn btn-primary" @click="updateProfile">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, onMounted } from "vue";
  import { setCookie, getCookie } from '../utils/cookies.js'; // Import the cookie functions
  
  export default {
    setup() {
      // Main profile object for the "About Me" card
      const profile = reactive({
        fullname: "Hà Huỳnh Huy Tuấn",
        email: "tuanhhhts00576@fpt.edu.vn",
        mobile: "08********",
        quote: "Muốn được 9 điểm môn VUE và Java.",
        intro: "Muốn được 9 điểm môn VUE và Java.",
      });
  
      // Temporary object for form inputs
      const tempProfile = reactive({
        fullname: profile.fullname,
        email: profile.email,
        mobile: profile.mobile,
        quote: profile.quote,
        intro: profile.intro,
      });
  
      // Function to update the main profile object and save to cookies
      function updateProfile() {
        profile.fullname = tempProfile.fullname;
        profile.email = tempProfile.email;
        profile.mobile = tempProfile.mobile;
        profile.quote = tempProfile.quote;
        profile.intro = tempProfile.intro;
  
        // Save updated profile to cookies
        setCookie("user_fullname", profile.fullname, 2); // Save for 7 days
        setCookie("user_email", profile.email, 2);
        setCookie("user_mobile", profile.mobile, 2);
        setCookie("user_quote", profile.quote, 2);
        setCookie("user_intro", profile.intro, 2);
  
        console.log("Profile updated:", profile);
      }
  
      // Retrieve saved profile data from cookies on mount
      onMounted(() => {
        const savedFullname = getCookie("user_fullname");
        const savedEmail = getCookie("user_email");
        const savedMobile = getCookie("user_mobile");
        const savedQuote = getCookie("user_quote");
        const savedIntro = getCookie("user_intro");
  
        if (savedFullname) {
          profile.fullname = savedFullname;
          tempProfile.fullname = savedFullname;
        }
        if (savedEmail) {
          profile.email = savedEmail;
          tempProfile.email = savedEmail;
        }
        if (savedMobile) {
          profile.mobile = savedMobile;
          tempProfile.mobile = savedMobile;
        }
        if (savedQuote) {
          profile.quote = savedQuote;
          tempProfile.quote = savedQuote;
        }
        if (savedIntro) {
          profile.intro = savedIntro;
          tempProfile.intro = savedIntro;
        }
      });
  
      return {
        profile,
        tempProfile,
        updateProfile,
      };
    },
  };
  </script>
  