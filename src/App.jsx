import React, { useState } from 'react';
import styled from 'styled-components';
import './App.scss';

const useLocaleStorage = (key, initialValue) => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem(key) || initialValue),
  );

  const save = (value) => {
    setCount(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [count, save];
};

export const App = () => {
  const [count, setCount] = useLocaleStorage('count', 0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  const Container = styled.div`
    margin: 100px;
  `;
  const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${count > 3 || count === 1 ? '#a52a2a' : '#ff8c00'};
    margin: 50px;
  `;

  const Count = styled.span`
    font-size: 40px;
    color: ${count > 3 ? '#0000ff' : '#8a2be2'}
  `;

  return (
    <Container className="App">
      <Button type="button" onClick={decrease}>-</Button>
      <Count>{count}</Count>
      <Button type="button" onClick={increase}>+</Button>
    </Container>
  );
};
