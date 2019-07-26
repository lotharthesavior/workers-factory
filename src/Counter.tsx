import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTransition, animated } from "react-spring";

import { GAME_HEIGHT, GAME_WIDTH } from "./config";

interface ICounterProps {
  count: integer;
}

function Counter({ count }: ICounterProps) {

  const transitions = useTransition(
    count,
    null,
    ({
      from: { transform: 'translate3d(0,-10px,0)' },
      enter: { transform: 'translate3d(0,0px,0)' },
      leave: { display: 'none' },
    })
  );

  return (
    <div>
      {/* Top */}
      <div>
        <span
          style={{
            position: "absolute",
            width: 50,
            height: 20,
            top: 150,
            left: 50,
            color: "#fff",
            backgroundColor: "none"
          }}
        >Count:</span>
          {transitions.map(({ item, key, props }) =>
          <animated.div
            key={key}
            style={{
              ...props,
              position: "absolute",
              width: 50,
              height: 20,
              top: 150,
              color: "#fff",
              backgroundColor: "none"
            }}
          >{Math.round(count)}</animated.div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ count }: { count: integer }) => ({
  count
});

export default connect(mapStateToProps)(Counter);
