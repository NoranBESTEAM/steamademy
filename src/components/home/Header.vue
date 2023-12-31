<template>
    <section id="header">

        <!-- https://www.youtube.com/watch?v=znqUwx0b0HI -->
        <!-- https://www.w3schools.com/howto/howto_css_fullscreen_video.asp -->
        <!-- https://alvarotrigo.com/blog/background-video-css/ -->
        <!-- https://cloudconvert.com/mp4-to-webm -->

        <div id="video-wrapper">

            <video playsinline autoplay muted loop>
                <source src="@/assets/images/home/header/bg_video.webm" type="video/webm">
                <source src="@/assets/images/home/header/bg_video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div id="content">

                <div class="container">

                    <div id="content_wrapper">

                        <h1 class="mt-0 mb-4 fw-bold text-justify">
                            شركة رائدة
                            <span>...</span>
                            <br />
                            في خدمات
                            <br />
                            <span>STEAM</span>
                            التعلـيمية
                            <span>!</span>
                        </h1>

                        <p class="text-justify">نعمل لتأهيل الطلاب في مهارات المستقبل القائمة على النهضة الصناعية الرابعة عن
                            طريق توفير كل متطلبات
                            الحصول على امتياز STEAM التجاري. نهدف إلى تمكين الجهات التعليمية والمدربين من تقديم بيئة تعليمية
                            مستدامة ومبتكرة تعزز مهارات التطبيق العملي والإبداع والتعاون وحل المشكلات.</p>

                        <router-link :to="{ name: 'about' }" type="button" class="btn">
                            عرض المزيد
                        </router-link>

                    </div>

                </div>

                <!-- <div id="img_wrapper">
                    <img class="img-responsive" src="@/assets/images/home/header/header_img.webp" alt="">
                </div> -->

                <!-- https://www.youtube.com/watch?v=CapUcqphBpc -->

                <div class="clip-path">
                    <video playsinline autoplay muted loop>
                        <source src="@/assets/images/home/header/Hero_video.webm" type="video/webm">
                        <source src="@/assets/images/home/header/Hero_video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="img_wrapper">
                    <img src="@/assets/images/home/header/hero_over.webp" alt="">
                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
#header {

    margin-top: 72px;
    width: 100%;
    height: 900px;

    @include breakpoints(x-small) {
        height: 800px;
    }

    // https://www.w3schools.com/cssref/pr_background-image.php
    /* The image used */
    // background-image: url("@/assets/images/home/header/header_bg.jpg");
    background-image: linear-gradient(125deg, rgba(114, 200, 127, 1) 60%, rgba(105, 151, 146, 1) 80%, rgba(99, 117, 162, 1) 100%);
    /* Used if the image is unavailable */
    // background-color: $Gray;
    /* Center the image */
    background-position: center;
    /* Do not repeat the image */
    background-repeat: no-repeat;
    /* Resize the background image to cover the entire container */
    background-size: cover;

    #video-wrapper {

        width: 100%;
        height: 100%;

        position: relative;
        overflow: hidden;

        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 60%;
        }

        #content {

            position: relative;

            #content_wrapper {

                color: $White;

                position: absolute;

                top: 300px;

                @include breakpoints(x-small) {
                    top: 280px;
                }

                @include breakpoints(small) {
                    top: 400px;
                }

                @include breakpoints(medium) {
                    top: 400px;
                }

                @include breakpoints(large) {
                    top: 320px;
                }

                h1 {

                    font-family: 'Bahij_TheSansArabic_Bold';

                    font-size: 56px;

                    line-height: 1.2;

                    @include breakpoints(x-small) {
                        font-size: 35px;
                    }

                    @include breakpoints(small) {
                        font-size: 35px;
                    }

                    @include breakpoints(medium) {
                        font-size: 40px;
                    }

                    span {
                        color: $Ylo;
                    }

                }

                p {

                    font-size: 20px;
                    font-weight: 400;

                    margin-bottom: 40px;

                    text-align: justify;

                    width: 50%;

                    @include breakpoints(x-small) {
                        width: 95%;
                    }

                    @include breakpoints(small) {
                        width: 80%;
                    }

                    @include breakpoints(medium) {
                        width: 80%;
                    }

                }

                a {
                    // padding: 5px 12px 6px 8px;
                    border-radius: 4px;
                    background: $Orange;

                    /* Shadow */
                    box-shadow: 0px 4px 4px 0px $BoxShadow;

                    color: $White;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: normal;
                }

            }

            /* #img_wrapper {

                position: absolute;
                top: 0;
                left: 0;

                // In XX-Large
                width: 1008px;
                height: 784px;

                // In Responsive

                // 0.37
                @include breakpoints(x-small) {
                    width: 372.96px;
                    height: 290.08px;
                }

                // 0.56
                @include breakpoints(small) {
                    width: 564.48px;
                    height: 439.04px;
                }

                // 0.7
                @include breakpoints(medium) {
                    width: 705.6px;
                    height: 548.8px;
                }

                // 0.80
                @include breakpoints(large) {
                    width: 806.4px;
                    height: 627.2px;
                }

                // 0.9
                @include breakpoints(x-Large) {
                    width: 907.2px;
                    height: 705.6px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            } */
            .clip-path {
                position: absolute;
                top: 0;
                left: 0;

                // In XX-Large
                width: 1008px;
                height: 784px;

                // In Responsive

                // 0.37
                @include breakpoints(x-small) {
                    width: 372.96px;
                    height: 290.08px;
                }

                // 0.56
                @include breakpoints(small) {
                    width: 564.48px;
                    height: 439.04px;
                }

                // 0.7
                @include breakpoints(medium) {
                    width: 705.6px;
                    height: 548.8px;
                }

                // 0.80
                @include breakpoints(large) {
                    width: 806.4px;
                    height: 627.2px;
                }

                // 0.9
                @include breakpoints(x-Large) {
                    width: 907.2px;
                    height: 705.6px;
                }

                // https://codepen.io/adamlaki/pen/JxJwwB/
                // clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                clip-path: polygon(100% 0, 0 0, 50% 100%);

                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity:1;
                }

            }

            .img_wrapper{
                position: absolute;
                top: 0;
                left: 0;

                // In XX-Large
                width: 1008px;
                height: 784px;

                // In Responsive

                // 0.37
                @include breakpoints(x-small) {
                    width: 372.96px;
                    height: 290.08px;
                }

                // 0.56
                @include breakpoints(small) {
                    width: 564.48px;
                    height: 439.04px;
                }

                // 0.7
                @include breakpoints(medium) {
                    width: 705.6px;
                    height: 548.8px;
                }

                // 0.80
                @include breakpoints(large) {
                    width: 806.4px;
                    height: 627.2px;
                }

                // 0.9
                @include breakpoints(x-Large) {
                    width: 907.2px;
                    height: 705.6px;
                }

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

        }

    }


}
</style>