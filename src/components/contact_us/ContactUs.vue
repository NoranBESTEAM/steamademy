<template>
    <section id="contact_us">

        <div class="container">

            <h3 class="fw-bold mb-4 animate__animated animate__backInDown animate__delay-0.5s animate__slow">تواصل معنا</h3>

            <div id="content_wrapper" class="animate__animated animate__backInUp animate__delay-1s animate__slow">

                <form>

                    <div class="mb-3">
                        <label for="exampleInputText" class="form-label">الاسم</label>
                        <input type="text" class="form-control w-50 shadow-none" id="exampleInputText">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">البريد الإلكتروني</label>
                        <input type="email" class="form-control w-50 shadow-none" id="exampleInputEmail">
                    </div>

                    <div class="row g-3 align-items-center">

                        <div class="col-auto">

                            <div class="mb-3 form-check">
                                <input type="radio" class="form-check-input" id="flexRadioDefault1" name="role">
                                <label class="form-check-label shadow-none" for="flexRadioDefault1">صاحب مدرسة</label>
                            </div>

                        </div>

                        <div class="col-auto">

                            <div class="mb-3 form-check">
                                <input type="radio" class="form-check-input" id="flexRadioDefault2" name="role">
                                <label class="form-check-label shadow-none" for="flexRadioDefault2">مدرب</label>
                            </div>

                        </div>

                    </div>

                    <div class="mb-3">
                        <label class="form-label" for="phone">رقم الهاتف</label>
                        <input type="tel" class="form-control w-50 shadow-none" id="phone" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label" for="exampleFormControlTextarea">رسالتك</label>
                        <!-- rows="10" -->
                        <textarea class="form-control shadow-none" id="exampleFormControlTextarea"></textarea>
                    </div>

                    <button type="submit" class="btn btn-lg">إرسال</button>

                </form>

                <div id="img_wrapper">
                    <img src="@/assets/images/contact_us/ContactUs.png" alt="">
                </div>

            </div>

        </div>


    </section>
</template>

<script>
export default {
    name: 'ContactUs',
}
</script>

<style lang="scss" scoped>
#contact_us {

    margin-top: 72px;

    padding-top: 40px;
    padding-bottom: 40px;

    .container {

        h3 {
            font-family: 'Bahij_TheSansArabic_Bold';
            color: $Mov;
            text-align: right;
            font-size: 24px;
            // font-weight: 500;

            @include breakpoints(x-small) {
                text-align: center;
            }

            @include breakpoints(small) {
                text-align: center;
            }

        }

        #content_wrapper {

            @include breakpoints(x-small) {
                display: grid;
            }

            @include breakpoints(small) {
                display: grid;
            }

            form {

                position: relative;

                @include breakpoints(x-small) {
                    position: initial;
                    order: 2;
                }

                @include breakpoints(small) {
                    position: initial;
                    order: 2;
                }

                label {
                    color: $Green;
                    text-align: justify;
                    font-size: 16px;
                    font-weight: 400;
                }

                .form-check {
                    label {
                        color: $Black;
                    }
                }

                input {
                    border: 1px solid $Gray;
                    caret-color: $Gray;

                    // color: $Gray;
                }

                /* 
                input::placeholder {
                    color: $Gray;
                }
                input:focus::placeholder {
                    color: transparent;
                } */

                input[type="text"] {

                    @include breakpoints(x-small) {
                        width: 100% !important;
                    }

                    @include breakpoints(small) {
                        width: 100% !important;
                    }

                }

                input[type="email"] {

                    @include breakpoints(x-small) {
                        width: 100% !important;
                    }

                    @include breakpoints(small) {
                        width: 100% !important;
                    }

                }

                input[type="radio"] {
                    float: right;
                    margin-left: 8px;
                    border-color: red;
                }

                input[type="radio"]:checked {
                    // background-color: #0d6efd;
                    background-color: red;
                    // border-color: #0d6efd;
                    border-color: red;
                    box-shadow: none;
                }

                input[type="radio"]:focus {
                    box-shadow: none;
                }

                input[type="tel"] {

                    @include breakpoints(x-small) {
                        width: 100% !important;
                    }

                    @include breakpoints(small) {
                        width: 100% !important;
                    }
                    
                }

                textarea {
                    width: 100%;
                    height: 285px;
                    border: 1px solid $Gray;
                    caret-color: $Gray;
                }

                button {

                    width: 187px;
                    padding: 5px 12px 6px 8px;

                    border-radius: 4px;
                    background: $Orange;
                    box-shadow: 0px 4px 4px 0px $BoxShadow;

                    color: $White;
                    font-size: 18px;
                    font-weight: 500;

                }

            }

            #img_wrapper {

                width: 330px;
                height: 290px;

                position: absolute;
                top: 0;
                left: 5%;

                @include breakpoints(x-small) {
                    position: initial;
                    margin: auto;
                    margin-bottom: 16px;
                    order: 1;
                }

                @include breakpoints(small) {
                    position: initial;
                    margin: auto;
                    margin-bottom: 16px;
                    order: 1;
                }

                @include breakpoints(medium) {
                    left: 0;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            }

        }

    }

}
</style>