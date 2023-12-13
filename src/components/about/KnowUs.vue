<template>
    <section id="know_us">

        <div class="container">

            <h3
                class="text-center fw-bold text-justify mb-4 animate__animated animate__backInDown animate__delay-0.9s animate__slow">

                <img src="@/assets/images/about/know_us/تعرف_علينا.svg" alt="" class="ms-3">تعرف علينا

            </h3>

            <!-- https://getbootstrap.com/docs/5.3/helpers/ratio/#example -->
            <!-- <div id="know_video" class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div> -->

            <div id="video_wrapper" class="ratio ratio-21x9 animate__animated animate__backInUp animate__delay-0.9s animate__slow">
                <!-- https://www.w3schools.com/tags/att_video_poster.asp -->
                <video poster="@/assets/images/about/know_us/Steam_Video.jpg" controls>
                    <source src="@/assets/images/about/know_us/STEAMademy.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'KnowUs',
}
</script>

<style lang="scss" scoped>
#know_us {

    padding-top: 40px;
    padding-bottom: 40px;

    h3 {
        color: $Mov;
        font-size: 24px;
        // font-weight: 500;

        img {
            width: 56px;
            height: 56px;
        }

        @include breakpoints(x-small) {
            img {
                width: 32px;
                height: 32px;
            }
        }

        @include breakpoints(small) {
            img {
                width: 32px;
                height: 32px;
            }
        }

        @include breakpoints(medium) {
            img {
                width: 32px;
                height: 32px;
            }
        }
    }

    /* #know_video {
        iframe {
            border-radius: 16px;
        }
    } */

    #video_wrapper {

        width: 100%;
        height: 100%;

        video {

            border-radius: 16px;

            width: 100%;
            height: 100%;
            object-fit: cover;

        }

    }

}
</style>