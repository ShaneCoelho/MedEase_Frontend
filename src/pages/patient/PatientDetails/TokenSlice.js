import { createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice({
    name: "token",
    initialState: {
        token: null,
      },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload;
            console.log(state.token);
          },
        getToken(state, action) {

        },

    },
})

export const tokenValue = (state) => state.token.token;
export default TokenSlice.reducer;
export const { addToken, getToken } = TokenSlice.actions;