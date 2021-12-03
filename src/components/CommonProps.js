import { useState } from "react";

/* color */

function CommonProps() {
  return (
    <div>
      <Button color="black" />
      <Button color="blue" />
      <Button color="green" />
    </div>
  );
}
const Button = ({ color }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ color: color }} onClick={() => setCounter((c) => c + 1)}>
      I am button {counter}
    </div>
  );
};

/* more props */

/* function CommonProps() {
  return (
    <>
      <Button increment={2} underline={true} color="black" />
      <Button increment={2} underline={true} color="blue" />
      <Button increment={2} underline={true} color="green" />
    </>
  );
}
const Button = (props) => {
  const { color, underline, increment } = props;
  const styles = {
    color: color,
    textDecoration: underline ? "underline" : undefined,
  };
  const [counter, setCounter] = useState(0);
  return (
    <div style={styles} onClick={() => setCounter((c) => c + increment)}>
      I am button {counter}
    </div>
  );
}; */

/* spread props */

/* function CommonProps() {
  const props = {
    increment: 2,
    underline: true,
  };
  return (
    <>
      <Button {...props} color="black" />
      <Button {...props} color="blue" />
      <Button {...props} color="green" />
    </>
  );
}
 */

/* different color */

/* function CommonProps() {
  const props = {
    increment: 2,
    underline: true,
    color:"black"
  };
  return (
    <>
      <Button {...props} color="black" />
      <Button {...props} color="blue" />
      <Button {...props} color="green" />
    </>
  );
} */

/* all buttons black */

/* function CommonProps() {
  const props = {
    increment: 2,
    underline: true,
    color: "black",
  };
  return (
    <>
      <Button color="black" {...props} />
      <Button color="blue" {...props} />
      <Button color="green" {...props} />
    </>
  );
} */

/* data children */

/* const Button = ({ color, children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      data-counter={counter} //children
      style={{ color: color }}
      onClick={() => setCounter((c) => c + 1)}
    >
      {children}
      I am button {counter}
    </div>
  );
}; */

/* spread props in parent/children */

/* function CommonProps() {
  const props = {
    increment: 2,
    underline: "true",
    color: "green",
  };
  const handlerClick = () => {
    console.log("handleClick fired");
  };
  return (
    <>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
    </>
  );
}

const Button = (props) => {
  const { color, underline, increment } = props;
  const styles = {
    color: color,
    textDecoration: underline ? "underline" : undefined,
  };
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={styles} onClick={() => setCounter((c) => c + increment)}>
        I am button {counter}
      </div>
      <button {...props}>{props.children}</button>
    </>
  );
}; */

/* prop destructuring with rest last props */

/* function CommonProps() {
  const props = {
    increment: 2,
    underline: "true",
    color: "green",
  };
  const handlerClick = () => {
    console.log("handleClick fired");
  };
  return (
    <>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
    </>
  );
}

const Button = ({ color, underline, increment, ...props }) => {
  const styles = {
    color: color,
    textDecoration: underline ? "underline" : undefined,
  };
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={styles} onClick={() => setCounter((c) => c + increment)}>
        I am button {counter}
      </div>
      <button {...props}>{props.children}</button>
    </>
  );
};
 */

/* props */

/* function CommonProps() {
  const props = {
    increment: 2,
    underline: "true",
    color: "green",
  };
  const handlerClick = () => {
    console.log("handleClick fired");
  };
  return (
    <>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
    </>
  );
}

const Button = (props) => {
  const { color, underline, increment, onClick, children } = props;
  const styles = {
    color: color,
    textDecoration: underline ? "underline" : undefined,
  };
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={styles} onClick={() => setCounter((c) => c + increment)}>
        I am button {counter}
      </div>
      <button onClick={onClick}>{children}</button>
    </>
  );
}; */

/* function CommonProps() {
  const props = {
    increment: 2,
    underline: "true",
    color: "green",
  };
  const handlerClick = () => {
    console.log("handleClick fired");
  };
  return (
    <>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
    </>
  );
}

const Button = (props) => {
  const { color, underline, increment, onClick, children } = props;
  const styles = {
    color: color,
    textDecoration: underline ? "underline" : undefined,
  };
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={styles} onClick={() => setCounter((c) => c + increment)}>
        I am button {counter}
      </div>
      <button onClick={onClick}>{children}</button>
    </>
  );
}; */

/* function CommonProps() {
  const props = {
    increment: 2,
    underline: "true",
    color: "green",
  };
  const handlerClick = () => {
    console.log("handleClick fired");
  };
  return (
    <>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
      <Button {...props} onClick={handlerClick}>
        Текст для кнопки
      </Button>
    </>
  );
}
const Button = (props) => {
  const { color, underline, increment, onClick, children } = props;
  const styles = {
    color: color,
    textDecoration: underline ? "underline" : undefined,
  };
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div
        data-counter={counter}
        style={styles}
        onClick={() => setCounter((c) => c + increment)}
      >
        {children}
        I am button {counter}
      </div>
      <button onClick={onClick}>{children}</button>
    </>
  );
}; */

/* data instead props */

/* function PropsDestructuring() {
  const data = {
    increment: 2,
    underline: "true",
    color: "green",
  };
  const handlerClick = () => {
    console.log("handleClick fired");
  };
  const handleMouseEnter = () => {
    console.log("handleMouseEnterFired");
  };
  const handleMouseLeave = () => {
    console.log("handleMouseLeaveFired");
  };

  return (
    <>
      <Button
        {...data}
        onClick={handlerClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Текст для кнопки
      </Button>
    </>
  );
}
const Button = ({ color, underline, increment, ...data }) => {
  const styles = {
    color: color,
    textDecoration: underline ? "underline" : undefined,
  };
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={styles} onClick={() => setCounter((c) => c + increment)}>
        I am button {counter}
      </div>
      <button {...data}>{data.children}</button>
    </>
  );}; */

export default CommonProps;

