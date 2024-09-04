import { atom } from "recoil";

const allpostsAtom = atom({
  key: "allpostsAtom",
  default: [],
});
export default allpostsAtom;