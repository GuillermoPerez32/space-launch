import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchLaunch } from './launchAPI';
import { LaunchDetailResponse } from './types';

export interface LaunchState {
  launch: LaunchDetailResponse;
  status: 'idle' | 'loading' | 'failed';
  error: string;
}

const initialState: LaunchState = {
  launch: {},
  status: 'idle',
  error: 'null,'
};

export const fetchLaunchesAsync = createAsyncThunk(
  'launch/fetchLaunch',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await fetchLaunch(url);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },{}
);

export const launchSlice = createSlice({
  name: 'launch',
  initialState,
  
  reducers: {
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunchesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLaunchesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.launch = action.payload!;
      })
      .addCase(fetchLaunchesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectLaunch = (state: RootState) => state.launch.launch;

export default launchSlice.reducer;
