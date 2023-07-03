const { createSlice } = require("@reduxjs/toolkit");
import { 
  forgotPassword, 
  loginUser, 
  registerUser, 
  resetPassword, 
  updateProfile, 
  verifyOTP 
} from "./authAction";

const initialState = {
  user: {},
  loading: false,
  success: false,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;

      return state;
    },
    logout: () => {
      localStorage.removeItem("token");
      clearState();
    }
  },
  extraReducers: (builder) => {
    // Update Profile
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Verify OTP
    builder.addCase(verifyOTP.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(verifyOTP.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(verifyOTP.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Forgot Password
    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Reset Password
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { clearState, logout } = authSlice.actions;

export default authSlice.reducer;