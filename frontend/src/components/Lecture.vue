<template>
  <div>
    <header>
      <div class="row">
        <div class="col-md-2 offset-md-1 col-sm-1 offset-sm-1 col-1 offset-1 text-center">
          <a href="http://localhost:8080/"> 
            <img class="header_elem" id="logo" src="../assets/ollit_logo_korean.png" />
          </a>
        </div>
        <div class="col-md-2 offset-md-6 col-sm-2 offset-sm-7 col-2 offset-7" id="header_info">
          <div id="header_info_text" class="header_elem">올릿이란?</div>
        </div>
      </div>
    </header>
    <section>
      <div class="row" id="video_section">
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-10 offset-1 section_video">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0" id="video"></iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-10 offset-1 section_paragraph">
          <div id="lecture_title">
            카카오톡 글자 키우기   
          </div>
          <div id="lecture_upload_time">
            2018.02.07 게시
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-10 offset-1 section_paragraph">
          <div id="lecture_description">
            카카오에서 채팅방의 글자 크기를 키우는 방법을 간단히 알려드리겠습니다.
            어렵지 않으니 천천히 따라해 보세요.
          </div>
        </div>
      </div>
      <div class="row other_lecture_paragraph">
        <div class="col-md-3 offset-md-2 col-sm-4 offset-sm-1 col-4 offset-1 text-left non_padding">
          <a href="http://localhost:8080/lecture">
          <div class="other_lecture_thumbnail" style="background: url('https://img.youtube.com/vi/tgbNymZ7vqY/mqdefault.jpg'); background-repeat: no-repeat; background-size: 100%;" >
            <div class="time">
              5:00
            </div>
          </div>
          </a>
        </div>
        <div class="col-md-5 col-sm-6 col-6 other_lecture_content_paragraph">
          <a href="http://localhost:8080/lecture">
          <div class="other_lecture_title">
            카카오톡 글자 키우기   
          </div>
          <div class="other_lecture_instructor">
            김준회 강사
          </div>
          <div class="other_lecture_upload_time">
            2018.02.07 게시
          </div>
          </a>
        </div>
      </div>
      <div class="row other_lecture_paragraph">
        <div class="col-md-3 offset-md-2 col-sm-4 offset-sm-1 col-4 offset-1 text-left non_padding">
          <a href="http://localhost:8080/lecture">
          <div class="other_lecture_thumbnail" style="background: url('https://img.youtube.com/vi/tgbNymZ7vqY/mqdefault.jpg'); background-repeat: no-repeat; background-size: 100%;" >
            <div class="time">
              5:00
            </div>
          </div>
          </a>
        </div>
        <div class="col-md-5 col-sm-6 col-6 other_lecture_content_paragraph">
          <a href="http://localhost:8080/lecture">
          <div class="other_lecture_title">
            카카오톡 글자 키우기   
          </div>
          <div class="other_lecture_instructor">
            김준회 강사
          </div>
          <div class="other_lecture_upload_time">
            2018.02.07 게시
          </div>
          </a>
        </div>
      </div>
      <div class="row other_lecture_paragraph">
        <div class="col-md-3 offset-md-2 col-sm-4 offset-sm-1 col-4 offset-1 text-left non_padding">
          <a href="http://localhost:8080/lecture">
          <div class="other_lecture_thumbnail" style="background: url('https://img.youtube.com/vi/tgbNymZ7vqY/mqdefault.jpg'); background-repeat: no-repeat; background-size: 100%;" >
            <div class="time">
              5:00
            </div>
          </div>
          </a>
        </div>
        <div class="col-md-5 col-sm-6 col-6 other_lecture_content_paragraph">
          <a href="http://localhost:8080/lecture">
          <div class="other_lecture_title">
            카카오톡 글자 키우기   
          </div>
          <div class="other_lecture_instructor">
            김준회 강사
          </div>
          <div class="other_lecture_upload_time">
            2018.02.07 게시
          </div>
          </a>
        </div>
      </div>
      <div class="row other_lecture_paragraph">
        <div class="col-md-3 offset-md-2 col-sm-4 offset-sm-1 col-4 offset-1 text-left non_padding">
          <a href="http://localhost:8080/lecture">
          <div class="other_lecture_thumbnail" style="background: url('https://img.youtube.com/vi/tgbNymZ7vqY/mqdefault.jpg'); background-repeat: no-repeat; background-size: 100%;" >
            <div class="time">
              5:00
            </div>
          </div>
          </a>
        </div>
        <div class="col-md-5 col-sm-6 col-6 other_lecture_content_paragraph">
          <a href="http://localhost:8080/lecture">
          <div class="other_lecture_title">
            카카오톡 글자 키우기   
          </div>
          <div class="other_lecture_instructor">
            김준회 강사
          </div>
          <div class="other_lecture_upload_time">
            2018.02.07 게시
          </div>
          </a>
        </div>
      </div>
    </section>
    <footer>
    </footer>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.non_padding {
  padding-left: 0px;
  padding-right: 0px;
}

