export type Weather = {
  name: string;
  main: { temp: number; humidity: number };
  clouds: { all: number };
  wind: { speed: number };
  weather: { id: number; main: string; icon: string }[];
};
