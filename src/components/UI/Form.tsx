/**
 * Form component wrapper
 * FormData is an object that will collect all form values into an object based on name attributes assigned
 */

import {
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

import type { FormEvent, ComponentPropsWithoutRef } from 'react';

// export type FormHandle = {
//   clear: () => void;
// };

// type FormProps = ComponentPropsWithoutRef<'form'> & {
//   onSave: (value: unknown) => void;
// };

interface FormProps extends ComponentPropsWithoutRef<'form'> {
  onSave: (value: unknown) => void;
}

export interface FormHandle {
  clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
