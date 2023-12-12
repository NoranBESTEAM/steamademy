<template>
    <section id="service">

        <div class="container">

            <h3
                class="text-center fw-bold text-justify mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">
                ماذا نستطيع أن نقدم لكم؟</h3>

            <div id="content_wrapper" class="animate__animated animate__backInUp animate__delay-0.9s animate__slow">

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/تعليم_متكامل.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">نظام تعليم متكامل ل STEAM</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/برامج_مبتكرة.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">برامج تعليمية مبتكرة</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/دعم_كامل.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">دعم كامل من فريق محترف</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/تدريب_مستمر.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">مواد شاملة وتدريب مستمر</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/دعم_تسويقي.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold"> إدارة أعمال ودعم تسويقي</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/تجربة_استثنائية.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">تجربة تعليمية استثنائية</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/نموذج_عمل.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">نموذج عمل متكامل</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/عملاء_مضمونين.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">عائد مادي وعملاء مضمونين</h5>
                </div>

                <div class="service_wrapper">
                    <div class="service_ele">
                        <img src="@/assets/images/home/service/منظومة_تشغيلية.svg" alt="">
                    </div>
                    <h5 class="text-center fw-bold">منظومة تشغيلية تقنية للتدريب والمتابعات</h5>
                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Service_About',
}
</script>

<style lang="scss" scoped>
#service {

    padding-top: 40px;
    padding-bottom: 40px;

    h3 {
        color: $Mov;
        font-size: 24px;
        // font-weight: 500;
    }

    #content_wrapper {

        .service_wrapper {

            display: inline-flex;
            flex-direction: column;
            align-items: center;

            width: calc(100% / 9 - 16px);

            margin-left: 8px;
            margin-right: 8px;

            @include breakpoints(x-small) {
                width: calc(100% / 3 - 8px);
                margin-left: 4px;
                margin-right: 4px;
                margin-bottom: 8px;
            }

            @include breakpoints(small) {
                width: calc(100% / 3 - 16px);
                margin-bottom: 16px;
            }

            @include breakpoints(medium) {
                width: calc(100% / 3 - 16px);
                margin-bottom: 16px;
            }

            @include breakpoints(large) {
                width: calc(100% / 3 - 16px);
                margin-bottom: 16px;
            }

            @include breakpoints(x-Large) {
                width: calc(100% / 9 - 8px);
                margin-left: 4px;
                margin-right: 4px;
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
                margin-top: 16px;
                text-align: justify;
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