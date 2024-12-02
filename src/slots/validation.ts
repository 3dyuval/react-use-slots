import { SLOTS, SlotName } from './types';

export function isValidSlot(name: string): name is SlotName {
  return SLOTS.includes(name as SlotName);
}

export function handleInvalidSlot(name: string): void {
  console.error(`Invalid slot name: ${name}. Available slots are: ${SLOTS.join(', ')}`);
}