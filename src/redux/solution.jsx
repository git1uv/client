import { createSlice } from "@reduxjs/toolkit";

const solution = createSlice({
	name: 'solution',
		initialState: { // 더미데이터
			counselingLogId: 1,
			title:  "배고픔과 졸음 사이의 고민",
            summary: "사용자는 배고픔을 느끼다가 야식으로 불닭과 치킨 중 고민하였고, 결국 졸음을 느끼며 잠을 자고 싶어 함. 인공지능에게 졸리지 않은지 반복적으로 물어봄.",
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
				const {counselingLogId, title, summary, suggestion, solutions, endedAt} = action.payload;
				state.counselingLogId = counselingLogId;
				state.title = title;
				state.summary = summary;
				state.suggestion = suggestion;
				state.solutions = solutions;
				state.endedAt = endedAt;
			},
		}
})

export const {setSolution} = solution.actions;
export default solution.reducer;