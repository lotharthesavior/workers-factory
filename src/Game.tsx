import Phaser from "phaser";
import mainScene from "./scenes/mainScene";

import * as React from "react";

import { GAME_HEIGHT, GAME_WIDTH } from "./config";

export interface IGameProps {}

export default class IGame extends React.Component<IGameProps, any> {
  componentDidMount() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      parent: "phaser-game",
      backgroundColor: '#2d2d2d',
      scene: [mainScene]
    };

    new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  public render() {
    return <div id="phaser-game" style={{ backgroundColor: "#fff" }} />;
  }
}
