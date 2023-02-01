import React from 'react';
import { Input, Card, DatePicker, Button, Radio, Checkbox, Select, Modal } from 'antd';
import styled from '@emotion/styled';


const InputStyled = styled(Input)`
  background-color: #ddd;
  margin: 10px;
  width: 200px;
`;

const CardStyled = styled(Card)`
  background-color: red;
  margin: 10px;
  width: 200px;
  height: 150px;
`;

const DatePickerStyled = styled(DatePicker)`
  background-color: blue;
  margin: 10px;
  width: 200px;
`;

const ButtonStyled = styled(Button)`
  background-color: #aaa;
  margin: 10px;
`;

const RadioStyled = styled(Radio)`
  background-color: #999;
`;

const CheckboxStyled = styled(Checkbox)`
  background-color: #888;
`;

const SelectStyled = styled(Select)`
  
  margin: 10px;
  width: 200px;
`;

const ModalStyled = styled(Modal)`
  background-color: yellow;
  margin: 10px;
`;


const ComponentList = [
  ({ index }) => <InputStyled key={index}/> ,
  ({ index }) => <CardStyled key={index} ><p>Card</p></CardStyled>,
  ({ index }) => <DatePickerStyled key={index} />,
  ({ index }) => <ButtonStyled key={index} >Button</ButtonStyled>,
  ({ index }) => <RadioStyled key={index} >Radio</RadioStyled>,
  ({ index }) => <CheckboxStyled key={index} >Checkbox</CheckboxStyled>,
  ({ index }) => <SelectStyled key={index} >Select</SelectStyled>,
  ({ index }) => <ModalStyled key={index} >Modal</ModalStyled>
];


function App() {

 
  
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Emotion UI component testing.
        </p>

        <div>
        {Array(10).fill(null).map((_, index) => {
          const Component = ComponentList[index % ComponentList.length];
          return <Component key={index} />
        })}
        </div>
      </header>
    </div>
  );
}

export default App;
