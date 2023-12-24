<template>
    
    <!-- Enable Touch Simulation In Browser -->

    <section id="tools">

        <div class="container">

            <h3 class="fw-bold mb-4 wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="0.5s">الأدوات
                والتقنيات المستخدمة</h3>

            <p class="text-justify wow animate__animated animate__backInDown animate__slow" data-wow-offset="10" data-wow-delay="1s">نقدم الأدوات
                والتقنيات التعليمية التي تساعد الطلاب على التعلم والابتكار، مثل:</p>

            <!-- In Large Screen -->

            <div
                class="tool_wrapper d-none d-sm-block d-md-block d-lg-block d-xl-block wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1.5s">

                <div class="row">

                    <div class="tool_ele col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3"
                        @mouseover="ToolOneTitle = true; ToolOneDesc = true;"
                        @mouseleave="ToolOneTitle = false; ToolOneDesc = false;">
                        <div class="img_wrapper">
                            <img src="@/assets/images/fields/tools/tool_1.png" alt="المتحكمات والإلكترونيات">
                        </div>
                        <h5 class="text-center fw-bold mt-3 mb-0" v-if="ToolOneTitle">المتحكمات والإلكترونيات</h5>
                    </div>

                    <div class="tool_ele col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3"
                        @mouseover="ToolTwoTitle = true; ToolOneTitle = false; ToolTwoDesc = true; ToolOneDesc = false;"
                        @mouseleave="ToolTwoTitle = false; ToolTwoDesc = false;">
                        <div class="img_wrapper">
                            <img src="@/assets/images/fields/tools/tool_2.png" alt="التصنيع الرقمي">
                        </div>
                        <h5 class="text-center fw-bold mt-3 mb-0" v-if="ToolTwoTitle">التصنيع الرقمي</h5>
                    </div>

                    <div class="tool_ele col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3"
                        @mouseover="ToolThreeTitle = true; ToolOneTitle = false; ToolThreeDesc = true; ToolOneDesc = false;"
                        @mouseleave="ToolThreeTitle = false; ToolThreeDesc = false;">
                        <div class="img_wrapper">
                            <img src="@/assets/images/fields/tools/tool_3.png" alt="إنترنت الأشياء">
                        </div>
                        <h5 class="text-center fw-bold mt-3 mb-0" v-if="ToolThreeTitle">إنترنت الأشياء</h5>
                    </div>

                    <div class="tool_ele col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3"
                        @mouseover="ToolFourTitle = true; ToolOneTitle = false; ToolFourDesc = true; ToolOneDesc = false;"
                        @mouseleave="ToolFourTitle = false; ToolFourDesc = false;">
                        <div class="img_wrapper">
                            <img src="@/assets/images/fields/tools/tool_4.png" alt="تصميم وبرمجة الروبوتات">
                        </div>
                        <h5 class="text-center fw-bold mt-3 mb-0" v-if="ToolFourTitle">تصميم وبرمجة الروبوتات</h5>
                    </div>

                </div>

                <div class="tool_desc" v-if="ToolOneDesc">
                    <p class="text-justify mt-3">نستخدم المتحكمات كأداة تعليمية لتعزيز فهم المفاهيم العلمية والتقنية
                        والهندسية
                        والرياضيات، يتعلم الطلاب كيفية برمجة المتحكمات.</p>
                </div>

                <div class="tool_desc" v-if="ToolTwoDesc">
                    <p class="text-justify mt-3">نقدم للطلاب فرصة للاستكشاف والتعلم من خلال التصميم والإنتاج باستخدام
                        التقنيات
                        الرقمية. يتعلمون كيفية استخدام الطابعات ثلاثية الأبعاد وماكينات الحفر بالليزر والقطع الرقمي لتحويل
                        أفكارهم إلى واقع ملموس.</p>
                </div>

                <div class="tool_desc" v-if="ToolThreeDesc">
                    <p class="text-justify mt-3">يتعلم الطلاب كيفية تصميم وتطوير أنظمة ذكية تستند إلى إنترنت الأشياء. يمكن
                        لهذه
                        التقنية أن تسهم في حل المشكلات في مجالات مثل الزراعة الذكية والمدن الذكية والرعاية الصحية.</p>
                </div>

                <div class="tool_desc" v-if="ToolFourDesc">
                    <p class="text-justify mt-3">تعتبر البرمجة أداة أساسية في تعليم STEAM. يتعلم الطلاب كيفية كتابة وتنفيذ
                        الأكواد وتطوير التطبيقات والألعاب الإلكترونية. يتم تشجيعهم على التفكير الإبداعي وحل المشكلات من خلال
                        البرمجة، يتعلم الطلاب كيفية برمجة الروبوتات وتفاعلها مع البيئة المحيطة بها. يمكن للروبوتات أن تساعد
                        في تطوير مهارات التفكير النقدي وحل المشكلات والعمل الجماعي.</p>
                </div>

            </div>

            <!-- In Mobile Screen -->

            <div
                class="tool_wrapper_mobile d-block d-sm-none d-md-none d-lg-none d-xl-none wow animate__animated animate__backInUp animate__slow" data-wow-offset="10" data-wow-delay="1.5s">

                <div id="carouselToolExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">

                    <div class="carousel-inner">

                        <div class="carousel-item active" data-bs-interval="10000">

                            <div class="tool_ele p-3">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/fields/tools/tool_1.png" alt="المتحكمات والإلكترونيات">
                                </div>
                                <h5 class="text-center fw-bold mt-3 mb-0">المتحكمات والإلكترونيات</h5>
                            </div>

                            <div class="tool_desc">
                                <p class="text-justify mt-3">نستخدم المتحكمات كأداة تعليمية لتعزيز فهم المفاهيم العلمية والتقنية والهندسية والرياضيات، يتعلم الطلاب كيفية برمجة المتحكمات.</p>
                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="tool_ele p-3">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/fields/tools/tool_2.png" alt="التصنيع الرقمي">
                                </div>
                                <h5 class="text-center fw-bold mt-3 mb-0">التصنيع الرقمي</h5>
                            </div>

                            <div class="tool_desc">
                                <p class="text-justify mt-3">نقدم للطلاب فرصة للاستكشاف والتعلم من خلال التصميم والإنتاج باستخدام التقنيات الرقمية. يتعلمون كيفية استخدام الطابعات ثلاثية الأبعاد وماكينات الحفر بالليزر والقطع الرقمي لتحويل أفكارهم إلى واقع ملموس.</p>
                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="tool_ele p-3">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/fields/tools/tool_3.png" alt="إنترنت الأشياء">
                                </div>
                                <h5 class="text-center fw-bold mt-3 mb-0">إنترنت الأشياء</h5>
                            </div>

                            <div class="tool_desc">
                                <p class="text-justify mt-3">يتعلم الطلاب كيفية تصميم وتطوير أنظمة ذكية تستند إلى إنترنت الأشياء. يمكن لهذه التقنية أن تسهم في حل المشكلات في مجالات مثل الزراعة الذكية والمدن الذكية والرعاية الصحية.</p>
                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="tool_ele p-3">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/fields/tools/tool_4.png" alt="تصميم وبرمجة الروبوتات">
                                </div>
                                <h5 class="text-center fw-bold mt-3 mb-0">تصميم وبرمجة الروبوتات</h5>
                            </div>

                            <div class="tool_desc">
                                <p class="text-justify mt-3">تعتبر البرمجة أداة أساسية في تعليم STEAM. يتعلم الطلاب كيفية كتابة وتنفيذ الأكواد وتطوير التطبيقات والألعاب الإلكترونية. يتم تشجيعهم على التفكير الإبداعي وحل المشكلات من خلال البرمجة، يتعلم الطلاب كيفية برمجة الروبوتات وتفاعلها مع البيئة المحيطة بها. يمكن للروبوتات أن تساعد في تطوير مهارات التفكير النقدي وحل المشكلات والعمل الجماعي.</p>
                            </div>

                        </div>

                    </div>

                    <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->

                    <!-- Carousel controls -->

                    <div class="d-flex justify-content-center">

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselToolExampleSlidesOnly"
                            data-bs-slide="next">
                            <font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
                        </button>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselToolExampleSlidesOnly"
                            data-bs-slide="prev">
                            <font-awesome-icon :icon="['fas', 'fa-chevron-left']" />
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>

