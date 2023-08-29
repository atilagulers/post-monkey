import {createSlice} from '@reduxjs/toolkit';
import {tab} from '@testing-library/user-event/dist/tab';

const homeTabs = {forYou: 0, following: 1};

const initialState = {
  home: {
    currentTab: homeTabs.forYou,
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
