export const userReducer = (state = {}, action) => {
	const { type, payload } = action
	switch (type) {
		case "USER_LOGIN_SUCCESS":
			return {
				num: payload.num,
				token: payload.token,
				name: payload.name,
				email: payload.email,
			}
		case "UPDATE_NUM":
			return { ...state, num: payload }
		default:
			return state
	}
}
