$(document).ready(function(){

  // 오늘의 선택 - gnb 클릭이벤트
  var todayGnb = $('#gnb li');
  var todayBox = $('.todayBox');

  todayGnb.click(function(){
    var idx_gnb = $(this).index(); // 선택한 li의 index값을 구해 idx_gnb라 선언
    
    todayGnb.removeClass('active'); // 모든 todayGnb의 active 클래스 제거
    $(this).addClass('active'); // 선택한 li에만 active 클래스 추가를 위해 this 사용

    todayBox.addClass('hidden'); // 모든 todayBox에 hidden 클래스 추가
    todayBox.eq(idx_gnb).removeClass('hidden'); // idx_gnb와 같은 인덱스번호를 찾아 hidden 클래스 제거

    // 이미지 변경
    $('.todayL .bookCover').css("background-image","url('./img/today" + idx_gnb + "_0.jpg')");
    $('.todayR .bookCover.todayR0').css("background-image","url('./img/today" + idx_gnb + "_1.jpg')");
    $('.todayR .bookCover.todayR1').css("background-image","url('./img/today" + idx_gnb + "_2.jpg')");
    $('.todayR .bookCover.todayR2').css("background-image","url('./img/today" + idx_gnb + "_3.jpg')");
  });







  // 실시간 HOT - 보고있는 사람 랜덤값
  $('.peopleNum').text(Math.floor(Math.random() * 1000));

  // 실시간 HOT - 순위
  $(function(){
    var idx = 0;
    var box = $('.hot01 li');
    var cont = $('.hotContent');
    setInterval(hot, 1500);
    function hot(){
      box.removeClass('active');
      box.eq(idx).addClass('active');
      cont.removeClass('active');
      cont.eq(idx).addClass('active');
      // active가 바뀔 때마다 랜덤값을 다시 주기 위해
      $('.peopleNum').text(Math.floor(Math.random() * 1000));
      // 이미지 경로 유의
      $('.hotR .bookCover').css("background-image","url('./img/hot0"+idx+".jpg')");
      // console.log(idx);
      idx++;
      if(idx >= box.length) idx= 0;
      for(i=0; i<3; i++);
    };
  });
  
  
  // 책 데이터를 json 활용해서 하고싶은데 어렵다.
  // 하고 싶은 것
  // 1. json을 통해 이미지를 불러오는 방법
  // 2. 각 카테고리에서 4개의 책을 랜덤으로 띄우는데 맨 왼쪽에 있는 책에만 정보를 같이 띄우고
  // 오른쪽에 있는 책들은 이미지만 나오게
  // 3. 오른쪽에 있는 책 클릭하면 왼쪽에 뜨게
  // 잘 안 되는 부분
  // 1. json에 데이터를 여러 개 만들어 놓으면 글씨가 겹쳐서 뜨는 문제

  // json 
  // $.ajax({
  //   url: "json/today.json",
  //   dataType: "json",
  //   success: function(data) {
  //     for(let i=0; i < data.length; i++) {
  //       const
  //         $url = data[i].url,
  //         $title = data[i].title,
  //         $genre = data[i].genre,
  //         $author = data[i].author,
  //         $percent = data[i].percent,
  //         $price = data[i].price,
  //         $comment = data[i].comment,
  //         $commentDesc = data[i].commentDesc;

  //       const bookInfo = $('<div class="bookInfo">').append(
  //         $('<h3 class="title">').text("[" + $genre + "] " + $title),
  //         $('<h3 class="author">').text($author),
  //         $('<h3 class="price">').text("원"),
  //         $('<h3 class="comment">').text($comment),
  //         $('<h3 class="commentDesc">').text($commentDesc)
  //       );
  //       const per = $('<h3 class="price">').prepend(
  //         $('<span class="percent">').text($percent + " "),
  //         $('<span class="val">').text($price)
  //       );
  //       $('.todayL .bookCover').append(bookInfo);
  //       $('.todayL .bookCover img').attr('src', $url);
  //       $('.todayL .price').prepend(per);
  //     }
  //   }
  // })

  // $('.todayR li').click(function(){
  //   $('.todayL .bookInfo_0').addClass('hidden');
  //   $('.todayL .bookInfo_1').removeClass('hidden');
  // })

});