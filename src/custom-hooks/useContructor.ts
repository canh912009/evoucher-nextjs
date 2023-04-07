import { useRef } from "react";

type ContructorCallback = () => void;

export default function useContructor(callback: ContructorCallback): void {
    const isRun = useRef(false);

    if (isRun.current === false) {
        callback();
        isRun.current = true;
    }
}
