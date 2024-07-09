import { InputText } from "primereact/inputtext";

interface InputFieldProps {
  nombre: string;
  valor: string;
  onChange?: (e: any) => void;
  etiqueta: string;
  type?: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  nombre,
  valor,
  onChange,
  etiqueta = "Nombre por defecto",
  type = "text",
  className = "",
}) => {
  return (
    <>
      <label htmlFor={nombre}>{etiqueta}</label>
      <InputText
        id={nombre}
        name={nombre}
        value={valor}
        onChange={onChange}
        type={type}
        className={`${className}`}
      />
    </>
  );
};
