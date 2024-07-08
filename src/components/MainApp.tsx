// import NavBar from "./Functional/NavBar/NavBar";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useForm } from "hooks/useForm";

export const MainApp = () => {
  // Estado para visualizar o no el contenido
  const [visible, setVisible] = useState<boolean>(false);
  //   Valores de monedas
  const [value1] = useState<number>(1);
  const [value2, setValue2] = useState<number>();
  const [ValorDolar, setValorDolar] = useState<number>(0.0);

  interface FormData {
    ingreso: string;
    egreso: string;
    total: string;
  }
  const initialForm: FormData = {
    ingreso: "",
    egreso: "",
    total: "",
  };

  const {
    formState,
    onChange,
    convertirFormulario,
    onChangeCheckBox,
    onChangeWithElement,
    onResetForm,
    resetSpecific,
    onChangeMultiSelect,
  } = useForm(initialForm);

  //  Función para guardar el valor del dolar
  const guardarValorDolar = () => {
    // Ocultar el dialogo
    setVisible(false);
    // Guardar el valor del dolar
    setValorDolar(value2 ? value2 : 0);
  };
  return (
    // Componente padre
    <div className="w-screen min-h-screen h-auto bg-[#374151] flex flex-col">
      {/* <NavBar /> */}
      <section className="w-full flex text-blue-50 my-4">
        <h1 className="m-auto roboto-bold text-6xl">Calculos</h1>
      </section>
      <section className="flex flex-col md:flex-row mx-auto mb-4 bg-white w-11/12 h-auto rounded-xl p-8 gap-4">
        {/* Ingresos */}
        <Card title="Ingresos">
          <div className="grid grid-cols-2">
            {/* Nombre */}
            <div></div>
            <div>
              <label htmlFor="I_label_1">Nombre de ingreso</label>
              <InputText id="username" aria-describedby="username-help" />
            </div>
          </div>
        </Card>
        {/* Egresos */}
        <Card title="Egresos">
          <div className="grid grid-cols-2">
            {/* Nombre */}
            <div>
              <label htmlFor="I_label_1">Nombre de ingreso</label>
              <InputText id="username" aria-describedby="username-help" />
            </div>
            <div>
              <label htmlFor="I_label_1">Nombre de ingreso</label>
              <InputText id="username" aria-describedby="username-help" />
            </div>
          </div>
        </Card>
        {/* Total */}
        <Card title="Total">
          <div className="grid grid-cols-1">
            {/* Nombre */}
            <div>
              <label htmlFor="I_label_1">Total</label>
              <InputText id="username" aria-describedby="username-help" />
            </div>
          </div>
        </Card>
      </section>
      {/* Botón de dialogo de solicitud de cambio de dolar */}
      <div className="w-auto fixed right-4 bottom-0">
        <Button
          label="Ingresar valor de dolar"
          icon="pi pi-plus"
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="card flex justify-content-center">
        <Dialog
          header="Favor ingrese el valor del dolar actual"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <div className="m-4 flex">
            <div className="flex-auto mx-auto text-center">
              <label htmlFor="currency-us" className="font-bold block mb-2">
                United States
              </label>
              <InputNumber
                inputId="currency-us"
                value={value1}
                mode="currency"
                currency="USD"
                locale="en-US"
                readOnly
              />
            </div>
            <div className="flex-auto mx-auto text-center">
              <p className="mx-auto text-6xl">=</p>
            </div>
            <div className="flex-auto mx-auto text-center">
              <label
                htmlFor="currency-cordobas"
                className="font-bold block mb-2 "
              >
                Cordobas
              </label>
              <InputNumber
                inputId="currency-cordobas"
                value={value2}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setValue2(e.value ? e.value : 0)
                }
                mode="currency"
                currency="NIO"
                locale="en-US"
              />
            </div>
            <div className="flex-auto m-auto mb-0 text-center">
              <Button label="Guardar" onClick={guardarValorDolar} />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
