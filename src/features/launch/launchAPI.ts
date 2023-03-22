import axios from "axios";
import { LaunchDetailResponse } from "./types";

// A mock function to mimic making an async request for data
export function fetchLaunch(launchId:string) {
  return new Promise<{ data: LaunchDetailResponse }>(async (resolve, reject) => {
    try {
      const response = await axios.get(launchId);
      
      if (response.status === 200)
        resolve({ data: response.data });
    } catch (error) {
        reject('Error connecting with the server');
    }
  }
  );
}
