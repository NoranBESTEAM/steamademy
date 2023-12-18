<template>

    <!-- Start Fields -->
    <Fields />
    <!-- End Fields -->

    <!-- Start Tools -->
    <Tools />
    <!-- End Tools -->

    <!-- Start Footer -->
    <Footer/>
    <!-- End Footer -->
    
</template>

<script>

import Fields from '@/components/fields/Fields.vue';
import Tools from '@/components/fields/Tools.vue';

export default {
    name: 'SteamFieldsView',
    components: {
        Fields,
        Tools,
    }
}
</script>

<style scoped lang="scss">

</style>