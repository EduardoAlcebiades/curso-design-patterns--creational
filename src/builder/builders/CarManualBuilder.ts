import { Engine, GPSEnum, TripComputer } from "../components";
import { CarManual } from "../products";
import { IBuilder } from "./interfaces/IBuilder";

export class CarManualBuilder implements IBuilder {
  private manual = new CarManual();

  reset(): void {
    this.manual = new CarManual();
  }

  getResult(): CarManual {
    const result = this.manual;
    this.reset();

    return result;
  }

  setSeats(seats: number): void {
    this.manual.seats = `${seats} assento(s)`;
  }

  setEngine(engine: Engine): void {
    this.manual.engine = `Motor v${engine.cylinders}, potência: ${engine.power}`;
  }

  setTripComputer(tripComputer: TripComputer | undefined): void {
    this.manual.tripComputer = tripComputer
      ? `${tripComputer.inches} polegadas, bluetooth: ${
          tripComputer.bluetooth ?? "não possui"
        }`
      : "não possui";
  }

  setGPS(GPS: GPSEnum | undefined): void {
    switch (GPS) {
      case GPSEnum.ADVANCED:
        this.manual.GPS = "Avançado";
      case GPSEnum.BASIC:
        this.manual.GPS = "Básico";
      case undefined:
        this.manual.GPS = "não possui";
      default:
        this.manual.GPS = "GPS não registrado";
    }
  }
}
