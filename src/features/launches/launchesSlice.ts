import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchLaunches } from './launchesAPI';
import { LaunchesResponse } from './types';

export interface LaunchesState {
  launches: LaunchesResponse;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: LaunchesState = {
  launches: {},
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'launches/fetchLaunches',
  async () => {
    const response = await fetchLaunches();
    
    return response.data;
  }
);

export const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  
  reducers: {
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.launches = action.payload;
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectCount = (state: RootState) => state.launches.launches;

export default launchesSlice.reducer;
