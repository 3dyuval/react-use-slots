// useEmits.js
import { useCallback } from 'react';

const useEmits = (allowedEvents, props) => {
  const emit = useCallback(
    (eventName, payload = {}) => (nativeEvent) => {
      if (!allowedEvents.includes(eventName)) {
        console.warn(`Event "${eventName}" is not defined in emits.`);
        return;
      }
      
      /*
      This will work: onCustomEvent={handleCustomEvent}
      This will not satisfy the ide: @customEvent={handleCustomEvent}

      */
      const handler = props[`on${capitalize(eventName)}`];
      if (typeof handler === 'function') {
        handler({ ...payload, $event: nativeEvent });
      } else {
        console.warn(`Handler for event "${eventName}" is not a function.`);
      }
    },
    [allowedEvents, props]
  );

  return emit;
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default useEmits;
