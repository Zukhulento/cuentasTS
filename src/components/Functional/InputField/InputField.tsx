import { InputText } from "primereact/inputtext";

interface InputFieldProps {
  nombre: string;
  valor: string;
  onChange: () => void;
  etiqueta: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  nombre,
  valor,
  onChange,
  etiqueta = "Nombre por defecto",
}) => {
  return (
    <>
      <label htmlFor={nombre}>{etiqueta}</label>
      <InputText id={nombre} name={nombre} value={valor} onChange={onChange} />
    </>
  );
};
