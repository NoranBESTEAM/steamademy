<template>
    <section id="concession_home">

        <div class="container">

            <div class="row">

                <div id="img_content"
                    class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 wow animate__animated animate__fadeIn animate__slow" data-wow-offset="10" data-wow-delay="0.5s">

                    <div id="img_wrapper">
                        <img src="@/assets/images/home/commercial_concession/Kid_pic.webp" alt="">
                    </div>

                </div>

                <div id="text_content"
                    class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 my-auto">

                    <h3 class="fw-bold text-justify mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="1s">
                        امتياز STEAM التجاري</h3>

                    <p class="text-justify mb-4 wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1.5s">
                        يوفر
                        لك منظومة متكاملة لتحقيق أفضل عائد على استثماراتك بداية من التجهيزات
                        والمحتوى العلمي وتأهيل فريقك وحتى وسائل التواصل مع الطلاب والتسويق كل ما عليك هو أن تؤمن بقدرتك على
                        تغيير المستقبل وتحقيق أهداف الثورة الصناعية الرابعة.</p>

                    <router-link :to="{ name: 'commercial_concession' }" type="button" class="btn fw-bold wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="2s">
                        عرض المزيد
                        <font-awesome-icon :icon="['fas', 'fa-arrow-left']" class="me-2" />
                    </router-link>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Concession_Home',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#concession_home {

    padding-top: 40px;
    padding-bottom: 40px;

    // https://www.w3schools.com/css/css3_backgrounds.asp

    background: url("@/assets/images/home/commercial_concession/Triangle.webp") left top no-repeat, url("@/assets/images/home/commercial_concession/Triangle2.webp") right bottom no-repeat;

    background-size: 356.495px 291px, 356.495px 291px;

    background-color: $Gray;

    .container {

        #img_content {

            @include breakpoints(x-small) {
                order: 2;
            }

            @include breakpoints(small) {
                order: 2;
            }

            @include breakpoints(medium) {
                order: 2;
            }

            #img_wrapper {

                width: 339px;
                height: 392px;

                @include breakpoints(x-small) {
                    width: 343px;
                    height: 347px;
                }

                @include breakpoints(small) {
                    width: 343px;
                    height: 347px;
                }

                @include breakpoints(medium) {
                    width: 343px;
                    height: 347px;
                }

                // 0.8
                @include breakpoints(large) {
                    width: 271.2px;
                    height: 313.6px;
                }

                margin: 0 auto;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            }

        }

        #text_content {

            @include breakpoints(x-small) {
                order: 1;
            }

            @include breakpoints(small) {
                order: 1;
            }

            @include breakpoints(medium) {
                order: 1;
            }

            h3 {
                font-family: 'Bahij_TheSansArabic_Bold';
                color: $Mov;
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

            p {
                color: $Black;
                font-size: 18px;
                font-weight: 400;
                line-height: normal;
                text-align: justify;
            }

            a {
                padding: 5px 0px;

                display: inline-flex;
                align-items: center;

                color: $Orange;
                font-size: 18px;
                // font-weight: 500;
                line-height: normal;

                svg {
                    width: 24px;
                    height: 24px;
                }
            }

        }

    }
}
</style>