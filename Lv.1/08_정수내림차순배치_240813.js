// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건 n은 1이상 8000000000 이하인 자연수입니다.

function solution(n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
}

// 1. n이 정수임으로 sort함수를 쓰기위해 String으로 변환
// 2. split함수로 문자열을 한자리씩 나눠줌
// 3.  sort함수로 내림차순 정렬
// 4. 다시 정수로 반환하기 위해 join함수로 문자열을 하나로 합쳐주고
// 5. parseInt()으로 정수변환
