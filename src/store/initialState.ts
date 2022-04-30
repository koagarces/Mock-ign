import RootState from "../redux-types";
import { defaultVideoState } from "../redux-types/videos";

const initialState: RootState = {
  videos: defaultVideoState,
};

export default initialState;
