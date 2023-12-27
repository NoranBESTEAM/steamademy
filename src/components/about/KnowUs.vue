<template>
    <section id="know_us">

        <div class="container">

            <h3
                class="text-center fw-bold text-justify mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="0.5s">

                <img src="@/assets/images/about/know_us/know_us.svg" alt="" class="ms-3">تعرف علينا

            </h3>

            <!-- https://getbootstrap.com/docs/5.3/helpers/ratio/#example -->
            <!-- <div id="know_video" class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div> -->

            <!-- https://blog.teamtreehouse.com/building-custom-controls-for-html5-videos -->

            <div id="video_wrapper"
                class="ratio ratio-21x9 wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1s">
                <!-- https://www.w3schools.com/tags/att_video_poster.asp -->
                <video poster="@/assets/images/about/know_us/Steam_Video.webp" controls>
                    <source src="@/assets/images/about/know_us/STEAMademy.webm" type="video/webm">
                    <source src="@/assets/images/about/know_us/STEAMademy.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'KnowUs',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#know_us {

    padding-top: 40px;
    padding-bottom: 40px;

    h3 {
        font-family: 'Bahij_TheSansArabic_Bold';
        color: $Mov;
        font-size: 24px;
        // font-weight: 500;
        line-height: normal;

        img {

            width: 56px;
            height: 56px;

            @include breakpoints(x-small) {
                width: 32px;
                height: 32px;
            }

            @include breakpoints(small) {
                width: 32px;
                height: 32px;
            }

            @include breakpoints(medium) {
                width: 32px;
                height: 32px;
            }
            
        }

    }

    /* #know_video {
        iframe {
            border-radius: 16px;
        }
    } */

    #video_wrapper {

        width: 100%;
        height: 100%;

        video {

            border-radius: 16px;

            width: 100%;
            height: 100%;
            object-fit: cover;

        }

    }

}
</style>