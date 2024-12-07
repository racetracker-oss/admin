import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { jwtDecode } from "jwt-decode";

//todo complete config
export interface JwtPayload {
  sub: number;
  email: string;
  iat?: number;
  exp?: number;
  //...
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: JwtPayload | null;
  //...
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  //...
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
    //...
  },
  // extraReducers: (builder) => {}
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;