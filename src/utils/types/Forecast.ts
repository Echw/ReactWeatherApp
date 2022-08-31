export type Forecast = {
  list: {
    dt: number;
    main: { temp: number; humidity: number };
    weather: { id: number; main: string; icon: string }[];
    wind: { speed: number };
    clouds: { all: number };
  }[];
};
