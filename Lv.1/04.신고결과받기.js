// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
// 다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

// 유저 ID	유저가 신고한 ID	설명
// "muzi"	"frodo"	"muzi"가 "frodo"를 신고했습니다.
// "apeach"	"frodo"	"apeach"가 "frodo"를 신고했습니다.
// "frodo"	"neo"	"frodo"가 "neo"를 신고했습니다.
// "muzi"	"neo"	"muzi"가 "neo"를 신고했습니다.
// "apeach"	"muzi"	"apeach"가 "muzi"를 신고했습니다.

// 이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(id_list, report, k) {
  let answer = [];

  // 중복 제거 후, 유저 ID, 유저가 신고한 ID 분리
  let reports = [...new Set(report)].map((el) => el.split(" "));

  // 신고 당한 ID Map
  let reportId = new Map();

  // 신고 당한 ID 카운트
  for ([, report] of reports) {
    reportId.set(report, reportId.get(report) + 1 || 1);
  }

  // 메일 발송 ID Map
  let mailId = new Map();

  // 메일 발송 갯수 카운트
  for ([user, report] of reports) {
    if (reportId.get(report) >= k) {
      mailId.set(user, mailId.get(user) + 1 || 1);
    }
  }

  // 메일 발송 추출 (없는 경우 0)
  answer = id_list.map((id) => mailId.get(id) || 0);

  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
console.log(solution(id_list, report, 2));

const id_list2 = ["con", "ryan"];
const report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
console.log(solution(id_list2, report2, 3));
