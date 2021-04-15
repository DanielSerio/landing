import {  RefObject, useEffect } from "react";

export default function useClickOutside(ref: RefObject<any>, handler: (e?: any) => void) {
  useEffect(
    () => {
      function listener(this: Document, event: any): void {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown",listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}