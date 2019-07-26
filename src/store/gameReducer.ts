export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_TIME = "ADD_TIME";
export const UPDATE_WORKER_WORK = "UPDATE_WORKER_WORK";
export const ADD_WORKER = "ADD_WORKER";

class Worker {
  constructor(public speed: number) {}
}

const initState: {
  time: integer,
  last_update_time: integer,
  count: integer,
  workers: Worker[]
} = {
  time: 0,
  last_update_time: 0,
  count: 0,
  workers: []
};

export const addProduct = () => ({
  type: ADD_PRODUCT
});
export const addTime = () => ({
  type: ADD_TIME
});
export const addWorker = () => ({
  type: ADD_WORKER
});
export const updateWorkerWork = () => ({
  type: UPDATE_WORKER_WORK
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

    case ADD_TIME:
      return { ...state, time: state.time + 1 };

    case ADD_WORKER:
      var workersCollection = state.workers;
      workersCollection.push(new Worker(0.5));
      console.log(workersCollection);
      return { ...state, workers: workersCollection };

    case UPDATE_WORKER_WORK:
      let seconds = Math.round(state.time / 100);
      // console.log("seconds: " + seconds);
      // console.log("last_update_time: " + state.last_update_time);
      let time_elapsed = seconds - state.last_update_time;
      // console.log("time_elapsed: " + time_elapsed);
      if (time_elapsed === 0) {
        return state;
      }

      var workersSpeedSum = state.workers
        .map(worker => worker.speed)
        .reduce(function(total, num){
            return total + num
        });
      return {
        ...state,
        count: state.count + workersSpeedSum,
        last_update_time: seconds
      };

    default:
      return state;
  }
};
