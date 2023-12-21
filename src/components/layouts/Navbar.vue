<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top">

        <div class="container">

            <!-- Logo -->
            <router-link to="/" class="navbar-brand p-0">
                <img src="@/assets/images/navbar/logo.png" alt="SteamademyLogo" />
            </router-link>

            <!-- Toggle Button -->
            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <font-awesome-icon :icon="['fas', 'fa-bars']" />
            </button>

            <!-- Sidebar -->
            <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">

                <!-- Sidebar Header -->
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        <img src="@/assets/images/navbar/logo.png" alt="SteamademyLogo" />
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <!-- Sidebar Body -->
                <div class="offcanvas-body">

                    <ul class="navbar-nav justify-content-center align-items-start flex-grow-1 pe-3">

                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page"
                                exact>الرئيسية</router-link>
                        </li>

                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'about' }" class="nav-link">من نحن</router-link>
                        </li>

                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'commercial_concession' }" class="nav-link">امتياز STEAM
                                التجاري</router-link>
                        </li>

                        <li class="nav-item mx-xxl-4 mx-xl-2">
                            <router-link :to="{ name: 'steam_fields' }" class="nav-link">مجالات STEAM</router-link>
                        </li>

                        <li class="nav-item d-block d-sm-block d-md-block d-lg-none d-xl-none">
                            <router-link :to="{ name: 'contact_us' }" class="nav-link">تواصل معنا</router-link>
                        </li>

                    </ul>

                    <!-- d-flex flex-lg-row  -->
                    <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                        <router-link :to="{ name: 'contact_us' }" class="btn border-0">
                            تواصل معنا
                            <img src="@/assets/images/navbar/arrow-up.svg" alt="" class="me-2">
                        </router-link>
                    </div>

                </div>

            </div>

        </div>

    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped lang="scss">
nav {

    background: $Gray;
    box-shadow: 0px 4px 4px 0px $BoxShadow;

    width: 100%;
    height: 72px;

    .container {

        .navbar-brand {
            img {

                width: 181px;
                height: 56px;

                /* @include breakpoints(x-small) {
                    width: 129.286px;
                    height: 40px;
                }

                @include breakpoints(small) {
                    width: 129.286px;
                    height: 40px;
                }

                @include breakpoints(medium) {
                    width: 129.286px;
                    height: 40px;
                } */
            }
        }

        .navbar-toggler {
            svg {
                color: $Orange;
                width: 24px;
                height: 24px;
            }
        }

        .offcanvas {

            background: $Gray;

            .offcanvas-header {

                h5 {
                    img {
                        width: 181px;
                        height: 56px;

                        /* @include breakpoints(x-small) {
                            width: 129.286px;
                            height: 40px;
                        }

                        @include breakpoints(small) {
                            width: 129.286px;
                            height: 40px;
                        }

                        @include breakpoints(medium) {
                            width: 129.286px;
                            height: 40px;
                        } */
                    }
                }

            }

            .offcanvas-body {

                ul {

                    li {

                        @include breakpoints(x-small) {
                            width: 100%;
                            border-bottom: 1px solid $Gry;
                        }

                        @include breakpoints(small) {
                            width: 100%;
                            border-bottom: 1px solid $Gry;
                        }

                        @include breakpoints(medium) {
                            width: 100%;
                            border-bottom: 1px solid $Gry;
                        }

                        a {
                            color: $Black;
                            // font-size: 16px;
                            font-size: 18px;
                            font-weight: 400;
                            line-height: normal;
                            text-align: center;
                        }

                        a:hover,
                        a.router-link-exact-active {
                            color: $Orange;
                            font-weight: 500;
                        }

                    }

                }

                div {

                    a {
                        padding: 3px 12px 4px 8px;
                        border-radius: 4px;
                        background: $Orange;
                        /* Shadow */
                        box-shadow: 0px 4px 4px 0px $BoxShadow;

                        color: $White;
                        font-size: 18px;
                        font-weight: 500;

                        line-height: normal;

                        img {
                            width: 24px;
                            height: 24px;
                        }
                    }

                }

            }

        }

    }

}
</style>