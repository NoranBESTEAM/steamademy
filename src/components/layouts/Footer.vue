<template>
    <!-- https://mdbootstrap.com/docs/standard/navigation/footer/ -->

    <!-- Footer -->

    <footer>

        <div class="container">

            <!-- Grid row -->

            <div class="row animate__animated animate__lightSpeedInLeft animate__delay-0.9s animate__slow">

                <!-- Grid column -->
                <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mx-auto" id="about-us">
                    <img src="@/assets/images/footer/logo_white.png" alt="footer_logo">
                    <p class="mt-3 text-justify">شركة رائدة في خدمات STEAM التعليمية!</p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mx-auto">
                    <!-- Links -->
                    <h6 class="fw-bold mb-3">
                        روابط هامة
                    </h6>
                    <p>
                        <a href="/about" class="text-reset">من نحن</a>
                    </p>
                    <p>
                        <a href="/commercial_concession" class="text-reset">امتياز STEAM التجاري</a>
                    </p>
                    <p>
                        <a href="/steam_fields" class="text-reset">مجالات STEAM</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mx-auto">
                    <!-- Links -->
                    <h6 class="fw-bold mb-3">
                        تواصل معنا
                    </h6>
                    <p>
                        <img src="@/assets/images/footer/location.svg" alt="Location" class="contactImg ms-2">
                        السعودية - الإمارات - مصر
                    </p>
                    <p>
                        <img src="@/assets/images/footer/phone.svg" alt="Contact" class="contactImg ms-2">
                        <span>966531577796+</span>
                    </p>
                    <p>
                        <img src="@/assets/images/footer/mail.svg" alt="Mail" class="contactImg ms-2">
                        <a href="https://portal.thaka.sa/ar" class="text-reset">info@Steamademy.com</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mx-auto">
                    <!-- Links -->
                    <h6 class="fw-bold mb-3">آخر الأخبار</h6>
                    <p>ادخل بريدك الإلكتروني ليصلك كل جديد</p>
                    <!-- Email input -->
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="البريد الإلكتروني" aria-label="Email"
                            aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1">
                            <!-- <i class="fa-solid fa-paper-plane fa-rotate-270"></i> -->
                            <!-- <font-awesome-icon icon="fa-paper-plane" /> -->
                            <font-awesome-icon :icon="['fas', 'fa-paper-plane']" class="inputIco" />
                        </span>
                    </div>
                    <!-- Social Links -->
                    <div id="social">
                        <a href="https://www.facebook.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-facebook-f"></i> -->
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>
                        <a href="https://twitter.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-x-twitter"></i> -->
                            <font-awesome-icon :icon="['fab', 'x-twitter']" />
                        </a>
                        <a href="https://www.instagram.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-instagram"></i> -->
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a href="https://www.linkedin.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-linkedin-in"></i> -->
                            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                        </a>
                    </div>
                </div>
                <!-- Grid column -->

            </div>

            <!-- Grid row -->

        </div>

        <!-- Copyright -->
        <div class="text-center pt-3 pb-3" id="copyright">
            جميع الحقوق محفوظة
            &copy; <a class="text-reset fw-bold" href="">Steamademy</a> {{ new Date().getFullYear() }}
        </div>
        <!-- Copyright -->

    </footer>

    <!-- Footer -->
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
footer {

    background: $Linear;

    color: $White;

    a {
        &:hover {
            color: $Orange !important;
        }
    }

    .row {

        padding-top: 40px;

        padding-bottom: 16px;

        border-bottom: 1px solid $White;

        p {
            font-size: 14px;
            // font-size: 16px;
            font-weight: 400;
        }

        #about-us {

            img {

                width: 115.993px;
                height: 80px;

                @include breakpoints(x-small) {
                    margin-bottom: 8px;
                }

            }

            p {
                // font-size: 18px;
                font-size: 16px;
            }

        }

        .contactImg {
            width: 24px;
            height: 24px;
        }

        .input-group {

            @include breakpoints(x-small) {
                width: 80%;
            }

            @include breakpoints(small) {
                width: 80%;
            }

            @include breakpoints(medium) {
                width: 80%;
            }

            input {
                border: none;
                border-radius: 0 4px 4px 0 !important;
                caret-color: $Gry;
            }

            input:focus,
            input:focus+span {
                border: none;
                box-shadow: none;
            }

            input::placeholder {
                color: $Gry;
                font-size: 12px;
                // font-size: 14px;
                font-weight: 400;
            }

            input:focus::placeholder {
                color: transparent;
            }

            span {
                border: none;
                border-radius: 4px 0 0 4px !important;
                background: $Orange;
                color: $White;
            }

            .inputIco {
                // CSS Vendor Prefixes
                -webkit-transform: rotate(270deg);
                -moz-transform: rotate(270deg);
                -o-transform: rotate(270deg);
                -ms-transform: rotate(270deg);
                transform: rotate(270deg);
            }

        }

    }

    #copyright {
        font-size: 12px;
        // font-size: 16px; 
        font-weight: 400;
    }

}
</style>
