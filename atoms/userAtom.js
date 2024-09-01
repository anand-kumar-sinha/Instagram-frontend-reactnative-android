import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: "",
});
export default userAtom;