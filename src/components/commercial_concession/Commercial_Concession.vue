<template>
    <section id="commercial_concession">

        <div class="container">

            <div class="row">

                <div id="text_content" class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 my-auto">

                    <h3
                        class="fw-bold text-justify mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="1" data-wow-delay="0.1s">
                        امتياز STEAM التجاري</h3>

                    <p class="text-justify mb-4 wow animate__animated animate__backInUp animate__slow" data-wow-offset="1" data-wow-delay="0.2s">يوفر
                        لك منظومة متكاملة لتحقيق أفضل عائد على استثماراتك بداية من التجهيزات
                        والمحتوى العلمي وتأهيل فريقك وحتى وسائل التواصل مع الطلاب والتسويق كل ما عليك هو أن تؤمن بقدرتك على
                        تغيير المستقبل وتحقيق أهداف الثورة الصناعية الرابعة.</p>

                </div>

                <div id="img_content" class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 wow animate__animated animate__fadeIn animate__slow" data-wow-offset="1" data-wow-delay="0.3s">

                    <div id="img_wrapper">
                        <img src="@/assets/images/home/commercial_concession/Kid_pic.webp" alt="">
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Commercial_Concession',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#commercial_concession {

    margin-top: 72px;

    padding-top: 40px;
    padding-bottom: 40px;

    // https://www.w3schools.com/css/css3_backgrounds.asp

    background: url("@/assets/images/commercial_concession/commercial_concession/Triangle.webp") left top no-repeat, url("@/assets/images/commercial_concession/commercial_concession/Triangle2.webp") right bottom no-repeat;

    background-size: 356.495px 291px, 356.495px 291px;

    background-color: $White;

    .container {

        #text_content {

            /* @include breakpoints(x-small) {
                order: 1;
            }

            @include breakpoints(small) {
                order: 1;
            }

            @include breakpoints(medium) {
                order: 1;
            } */

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

        }

        #img_content {

            /* @include breakpoints(x-small) {
                order: 2;
            }

            @include breakpoints(small) {
                order: 2;
            }

            @include breakpoints(medium) {
                order: 2;
            } */

            #img_wrapper {

                width: 339px;
                height: 392px;

                // float: left;
                float: inline-end;

                @include breakpoints(x-small) {
                    width: 271.2px;
                    height: 313.6px;
                    float: inherit;
                    margin: 0 auto;
                }

                @include breakpoints(small) {
                    width: 271.2px;
                    height: 313.6px;
                    float: inherit;
                    margin: 0 auto;
                }

                @include breakpoints(medium) {
                    width: 271.2px;
                    height: 313.6px;
                    float: inherit;
                    margin: 0 auto;
                }

                // 0.8
                @include breakpoints(large) {
                    width: 271.2px;
                    height: 313.6px;
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