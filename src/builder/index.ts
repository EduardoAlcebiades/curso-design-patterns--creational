import { CarBuilder, CarManualBuilder } from "./builders";
import { Director } from "./directors";
import { ApplicationEnum } from "./enums";
import { Car, CarManual } from "./products";

function getCarAndCarManual(
  argument: string,
  value?: ApplicationEnum
): { car: Car; carManual: CarManual } {
  const director = new Director();
  const carBuilder = new CarBuilder();
  const carManualBuilder = new CarManualBuilder();

  switch (value) {
    case ApplicationEnum.SPORT:
      director.constructSportCar(carBuilder);
      director.constructSportCar(carManualBuilder);
      break;
    case ApplicationEnum.SUV:
      director.constructSUV(carBuilder);
      director.constructSUV(carManualBuilder);
      break;
    default:
      throw new Error(
        `Invalid value '${
          value ?? ""
        }' for argument '--${argument}'\n\nAvailable options:\n- ${Object.values(
          ApplicationEnum
        ).join(`\n- `)}`
      );
  }

  const car = carBuilder.getResult();
  const carManual = carManualBuilder.getResult();

  return { car, carManual };
}

export default function (argument: string, value?: string) {
  try {
    const { car, carManual } = getCarAndCarManual(
      argument,
      value as ApplicationEnum
    );

    console.log(car);
    console.log(carManual);
  } catch (err: any) {
    console.log(err?.message);
  }
}
