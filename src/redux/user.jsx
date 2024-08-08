import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
	name: 'user',
		initialState: {
			userId: '',
			nickname: '',
			email: '',
			password: '',
			accessToken: ''
		},
		reducers: {
			setAccount(state, action) {
				const {email, password} = action.payload;
				state.email = email;
				state.password = password;
			},
			setLogin(state, action) {
				const {nickname, accessToken} = action.payload;
				state.nickname = nickname;
				state.accessToken = accessToken;
			}
		}
})

export const {setAccount, setLogin} = user.actions;
export default user.reducer;