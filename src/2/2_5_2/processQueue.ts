import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]) {
    let finalState = baseState;
    for (const item of queue) {
        if (typeof item === 'function')
            finalState = item(finalState);
        else
            finalState = item;
    }
    return finalState;
}