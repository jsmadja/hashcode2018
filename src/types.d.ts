type AlgoInput = {
  grid: {
    x: number,
    y: number,
  }
  vehicles: number,
  bonus: number,
  steps: number,
  rides: Ride[]
}

type Ride = {
  id: number,
  start: {
    x: number,
    y: number,
    time: number,
  }
  finish: {
    x: number,
    y: number,
    time: number,
  }
}

type AlgoOutput = {
  vehicle: number,
  rides: number[],
}[]
