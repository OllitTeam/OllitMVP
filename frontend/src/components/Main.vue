<template>
  <div class="hello">
    <div class="container-fluid header">
       <nav class="row">
            <div class="img_div col-xs-3 col-md-2 text-center">
                <a href="#">
                    <img class="logo" src="../assets/ollit_logo_korean.png" alt="올릿">
                </a>
            </div>
            <div class="about_ollit col-xs-3 col-md-2 offset-xs-6 offset-md-8 text-center">
                <a href="#" id="about_ollit">올릿이란?</a>
            </div>
        </nav>
        <header class="row">
            <div class="motto offset-xs-1 offset-md-2 col-xs-10 col-md-8 text-center">
                <small>올릿과 함께하는 IT 공부</small> <br>
                엄마 아빠! 올릿이 알려드리겠습니다!!
            </div>
        </header>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="course_list offset-sm-1 col-xs-3 col-sm-2 text-center">강좌 목록</div>
        </div>
        <div class="row courses">

            <div id="course_card" class="col-xs-6 col-sm-4">
                <a href="#"><article>
                    <img class="course_img" src="../assets/course_image1.png" alt="이모티콘 배우기">
                    <div class="course_info">
                        <small>스마트폰</small> <br>
                        카카오톡편
                    </div>
                    <div class="course_info2">
                        <img src="../assets/course_rank.png" class="course_rank" alt="별점">
                        <div class="course_price">무료</div>
                    </div>
                </article></a>
            </div>

            <div id="course_card" class="col-xs-6 col-sm-4">
                <a href="#"><article>
                    <img class="course_img" src="../assets/course_image2.png" alt="새로운 앱 배우기">
                    <div class="course_info">
                        <small>스마트폰</small> <br>
                        카카오톡편
                    </div>
                    <div class="course_info2">
                        <img src="../assets/course_rank.png" class="course_rank" alt="별점">
                        <div class="course_price">25000원</div>
                    </div>
                </article></a>
            </div>

            <div id="course_card" class="col-xs-6 col-sm-4">
                <a href="#"><article>
                    <img class="course_img" src="../assets/course_image2.png" alt="이모티콘 배우기">
                    <div class="course_info">
                        <small>스마트폰</small> <br>
                        카카오톡편
                    </div>
                    <div class="course_info2">
                        <img src="../assets/course_rank.png" class="course_rank" alt="별점">
                        <div class="course_price">무료</div>
                    </div>
                </article></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 768px)
{
    body
    {
        font-size: 8px;
    }
    #course_card
    {
        padding-left: 4vw;
        padding-right: 4vw;
        margin-bottom: 8vw;
    }
    .course_info
    {
        font-size: 4vw;
        padding-bottom: 5vw;
    }
    .course_rank
    {
        width: 18vw;
    }
    .course_price
    {
        margin-right: 1vw;
        font-size: 3vw;
    }
    .course_list
    {
        font-size: 4vw;
    }
}
@media (min-width: 769px) and (max-width: 991px)
{
    body
    {
        font-size: 10px;
    }
    .courses
    {
        padding-left: 5vw;
        padding-right: 5vw;
    }
    #course_card
    {
        padding-left: 2vw;
        padding-right: 2vw;
        margin-bottom: 4vw;
    }
    .course_info
    {
        font-size: 2vw;
        padding-bottom: 3vw;
    }
    .course_rank
    {
        width: 9vw;
    }
    .course_price
    {
        margin-right: 0.5vw;
        font-size: 1.5vw;
    }
    .course_list
    {
        font-size: 3vw;
    }
}
@media (min-width: 992px)
{
    body
    {
        font-size: 12px;
    }
    .courses
    {
        padding-left: 5vw;
        padding-right: 5vw;
    }
    #course_card
    {
        padding-left: 2vw;
        padding-right: 2vw;
        margin-bottom: 4vw;
    }
    .course_info
    {
        font-size: 2vw;
        padding-bottom: 3vw;
    }
    .course_rank
    {
        width: 9vw;
    }
    .course_price
    {
        margin-right: 0.5vw;
        font-size: 1.5vw;
    }
    .course_list
    {
        font-size: 2vw;
    }
}

@font-face {
    font-family: 'NanumRegular';
    src: url("../assets/fonts/NanumGothic.ttf") format('truetype');
}

@font-face {
    font-family: 'NanumSquareRegular';
    src: url("../assets/fonts/NanumSquareR.ttf") format('truetype');
}

@font-face {
    font-family: 'NanumSquareBold';
    src: url("../assets/fonts/NanumSquareB.ttf") format('truetype');
}

body
{
    font-family: NanumRegular;
}

.header
{
    background-image: url("../assets/main_background_image.png");
    background-size: 100%;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat;
}

.logo
{
    height: 6vw;
    width: auto;
}

.img_div
{
    height: 100%;
    margin-top: 2vw;
    margin-bottom: 2vw;
    line-height: 6vw;
}

.about_ollit
{
    color: #FFFFFF;
    height: 100%;
    margin-top: 2vw;
    margin-bottom: 2vw;
    line-height: 6vw;
    font-size: 2vw;
}

#about_ollit
{
    color: #FFFFFF;
    text-decoration: none;
}

.motto
{
    color: #FFFFFF;
    font-size: 3.8vw;
    margin-top: 3vw;
    margin-bottom: 10vw;
}

.course_list
{
    margin-top: 3vw;
    margin-bottom: 3vw;
    font-family: NanumSquareRegular;
    color: #141414;
}

.course_img
{
    width: 100%;
}

.course_info
{
    padding-left: 0.5vw;
    font-family: NanumSquareRegular;
    color: #141414;
    text-decoration: none;
}

.course_info2
{
    padding-bottom: 1vw;
}

.course_price
{
    display: inline-block;
    overflow: hidden;
    vertical-align: center;
    font-family: NanumSquareBold;
    color: #279CFC;
    float: right;
}

article
{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
