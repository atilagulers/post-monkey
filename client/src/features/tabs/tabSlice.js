import {createSlice} from '@reduxjs/toolkit';

const homeTabs = {explore: 0, following: 1};

const initialState = {
  home: {
    currentTab: homeTabs.explore,
  },
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    selectTab: (state, action) => {
      const {section, tabIndex} = action.payload;
      state[section].currentTab = tabIndex;
    },
  },
});

export const {selectTab} = tabSlice.actions;
export default tabSlice.reducer;
