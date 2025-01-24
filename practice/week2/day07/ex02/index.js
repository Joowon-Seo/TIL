let integer = 4;
console.log(integer);
let float = 3.13;
console.log(float);

let string = "hello";
let emtyString = "";
// length, size...
console.log(`안녕하세요! ${integer}`); // ` 빽틱
let isCold = true; // 1
let isHard = false; // 0, 아예 없거나, 애초에 존재하지 않았던거나, 빈 것들.
console.log(isCold);

let memory;
console.log("메모리 :", memory); // 초기화가 안돼서 undefined

// null 의도적으로 할당
let areYouReady = null;
console.log("are you ready?", areYouReady);

// object
let person = {
  name: "sjw",
  job: "student",
  hunger: 70,
};
console.log(person);
console.log(person.name);
console.log(person["name"]);

// array
let array = [1, 2, 3];
console.log(array);
array.push(4);
array.push("4");
console.log(array);
array.pop();
console.log(array);
