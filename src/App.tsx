// App.js
import MyComponent from './MyComponent';

const App = () => {
  const handleCustomEvent = ({ $event, message }: any) => {
    console.log('Native Event:', $event); // The native event object
    console.log('Message:', message); // The custom payload
  };

  return <MyComponent onCustomEvent={handleCustomEvent} />;
};

export default App;
