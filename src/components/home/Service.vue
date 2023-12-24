<template>
    <section id="service">

        <div class="container">

            <h3
                class="text-center fw-bold text-justify mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10">
                ماذا نستطيع أن نقدم لك؟</h3>

            <div id="content_wrapper" class="wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1s">

                <!-- d-inline-block -->
                <div class="service_ele">

                    <img src="@/assets/images/home/service/integrated_education.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">تعليم متكامل</h5>

                </div>

                <div class="service_ele">

                    <img src="@/assets/images/home/service/innovative_programs.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">برامج مبتكرة</h5>

                </div>

                <div class="service_ele">

                    <img src="@/assets/images/home/service/complete_support.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">دعم كامل</h5>

                </div>

                <div class="service_ele">

                    <img src="@/assets/images/home/service/continuous_training.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">تدريب مستمر</h5>

                </div>

                <div class="service_ele">

                    <img src="@/assets/images/home/service/marketing_support.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">دعم تسويقي</h5>

                </div>

                <div class="service_ele">

                    <img src="@/assets/images/home/service/exceptional_experience.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">تجربة استثنائية</h5>

                </div>

                <div class="service_ele">

                    <img src="@/assets/images/home/service/business_model.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">نموذج عمل</h5>

                </div>

                <div class="service_ele">

                    <img src="@/assets/images/home/service/guaranteed_clients.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">عملاء مضمونين</h5>

                </div>

                <div class="service_ele">

                    <img src="@/assets/images/home/service/operating_system.svg" alt="" class="mt-3 mb-3">

                    <h5 class="text-center fw-bold">منظومة تشغيلية</h5>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Service',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#service {

    padding-top: 40px;
    padding-bottom: 40px;

    h3 {
        font-family: 'Bahij_TheSansArabic_Bold';
        color: $Mov;
        font-size: 24px;
        // font-weight: 500;
        line-height: normal;
    }

    #content_wrapper {

        .service_ele {

            display: inline-flex;
            flex-direction: column;
            align-items: center;

            width: calc(100% / 9 - 8px);
            height: 150px;
            margin-left: 4px;
            margin-right: 4px;

            @include breakpoints(x-small) {
                width: calc(100% / 3 - 8px);
                height: 175px;
                margin-left: 4px;
                margin-right: 4px;
                margin-bottom: 8px;
            }

            @include breakpoints(small) {
                width: calc(100% / 3 - 8px);
                margin-bottom: 8px;
            }

            @include breakpoints(medium) {
                width: calc(100% / 3 - 8px);
                margin-bottom: 8px;
            }

            @include breakpoints(large) {
                width: calc(100% / 3 - 8px);
                margin-bottom: 8px;
            }

            @include breakpoints(x-Large) {
                height: 175px;
            }

            border-radius: 8px;

            // https://www.w3schools.com/cssref/pr_background-image.php
            /* The image used */
            background-image: url("@/assets/images/home/service/serviceBG.jpg");
            /* Used if the image is unavailable */
            background-color: $Gray;
            /* Center the image */
            background-position: center;
            /* Do not repeat the image */
            background-repeat: no-repeat;
            /* Resize the background image to cover the entire container */
            background-size: cover;

            img {
                width: 100%;
                height: 80px;
                object-fit: content;
            }

            img:hover {
                -webkit-animation: blinker 1s linear infinite;
                -moz-animation: blinker 1s linear infinite;
                -ms-animation: blinker 1s linear infinite;
                -o-animation: blinker 1s linear infinite;
                animation: blinker 1s linear infinite;
            }

            h5 {
                color: $Dark-blue;
                font-size: 16px;
                font-weight: 500;
                line-height: normal;
            }

        }

    }

}
// For Animation
@-webkit-keyframes blinker {
    50% {
        opacity: 0;
    }
}

@-moz-keyframes blinker {
    50% {
        opacity: 0;
    }
}

@-o-keyframes blinker {
    50% {
        opacity: 0;
    }
}

@keyframes blinker {
    50% {
        opacity: 0;
    }
}
</style>