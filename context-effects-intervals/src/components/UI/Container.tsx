/**
 * Dynamic container that can wrap any html element
 * ElementType is what goes in between the angle brackets
 * ReactNode refers to the actual DOM element itself
 */

import type {
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from 'react';

// Invalid, as interfaces need to know the type on compile time.
// Use interfaces and use types only if required.
// interface ContainerProps2<T extends ElementType> extends ComponentPropsWithoutRef<T> {
//   as?: T;
//   children: ReactNode;
// }

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<K extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<K>) {
  const Component = as || 'div';

  return (
    <Component {...props}>
      {children}
    </Component>
  );
}
