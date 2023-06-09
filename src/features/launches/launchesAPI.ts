import axios from "axios";
import { LaunchesResponse } from "./types";

// A mock function to mimic making an async request for data
export function fetchLaunches(url:string) {
  return new Promise<{ data: LaunchesResponse }>(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      
      if (response.status === 200)
        resolve({ data: response.data });
    } catch (error) {
        reject('Error connecting with the server');
    }
  }
  );
}
