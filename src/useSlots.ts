import { ReactNode } from 'react';

// Define available slot names
export const SLOTS = [
  'slotValue',
  'slotLabel',
  'prepend',
  'append',
  'prependLabel',
  'appendLabel',
  'prependValue',
  'appendValue',
] as const;

// Type for slot names
export type SlotName = (typeof SLOTS)[number];

// Type for slot content (can be ReactNode or function returning ReactNode)
export type SlotContent<Props> = ReactNode | ((props: Props) => ReactNode);

// Type for component props that include slots
export type SlotProps<Props> = Props &
  Partial<Record<SlotName, SlotContent<Props>>>;

// Type for resolved slot values
export type ResolvedSlots = Record<SlotName, ReactNode>;

// Validate slot name
function isValidSlot(name: string): name is SlotName {
  return SLOTS.includes(name as SlotName);
}

// Error handling for invalid slots
function handleInvalidSlot(name: string): void {
  console.error(`Invalid slot name: ${name}. Available slots are: ${SLOTS.join(', ')}`);
}

// Resolve slot content (handle both direct content and functions)
function resolveSlotContent<Props>(
  content: SlotContent<Props> | undefined,
  props: Props
): ReactNode {
  if (typeof content === 'function') {
    try {
      return content(props);
    } catch (error) {
      console.error('Error rendering slot function:', error);
      return null;
    }
  }
  return content ?? null;
}

// Main slots utility function
export function getSlots<Props>(props: SlotProps<Props>): ResolvedSlots {
  const resolvedSlots = {} as ResolvedSlots;

  // Process each slot
  SLOTS.forEach((slotName) => {
    if (!isValidSlot(slotName)) {
      handleInvalidSlot(slotName);
      return;
    }

    const slotContent = props[slotName];
    resolvedSlots[slotName] = resolveSlotContent(slotContent, props);
  });

  return resolvedSlots;
}

// Hook for using slots with memoization
export function useSlots<Props>(props: SlotProps<Props>): ResolvedSlots {
  return getSlots(props);
}