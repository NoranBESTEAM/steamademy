<template>
    <section id="field">

        <div class="container">

            <h3 class="text-center fw-bold mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">
                مجالات
                STEAM التطبيقية</h3>

            <!-- In Large Screen -->

            <div id="content_wrapper"
                class="animate__animated animate__backInUp animate__delay-0.9s animate__slow d-none d-sm-none d-md-block d-lg-block d-xl-block">

                <div class="field_ele">
                    <div class="image_wrapper">
                        <img src="@/assets/images/home/fields/field_1.png" alt="">
                    </div>
                    <h5 class="text-center fw-bold mt-3">الاستدامة والبيئة</h5>
                </div>

                <div class="field_ele">
                    <div class="image_wrapper">
                        <img src="@/assets/images/home/fields/field_2.png" alt="">
                    </div>
                    <h5 class="text-center fw-bold mt-3">الفضاء والطيران</h5>
                </div>

                <div class="field_ele">
                    <div class="image_wrapper">
                        <img src="@/assets/images/home/fields/field_3.png" alt="">
                    </div>
                    <h5 class="text-center fw-bold mt-3">الطاقة</h5>
                </div>

                <div class="field_ele">
                    <div class="image_wrapper">
                        <img src="@/assets/images/home/fields/field_4.png" alt="">
                    </div>
                    <h5 class="text-center fw-bold mt-3">الاتصالات والإلكترونيات</h5>
                </div>

                <div class="field_ele">
                    <div class="image_wrapper">
                        <img src="@/assets/images/home/fields/field_5.png" alt="">
                    </div>
                    <h5 class="text-center fw-bold mt-3">الذكاء الاصطناعي والروبوتات</h5>
                </div>

            </div>

            <!-- In Mobile Screen -->

            <div id="carouselExampleSlidesOnly"
                class="carousel slide animate__animated animate__backInUp animate__delay-0.9s animate__slow d-block d-sm-block d-md-none d-lg-none d-xl-none"
                data-bs-ride="carousel">

                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/fields/field_1.png" class="d-block w-100" alt="">
                        </div>
                        <h5 class="text-center fw-bold mt-3">الاستدامة والبيئة</h5>
                    </div>

                    <div class="carousel-item">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/fields/field_2.png" class="d-block w-100" alt="">
                        </div>
                        <h5 class="text-center fw-bold mt-3">الفضاء والطيران</h5>
                    </div>

                    <div class="carousel-item">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/fields/field_3.png" class="d-block w-100" alt="">
                        </div>
                        <h5 class="text-center fw-bold mt-3">الطاقة</h5>
                    </div>

                    <div class="carousel-item">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/fields/field_4.png" class="d-block w-100" alt="">
                        </div>
                        <h5 class="text-center fw-bold mt-3">الاتصالات والإلكترونيات</h5>
                    </div>

                    <div class="carousel-item">
                        <div class="image_wrapper">
                            <img src="@/assets/images/home/fields/field_5.png" class="d-block w-100" alt="">
                        </div>
                        <h5 class="text-center fw-bold mt-3">الذكاء الاصطناعي والروبوتات</h5>
                    </div>

                </div>

                <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->

                <!-- Carousel controls -->

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly"
                    data-bs-slide="next">
                    <font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
                </button>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly"
                    data-bs-slide="prev">
                    <font-awesome-icon :icon="['fas', 'fa-chevron-left']" />
                </button>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Field_Home',
}
</script>

<style lang="scss" scoped>
#field {

    padding-top: 40px;
    padding-bottom: 40px;

    // https://www.w3schools.com/cssref/pr_background-image.php
    /* The image used */
    background-image: url("@/assets/images/home/fields/field_BG.jpg");

    @include breakpoints(x-small) {
        background-image: url("@/assets/images/home/fields/field_BG_Mobile.jpg");
    }

    @include breakpoints(small) {
        background-image: url("@/assets/images/home/fields/field_BG_Mobile.jpg");
    }

    /* Used if the image is unavailable */
    background-color: $Gray;
    /* Center the image */
    background-position: center;
    /* Do not repeat the image */
    background-repeat: no-repeat;
    /* Resize the background image to cover the entire container */
    background-size: cover;

    h3 {
        color: $Ylo;
        font-size: 24px;
        // font-weight: 500;
    }

    // In Large Screen

    #content_wrapper {

        .field_ele {

            display: inline-flex;
            flex-direction: column;
            align-items: center;
            // gap: 4px;

            width: calc(100% / 5 - 8px);
            margin-left: 4px;
            margin-right: 4px;

            .image_wrapper {

                height: 188px;

                @include breakpoints(medium) {
                    height: 130px;
                }

                @include breakpoints(large) {
                    height: 165px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                /* img:hover {
                    -webkit-animation: blinker 1s linear infinite;
                    -moz-animation: blinker 1s linear infinite;
                    -ms-animation: blinker 1s linear infinite;
                    -o-animation: blinker 1s linear infinite;
                    animation: blinker 1s linear infinite;
                } */

            }

            h5 {
                color: $White;
                font-size: 16px;
                // font-weight: 500;
            }

        }

    }

    // In Mobile Screen

    #carouselExampleSlidesOnly {

        .carousel-inner {

            .carousel-item {

                .image_wrapper {

                    height: 188px;

                    img {
                        width: 100%;
                        height: 100%;
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
                    color: $White;
                    font-size: 16px;
                    // font-weight: 500;
                }

            }

        }

        .carousel-control-next,
        .carousel-control-prev {
            svg {
                font-size: 24px;
                color: $Ylo;
            }
        }

        .carousel-control-next {
            svg {
                margin-right: -50px;
            }
        }

        .carousel-control-prev {
            svg {
                margin-left: -50px;
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