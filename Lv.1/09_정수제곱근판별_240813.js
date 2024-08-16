// // Math.sqrt(x) : 숫자 x의 제곱근을 반환한다. 더 알아보기
// // Math.pow(base, exponent) : base에 exponent를 제곱한 값을 반환한다.

// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1
// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

function solution(n) {
  let number = Math.sqrt(n);
  return n % number === 0 ? Math.pow(number + 1, 2) : -1;
}

// 문제풀이
// 임의의 수 x는 n의 제곱근 수 이다 . Math.sqrt(n)를 이용해 제곱근 수를 구한다.
// n이 제곱근 수(number)로 나누어 떨어지는 것이 존재하면 제곱근 수(number)+1한 값의 제곱을 반환, 아니면 -1을 반환, Math.pow(숫자, 제곱할 숫자)를 이용
