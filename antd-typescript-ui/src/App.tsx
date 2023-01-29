import React from 'react';
import Button from './components/Button';
import { StyleProvider } from '@ant-design/cssinjs';
import { Checkbox } from 'antd';

export default function App() {
  const [show, setShow] = React.useState(true);

  const [, forceUpdate] = React.useState({});
  React.useEffect(() => {
    forceUpdate({});
  }, []);

  const ComponentList = () => (
    <div style={{ background: 'rgba(0,0,0,0.1)', padding: 16 }}>
        {/* <label>
          <input
            type="checkbox"
            checked={show}
            onChange={() => setShow(!show)}
          />
          Check box
        </label>

        <Input placeholder="Enter text here" />
        <Card title="Card Title" style={{ width: 300 }}>
          Card content
        </Card>
        <DatePicker placeholder="Select date" />
        <Button type="primary">Primary</Button>
        <Radio.Group>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
        </Radio.Group> */}
        <Checkbox>Remember me

        {show && (
          <>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
          </>
        )}
        </Checkbox>
      </div>
  );

  return (
    <StyleProvider autoClear>
      {Array(3000).fill(null).map((_, index) => {
             return <ComponentList/>
        })}
    </StyleProvider>
  );
}