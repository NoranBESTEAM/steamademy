<template>
    <section id="commercial_concession">

        <img src="@/assets/images/commercial_concession/commercial_concession/Triangle.png" alt="" id="top_left">

        <img src="@/assets/images/commercial_concession/commercial_concession/Triangle2.png" alt="" id="bottom_right">

        <div class="container">

            <div class="row">

                <div id="text_content" class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 my-auto">

                    <h3
                        class="fw-bold text-justify mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">
                        امتياز STEAM التجاري</h3>

                    <p class="text-justify mb-4 animate__animated animate__backInUp animate__delay-0.9s animate__slow">يوفر
                        لك منظومة متكاملة لتحقيق أفضل عائد على استثماراتك بداية من التجهيزات
                        والمحتوى العلمي وتأهيل فريقك وحتى وسائل التواصل مع الطلاب والتسويق كل ما عليك هو أن تؤمن بقدرتك على
                        تغيير المستقبل وتحقيق أهداف الثورة الصناعية الرابعة.</p>

                </div>

                <div id="img_content" class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">

                    <!-- class="animate__animated animate__backInRight animate__delay-0.9s animate__slow" -->
                    <div id="img_wrapper">
                        <img src="@/assets/images/home/commercial_concession/Kid_pic.png" alt="">
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Commercial_Concession',
}
</script>

<style lang="scss" scoped>
#commercial_concession {

    margin-top: 72px;

    padding-top: 40px;
    padding-bottom: 40px;

    z-index: -2;

    position: relative;

    #top_left {
        position: absolute;
        top: 0;
        left: 0;
    }

    #bottom_right {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    #top_left,
    #bottom_right {
        width: 356.495px;
        height: 291px;
        z-index: -1;
        opacity: 70%;
    }

    .container {

        z-index: 1;

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
                color: $Mov;
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
                font-size: 18px;
                font-weight: 400;
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

                @include breakpoints(x-small) {
                    width: 343px;
                    height: 347px;
                }

                @include breakpoints(small) {
                    width: 343px;
                    height: 347px;
                }

                @include breakpoints(medium) {
                    width: 343px;
                    height: 347px;
                }

                // 0.8
                @include breakpoints(large) {
                    width: 271.2px;
                    height: 313.6px;
                }

                margin: 0 auto;

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