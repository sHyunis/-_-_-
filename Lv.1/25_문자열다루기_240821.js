// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 첫번째 풀이 오답(e가 포함되면 Number()가 지수로 인식해 e를 숫자로 판별했던 것)
// function solution(s){
//     if (s.length === 4 || s.length === 6 && !isNaN(s)){
//         return true
//     }else{
//         return false
//     }}

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((num) => !isNaN(num));
  } else {
    return false;
  }
}
