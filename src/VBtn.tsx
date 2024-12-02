import React from 'react';
import { SlotProps, useSlots } from './slots/useSlots';

interface VBtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const VBtn: React.FC<SlotProps<VBtnProps>> = (props) => {
  const slots = useSlots(props);

  return (
    <button onClick={props.onClick}>
      {slots.prepend}
      {slots.prependLabel}
      {slots.prependValue}
      {slots.slotLabel}
      {slots.default}
      {slots.append}
      {slots.appendLabel}
      {slots.appendValue}
    </button>
  );
};

export default VBtn;