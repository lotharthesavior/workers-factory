import store from "../store";
import { ADD_PRODUCT, ADD_WORKER } from "../store/gameReducer";
import { Scene } from "phaser";
// import saveState from "../store/localStorage";

var product;
var worker;
var graphics;
var text;

export default class mainScene extends Scene {
  create() {

    // BEGIN: start store
    store.subscribe(() => {
      var storeData = store.getState();
      var storeDataFiltered = {
        count: storeData.count,
        workers: storeData.workers.map(function(w){
          return { speed: w.speed, timer: null };
        })
      };
      const serializedState = JSON.stringify(storeDataFiltered);
      localStorage.setItem('state', serializedState);
    });

    // END: start store


    // BEGIN: add product

    product = this.add.text(
      0,
      0,
      "Add Product",
      {
        backgroundColor: "white",
        color: "black",
        fontSize: 48
      }
    );
    product.setInteractive({ useHandCursor: true });
    product.on("pointerup", () => {
      // console.log(store.getState().time)
      store.dispatch({
        type: ADD_PRODUCT
      });
    });

    // END: add product


    // BEGIN: add worker

    worker = this.add.text(
      0,
      50,
      "Add Worker",
      {
        backgroundColor: "white",
        color: "black",
        fontSize: 48
      }
    );
    worker.setInteractive({ useHandCursor: true });
    worker.on("pointerup", () => {
      store.dispatch({
        type: ADD_WORKER
      });
    });

    // END: add worker


    // BEGIN: workers

    store.subscribe(this.giveTimerToWorkers);
    this.giveTimerToWorkers();

    graphics = this.add.graphics({ x: 202, y: 120 });
    text = this.add.text(0, 120, "");

    // END: workers

  }

  giveTimerToWorkers() {
    function filterWorkersWithTimer(worker){
      return worker.timer === null;
    }

    store.getState().workers
      .filter(filterWorkersWithTimer)
      .forEach((worker) => this.registerWorkersTimers(worker, this));
  }

  registerWorkersTimers(worker, that) {
    worker.timer = that.time.addEvent({
      delay: 2000,
      loop: true,
      callback: function(){
        store.dispatch({
          type: ADD_PRODUCT
        });
      }
    });
  }

  update(dt) {
    let workers = store.getState().workers;

    product.setText('Add Product: ' + Math.round(store.getState().count));
    worker.setText('Add Worker: ' + workers.length);
    graphics.clear();

    var output = [];
    let timerEvents = workers.filter( w => w.timer !== null );
    for (var i = 0; i < timerEvents.length; i++)
    {
      output.push('Worker ' + (i + 1) + ': ' + timerEvents[i].timer.getProgress().toString().substr(0, 4));
      graphics.fillStyle("white", 1);
      graphics.fillRect(0, i * 17.5, 500 * timerEvents[i].timer.getProgress(), 8);
    }
    text.setText(output);
  }
}
