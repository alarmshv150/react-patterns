import { useState } from "react";

function ProxyComponent() {
  const { count, increase, decrease } = useCounter();
  return (
    <>
      <p>Counter : {count}</p>
      <Button onClick={decrease}>increase</Button>
      <Button onClick={increase}>decrease</Button>
    </>
  );
}

const Button = (props) => <button {...props}>{props.children}</button>;

const useCounter = () => {
  const [count, setCount] = useState(0);

  return {
    count,
    increase: () => setCount(count + 1),
    decrease: () => setCount(count - 1),
  };
};

export default ProxyComponent;
