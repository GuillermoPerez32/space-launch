import axios from "axios";
import { LaunchesResponse } from "./types";

// A mock function to mimic making an async request for data
export function fetchLaunches(url?:string) {
  return new Promise<{ data: LaunchesResponse }>( async (resolve) =>  {
    const {data}  = await axios.get(url || 'https://spacelaunchnow.me/api/3.3.0/launch/upcoming/');
    resolve({ data: data });
  }
  );
}
