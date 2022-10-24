import { useState } from "react";

export function useToggle(initialState) {
  const [state, setState] = useState(initialState);
  return [state, () => setState(prev => !prev)];
}
