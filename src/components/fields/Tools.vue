<template>

    <!-- Enable Touch Simulation In Browser -->

    <section id="tools">

        <div class="container">

            <h3 class="fw-bold mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">الأدوات
                والتقنيات المستخدمة</h3>

            <p class="text-justify animate__animated animate__backInDown animate__delay-0.9s animate__slow">نقدم الأدوات
                والتقنيات التعليمية التي تساعد الطلاب على التعلم والابتكار، مثل:</p>

            <div class="tool_wrapper animate__animated animate__backInUp animate__delay-0.9s animate__slow">

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
                        @mouseover="ToolTwoTitle = true; ToolTwoDesc = true;"
                        @mouseleave="ToolTwoTitle = false; ToolTwoDesc = false;">
                        <div class="img_wrapper">
                            <img src="@/assets/images/fields/tools/tool_2.png" alt="التصنيع الرقمي">
                        </div>
                        <h5 class="text-center fw-bold mt-3 mb-0" v-if="ToolTwoTitle">التصنيع الرقمي</h5>
                    </div>

                    <div class="tool_ele col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3"
                        @mouseover="ToolThreeTitle = true; ToolThreeDesc = true;"
                        @mouseleave="ToolThreeTitle = false; ToolThreeDesc = false;">
                        <div class="img_wrapper">
                            <img src="@/assets/images/fields/tools/tool_3.png" alt="إنترنت الأشياء">
                        </div>
                        <h5 class="text-center fw-bold mt-3 mb-0" v-if="ToolThreeTitle">إنترنت الأشياء</h5>
                    </div>

                    <div class="tool_ele col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3"
                        @mouseover="ToolFourTitle = true; ToolFourDesc = true;"
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

        </div>

    </section>
</template>

<script>

export default {

    name: 'Tools',

    data() {
        return {

            // https://www.youtube.com/watch?v=Y1qBr1VCm-A

            ToolOneTitle: false,

            ToolTwoTitle: false,

            ToolThreeTitle: false,

            ToolFourTitle: false,

            ToolOneDesc: false,

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
            color: $Mov;
            text-align: right;
            font-size: 24px;
            // font-weight: 500;

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
        }

        .tool_wrapper {

            .tool_ele {

                width: calc(100% / 4 - 16px);
                margin-left: 8px;
                margin-right: 8px;

                @include breakpoints(x-small) {
                    width: calc(100% / 2 - 16px);
                    margin-bottom: 16px;
                }

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
                
                .img_wrapper {

                    width: 104.464px;
                    height: 117px;

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

                /* .img_wrapper:hover {
                    width: 91.652px;
                    height: 80px;
                } */

                h5 {
                    color: $Dark-blue;
                    font-size: 18px;
                    font-weight: 500;
                }

            }

            .tool_desc {

                p {
                    color: $Black;
                    text-align: right;
                    font-size: 16px;
                    font-weight: 400;
                }

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