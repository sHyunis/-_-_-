// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" "); // data로 들어온 값은 연속된 문자열로 들어오기 때문에 분리
  const a = Number(n[0]), // 변수 a,b에 각각 숫자로 바꾸어 넣어줌
    b = Number(n[1]);

  let result = ""; // 결과에 * 저장

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      result += "*";
    }
    result += "\n"; // i가 반복할 때마다 줄 바꿈
  }

  console.log(result);
});
