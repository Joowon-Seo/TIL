const newYear = {
  name: "을사년",
  number: 2025,
  wish: ["건강", "다이어트하기", "잘익은 감자가 되기", "취업"],
  //   "wish": ["건강", "다이어트하기", "잘익은 감자가 되기", "취업"],
  1: "숫자도 들어갈 수 있지요", // 권장 되지 않음
  true: "가능?", // 권장 되지 않음 - 이건 boolean true가 아니라 변수명 true
  hello: function () {
    console.log("안녕하세요!");
  },
};

console.log(newYear.name);
console.log(newYear.number);
console.log(newYear["number"]);
console.log(newYear.wish);
console.log(newYear["wish"]);
// console.log(newYear.1);
console.log(newYear["1"]);
console.log(newYear.true);
console.log(newYear.hello);
console.log(newYear.hello());
newYear.hello();

// ------------------

// es6+ 이후로는 문자열 프로퍼티 하에서는 어느정도의 순서보장이 된다
console.log(Object.keys(newYear));
// 자바스크립트 바나나 (banana)
console.log(("b" + "a" + +"a" + "a").toLowerCase());

console.log(Object.values(newYear)); // key의 순서에 대응, 하지만 이걸 가지고 뭘 하지는 말라
// 왜? : 브라우저마다 결과가 다를 수 있음 (보장되지 않음)

console.log(Object.entries(newYear));

// -------------------

const language = ["python", "js", "c++", 0, true, {}, []];
// 자바스크립트에서의 함수형 프로그래밍 -> jsx, tsx react. next.

// R과 엑셀을 제외하고서는 (가끔씩 LLM도 1부터씩 세는데 오히려 0부터 세서 불편할 때가 더 많음)
// 0이라고 하는 태그를 붙여서 1씩 증가하면서 숫자 태그를 붙여간다
// 고정적인 길이를 가지는 경우도 있지만, 자바스크립트는 굳이 고정하지 않는다면 그 크기는 유동적이다.
// 자르다 1 - 3 => js, c++. => 0, 1.
console.log(language.slice(1, 3)); // 포함, 불포함 여부를 체크해야함
// 끝점은 포함안됐다. 시작점은 포함, 끝점을 불포함
// (1) 배열의 인덱스를 적용하고 있는가 (0부터 시작하는가)
// (2) 시작점과 끝점을 어떻게 적용하는가 (일반적으로 시작점은 포함, 끝점은 제외)
// -> 자바스크립트는 음수 인덱스가 없다 (주의!) (파이썬과 혼용 주의)
console.log(language.length); // () => 괄호가 필요한 건 호출이 필요
// 호출이 필요한 건 -> 함수 또는 메서드라는 것
// 파이썬은 len(...) 자바는 배열.length()나 자료구조.size()로 처리

console.log(language.concat(language));
// 배열들로 구성된 원소가 있을 겨우 그 원소들로 합쳐진 (1차적인 배열이 해제된) 배열을 리턴해준다
// -> language.concat(language) => 원본과 무슨 관계?

const l2 = language.concat(language, language); // concat -> 2개를 연결
// 아예 새로운 배열이 나온 것.

console.log(language);
console.log(l2);

l2.pop(); // 맨 끝에 있는 걸 제거...

console.log(language); // 영향이 없음.
console.log(l2);

for (let i = 0; i <= language.length; i++) {
  console.log(i, language[i]);
  // 배열은 인덱스와 배열[인덱스]로 값 호출
  // 마이너스라던가, 전체 길이 이상의 값을 호출한다면
  // arr.length 이상의 값을 호출하면 에러? undefined?
  // -> 없는 키를 호출하면 undefined가 난다;;; (정말 신기한 언어...)
}

for (const v of language) {
  // 값 하나 하나를 굳이 인덱스를 호출하는 번거로움을 거치지 않고
  // 그냥 v라는 변수로 그 때 그 때 (이 v는 다른 이름이어도 되고, 블록이 지나면 소멸)
  console.log(v);
  // 인덱스를 안쓰거나 못쓰는 거죠... // 백트래킹 류라던가...?
}

for (const key in newYear) {
  // console.log(key, newYear.key); // key라는 이름의 프로퍼티를 조회
  console.log(key, newYear[key]);
}

