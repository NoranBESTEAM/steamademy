<template>
    <section id="about">

        <div class="container">

            <div class="row">

                <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 animate__animated animate__backInDown animate__delay-0.9s animate__slow">

                    <div id="text_wrapper">

                        <h3 class="fw-bold mb-4 text-justify">من نحن</h3>

                        <h5 class="fw-bold mb-3 text-justify">شركة رائدة في خدمات STEAM التعليمية!</h5>

                        <p class="text-justify">نعمل لتأهيل الطلاب في مهارات المستقبل القائمة على النهضة الصناعية الرابعة عن
                            طريق توفير كل
                            متطلبات الحصول على امتياز STEAM التجاري. نهدف إلى تمكين الجهات التعليمية والمدربين من تقديم بيئة
                            تعليمية مستدامة ومبتكرة تعزز مهارات التطبيق العملي والإبداع والتعاون وحل المشكلات.</p>

                    </div>

                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 animate__animated animate__backInUp animate__delay-0.9s animate__slow">

                    <div id="image_wrapper">
                        <img src="@/assets/images/about/about/About_kids.png" alt="">
                    </div>

                </div>

            </div>


        </div>

    </section>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang="scss" scoped>
#about {

    margin-top: 72px;

    padding-top: 40px;
    padding-bottom: 40px;

    .container {

        #text_wrapper {

            margin-top: 12%;

            @include breakpoints(x-small) {
                margin: auto;
            }

            @include breakpoints(small) {
                margin: auto;
            }

            @include breakpoints(medium) {
                margin: auto;
            }

            @include breakpoints(large) {
                margin-top: 3%;
            }

            @include breakpoints(x-Large) {
                margin-top: 3%;
            }

            h3 {
                color: $Mov;
                // text-align: right;
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

            h5 {
                color: $Green;
                font-size: 18px;
                // font-weight: 500;
            }

            p {
                color: $Black;
                font-size: 18px;
                font-weight: 400;
            }

        }

        #image_wrapper {

            width: 529px;
            height: 392px;

            @include breakpoints(x-small) {
                width: 343px;
                height: 254px;
                margin: 0 auto;
            }

            @include breakpoints(small) {
                width: 343px;
                height: 254px;
                margin: 0 auto;
            }

            @include breakpoints(medium) {
                width: 343px;
                height: 254px;
                margin: 0 auto;
            }

            @include breakpoints(large) {
                width: 343px;
                height: 254px;
            }

            @include breakpoints(x-Large) {
                width: 343px;
                height: 254px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

    }

}
</style>