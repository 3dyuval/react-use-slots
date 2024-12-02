import React from 'react';
import { SlotProps, useSlots } from './slots/useSlots';

interface VInputProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

const VInput: React.FC<SlotProps<VInputProps>> = (props) => {
  const slots = useSlots(props);

  return (
      <div className="v-input">
        <div className="v-input-label-row">
          {slots.prependLabel}
          <label className="v-input-label">
            {props.label || slots.slotLabel}
          </label>
          {slots.appendLabel}
        </div>
        <div className="v-input-wrap-row">
          {slots.prepend}
          <div className="v-input-wrap">
            {slots.prependValue}
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                className="v-input-field"
            />
            {slots.appendValue}
          </div>
          {slots.append}
        </div>
      </div>
  );
};

export default VInput;