/*
나는 자바스크립트 nextjs로 풀스택을 지망하는 곧 졸업을 앞둔 졸업작품에서 실제 배포를 겪고 여러 해커톤도 진행해본 수준의 개발자야.
나를 위한 자바스크립트 알고리즘 코딩테스트 대비를 위한 현재 1월 31일부터 3월 1일까지의 커리큘럼을 짜줘.
프로그래머스 사이트를 이용하여 Lv1, Lv2, Lv3 문제와 고득점 키트, 카카오 기출 문제를 중심으로 활용해서 작성해주고 편의상 링크를 꼭 포함해줘.


/*
힌트: 
- 최종 메시지를 만들기 위해서는 각 사용자의 최종 닉네임을 알아야 합니다
- 객체를 사용하여 userId를 key로, 최신 닉네임을 value로 저장하면 편리합니다
- 입장/퇴장 기록은 별도로 저장해두었다가, 마지막에 최종 닉네임과 합쳐서 결과를 만들면 됩니다
*/

function solution(record) {
  // 1. userId를 key로 하고 닉네임을 value로 하는 객체를 선언하세요
  const obj = {};

  // 2. 입장/퇴장 기록을 담을 배열을 선언하세요
  const rec = [];

  // 3. record 배열을 순회하면서 각 행동(Enter/Leave/Change)에 따라 처리하세요
  for (const v of record) {
    // 3-1. 공백을 기준으로 문자열을 분리하세요 (안 배운 건 검색이나 추가 공부)
    const result = v.split(" "); // 결과가 뭐야? -> array -> 인덱스 0, 1, 2...

    // 3-2. 첫 번째 단어(action)에 따라 다르게 처리하세요
    if (result[0] == "Enter") {
      // Enter인 경우:
      // - userId(두번째, 1)와 닉네임(세번째, 2)을 객체에 저장
      obj[result[1]] = result[2]; // 각각을 변수로 선언해서 뺀다음에 대입해도 괜찮다.
      // 주석과 콘솔로 출력하면서 표시하면서 가면 더 좋다...
      // - 입장 기록 추가 (기록 -> 배열 추가 -> 끝 추가 -> ... push)
      rec.push(`${result[1]}님이 들어왔습니다.`); // 나중에 닉네임이 최종 확정되면
      // replace라는 걸로 바꿀 수 있어요.
    } else if (result[0] == "Leave") {
      // Leave인 경우:
      // - 퇴장 기록 추가
      rec.push(`${result[1]}님이 나갔습니다.`); // 나중에 닉네임이 최종 확정되면
    } else if (result[0] == "Change") {
      // Change인 경우:
      // - userId의 닉네임만 갱신
      obj[result[1]] = result[2];
    }
  }

  // 4. 모든 기록을 순회하면서 최종 메시지 배열을 생성하세요
  return rec;
}

// -------------------------------------------------------

/*
힌트: 
- 최종 메시지를 만들기 위해서는 각 사용자의 최종 닉네임을 알아야 합니다
- 객체를 사용하여 userId를 key로, 최신 닉네임을 value로 저장하면 편리합니다
- 입장/퇴장 기록은 별도로 저장해두었다가, 마지막에 최종 닉네임과 합쳐서 결과를 만들면 됩니다
*/

function solution(record) {
  // 1. userId를 key로 하고 닉네임을 value로 하는 객체를 선언하세요
  const userInfo = {};

  // 2. 입장/퇴장 기록을 담을 배열을 선언하세요
  const messages = [];

  // 3. record 배열을 순회하면서 각 행동(Enter/Leave/Change)에 따라 처리하세요
  for (const log of record) {
    // 3-1. 공백을 기준으로 문자열을 분리하세요
    const [action, userId, nickname] = log.split(" ");

    // 3-2. 첫 번째 단어(action)에 따라 다르게 처리하세요
    if (action === "Enter") {
      // Enter인 경우:
      // - userId와 닉네임을 객체에 저장
      userInfo[userId] = nickname;
      // - 입장 기록 추가
      messages.push([userId, "님이 들어왔습니다."]);
    } else if (action === "Leave") {
      // Leave인 경우:
      // - 퇴장 기록 추가
      messages.push([userId, "님이 나갔습니다."]);
    } else if (action === "Change") {
      // Change인 경우:
      // - userId의 닉네임만 갱신
      userInfo[userId] = nickname;
    }
  }

  // 4. 모든 기록을 순회하면서 최종 메시지 배열을 생성하세요
  return messages.map(([userId, message]) => userInfo[userId] + message);
}
