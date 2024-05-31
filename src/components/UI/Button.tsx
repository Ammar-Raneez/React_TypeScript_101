/**
 * Dynamic button component (can be an anchor or a button)
 */

// Type import - Excluded upon build
import type { ComponentPropsWithoutRef } from 'react';

// Another solution
// type ButtonProps = ComponentPropsWithoutRef<'button'> & {
//   href?: never;
// };

// type AnchorProps = ComponentPropsWithoutRef<'a'> & {
//   href?: string;
// };

// function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
//   return 'href' in props;
// }

// export default function Button(props: ButtonProps | AnchorProps) {
//   if (isAnchorProps(props)) {
//     return <a className="button" {...props}></a>;
//   }

//   return <button className="button" {...props}></button>;
// }

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  el: 'button';
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  el: 'anchor';
}

export default function Button(props: ButtonProps | AnchorProps) {
  const { el } = props;

  if (el === 'button') {
    return <button {...props}></button>;
  }

  return <a {...props}></a>;
}
