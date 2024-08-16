// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  for (let x = 0; x < n; x++) {
    if (n % x === 1) {
      return x;
    } // 작은 수 부터 for문이 돌아감으로 제일 작은 숫자 x 가 나오면 바로 반환
  }
}
