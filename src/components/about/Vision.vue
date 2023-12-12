<template>
    <section id="vision">

        <div class="container">

            <!-- In Large Screen -->

            <!-- https://getbootstrap.com/docs/5.3/layout/gutters/#how-they-work -->

            <div id="vision_wrapper" class="d-none d-sm-none d-md-none d-lg-block d-xl-block">

                <div class="row">

                    <div class="col content_wrapper p-3">

                        <h3 class="fw-bold mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">

                            <img src="@/assets/images/about/vision/رؤيتنا.svg" alt="" class="ms-3">

                            رؤيتنا

                        </h3>

                        <p class="text-justify animate__animated animate__backInUp animate__delay-0.9s animate__slow">أن
                            نكون قادرين على تقديم كافة الخدمات التي تمكن الجهات التعليمية والمدربين النهوض بالطلاب نحو
                            مستقبل
                            قائم على النهضة الصناعية الرابعة وتعزيز ثقتهم بنفسهم</p>

                    </div>

                    <div class="col content_wrapper p-3">

                        <h3 class="fw-bold mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">

                            <img src="@/assets/images/about/vision/رسالتنا.svg" alt="" class="ms-3">

                            رسالتنا

                        </h3>

                        <p class="text-justify animate__animated animate__backInUp animate__delay-0.9s animate__slow">تنمية
                            روح الإبداع للطلاب ومساعتهم على خلق حلول مبتكرة لمواجهة المشاكل المجتمعية</p>

                    </div>

                </div>

            </div>

            <!-- In Small Screen -->

            <div id="vision_wrapper_mobile" class="d-block d-sm-block d-md-block d-lg-none d-xl-none">

                <div class="content_wrapper_mobile p-3 mb-3">

                    <h3 class="fw-bold mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">

                        <img src="@/assets/images/about/vision/رؤيتنا.svg" alt="" class="ms-3">

                        رؤيتنا

                    </h3>

                    <p class="text-justify animate__animated animate__backInUp animate__delay-0.9s animate__slow">أن
                        نكون قادرين على تقديم كافة الخدمات التي تمكن الجهات التعليمية والمدربين النهوض بالطلاب نحو
                        مستقبل
                        قائم على النهضة الصناعية الرابعة وتعزيز ثقتهم بنفسهم</p>

                </div>

                <div class="content_wrapper_mobile p-3">

                    <h3 class="fw-bold mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">

                        <img src="@/assets/images/about/vision/رؤيتنا.svg" alt="" class="ms-3">

                        رؤيتنا

                    </h3>

                    <p class="text-justify animate__animated animate__backInUp animate__delay-0.9s animate__slow">أن
                        نكون قادرين على تقديم كافة الخدمات التي تمكن الجهات التعليمية والمدربين النهوض بالطلاب نحو
                        مستقبل
                        قائم على النهضة الصناعية الرابعة وتعزيز ثقتهم بنفسهم</p>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Vision',
}
</script>

<style lang="scss" scoped>
#vision {

    padding-top: 40px;
    padding-bottom: 40px;

    .container {

        // In Large Screen

        #vision_wrapper {

            .content_wrapper {

                margin-left: 8px;
                margin-right: 8px;

                border: 1px solid $Mov;
                border-radius: 16px;

                h3 {

                    color: $Mov;
                    font-size: 32px;
                    font-weight: 500;

                    img {
                        width: 56px;
                        height: 56px;
                    }

                }

                p {
                    color: $Black;
                    font-size: 18px;
                    font-weight: 400;
                }

            }

        }

        // In Small Screen

        #vision_wrapper_mobile {

            .content_wrapper_mobile {

                border: 1px solid $Mov;
                border-radius: 16px;

                h3 {

                    color: $Mov;
                    font-size: 24px;
                    font-weight: 500;

                    img {
                        width: 32px;
                        height: 32px;
                    }

                }

                p {
                    color: $Black;
                    font-size: 16px;
                    font-weight: 400;
                }
            }

        }

    }

}
</style>