header {
  height: 14vw;
  background: url('../assets/main_background_image.png');
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-size: 100%;
}

.header_elem {
  margin-top: 3vw;
}

#header_info {
  vertical-align: bottom;
}

.section_video {
  padding: 0;
}

.section_paragraph {
  border-bottom: 1px solid #eeeeee;
  padding: 0;
}

.other_lecture_content_paragraph {
  padding-left: 1.4vw;
}

@media (max-width: 576px) {

  #logo {
    width: auto;
    height: 5vw;
  }

  #video_section {
    background-color: #E6E7E8;
    height: 55vw;
    padding-top: 1.4vw;
  }

  #header_info_text {
    color: white;
    font-size: 3vw;
    font-weight: 500;
    text-align: center;
    margin-top: 4vw;
  }

  .other_lecture_thumbnail {
    position: relative;
    height: 23vw;
    width: auto;
  }

  .other_lecture_thumbnail .time {
    position: absolute;
    bottom: 1.8vh;
    right: 1vh;
    color: white;
    font-size: 2vh;
    text-align: right;
  }
  .other_lecture_title {
    font-size: 2vh;
    font-weight: 500;
    color: black;
  }

  .other_lecture_instructor {
    font-size: 2vh;
    color: black;
  }

  .other_lecture_upload_time {
    font-size: 2vh;
    position: absolute;
    bottom: 1.5vh;
    color: #787878;
    font-weight: 500;
  }
}

@media (min-width: 577px) and (max-width: 768px) {

  #logo {
    width: auto;
    height: 5vw;
  }

  #video_section {
    background-color: #E6E7E8;
    height: 50vw;
    padding-top: 1.4vw;
  }

  #header_info_text {
    color: white;
    font-size: 3vw;
    font-weight: 500;
    text-align: center;
    margin-top: 4vw;
  }


  .other_lecture_thumbnail {
    position: relative;
    height: 20vw;
    width: auto;
  }

  .other_lecture_thumbnail .time {
    position: absolute;
    bottom: 1.5vh;
    right: 1vh;
    color: white;
    font-size: 2.5vh;
    text-align: right;
  }
  .other_lecture_title {
    font-size: 2.5vh;
    font-weight: 500;
    color: black;
  }

  .other_lecture_instructor {
    font-size: 2.5vh;
    color: black;
  }

  .other_lecture_upload_time {
    font-size: 2.5vh;
    position: absolute;
    bottom: 2vh;
    color: #787878;
    font-weight: 500;
  }

}

@media (min-width: 769px) and (max-width: 991px) {

  #logo {
    width: auto;
    height: 5vh;
  }

  #video_section {
    background-color: #E6E7E8;
    height: 42vw;
    padding-top: 2vh;
  }

  #header_info_text {
    color: white;
    font-size: 3vw;
    font-weight: 500;
    text-align: center;
    margin-top: 4vw;
  }

  .other_lecture_thumbnail {
    position: relative;
    height: 16vw;
    width: auto;
  }

  .other_lecture_thumbnail .time {
    position: absolute;
    bottom: 2vh;
    right: 1.5vh;
    color: white;
    font-size: 2vh;
    text-align: right;
  }
  .other_lecture_title {
    font-size: 2.5vh;
    font-weight: 500;
    color: black;
  }

  .other_lecture_instructor {
    font-size: 2.5vh;
    color: black;
  }

  .other_lecture_upload_time {
    font-size: 2.5vh;
    position: absolute;
    bottom: 2vh;
    color: #787878;
    font-weight: 500;
  }
}

@media (min-width: 992px) {

  #logo {
    width: auto;
    height: 7vh;
  }

  #video_section {
    background-color: #E6E7E8;
    height: 42vw;
    padding-top: 2vh;
  }

  #header_info_text {
    color: white;
    font-size: 4vh;
    font-weight: 500;
    text-align: center;
    margin-top: 6vh;
  }

  .other_lecture_thumbnail {
    position: relative;
    height: 15vw;
    width: auto;
  }

  .other_lecture_thumbnail .time {
    position: absolute;
    bottom: 0.7vw;
    right: 1vw;
    color: white;
    font-size: 2.5vh;
    text-align: right;
  }

  .other_lecture_title {
    font-size: 3vh;
    font-weight: 500;
    color: black;
  }

  .other_lecture_instructor {
    font-size: 3vh;
    color: black;
  }

  .other_lecture_upload_time {
    font-size: 3vh;
    position: absolute;
    bottom: 2vh;
    color: #787878;
    font-weight: 500;
  }
}

#video {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#lecture_title {
  font-size: 3.5vh;
  font-weight: 500;
  line-height: 6vh;
  padding-top: 0.8vw;
}

#lecture_upload_time {
  font-size: 2vh;
  line-height: 5vh;
  vertical-align: top;
}

#lecture_description {
  font-size: 2vh;
  line-height: 3vh;
  padding-bottom: 8vw;
  padding-top: 1.3vw;
}

.other_lecture_paragraph {
  padding-top: 2vw;
}


footer {
  height: 24vh;
}

</style>

