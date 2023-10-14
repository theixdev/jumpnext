import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'

export const darkModeAtom = atomWithStorage('dark', false);


// export const darkModeAtom = atomWithStorage('true', window.matchMedia &&
// window.matchMedia("(prefers-color-scheme: dark)").matches);

export const openNavSideBarAtom = atom<boolean>(false);

