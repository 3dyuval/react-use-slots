import useEmits from './useEmits';
import VBtn  from './VBtn.tsx'

const MyComponent = (props: any) => {
  const emit = useEmits(['customEvent'], props);

  const handleClick = (event: any) => {
    emit('customEvent', { message: 'Hello from MyComponent!' })(event);
  };

  return <VBtn onClick={handleClick}>Click Me</VBtn>;
};

export default MyComponent;
