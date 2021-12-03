import React, { useState } from "react";

function PropTypes() {
  const [info, setInfo] = useState({ name: "Oleksii", age: 24 });
  const [address] = useState({
    city: "Nikolaev",
    street: "Pogranichnaya",
  });
  const onClick = () => {
    setInfo((info) => ({ ...info, age: 25 }));
  };

  return (
    <>
      <Greeting {...info} address={address} onClick={onClick} />
    </>
  );
}

function Greeting({ name, age, address = null, onClick }) {
  console.log(typeof name);
  return (
    <div>
      <h1 onClick={onClick}>
        My name is {name} . I am {age} old
      </h1>
      {address && (
        <h2>
          My address is {address.city} , {address.street}
        </h2>
      )}
    </div>
  );
}

Greeting.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  onClick: PropTypes.func,
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
  }),
};
Greeting.defaultProps = {
  onClick: () => {},
};
export default PropTypes;
