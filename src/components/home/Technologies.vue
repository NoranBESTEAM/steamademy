<template>
    <section id="technologies">

        <div class="container">

            <h3 class="text-center fw-bold mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">
                الأدوات والتقنيات المستخدمة</h3>

            <!-- In Large Screen -->

            <div id="content_wrapper" class="d-none d-sm-none d-md-block d-lg-block d-xl-block">

                <div class="row">

                    <div class="col-md-6 col-lg-6 col-xl-6">

                        <div id="right_content"
                            class="animate__animated animate__backInRight animate__delay-0.9s animate__slow">

                            <div class="tech_ele" id="top_right">

                                <div class="img_wrapper mb-3">
                                    <img src="@/assets/images/home/technologies/الروبوتات.jpg" alt="">
                                </div>

                                <h5 class="fw-bold">تصميم وبرمجة الروبوتات</h5>

                            </div>

                            <div class="tech_ele" id="bottom_right">

                                <div class="img_wrapper">
                                    <img src="@/assets/images/home/technologies/التصنيع_الرقمي.jpg" alt="">
                                </div>

                                <h5 class="fw-bold">التصنيع الرقمي</h5>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-6 col-lg-6 col-xl-6">

                        <div id="left_content"
                            class="animate__animated animate__backInLeft animate__delay-0.9s animate__slow">

                            <div class="align-left">
                                <router-link :to="{ name: '' }" type="button" class="btn mb-3">
                                    عرض الكل
                                    <font-awesome-icon :icon="['fas', 'fa-arrow-left']" class="me-2" />
                                </router-link>
                            </div>

                            <div class="tech_ele" id="top_left">

                                <div class="img_wrapper mb-3">
                                    <img src="@/assets/images/home/technologies/البرمجة.jpg" alt="">
                                </div>

                                <h5 class="fw-bold">المتحكمات والإلكترونيات</h5>

                            </div>

                            <div class="tech_ele" id="bottom_left">

                                <div class="img_wrapper">
                                    <img src="@/assets/images/home/technologies/انترنت_الاشياء.jpg" alt="">
                                </div>

                                <h5 class="fw-bold">إنترنت الأشياء</h5>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- In Small Screen -->

            <div id="carouselExampleSlidesOnly"
                class="carousel slide animate__animated animate__backInUp animate__delay-0.9s animate__slow d-block d-sm-block d-md-none d-lg-none d-xl-none"
                data-bs-ride="carousel">

                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/technologies/الروبوتات.jpg" class="d-block w-100" alt="">
                        </div>
                        <h5 class="fw-bolder">تصميم وبرمجة الروبوتات</h5>
                    </div>

                    <div class="carousel-item">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/technologies/التصنيع_الرقمي.jpg" class="d-block w-100" alt="">
                        </div>
                        <h5 class="fw-bolder">التصنيع الرقمي</h5>
                    </div>

                    <div class="carousel-item">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/technologies/البرمجة.jpg" class="d-block w-100" alt="">
                        </div>
                        <h5 class="fw-bolder">المتحكمات والإلكترونيات</h5>
                    </div>

                    <div class="carousel-item">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/technologies/انترنت_الاشياء.jpg" class="d-block w-100" alt="">
                        </div>
                        <h5 class="fw-bolder">إنترنت الأشياء</h5>
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Technologies',
}
</script>

<style lang="scss" scoped>
#technologies {

    padding-top: 40px;
    padding-bottom: 40px;

    h3 {
        color: $Mov;
        font-size: 24px;
        // font-weight: 500;
    }

    // In Large Screen

    #content_wrapper {

        #right_content {

            .tech_ele {

                .img_wrapper {

                    border-radius: 16px;

                    // width: 591px;
                    width: 100%;
                    height: 328px;

                    background: $Gray;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;

                        border-radius: 16px;
                    }

                    position: relative;

                }

                h5 {
                    color: $Ylo;
                    font-size: 18px;
                    // font-weight: 500;

                    position: absolute;
                }

            }

            #top_right {

                h5 {
                    top: 26px;
                    right: 27px;
                }

            }

            #bottom_right {

                h5 {
                    top: 368px;
                    right: 27px;
                }

            }

        }

        #left_content {

            .align-left {

                text-align: left;

                a {

                    display: inline-flex;
                    justify-content: center;
                    align-items: center;

                    border-radius: 4px;
                    background: $Orange;

                    /* Shadow */
                    box-shadow: 0px 4px 4px 0px $BoxShadow;

                    color: $White;
                    font-size: 18px;
                    font-weight: 500;

                    // float: inline-end;

                    svg {
                        width: 24px;
                        height: 24px;
                    }
                }

            }

            .tech_ele {

                .img_wrapper {

                    border-radius: 16px;

                    // width: 593px;
                    width: 100%;
                    height: 298px;

                    background: $Gray;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;

                        border-radius: 16px;
                    }

                    position: relative;

                }

                h5 {
                    color: $Ylo;
                    font-size: 18px;
                    // font-weight: 500;

                    position: absolute;
                }

            }

            #top_left {

                h5 {
                    // 58+24
                    top: 82px;
                    right: 27px;
                }

            }

            #bottom_left {

                h5 {
                    // 372+24
                    top: 396px;
                    right: 27px;
                }

            }

        }

    }

    // In Small Screen

    #carouselExampleSlidesOnly {

        .carousel-inner {

            .carousel-item {

                padding-left: 8px;
                padding-right: 8px;

                .image_wrapper {

                    border-radius: 16px;

                    // width: 252px;
                    width: 100%;
                    height: 214px;

                    background: $Gray;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;

                        border-radius: 16px;
                    }

                    position: relative;

                }

                h5 {
                    color: $Ylo;
                    font-size: 18px;
                    // font-weight: 500;

                    position: absolute;
                    top: 24px;
                    right: 27px;
                }

            }

        }

    }

}
</style>