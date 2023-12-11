<template>

  <!-- Start Header -->
  <Header />
  <!-- End Header -->

  <!-- Start Service -->
  <Service />
  <!-- End Service -->

  <!-- Start Commercial_Concession_Home -->
  <Commercial_Concession_Home />
  <!-- End Commercial_Concession_Home -->

  <!-- Start Field_Home -->
  <Field_Home />
  <!-- End Field_Home -->

  <!-- Start Technologies -->
  <Technologies />
  <!-- End Technologies -->

  <!-- Start Contact_Us_Home -->
  <Contact_Us_Home />
  <!-- End Contact_Us_Home -->

  <!-- Start Footer -->
  <Footer />
  <!-- End Footer -->

</template>

<script>

import Header from '@/components/home/Header.vue';
import Service from '@/components/home/Service.vue';
import Commercial_Concession_Home from '@/components/home/Commercial_Concession_Home.vue';
import Field_Home from '@/components/home/Field_Home.vue';
import Technologies from '@/components/home/Technologies.vue';
import Contact_Us_Home from '@/components/home/Contact_Us_Home.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Service,
    Commercial_Concession_Home,
    Field_Home,
    Technologies,
    Contact_Us_Home,
  }
}

</script>

<style scoped lang="scss"></style>
