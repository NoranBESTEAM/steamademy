<template>
    <section id="service">

        <div class="container">

            <h3
                class="text-center fw-bold text-justify mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="0.5s">
                ماذا نستطيع أن نقدم لكم؟</h3>

            <div id="content_wrapper" class="wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1s">

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/integrated_education.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">نظام تعليم متكامل ل STEAM</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/innovative_programs.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">برامج تعليمية مبتكرة</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/complete_support.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">دعم كامل من فريق محترف</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/continuous_training.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">مواد شاملة وتدريب مستمر</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/marketing_support.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold"> إدارة أعمال ودعم تسويقي</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/exceptional_experience.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">تجربة تعليمية استثنائية</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/business_model.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">نموذج عمل متكامل</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/guaranteed_clients.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">عائد مادي وعملاء مضمونين</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/operating_system.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">منظومة تشغيلية تقنية للتدريب والمتابعات</h5>
                </div>

            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Service_About',
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

        .service_wrapper {

            display: inline-flex;
            flex-direction: column;
            align-items: center;

            width: calc(100% / 9 - 8px);

            margin-left: 4px;
            margin-right: 4px;

            @include breakpoints(x-small) {
                width: calc(100% / 3 - 8px);
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

            .service_ele {

                width: 100%;

                padding-top: 24px;
                padding-bottom: 24px;

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
                    object-fit: contain;
                }

                img:hover {
                    -webkit-animation: blinker 1s linear infinite;
                    -moz-animation: blinker 1s linear infinite;
                    -ms-animation: blinker 1s linear infinite;
                    -o-animation: blinker 1s linear infinite;
                    animation: blinker 1s linear infinite;
                }

            }

            h5 {
                color: $Black;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                margin-top: 8px;
                // text-align: justify;
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