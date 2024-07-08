// TODO: Esto es un custom hook para formularios reutilizable

import { useState } from "react";

export const useForm = (initialForm = {}) => {
  // *En esta linea se asigna el objeto del formulario (con los campos) como
  // *Valor inicial del estado de formulario
  const [formState, setFormState] = useState(initialForm);
  // *En esta linea se definie la función para cambiar cualquier campo del form
  // *Recibe como parámetro la desestructuración del event.target
  const onChange = ({ target }) => {
    // Del target se desestructura el value y el name (Datos que usaré luego)
    const { name, value } = target;
    // Se define nuevos valores al estado
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onChangeMultiSelect = (ev, name) => {
    // Del target se desestructura el value y el name (Datos que usaré luego)
    console.log(ev);
    // console.log(name);
    // Se define nuevos valores al estado
    setFormState({
      ...formState,
      [name]: ev,
    });
  };
  //* Esta función recibe un objeto y lo convierte en el nuevo formulario
  const convertirFormulario = (obj) => {
    setFormState(obj);
  };
  //* Esta función es para cambiar el estado de un checkbox (Toggle)
  const onChangeCheckBox = ({ target }) => {
    const { name } = target;
    setFormState({
      ...formState,
      [name]: !formState[name],
    });
  };
  //* Función base para modificar el valor de un elemento del formulario
  const onChangeWithElement = (element) => {
    const { name, value } = element;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //* Función para convertir el valor de un elemento del formulario a un string vacío
  const resetSpecific = (names) => {
    names.forEach((name) => {
      setFormState({
        ...formState,
        [name]: "",
      });
    });
  };
  //* Función para convertir el formulario al estado inicial
  const onResetForm = () => {
    setFormState(initialForm);
  };
  // !Se retorna con este hook el estado del formulario y la función para actualizar el estado
  return {
    ...formState,
    formState,
    onChange,
    convertirFormulario,
    onChangeCheckBox,
    onChangeWithElement,
    onResetForm,
    resetSpecific,
    onChangeMultiSelect,
  };
};
