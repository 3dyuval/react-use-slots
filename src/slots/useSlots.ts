import { SLOTS, SlotProps, ResolvedSlots } from './types';
import { isValidSlot, handleInvalidSlot } from './validation';
import { resolveSlotContent } from './resolver';

export function getSlots<Props>(props: SlotProps<Props>): ResolvedSlots {
  const resolvedSlots = {} as ResolvedSlots;

  // Handle default slot (children)
  resolvedSlots.default = props.children ?? null;

  // Process each named slot
  SLOTS.forEach((slotName) => {
    if (slotName === 'default') return; // Skip default slot as it's already handled
    
    if (!isValidSlot(slotName)) {
      handleInvalidSlot(slotName);
      return;
    }

    const slotContent = props[slotName];
    resolvedSlots[slotName] = resolveSlotContent(slotContent, props);
  });

  return resolvedSlots;
}

export function useSlots<Props>(props: SlotProps<Props>): ResolvedSlots {
  return getSlots(props);
}

// Re-export everything from types for convenience
export * from './types';