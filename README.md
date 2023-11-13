# VueTeamCardShow_PiniaAxios

VueTeamCardShow_EmitComponent에서 구현된 소스에 기능을 추가한다.
Pinia 기술로 weather.js 에 weather 라는 이름으로 스토어를 한 개 만든다.
action에 해당하는 메서드를 호출하여 오늘의 날씨정보를 state 객체로 저장한다.
(오늘의 날씨정보는 springedu2 의 WeatherController 를 axois 기술을 사용해서 요청하여
읽어오고 응답된 JSON 내용에서 time 이라는 키의 값을 읽는다. 이때 axois 기술을 직접 구현해도
좋고… common.js 의 기능을 활용해도 좋다. 원하는대로 구현한다.)
각각의 TeamCard.vue 컴포넌트에서 weather 라는 이름으로 스토어 객체의 state 정보를 읽고
확인 버튼을 누르면 다음과 같이 경고창에 날씨도 함께 출력한 후에 해당 카드가 제거되도록
한다.
