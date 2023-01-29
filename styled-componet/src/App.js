import React from 'react';
import { Card, Input, DatePicker, Button, Radio, Checkbox } from 'antd';
import styled from 'styled-components';

// Styled Components
const StyledCard = styled(Card)`
  margin: 10px;
  width: 200px;
  height: 150px;
  background-color: red;
`;

const StyledInput = styled(Input)`
  margin: 10px;
  width: 200px;
  background-color: blue;
`;

const StyledButton = styled(Button)`
  margin: 10px;
`;

const StyledComponentList = [

  ({index}) => <StyledInput key={index} placeholder="Input" />,
  ({index}) => <StyledCard key={index}><p>Card</p></StyledCard>,
  ({index}) => <DatePicker key={index} placeholder="Select Date" />,
  ({index}) => <StyledButton key={index}>Button</StyledButton>,
  ({index}) => <Radio key={index}>Radio</Radio>,
  ({index}) => <Checkbox key={index}>Checkbox</Checkbox>,
  ({index}) => <StyledCard key={index}><Checkbox key={index}>Checkbox</Checkbox></StyledCard>
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
       Styled components TESTING
      </header>
      <div>
        {Array(2000).fill(null).map((_, index) => {
          const Component = StyledComponentList[index % StyledComponentList.length];
        return <Component key={index} />
        })}
      </div>
    </div>
  );
}

export default App;
