declare module "react-view-state" {
  export function createViewState<State extends { [key: string]: any }>(ob: {
    withInitialState: State;
  }): () => [State, (state: Partial<State>) => void];
}
