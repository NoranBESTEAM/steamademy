<template>
    <div id="about_page">

        <!-- Start About -->
        <About />
        <!-- End About -->

        <!-- Start Service_About -->
        <Service_About />
        <!-- End Service_About -->

        <!-- Start Vision -->
        <Vision />
        <!-- End Vision -->

        <!-- Start Footer -->
        <Footer />
        <!-- End Footer -->

    </div>
</template>

<script>

import About from '@/components/about/About.vue';
import Service_About from '@/components/about/Service_About.vue';
import Vision from '@/components/about/Vision.vue';

export default {
    name: 'AboutView',
    components: {
        About,
        Service_About,
        Vision,
    }
}

</script>

<style scoped lang="scss">
#about_page {

    // https://www.w3schools.com/cssref/pr_background-image.php
    /* The image used */
    background-image: url("@/assets/images/about/about_BG.jpg");

    /* Used if the image is unavailable */
    background-color: $White;
    /* Center the image */
    background-position: center;
    /* Repeat the image */
    background-repeat: repeat;
    /* Resize the background image to cover the entire container */
    background-size: cover;

}
</style>