import WOW from "wow.js";

export default {

    name: 'Tools',

    mounted() {
        new WOW().init();
    },

    data() {
        return {

            // https://www.youtube.com/watch?v=Y1qBr1VCm-A

            ToolOneTitle: true,

            ToolTwoTitle: false,

            ToolThreeTitle: false,

            ToolFourTitle: false,

            ToolOneDesc: true,

            ToolTwoDesc: false,

            ToolThreeDesc: false,

            ToolFourDesc: false,

        };
    },

}

</script>

<style lang="scss" scoped>
#tools {

    padding-top: 40px;
    padding-bottom: 40px;

    background-color: $Ylo_Light;

    .container {


        h3 {
            font-family: 'Bahij_TheSansArabic_Bold';
            color: $Mov;
            text-align: right;
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
            text-align: right;
            font-size: 18px;
            font-weight: 400;
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

        // In Large Screen

        .tool_wrapper {

            height: 250px;

            @include breakpoints(small) {
                height: 500px;
            }

            @include breakpoints(medium) {
                height: 480px;
            }

            @include breakpoints(large) {
                height: 260px;
            }

            @include breakpoints(x-Large) {
                height: 260px;
            }

            .tool_ele {

                width: calc(100% / 4 - 16px);
                margin-left: 8px;
                margin-right: 8px;

                @include breakpoints(small) {
                    width: calc(100% / 2 - 16px);
                    margin-bottom: 16px;
                }

                @include breakpoints(medium) {
                    width: calc(100% / 2 - 16px);
                    margin-bottom: 16px;
                }

                height: 170px;

                border-radius: 8px;
                background: $Blue_Light;

                // display: flex;
                // justify-content: center;
                // align-items: center;

                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                cursor: pointer;

                .img_wrapper {

                    width: 104.464px;
                    height: 117px;

                    img {

                        width: 100%;
                        height: 100%;
                        object-fit: contain;

                    }

                }

                h5 {
                    color: $Dark-blue;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: normal;
                }

            }

            .tool_desc {

                height: 60px;

                @include breakpoints(small) {
                    height: 100px;
                }

                @include breakpoints(medium) {
                    height: 80px;
                }

                p {
                    color: $Black;
                    text-align: right;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: normal;
                    text-align: justify;
                }

            }

        }

        // In Mobile Screen

        .tool_wrapper_mobile {

            .carousel {

                .carousel-inner {

                    .carousel-item {

                        padding-left: 8px;
                        padding-right: 8px;

                        .tool_ele {

                            height: 170px;

                            border-radius: 8px;
                            background: $Blue_Light;

                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;


                            .img_wrapper {

                                width: 104.464px;
                                height: 117px;

                                img {

                                    width: 100%;
                                    height: 100%;
                                    object-fit: contain;

                                }

                            }

                            h5 {
                                color: $Dark-blue;
                                font-size: 18px;
                                font-weight: 500;
                                line-height: normal;
                            }

                        }

                        .tool_desc {

                            height: 210px;

                            p {
                                color: $Black;
                                text-align: right;
                                font-size: 16px;
                                font-weight: 400;
                                line-height: normal;
                                text-align: justify;
                            }

                        }

                    }

                }

                .carousel-control-prev,
                .carousel-control-next {
                    position: static;
                    padding-top: 16px;

                }

                .carousel-control-prev svg,
                .carousel-control-next svg {
                    color: $Orange;
                    font-size: 24px;
                }

            }

        }



    }

}
</style>