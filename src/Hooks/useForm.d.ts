// useForm.d.ts
declare module 'hooks/useForm' {
  import { ChangeEvent } from 'react';

  interface UseFormReturn<T> {
    formState: T;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    convertirFormulario: (obj: T) => void;
    onChangeCheckBox: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeWithElement: (element: { name: string; value: any }) => void;
    onResetForm: () => void;
    resetSpecific: (names: string[]) => void;
    onChangeMultiSelect: (value: any, name: string) => void;
    [key: string]: any;
  }

  export function useForm<T>(initialForm: T): UseFormReturn<T>;
}
