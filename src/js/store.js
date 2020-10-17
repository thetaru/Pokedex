import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    PokeID: 1
};

const PokeID_Slice = createSlice({
    name: 'PokeID',
    initialState,
    reducers: {
        increment: (state) => {
            if (state.PokeID >= 151) {
                return Object.assign({}, state, {PokeID: 1});
            } else {
                return Object.assign({}, state, {PokeID: state.PokeID + 1});
            }
        },
        decrement: (state) => {
            if (state.PokeID <= 1) {
                return Object.assign({}, state, {PokeID: 151});
            } else {
                return Object.assign({}, state, {PokeID: state.PokeID - 1});
            }
        }
    }
})

const store = configureStore({
    reducer: PokeID_Slice.reducer
});

export const {increment, decrement} = PokeID_Slice.actions;
export default store;