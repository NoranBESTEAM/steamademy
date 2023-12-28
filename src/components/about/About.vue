<template>
    <section id="about">

        <div class="container">

            <div class="row">

                <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 d-flex justify-content-center align-items-center">

                    <div id="text_wrapper">

                        <h3 class="fw-bold mb-4 text-justify wow animate__animated animate__backInRight animate__slow" data-wow-offset="1" data-wow-delay="0.1s">من نحن</h3>

                        <h5 class="fw-bold mb-3 text-justify wow animate__animated animate__backInRight animate__slow" data-wow-offset="1" data-wow-delay="0.2s">شركة رائدة في خدمات STEAM التعليمية!</h5>

                        <p class="text-justify wow animate__animated animate__backInRight animate__slow" data-wow-offset="1" data-wow-delay="0.3s">نعمل لتأهيل الطلاب في مهارات المستقبل القائمة على النهضة الصناعية الرابعة عن
                            طريق توفير كل
                            متطلبات الحصول على امتياز STEAM التجاري. نهدف إلى تمكين الجهات التعليمية والمدربين من تقديم بيئة
                            تعليمية مستدامة ومبتكرة تعزز مهارات التطبيق العملي والإبداع والتعاون وحل المشكلات.</p>

                    </div>

                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 wow animate__animated animate__backInLeft animate__slow" data-wow-offset="1" data-wow-delay="0.4s">

                    <div id="image_wrapper">
                        <img src="@/assets/images/about/about/About_kids.webp" alt="">
                    </div>

                </div>

            </div>


        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'About',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#about {

    margin-top: 72px;

    padding-top: 40px;
    padding-bottom: 40px;

    .container {

        #text_wrapper {

            h3 {
                font-family: 'Bahij_TheSansArabic_Bold';
                color: $Mov;
                // text-align: right;
                font-size: 24px;
                // font-weight: 500;
                line-height: normal;

                @include breakpoints(x-small) {
                    text-align: center;
                }

                @include breakpoints(small) {
                    text-align: center;
                }

                @include breakpoints(medium) {
                    text-align: center;
                }
            }

            h5 {
                color: $Green;
                font-size: 18px;
                // font-weight: 500;
                line-height: normal;
            }

            p {
                color: $Black;
                font-size: 18px;
                font-weight: 400;
                line-height: normal;
                text-align: justify;
            }

        }

        #image_wrapper {

            width: 529px;
            height: 392px;

            @include breakpoints(x-small) {
                width: 343px;
                height: 254px;
                margin: 0 auto;
            }

            @include breakpoints(small) {
                width: 343px;
                height: 254px;
                margin: 0 auto;
            }

            @include breakpoints(medium) {
                width: 343px;
                height: 254px;
                margin: 0 auto;
            }

            // 0.75
            @include breakpoints(large) {
                width: 396.75px;
                height: 294px;
            }

            // 0.92
            @include breakpoints(x-Large) {
                width: 486.68px;
                height: 360.64px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

    }

}
</style>