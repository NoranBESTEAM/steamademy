<template>
    <section id="contact_us">

        <div class="container d-flex justify-content-center align-items-center wow animate__animated animate__flash animate__delay-0.9s animate__slow">

            <div id="text_wrapper" class="d-inline-block ms-5 mb-5">

                <h5 class="fw-bold mb-3">تواصل معنا</h5>

                <p class="fw-bold mb-0">دعونا نرتقي بالتعليم معا</p>

            </div>

            <div id="link_wrapper" class="mb-5">
                <router-link :to="{ name: 'contact_us' }" type="button" class="btn">
                    تواصل معنا
                    <font-awesome-icon :icon="['fas', 'fa-arrow-left']" class="me-2" />
                </router-link>
            </div>

            <div class="circles d-flex justify-content-center align-items-center">
                <div class="circle_wrapper d-inline-block">
                    <div class="circle_ele" id="ele_one"></div>
                </div>
                <div class="circle_wrapper d-inline-block">
                    <div class="circle_ele" id="ele_two"></div>
                </div>
                <div class="circle_wrapper d-inline-block">
                    <div class="circle_ele" id="ele_three"></div>
                </div>
                <div class="circle_wrapper d-inline-block">
                    <div class="circle_ele" id="ele_four"></div>
                </div>
                <div class="circle_wrapper d-inline-block">
                    <div class="circle_ele" id="ele_five"></div>
                </div>
            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Contact_Us_Home',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#contact_us {

    padding-top: 40px;
    padding-bottom: 40px;

    @include breakpoints(x-small) {
        padding-left: 12px;
        padding-right: 12px;
    }

    .container {

        background-color: $Dark-blue;

        border-radius: 24px;
        box-shadow: 0px 4px 4px 0px $BoxShadow;

        // padding: 41px 40px 16px 40px;
        padding-top: 40px;
        padding-bottom: 40px;

        position: relative;

        @include breakpoints(x-small) {
            display: grid !important;
        }

        #text_wrapper {

            @include breakpoints(x-small) {
                margin-bottom: 0 !important;
            }

            h5 {
                color: $Gray;
                // text-align: right;
                font-size: 20px;
                // font-weight: 500;
                line-height: normal;
            }

            p {
                color: $White;
                // text-align: right;
                font-size: 24px;
                // font-weight: 500;
                line-height: normal;
            }

        }

        #link_wrapper {

            @include breakpoints(x-small) {
                margin-top: 16px;
            }

            a {

                display: inline-flex;
                justify-content: center;
                align-items: center;

                border-radius: 4px;
                background: $Orange;

                /* Shadow */
                box-shadow: 0px 4px 4px 0px $BoxShadow;

                color: $White;
                font-size: 18px;
                font-weight: 500;
                line-height: normal;

                svg {
                    width: 24px;
                    height: 24px;
                }

            }

        }

        .circles {

            position: absolute;
            bottom: 16px;

            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            .circle_wrapper {

                margin-left: 100px;
                margin-right: 100px;

                @include breakpoints(x-small) {
                    margin-left: 12px;
                    margin-right: 12px;
                }

                @include breakpoints(small) {
                    margin-left: 25px;
                    margin-right: 25px;
                }

                @include breakpoints(medium) {
                    margin-left: 40px;
                    margin-right: 40px;
                }

                @include breakpoints(large) {
                    margin-left: 70px;
                    margin-right: 70px;
                }

                @include breakpoints(x-Large) {
                    margin-left: 80px;
                    margin-right: 80px;
                }

                .circle_ele {
                    width: 46.672px;
                    height: 48px;
                    border-radius: 50%;
                }

                #ele_one {
                    background-color: $Green;
                    opacity: 50%;
                }

                #ele_two {
                    background-color: $Orange;
                    opacity: 50%;
                }

                #ele_three {
                    background-color: $Ylo;
                    opacity: 50%;
                }

                #ele_four {
                    background-color: $Mov;
                    opacity: 50%;
                }

                #ele_five {
                    background-color: $Gray;
                    opacity: 50%;
                }
                
            }

        }

    }

}
</style>