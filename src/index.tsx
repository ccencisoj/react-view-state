import { create } from "zustand";
import { UseViewState } from "./types";

export function createViewState<State extends { [key: string]: any }>({
  withInitialState,
}: {
  withInitialState: State;
}) {
  const viewState = create(() => withInitialState);
  const useViewState: UseViewState<State> = () => [
    viewState(),
    viewState.setState,
  ];
  return useViewState;
}
