import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  status: 'idle',  // idle | loading | loggedIn | loggedOut | error
  errorMessage: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state) {
      state.status = 'loading'
      state.errorMessage = null
    },
    loginSuccess(state, action) {
      state.currentUser = action.payload
      state.status = 'loggedIn'
      state.errorMessage = null
      console.log(state.currentUser.name)
    },
    loginFailure(state, action) {
      state.status = 'error'
      state.errorMessage = action.payload
    },
    logout(state) {
      state.currentUser = null
      state.status = 'loggedOut'
      state.errorMessage = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions
export default userSlice.reducer
