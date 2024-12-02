import { ReactNode } from 'react';
import { SlotContent } from './types';

export function resolveSlotContent<Props>(
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