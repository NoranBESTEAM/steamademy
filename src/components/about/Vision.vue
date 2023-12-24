<template>
    <section id="vision">

        <div class="container">

            <!-- In Large Screen -->

            <!-- https://getbootstrap.com/docs/5.3/layout/gutters/#how-they-work -->

            <div id="vision_wrapper" class="d-none d-sm-none d-md-none d-lg-block d-xl-block">

                <!-- https://getbootstrap.com/docs/5.3/utilities/spacing/#gap -->

                <div class="row grid gap-3">

                    <div class="col content_wrapper p-3">

                        <h3 class="fw-bold mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="0.5s">

                            <img src="@/assets/images/about/vision/رؤيتنا.svg" alt="" class="ms-3">رؤيتنا

                        </h3>

                        <p class="text-justify wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1s">أن
                            نكون قادرين على تقديم كافة الخدمات التي تمكن الجهات التعليمية والمدربين النهوض بالطلاب نحو
                            مستقبل
                            قائم على النهضة الصناعية الرابعة وتعزيز ثقتهم بنفسهم</p>

                    </div>

                    <div class="col content_wrapper p-3">

                        <h3 class="fw-bold mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="0.5s">

                            <img src="@/assets/images/about/vision/رسالتنا.svg" alt="" class="ms-3">رسالتنا

                        </h3>

                        <p class="text-justify wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1s">تنمية
                            روح الإبداع للطلاب ومساعتهم على خلق حلول مبتكرة لمواجهة المشاكل المجتمعية</p>

                    </div>

                </div>

            </div>

            <!-- In Small Screen -->

            <div id="vision_wrapper_mobile" class="d-block d-sm-block d-md-block d-lg-none d-xl-none">

                <div class="content_wrapper_mobile p-3 mb-3">

                    <h3 class="fw-bold mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="0.5s">

                        <img src="@/assets/images/about/vision/رؤيتنا.svg" alt="" class="ms-3">رؤيتنا

                    </h3>

                    <p class="text-justify wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1s">أن
                        نكون قادرين على تقديم كافة الخدمات التي تمكن الجهات التعليمية والمدربين النهوض بالطلاب نحو
                        مستقبل
                        قائم على النهضة الصناعية الرابعة وتعزيز ثقتهم بنفسهم</p>

                </div>

                <div class="content_wrapper_mobile p-3">

                    <h3 class="fw-bold mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="0.5s">

                        <img src="@/assets/images/about/vision/رسالتنا.svg" alt="" class="ms-3">رسالتنا

                    </h3>

                    <p class="text-justify wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1s">تنمية
                            روح الإبداع للطلاب ومساعتهم على خلق حلول مبتكرة لمواجهة المشاكل المجتمعية</p>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Vision',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#vision {

    padding-top: 40px;
    padding-bottom: 40px;

    .container {

        h3 {
            font-family: 'Bahij_TheSansArabic_Bold';
            color: $Mov;
            font-size: 24px;
            font-weight: 500;
            line-height: normal;
        }

        p {
            color: $Black;
            font-size: 16px;
            font-weight: 400;
            line-height: normal;
            text-align: justify;
        }

        // In Large Screen

        #vision_wrapper {

            .content_wrapper {

                // margin-left: 4px;
                // margin-right: 4px;

                border: 1px solid $Mov;
                border-radius: 16px;

                h3 {

                    img {
                        width: 56px;
                        height: 56px;
                    }

                }

            }

        }

        // In Small Screen

        #vision_wrapper_mobile {

            .content_wrapper_mobile {

                border: 1px solid $Mov;
                border-radius: 16px;

                h3 {

                    img {
                        width: 32px;
                        height: 32px;
                    }

                }
            }

        }

    }

}
</style>