import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchLaunches } from './launchesAPI';
import { LaunchesResponse } from './types';

export interface LaunchesState {
  launches: LaunchesResponse;
  status: 'idle' | 'loading' | 'failed';
  error: string;
}

const initialState: LaunchesState = {
  launches: {},
  status: 'idle',
  error: 'null,'
};

export const fetchLaunchesAsync = createAsyncThunk(
  'launches/fetchLaunches',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await fetchLaunches(url);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },{}
);

export const launchesSlice = createSlice({
  name: 'launches',
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
        state.launches = action.payload!;
      })
      .addCase(fetchLaunchesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectLaunches = (state: RootState) => state.launches.launches;

export default launchesSlice.reducer;
