// import NavBar from "./Functional/NavBar/NavBar";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useEffect, useRef, useState } from "react";
import { InputField } from "./Functional/InputField/InputField";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

export const MainApp = () => {
  // Estado para visualizar o no el contenido del dialogo de cambio de dolar
  const [tipoCambioVisible, settipoCambioVisible] = useState(false);
  // Estado para visualizar o no el contenido del dialogo de ingresos
  const [IngresoNuevoVisible, setIngresoNuevoVisible] = useState(false);
  // Estado para visualizar o no el contenido del dialogo de egresos
  const [EgresoNuevoVisible, setEgresoNuevoVisible] = useState(false);
  // Estado para poder controlar el input del valor del dólar
  const [CambioDolar, setCambioDolar] = useState(0.0);
  // Estado para guardar el valor del dolar y hacer los cálculos
  const [ValorDolar, setValorDolar] = useState(0.0);
  // Estado para controlar si el botón de tipo de cambio vibra o no
  const [Vibrar, setVibrar] = useState(false);
  // Estado para guardar los ingresos
  // ?Cada ingreso tiene un id, nombre, un valor en dólares y un valor en córdobas
  const [Ingresos, setIngresos] = useState<
    { id: number; nombre: string; valorD: string; valorC: string }[]
  >([]);
  // Estado para guardar los egresos
  // ?Cada egreso tiene un id, nombre, un valor en dólares y un valor en córdobas
  const [Egresos, setEgresos] = useState<
    { id: number; nombre: string; valorD: string; valorC: string }[]
  >([]);
  // Estado para guardar los totales
  const [Totales, setTotales] = useState<
    { id: number; valorD: string; valorC: string }[]
  >([]);
  // Estado para guardar el total global
  const [TotalGlobal, setTotalGlobal] = useState({
    id: "TOTALGLOBAL",
    valorD: "0",
    valorC: "0",
  });

  // Estado para almacenar el valor que se ingresa en el dialogo de ingresos
  const [Ingreso, setIngreso] = useState({
    id: 0,
    nombre: "",
    valorD: "0",
    valorC: "0",
  });
  // Estado para almacenar el valor que se ingresa en el dialogo de egresos
  const [Egreso, setEgreso] = useState({
    id: 0,
    nombre: "",
    valorD: "0",
    valorC: "0",
  });
  // Funcion para cambiar un ingreso en especifico
  const cambiarIngreso = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  // Función para cambiar un egreso en especifico
  const cambiarEgreso = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  // Función para mostrar el dialogo de ingreso
  const showIngresoDialog = () => {
    if (CambioDolar === 0) {
      // Haciendo que el botón de cambio de dolar vibre
      setVibrar(true);
      // Aquí se mostrará un warning y no se podrá agregar un ingreso
      showError({
        message: "Favor ingresar el tipo de cambio antes de agregar un ingreso",
      });
    } else {
      setIngresoNuevoVisible(true);
    }
  };
  // Función para mostrar el dialogo de egreso
  const showEgresoDialog = () => {
    if (CambioDolar === 0) {
      // Aquí se mostrará un warning y no se podrá agregar un egreso
      showError({
        message: "Favor ingresar el tipo de cambio antes de agregar un egreso",
      });
    } else {
      setEgresoNuevoVisible(true);
    }
  };
  //  Función para guardar el valor del dolar
  const guardarValorDolar = () => {
    // Ocultar el dialogo
    settipoCambioVisible(false);
    // Guardar el valor del dolar
    setValorDolar(CambioDolar ? CambioDolar : 0);
  };
  // Función para agregar un ingreso
  const agregarIngreso = () => {
    // Validar que el ingreso tenga un nombre
    if (Ingreso.nombre === "") {
      // Aquí se mostrará un warning y no se podrá agregar un ingreso
      showError({
        message: "Favor ingresar un nombre al ingreso",
      });
    } else {
      // Validar que el ingreso tenga un valor
      if (Ingreso.valorC === "0" || Ingreso.valorD === "0") {
        // Aquí se mostrará un warning y no se podrá agregar un ingreso
        showError({
          message: "Favor ingresar un valor al ingreso",
        });
      } else {
        // Guardar el ingreso
        let NuevosIngresos = Ingresos;
        NuevosIngresos.push({
          id: Ingresos.length + 1,
          nombre: Ingreso.nombre,
          valorD: Ingreso.valorD,
          valorC: Ingreso.valorC,
        });
        setIngresos(NuevosIngresos);
        // Limpiar el ingreso
        setIngreso({
          id: 0,
          nombre: "",
          valorD: "0",
          valorC: "0",
        });
        // Mostrar un mensaje de éxito
        showSuccess({
          message: "Ingreso agregado correctamente",
        });
      }
    }
  };
  // Función para agregar un egreso
  const agregarEgreso = () => {
    // Validar que el ingreso tenga un nombre
    if (Egreso.nombre === "") {
      // Aquí se mostrará un warning y no se podrá agregar un ingreso
      showError({
        message: "Favor ingresar un nombre al egreso",
      });
    } else {
      // Validar que el egreso tenga un valor
      if (Egreso.valorC === "0" || Egreso.valorD === "0") {
        // Aquí se mostrará un warning y no se podrá agregar un ingreso
        showError({
          message: "Favor ingresar un valor al egreso",
        });
      } else {
        // Guardar el ingreso
        let NuevosEgresos = Egresos;
        NuevosEgresos.push({
          id: Egresos.length + 1,
          nombre: Egreso.nombre,
          valorD: Egreso.valorD,
          valorC: Egreso.valorC,
        });
        setEgresos(NuevosEgresos);
        // Limpiar el ingreso
        setEgreso({
          id: 0,
          nombre: "",
          valorD: "0",
          valorC: "0",
        });
        // Mostrar un mensaje de éxito
        showSuccess({
          message: "Egreso agregado correctamente",
        });
      }
    }
  };
  // Función para calcular los totales
  const calcularTotales = () => {
    // Variables que obtendrán los totales de las columnas
    let CCordobas = 0;
    let CDolares = 0;
    // Primero obtenemos el total de los ingresos
    let cantidadIngresos = Ingresos.length;
    // Ahora obtenemos el total de los egresos
    let cantidadEgresos = Egresos.length;
    console.log(cantidadIngresos, cantidadEgresos);
    if (cantidadIngresos >= cantidadEgresos) {
      // El que sea mayor será el total de totales que existan
      // Recorriendo los ingresos
      Ingresos.map((ingreso, index) => {
        // Creando variables iniciales (Esto es por fila)
        let totalC = ingreso.valorC;
        let totalD = ingreso.valorD;
        if (Egresos[index]) {
          // Si hay un egreso en la misma posición, se sumará
          totalC = (
            parseFloat(totalC) - parseFloat(Egresos[index].valorC)
          ).toFixed(2);
          totalD = (
            parseFloat(totalD) - parseFloat(Egresos[index].valorD)
          ).toFixed(2);
        }
        // Sumando al total global
        CCordobas += parseFloat(totalC);
        CDolares += parseFloat(totalD);
        // Guardando el total en el estado
        let NuevosTotales = Totales;
        NuevosTotales[index] = {
          id: index + 1,
          valorC: totalC,
          valorD: totalD,
        };
        setTotales(NuevosTotales);
      });
    } else {
      Egresos.map((egreso, index) => {
        // Creando variables iniciales (Esto es por fila)
        let totalC = egreso.valorC;
        let totalD = egreso.valorD;
      });
    }
    setTotalGlobal({
      id: "TOTALGLOBAL",
      valorC: CCordobas.toFixed(2),
      valorD: CDolares.toFixed(2),
    });
  };
  // Cada vez que cambie una columna se modificará esto
  useEffect(() => {
    // Calcular los totales
    if (Ingresos.length > 0 || Egresos.length > 0) {
      calcularTotales();
    }
  }, [Ingresos.length, Egresos.length]);
  useEffect(() => {}, [TotalGlobal, Totales]);
  // Cada vez que se ponga a vibrar el botón de cambio de dolar
  useEffect(() => {
    if (Vibrar == true) {
      setTimeout(() => {
        setVibrar(false);
      }, 3000);
    }
  }, [Vibrar]);

  // TODO Esta parte es de los toasts
  const toast = useRef<Toast>(null);
  // Mostrando toast exitoso
  const showSuccess = ({ message }: { message: string }) => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  };
  // Mostrando toast de error
  const showError = ({ message }: { message: string }) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };
  //* Toast para reseteo de datos
  const accept = () => {
    toast.current?.show({
      severity: "info",
      summary: "Confirmado",
      detail: "Se han reiniciado los valores",
      life: 3000,
    });
  };
  const reject = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Cancelado",
      detail: "Has cancelado la operación",
      life: 3000,
    });
  };
  // Datos de dialogo de confirmar
  const confirm1 = () => {
    confirmDialog({
      message: "¿Seguro que desea borrar los datos?",
      header: "Confirmación",
      icon: "pi pi-exclamation-triangle",
      defaultFocus: "accept",
      accept,
      reject,
    });
  };
  return (
    // Componente padre
    <div className="w-screen min-h-screen h-auto bg-[#374151] flex flex-col">
      {/* <NavBar /> */}
      <section className="w-full flex text-blue-50 my-4">
        <h1 className="m-auto roboto-bold text-6xl">Cálculos</h1>
      </section>
      <section className="flex flex-col md:grid md:grid-cols-6 mx-auto mb-4 bg-white w-11/12 h-auto rounded-xl p-8 gap-4">
        {/* Ingresos */}
        <Card title="Ingresos" className="col-span-2">
          <div className="flex flex-col">
            {Ingresos.length > 0 ? (
              <div className="flex flex-col gap-2">
                {Ingresos.map((ingresoUnico) => (
                  <div key={ingresoUnico.id} className="flex w-full gap-2">
                    <div className="flex flex-col m-auto">
                      <InputField
                        etiqueta={ingresoUnico.nombre}
                        nombre={ingresoUnico.nombre}
                        valor={ingresoUnico.valorC}
                        onChange={cambiarIngreso}
                      />
                    </div>
                    <div className="flex flex-col m-auto">
                      <InputField
                        etiqueta={ingresoUnico.nombre + " en $"}
                        nombre={ingresoUnico.nombre + "D"}
                        valor={ingresoUnico.valorD}
                        onChange={cambiarIngreso}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center my-2">Actualmente no hay ingresos</p>
            )}
            <span className="w-auto mx-auto my-2">
              <Button
                label="Agregar ingreso"
                icon="pi pi-plus"
                severity="success"
                onClick={showIngresoDialog}
                raised
                rounded
              />
            </span>
          </div>
        </Card>
        {/* Egresos */}
        <Card title="Egresos" className="col-span-2">
          <div className="flex flex-col">
            {Egresos.length > 0 ? (
              <div className="flex flex-col gap-2">
                {Egresos.map((egresoUnico) => (
                  <div key={egresoUnico.id} className="flex w-full gap-2">
                    <div className="flex flex-col m-auto">
                      <InputField
                        etiqueta={egresoUnico.nombre}
                        nombre={egresoUnico.nombre}
                        valor={egresoUnico.valorC}
                        onChange={cambiarEgreso}
                      />
                    </div>
                    <div className="flex flex-col m-auto">
                      <InputField
                        etiqueta={egresoUnico.nombre + " en $"}
                        nombre={egresoUnico.nombre + "D"}
                        valor={egresoUnico.valorD}
                        onChange={cambiarEgreso}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center my-2">Actualmente no hay egresos</p>
            )}
            <span className="w-auto mx-auto my-2">
              <Button
                label="Agregar egreso"
                icon="pi pi-plus"
                severity="warning"
                onClick={showEgresoDialog}
                raised
                rounded
              />
            </span>
          </div>
        </Card>
        {/* Total */}
        <Card title="Total" className="col-span-2">
          <div className="grid grid-cols-1">
            {/* Totales */}
            {Totales.length > 0 ? (
              <div className="flex flex-col gap-2">
                {Totales.map((totalUnico) => (
                  <div key={totalUnico.id} className="flex w-full gap-2">
                    <div className="flex flex-col m-auto">
                      <InputField
                        etiqueta={"Total " + totalUnico.id}
                        nombre={"Total " + totalUnico.id}
                        valor={totalUnico.valorC}
                      />
                    </div>
                    <div className="flex flex-col m-auto">
                      <InputField
                        etiqueta={"Total " + totalUnico.id}
                        nombre={"Total " + totalUnico.id}
                        valor={totalUnico.valorD}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center my-2">Actualmente no hay egresos</p>
            )}
            {/* Total global */}
            <div className="flex flex-col">
              <div className="flex flex-col">
                <InputField
                  etiqueta="C$ Totales"
                  nombre="TotalGlobalC"
                  valor={TotalGlobal.valorC}
                />
              </div>
              <div className="flex flex-col">
                <InputField
                  etiqueta="$ Totales"
                  nombre="TotalGlobalD"
                  valor={TotalGlobal.valorD}
                />
              </div>
            </div>
          </div>
        </Card>
      </section>
      {
        //TODO Toda esta parte es de los dialogos
      }
      {/* Botón de dialogo de solicitud de cambio de dolar */}
      <div
        className={`w-auto fixed right-4 bottom-0 ${
          Vibrar && "animate-bounce"
        } `}
      >
        {CambioDolar === 0 ? (
          <Button
            label="Ingresar tipo de cambio"
            icon="pi pi-plus"
            onClick={() => settipoCambioVisible(true)}
          />
        ) : (
          <Button
            label="Cambiar tipo de cambio"
            icon="pi pi-plus"
            severity="success"
            onClick={() => settipoCambioVisible(true)}
          />
        )}
      </div>
      {/* Botón de dialogo de resetear */}
      <div className={`w-auto fixed left-4 bottom-0`}>
        <Button
          label="Reiniciar valores"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirm1}
        />
      </div>
      <div className="card flex justify-content-center">
        {/* Dialogo de tipo de cambio */}
        <Dialog
          header="Favor ingrese el valor del dolar actual"
          visible={tipoCambioVisible}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!tipoCambioVisible) return;
            settipoCambioVisible(false);
          }}
        >
          <div className="m-4 flex">
            <div className="flex-auto mx-auto text-center">
              <label
                htmlFor="currency-dollar"
                className="font-bold block mb-2 "
              >
                Dólares
              </label>
              <InputNumber
                inputId="currency-dollar"
                value={1}
                mode="currency"
                currency="USD"
                locale="en-US"
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
                Córdobas
              </label>
              <InputNumber
                inputId="currency-cordobas"
                value={CambioDolar}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setCambioDolar(e.value ? e.value : 0)
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
        {/* Dialogo de agregar ingreso */}
        <Dialog
          header="Favor ingrese el ingreso"
          visible={IngresoNuevoVisible}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!IngresoNuevoVisible) return;
            setIngresoNuevoVisible(false);
          }}
        >
          <div className="m-4 flex flex-col gap-4">
            {/* Nombre de ingreso */}
            <div className="flex flex-col">
              <InputField
                etiqueta="Nombre de ingreso"
                nombre="Ingreso"
                valor={Ingreso.nombre}
                onChange={(e) => {
                  setIngreso({ ...Ingreso, nombre: e.target.value });
                }}
              />
            </div>
            {/* Valor en córdoba de ingreso */}
            <div className="flex flex-col">
              <InputField
                etiqueta="Valor en córdobas C$"
                nombre="IngresoCordoba"
                valor={Ingreso.valorC}
                onChange={(e) => {
                  setIngreso({
                    ...Ingreso,
                    valorC: e.target.value,
                    valorD: (parseFloat(e.target.value) / ValorDolar).toFixed(
                      2
                    ),
                  });
                }}
              />
            </div>
            {/* Valor en dólares de ingreso */}
            <div className="flex flex-col">
              <InputField
                etiqueta="Valor en dólares $"
                nombre="IngresoDolar"
                valor={Ingreso.valorD}
                onChange={(e) => {
                  setIngreso({
                    ...Ingreso,
                    valorD: e.target.value,
                    valorC: (parseFloat(e.target.value) * ValorDolar).toFixed(
                      2
                    ),
                  });
                }}
              />
            </div>
            <div className="ml-auto">
              <Button
                label="Agregar"
                onClick={() => {
                  agregarIngreso();
                  setIngresoNuevoVisible(false);
                }}
              />
            </div>
          </div>
        </Dialog>
        {/* Dialogo de agregar egreso */}
        <Dialog
          header="Favor ingrese el egreso"
          visible={EgresoNuevoVisible}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!EgresoNuevoVisible) return;
            setEgresoNuevoVisible(false);
          }}
        >
          <div className="m-4 flex flex-col gap-4">
            {/* Nombre de ingreso */}
            <div className="flex flex-col">
              <InputField
                etiqueta="Nombre del egreso"
                nombre="Egreso"
                valor={Egreso.nombre}
                onChange={(e) => {
                  setEgreso({ ...Egreso, nombre: e.target.value });
                }}
              />
            </div>
            {/* Valor en córdoba de ingreso */}
            <div className="flex flex-col">
              <InputField
                etiqueta="Valor en córdobas C$"
                nombre="EgresoCordorbas"
                valor={Egreso.valorC}
                onChange={(e) => {
                  setEgreso({
                    ...Egreso,
                    valorC: e.target.value,
                    valorD: (parseFloat(e.target.value) / ValorDolar).toFixed(
                      2
                    ),
                  });
                }}
              />
            </div>
            {/* Valor en dólares de ingreso */}
            <div className="flex flex-col">
              <InputField
                etiqueta="Valor en dólares $"
                nombre="EgresoDolar"
                valor={Egreso.valorD}
                onChange={(e) => {
                  setEgreso({
                    ...Egreso,
                    valorD: e.target.value,
                    valorC: (parseFloat(e.target.value) * ValorDolar).toFixed(
                      2
                    ),
                  });
                }}
              />
            </div>
            <div className="ml-auto">
              <Button
                label="Agregar"
                onClick={() => {
                  agregarEgreso();
                  setEgresoNuevoVisible(false);
                }}
              />
            </div>
          </div>
        </Dialog>
      </div>
      {
        //TODO Esta parte es de los toasts
      }
      <Toast ref={toast} />
      <ConfirmDialog />
    </div>
  );
};
