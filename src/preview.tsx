import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useSlots } from './useSlots';
import VInput from './VInput';
import './index.scss';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Use ReactDOM.createRoot to create a new root
const root = createRoot(rootElement);

root.render(<Preview />);

function Preview() {
  const [count, setCount] = useState(0);
  const slots = useSlots({
    slotValue: 'Hello World!',
    slotLabel: 'Slot Label',
    prepend: () => <div>Prepend</div>,
    append: () => <div>Append</div>,
    prependLabel: () => <div>Prepend Label</div>,
    appendLabel: () => <div>Append Label</div>,
    prependValue: () => <div>Prepend Value</div>,
    appendValue: () => <div>Append Value</div>,
  });

  return (
    <div>
      <h1>React Use Slots Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <VInput {...slots} />
    </div>
  );
}


