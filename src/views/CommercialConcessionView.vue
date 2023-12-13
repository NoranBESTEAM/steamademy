<template>
    <!-- Start Commercial_Concession -->
    <Commercial_Concession />
    <!-- End Commercial_Concession -->

    <!-- Start Advantages -->
    <Advantages />
    <!-- End Advantages -->

    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->
</template>

<script>

import Commercial_Concession from '@/components/commercial_concession/Commercial_Concession.vue';
import Advantages from '@/components/commercial_concession/Advantages.vue';

export default {
    name: 'CommercialConcessionView',
    components: {
        Commercial_Concession,
        Advantages,
    }
}

</script>

<style scoped lang="scss"></style>