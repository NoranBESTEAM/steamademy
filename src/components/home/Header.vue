<template>
    <section id="header">

        <!-- https://www.youtube.com/watch?v=znqUwx0b0HI -->
        <!-- https://www.w3schools.com/howto/howto_css_fullscreen_video.asp -->
        <!-- https://alvarotrigo.com/blog/background-video-css/ -->
        <!-- https://cloudconvert.com/mp4-to-webm -->

        <div id="video-wrapper">

            <video playsinline autoplay muted loop poster="@/assets/images/home/header/header_bg.jpg">
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

                <div id="img_wrapper">
                    <img class="img-responsive" src="@/assets/images/home/header/header_img.png" alt="">
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
        height: 770px;
    }

    @include breakpoints(small) {
        height: 750px;
    }

    @include breakpoints(medium) {
        height: 825px;
    }

    @include breakpoints(large) {
        height: 825px;
    }

    @include breakpoints(x-Large) {
        height: 830px;
    }

    // https://www.w3schools.com/cssref/pr_background-image.php
    /* The image used */
    background-image: url("@/assets/images/home/header/header_bg.jpg");
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

                position: absolute;
                top: 310px;

                color: $White;

                @include breakpoints(x-small) {
                    top: 250px;
                }

                @include breakpoints(small) {
                    top: 250px;
                }

                @include breakpoints(medium) {
                    top: 350px;
                }

                @include breakpoints(large) {
                    top: 250px;
                }

                @include breakpoints(x-Large) {
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

                    width: 60%;
                    font-size: 20px;
                    font-weight: 400;

                    margin-bottom: 40px;

                    @include breakpoints(x-small) {
                        width: 95%;
                    }

                    @include breakpoints(small) {
                        width: 80%;
                    }

                    @include breakpoints(medium) {
                        width: 80%;
                    }

                    // @include breakpoints(large) {}

                    @include breakpoints(x-Large) {
                        width: 57%;
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

            #img_wrapper {

                position: absolute;
                top: -45px;
                left: 0;

                // In XX-Large
                // width: 1081px;
                // height: 952px;
                width: 1000px;
                height: 871px;

                // In Responsive

                @include breakpoints(x-small) {
                    width: 496px;
                    height: 300px;
                }

                @include breakpoints(small) {
                    width: 596px;
                    height: 400px;
                }

                @include breakpoints(medium) {
                    width: 796px;
                    height: 600px;
                }

                @include breakpoints(large) {
                    width: 796px;
                    height: 600px;
                }

                @include breakpoints(x-Large) {
                    width: 996px;
                    height: 800px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            }

        }

    }

}
</style>