import { useRef } from "react";

const useKey = () => {
  const keyRef = useRef<number>(0);

  const getKey = () => {
    keyRef.current += 1;
    return keyRef.current;
  };

  return getKey;
};

export default useKey;
