/**
 * Input component wrapper
 * When passing a ref from parent to child, forwardRef is required
 */

import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

// type InputProps = {
//   label: string;
//   id: string;
// } & ComponentPropsWithoutRef<'input'>;

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
