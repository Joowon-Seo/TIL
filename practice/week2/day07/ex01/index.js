console.log("hello world!");

// 할줄 주석
/* 여러줄 주석 */

var foo = "apple"; // 변수
console.log(foo);
bar = "mango";
console.log(bar);

// 앞에 타입을 쓰지 않으면, var라는 키워드가 알아서 붙는다 -> 선언
var baz = "applemango"; // 초기화.
// 선언은 한 번만 가능
var foo; // 중복 선언이 가능하고, 아무런 반응이 없음

// 따라서 let, const (es6+, 2015~)
let dev = 100;
dev = 200; // 재할당
// let dev; SyntaxError
// prompt ex : error를 재현할 수 있는 샘플코드를 제공해줘

// 절대 변하면 안된다? immutable, final, constant...
// 1. immutable ->  mutable. -> mutate -> property -> class/protype -> instance
// 2. final -> 주소값만 고정 (메모리 주소값) - (일반적으로는 객체인데) 처음으로 입력된 레퍼런스 객체 주소값이 안변함
// 3. constant -> 그냥 고정된 리터럴 값. 그자체. 유니코드 같은 것. 상수. 그 값.

const feature = 3.14; // 초기화만 가능
// feature = 3; // TypeError: Assignment to constant variable.
