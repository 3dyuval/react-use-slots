import { ReactNode } from 'react';

export const SLOTS = [
  'default',
  'slotValue',
  'slotLabel',
  'prepend',
  'append',
  'prependLabel',
  'appendLabel',
  'prependValue',
  'appendValue',
] as const;

export type SlotName = (typeof SLOTS)[number];
export type SlotContent<Props> = ReactNode | ((props: Props) => ReactNode);
export type SlotProps<Props> = Props & {
  children?: ReactNode;
} & Partial<Record<SlotName, SlotContent<Props>>>;
export type ResolvedSlots = Record<SlotName, ReactNode>;