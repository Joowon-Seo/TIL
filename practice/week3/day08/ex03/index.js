/*
javascript에서 객체(object)와 배열(array), 맵(map), 셋(set)과 관련하여 주요 메서드들 중
최신 프런트엔드 문법과 관련하여 가장 많이 쓰이는 순으로 10개씩 소개해주고,
그것과 관련된 프로그래머스 문제 3개씩을 추천해줘. 난이도는 1,2 레벨로.
bullet point, nutshell, markdown.
*/

const obj = { name: "kim", age: 15 };
console.log(obj);
// console.log(obj.keys());
console.log(Object.keys(obj)); // object 타입의 객체를 담으면...
// 유틸리티 메서드. 스태틱 메서드. (자바에서 자세히 설명하겠습니다 to continue)
console.log(Object.values(obj));
console.log(Object.entries(obj));

const objk = Object.keys(obj);
for (let index = 0; index < objk.length; index++) {
  const element = objk[index];
  //   console.log(objk[index]);
  console.log("element", element);
}
for (const v of objk) {
  //   const element = objk[index];
  //   console.log(objk[index]);
  console.log("v", v);
}
for (const key in obj) {
  console.log(key, obj[key]);
}
// sort push 같은 건 생략...
// 1. 왜? java 때 유사한 거 많이 함...
// 2. 함수형 프로그래밍할 때 배열과 관련된 묶음처리 관련되서 많은 메서드 다시 등장
// 3. 화면/데이터/네트워크 관련되서 여러 데이터 처리 (정렬, 맵, 리듀스, 필터)... 어쩔 수 없이 들어감.
