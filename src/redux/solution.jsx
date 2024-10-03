import { createSlice } from "@reduxjs/toolkit";

const solution = createSlice({
	name: 'solution',
		initialState: { // 더미데이터
			counselingLogId: 1,
			chatbotType : "T",
			title:  "배고픔과 졸음 사이의 고민",
            summary: "더하지 않아도 대충 이젠 감이 온다. 내가 초창기 멤버로 들어간 핀테크 스타트업이 거의 비슷했다. 창업을 여럿해본 미국 유학파 CEO와 빛나는 이력의 CTO. 눈이 반짝반짝 빛나는, 함께 있기 편한, 사람 좋은 S급 개발자들. 여기에 더해 다양한 나라에서 온 사업개발 전문가들. (총 10개국이 넘는 분들이 모인 팀이었다). 이런 완벽한 팀에, 백억원이 넘는 시드 투자까지. 가장 똑똑한 사람들과 듣기만해도 부풀어 오르는 신나는 프로젝트들이 넘쳐났다. 기존 B2C, 농업 커머스에서 내가 처음으로 IT 분야에 발딛게 된 순간이 었고, 하루 하루의 출근이 기",
            suggestion: "Claude는 사용자의 배고픔과 야식 고민에 대해 공감하며 조언을 제공함. 졸음에 대해서는 인공지능이라 졸리지 않지만 사용자의 피로를 이해한다고 말하며, 충분한 휴식의 중요성을 강조하고 편안한 밤을 보내길 바람.",
            solutions: [
				{
					solutionId: 7,
					content: "가벼운 스트레칭이나 깊은 호흡으로 몸의 긴장을 풀기"
				},
				{
					solutionId: 8,
					content: "스마트폰 등 전자기기 사용을 중단하고 편안한 음악 듣기"
				},
				{
					solutionId: 9,
					content: "내일의 계획은 잠시 미루고 충분한 수면 취하기"
				}
            ],
            endedAt: ''
		},
		reducers: {
			setSolution(state, action) {
				const {title, summary, suggestion, solutions, endedAt} = action.payload;
				state.title = title;
				state.summary = summary;
				state.suggestion = suggestion;
				state.solutions = solutions;
				state.endedAt = endedAt;
			},
			setCounseling(state, action) {
				const {counselingLogId, chatbotType} = action.payload;
				state.counselingLogId = counselingLogId;
				state.chatbotType = chatbotType;
			},
		}
})

export const {setSolution, setCounseling} = solution.actions;
export default solution.reducer;