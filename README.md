![logo](./images/logo.png)

Divide your view components into several components without worrying about 'providers' or 'reducers' to handle state between them

## Getting Started
To start using it, you first need to install it.

``` shell
npm install react-view-state
```

Next, you define the state (for this example, a counter).

``` typescript
// CounterView/hooks/useViewState.jsx
import { createViewState } from "react-view-state";

export const useViewState = createViewState({
  withInitialState: { counter: 0 },
});
```

Then, you can use it just like any other hook.

``` typescript
// CounterView/CounterView.jsx
import styles from "./styles.module.scss";
import { useViewState } from "./useViewState";

export const CounterControls = () => {
  const [viewState, setViewState] = useViewState();

  return (
    <div className={styles.counter_controls}>
      <button
        onClick={() => setViewState({ counter: viewState.counter + 1 })}
      >
        Increment counter
      </button>
      <button
        onClick={() => setViewState({ counter: viewState.counter - 1 })}
      >
        Decrement counter
      </button>
    </div>
  );
};

export const CounterView = () => {
  const [viewState] = useViewState();

  return (
    <div className={styles.counter_view}>
      <p>Counter: {viewState.counter}</p>
      <CounterControls />
    </div>
  );
};
```

## Additional Resources

- Looking for an easy and elegant solution to manage the global state of your application? try [react-globalizer](https://www.npmjs.com/package/react-globalizer)
- Running into issues? Open a thread on [github issues](https://github.com/ccencisoj/react-view-state/issues)

## Credits

This package is based on the state manager [zustand](https://www.npmjs.com/package/zustand). 


## License

MIT License
