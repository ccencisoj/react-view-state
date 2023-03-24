![logo](./images/logo.png)

👋 Are you looking for an easy and elegant solution for managing global state in React? If so, you've come to the perfect place! 🎉

With react-globalizer, you simply define global state using "createGlobalState" and access it from anywhere in your application.
You can define as many global states as you want: one state for each model, view, layout, or anything else you can think of.
Additionally, you're free to load objects, functions, and components into the state. 🔥

## Getting Started
To start using it, you first need to install it.

``` shell
npm install react-globalizer
```

Next, you define the state (for this example, a counter).

``` typescript
// CounterView/hooks/useCounterState.jsx
import { createGlobalState } from "react-globalizer";

export const useCounterState = createGlobalState({
  withInitialState: { counter: 0 },
});
```

Then, you can use it just like any other hook.

``` typescript
// CounterView/CounterView.jsx
import styles from "./styles.module.scss";
import { useCounterState } from "./useCounterState.jsx";

export const CounterControls = () => {
  const [counterState, setCounterState] = useCounterState();

  return (
    <div className={styles.counter_controls}>
      <button
        onClick={() => setCounterState({ counter: counterState.counter + 1 })}
      >
        Increment counter
      </button>
      <button
        onClick={() => setCounterState({ counter: counterState.counter - 1 })}
      >
        Decrement counter
      </button>
    </div>
  );
};

export const CounterView = () => {
  const [counterState] = useCounterState();

  return (
    <div className={styles.counter_view}>
      <p>Counter: {counterState.counter}</p>
      <CounterControls />
    </div>
  );
};
```

## Additional Resources

- Looking for something at the view level? Don't hesitate to try [react-view-state](https://www.npmjs.com/package/react-view-state)
- Running into issues? Open a thread on [github issues](https://github.com/ccencisoj/react-globalizer/issues)

## Credits

This package is based on the state manager [zustand](https://www.npmjs.com/package/zustand). 


## License

MIT License
