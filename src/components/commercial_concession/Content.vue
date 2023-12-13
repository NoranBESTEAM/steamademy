<template>
    <section id="content">

        <div class="container">

            <div id="content_wrapper" class="p-3">

                <div class="row">

                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">

                        <h3 class="fw-bold mb-3">المحتوى الرقمي</h3>

                        <p class="text-justify">نقدم محتوى تعليمي رقمي تفاعلي متكامل لإعداد المتدربين لوظائف النهضة
                            الصناعية
                            الرابعة، هذا المحتوى
                            قائم على مبادئ نهج STEAM التعليمي وهي:
                            <br />
                            العلوم
                            <br />
                            التكنولوجيا
                            <br />
                            الهندسة
                            <br />
                            الفنون
                            <br />
                            الرياضيات
                        </p>

                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">

                        <h5 class="fw-bold mb-3">يهدف المحتوى لتوفير:</h5>

                        <ul class="text-justify">
                            <li>برامج تعليمية متكاملة.</li>
                            <li>مشاريع تطبيق المفاهيم العلمية. تعليم برمجة الروبوتات.</li>
                            <li>تعليم تصميم المواقع والتطبيقات.</li>
                            <li>تدريب الطلاب على حل المشكلات العملية.</li>
                            <li>محتوى تعليمي متعدد الوسائط. تقييم وتوجيه شامل.</li>
                        </ul>

                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 animate__animated animate__backInUp animate__delay-0.9s animate__slow">

                        <div id="img_wrapper">

                            <img src="@/assets/images/commercial_concession/content/content_img.jpg"
                                alt="children-standing-sideways-camera-looking-charge-boards"
                                class="d-none d-sm-none d-md-block d-lg-none d-xl-block">

                            <img src="@/assets/images/commercial_concession/content/content_img_mobile.jpg"
                                alt="children-standing-sideways-camera-looking-charge-boards"
                                class="d-block d-sm-block d-md-none d-lg-block d-xl-none">

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Content',
}
</script>

<style lang="scss" scoped>
#content {

    padding-top: 40px;
    padding-bottom: 40px;

    .container {

        #content_wrapper {

            border-radius: 8px;
            background: $Gray;

            h3 {
                color: $Mov;
                // text-align: right;
                font-size: 24px;
                // font-weight: 500;
            }

            h5 {
                color: $Pink;
                font-size: 18px;
                // font-weight: 500;
            }

            p,
            ul li {
                color: $Black;
                font-size: 18px;
                font-weight: 400;
            }

            ul {
                padding-right: 15px;
                list-style-type: circle;
            }

            #img_wrapper {

                width: 100%;
                height: 299px;

                border-radius: 8px;

                img {

                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 8px;

                    @include breakpoints(x-small) {
                        object-fit: fill;
                    }

                    @include breakpoints(large) {
                        object-fit: fill;
                    }

                }

            }

        }

    }

}
</style>