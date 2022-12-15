$(document).ready(function(){

  /* target draggable */
  $('.target').draggable({
    containment : 'parent' // 선택자 안에서만 움직일 수 있음 (저건 부모요소!)
  });

  /* 화면 전체 draggable */ 

  // 변수 초기화
  let state = {
    clientX: 0, 
    clientY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  };
  
  // 마우스 움직일 때 실행
  function onMouseMove(event) {
    const { clientX, clientY, scrollLeft, scrollTop } = state;
    const wrap = $('#wrap');
    // wrap의 수직,수평스크롤 이동값 구하기
    // event.clientX 는 현재 움직이고 있는 x값 위치
    wrap.scrollLeft(scrollLeft - event.clientX + clientX);
    wrap.scrollTop(scrollTop - event.clientY + clientY);
    $('.screen').css('scale','1.02');
  }

  function onEvent() {
    // 마우스 이동할 때
    window.addEventListener('mousemove', onMouseMove);
    // 마우스 눌렀다 뗄 때 
    window.addEventListener('mouseup', offEvent);
  }
  
  // 마우스 움직임을 멈추거나 놨을 때 이벤트 제거
  function offEvent() {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', offEvent);
    $('.screen').removeClass('screen_loading');
    $('.targetBox').removeClass('screen_loading');
    $('.target').removeClass('screen_loading');
    $('.screen').css('scale','1.0');
  }
  
  // 화면 위치 초기화
  $('#wrap').scrollLeft(0);
  $('#wrap').scrollTop(0)
  
  $('.screen').mousedown(function(event) {
    $(this).addClass('screen_loading');
    const wrap = $('#wrap');
    state = {
      scrollLeft: wrap.scrollLeft(),
      scrollTop: wrap.scrollTop(),
      clientX: event.clientX,
      clientY: event.clientY,
    }
    onEvent();
    $(this).css('scale','1.02');
  });

  $('.targetBox').mousedown(function(event) {
    $(this).addClass('screen_loading');
  });
  $('.target').mousedown(function(event) {
    $(this).addClass('screen_loading');
    window.addEventListener('mouseup', offEvent);
    event.stopPropagation();
  });

  

  // back
  function goBack() {
    window.history.gp(-1);
  }
});