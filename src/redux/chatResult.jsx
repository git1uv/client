import { createSlice } from "@reduxjs/toolkit";

const chatResult = createSlice({
	name: 'chatResult',
		initialState: { // 더미데이터
			title: '일지제목일지제목요약내용일지제목일지제목요약내용',
			content: {
				first: '더하지 않아도 대충 이젠 감이 온다. 내가 초창기 멤버로 들어간 핀테크 스타트업이 거의 비슷했다. 창업을 여럿해본 미국 유학파 CEO와 빛나는 이력의 CTO. 눈이 반짝반짝 빛나는, 함께 있기 편한, 사람 좋은 S급 개발자들. 여기에 더해 다양한 나라에서 온 사업개발 전문가들. (총 10개국이 넘는 분들이 모인 팀이었다). 이런 완벽한 팀에, 백억원이 넘는 시드 투자까지. 가장 똑똑한 사람들과 듣기만해도 부풀어 오르는 신나는 프로젝트들이 넘쳐났다. 기존 B2C, 농업 커머스에서 내가 처음으로 IT 분야에 발딛게 된 순간이 었고, 하루 하루의 출근이 기',
				second: '더하지 않아도 대충 이젠 감이 온다. 내가 초창기 멤버로 들어간 핀테크 스타트업이 거의 비슷했다. 창업을 여럿해본 미국 유학파 CEO와 빛나는 이력의 CTO. 눈이 반짝반짝 빛나는, 함께 있기 편한, 사람 좋은 S급 개발자들. 여기에 더해 다양한 나라에서 온 사업개발 전문가들. (총 10개국이 넘는 분들이 모인 팀이었다). 이런 완벽한 팀에, 백억원이 넘는 시드 투자까지. 가장 똑똑한 사람들과 듣기만해도 부풀어 오르는 신나는 프로젝트들이 넘쳐났다. 기존 B2C, 농업 커머스에서 내가 처음으로 IT 분야에 발딛게 된 순간이 었고, 하루 하루의 출근이 기',
				third: ['더하지 않아도 대충 이젠 감이 온다. 내가 초창기 멤버로 들어간 핀테크 스타트업이 거의 비슷했다. 창업을 여럿해본 미국 유학파 CEO와 빛나는 이력', 
					'더하지 않아도 대충 이젠 감', 
					'더하지 않아도 대충 이젠 감이 온다. 내가 초창기 멤버로 들어간 핀테크CEO와 빛나는 이력']
			}
		},
		reducers: {
			setResult(state, action) {
				const {first, second, third} = action.payload;
				state.first = first;
				state.second = second;
				state.third = third;
			},
		}
})

export const {setResult} = chatResult.actions;
export default chatResult.reducer;