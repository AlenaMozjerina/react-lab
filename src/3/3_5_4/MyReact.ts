import { useState } from 'react';

export function useReducer<State, Action>(
  reducer: (state: State, action: Action) => State,
  initialState: State
): [State, (action: Action) => void] {
  const [state, setState] = useState(initialState);

  const dispatch = (action: Action) => {
    setState(prevState => reducer(prevState, action));
  };

  return [state, dispatch];
}