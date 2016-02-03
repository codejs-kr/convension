/*
 * 절대로 중복 코드를 찍어 내지 마세요! 그 코드들은 분명히 독이 되어 올아옵니다.
 * 메이저 브라우저들의 특징을 숙지하세요.(IE, Firefox, Chrome, Safari)
 * 네임스페이스를 효율적으로 사용하세요.
 * 사람이 알아볼수 있는 변수, 함수명을 사용하세요.(모듈, 액션까지 통일하면 삶이 편해짐)
 * 변수 생성시 단수/복수, 과거/현재를 구분하는 버릇을 가지세요.
 * 필요이상으로 자바스크립트 또는 브라우저 플러그인에 의존하지 마세요.
 * UTF-8인코딩은 기본입니다.(아닌 경우 encodeURI 등에서 오류 발생)
 * 인덴트(들여쓰기)는 공백 2칸 또는 Tab 중 하나로 작업자간 통일하세요.
 * 가독성을 위하여 CSS 코딩에는 120컬럼을 줄바꿈을 사용하세요.
 * 자바스크립트 비중이 많은 프로젝트는 파일을 분산 시키세요.
 * 재사용되지 않는 변수 선언을 피하세요.
 * 배포시 정적파일(css, img, js)은 압축하세요.
 */

// 1. 파일 상단 overview 주석 
/**
 *
 * ProjectName - filename.js
 *
 * IMPORTANT NOTE: This file is licensed only for use in providing the RSUPPORT services.
 *
 * @license Copyright (c) RSUPPORT CO., LTD. (http://www.rsupport.com/)
 * @author Front-End Team | Park Jeong Shik (jspark@rsupport.com)
 * @fileOverview 파일 간략 설명
 *
 */


// 2. 함수 주석 방법
/**
 * functionName
 * function discription 추가적으로 필요한 경우만
 * 
 * @param {Array} user name array
 * @param {Element} target element
 * @return {Object} user data
 */
function functionName(names, target) {
  // do something...
}


// 3. 함수 선언
function myFunc(){
  // do something...
}
var myFunc = function() {
  // do something...
};


// 4. OOP
function Class() {
  // do something...
}
Class.prototype.set = function() {
  this.id = 'my id';
};
Class.prototype.get = function() {
  return this.id;
};


// 5. if
var value;
if (n === 2) {
  value = n;
} else {
  value = 1;
}


// 6. for
for (var i = 0; i < 10; i++) {
  
}


// 7. jQuery가 추천하는 네임스페이스 관리
(function($) {
  // do something...
});


/*
 * 변수와 함수명을 짓는건 정해진 답은 없다.
 * 암묵적인 룰이며, 의미적으로 가장 적절하고 전통적으로 사용되는 동사로 함수명을 시작하면 된다. 
 * 
 * CRUD도 REST API에서는 아래와 같은 요청 메서드로 구분된다.
 * create -> post
 * read -> get
 * update -> put
 * delete -> delete
 * 
 * DB쿼리는 insert, delete, update, select로 사용된다.
 * 
 * 자주 사용되는 메서드 동사
 * create, 생성
 * add, 추가
 * update, refresh 갱신(수정)
 * delete, remove 삭제
 * get - set
 * send - onMessage
 * emit - on
 * start - end
 * open - close
 * connect - disconnect
 */
var name = 'foo';           // 일반
var isMobile = true;        // 상태
var hasImgUser = 'userId';  // 존재 여부
var users = {};             // 객체
var fruit = [];             // 배열

function getUserData() {
  // do something...
}

function setUserData() {
  // do something...
}

var user = {
  add: function() {
    // do something...
  },
  update: function() {
    // do something...
  },
  delete: function() {
    // do something...
  }
};

var group = {
  create: function() {
    // do something...
  },
  modify: function() {
    // do something...
  },
  delete: function() {
    // do something...
  },
  getList: function() {
    // do something...
  }
};

var tree = {
  getItems: function() {
    // do something...
  },
  addItem: function() {
    // do something...
  },
  deleteItem: function() {
    // do something...
  },
  modifyItem: function() {
    // do something...
  },
  refresh: function() {
    // do something...
  }
};