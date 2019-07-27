import Phaser from "phaser";
import store from "./index";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_WORKER = "ADD_WORKER";

class Worker {
  constructor(public speed: number, public timer: Phaser.Time.TimerEvent) {}
}

// BEGIN: handle initial in storage

const existentState = localStorage.getItem('state');
var loadedState;
if (existentState !== null) {
  loadedState = JSON.parse(existentState);
} else {
  loadedState = {
    count: 0,
    workers: []
  }
}

// END: handle initial in storage

const initState: {
  count: integer,
  workers: Worker[]
} = loadedState;

export const addProduct = () => ({
  type: ADD_PRODUCT
});
export const addWorker = () => ({
  type: ADD_WORKER
});

export const gameReducer = (
  state = initState,
  action: { type: string; payload?: any }
) => {
  // console.log("Action:", action);
  // console.log("Count:", state.count);
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, count: state.count + 1 };

    case ADD_WORKER:
      var workersCollection = state.workers;
      workersCollection.push(new Worker(0.5, null));
      return state;

    default:
      return state;
  }
};
