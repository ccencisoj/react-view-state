export type UseViewState<State> = () => [
  State,
  (state: Partial<State>) => void
];

export type CreateViewState = <State extends { [key: string]: any }>(ob: {
  withInitialState: State;
}) => UseViewState<State>;
