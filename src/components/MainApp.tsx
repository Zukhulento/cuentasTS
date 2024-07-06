// import NavBar from "./Functional/NavBar/NavBar";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useState } from "react";

export const MainApp = () => {
  // Estado para visualizar o no el contenido
  const [visible, setVisible] = useState<boolean>(false);
  //   Valores de monedas
  const [value1, setValue1] = useState<number>(1);
  const [value2, setValue2] = useState<number>();
  return (
    // Componente padre
    <div className="w-screen h-screen bg-[#374151] flex flex-col">
      {/* <NavBar /> */}
      <section className="w-full flex text-blue-50">
        <h1 className="m-auto roboto-bold text-6xl">Calculos</h1>
      </section>
      <section className="flex mx-auto mt-4 bg-white w-11/12 h-auto rounded-xl p-8 gap-4">
        {/* Ingresos */}
        <Card title="Ingresos">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        {/* Egresos */}
        <Card title="Egresos">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        {/* Total */}
        <Card title="Total">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </section>
      {/* Botón de dialogo de solicitud de cambio de dolar */}
      <div className="w-auto absolute right-4 bottom-0">
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
                value={value1}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setValue2(e.value ? e.value : 0)
                }
                mode="currency"
                currency="NIO"
                locale="en-US"
              />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
