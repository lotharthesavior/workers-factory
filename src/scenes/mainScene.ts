import store from "../store";
import { ADD_PRODUCT, ADD_TIME, ADD_WORKER, UPDATE_WORKER_WORK } from "../store/gameReducer";
import { Scene } from "phaser";

var product;
var worker;

export default class mainScene extends Scene {
  create() {

    // add product
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

    // add worker
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
      // console.log(store.getState().time)
      store.dispatch({
        type: ADD_WORKER
      });
    });

    // counter

    // workers

  }

  update(dt) {
    store.dispatch({
      type: ADD_TIME
    });

    if (store.getState().workers.length > 0) {
      store.dispatch({type: UPDATE_WORKER_WORK});
    }

    product.setText('Add Product: ' + Math.round(store.getState().count));
    worker.setText('Add Worker: ' + store.getState().workers.length);
  }
}
