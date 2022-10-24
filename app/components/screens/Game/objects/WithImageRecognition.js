import React, { useState, useEffect } from "react";
import { ViroARImageMarker } from "@viro-community/react-viro";
import { 
  ViroARTrackingTargets 
} from "@viro-community/react-viro";
import { ViroAmbientLight } from "@viro-community/react-viro";
import { Viro3DObject } from "@viro-community/react-viro";
import Resources from "../../../../utils/resources.js"
import Interactions from "../interactions";
import { ViroAnimations } from "@viro-community/react-viro";
import { useSelector, useDispatch } from "react-redux";
import Quest from "../../../../redux/slices/quest"


export default function WithImageRecognition({id, typeProps, globalCtx}) {
  const questState = useSelector(state => state.quest);
  const dispatch = useDispatch();
  const [pauseUpdates, setPauseUpdates] = useState(false);
  const [visible, setIsVisible] = useState(true);
  const [runFade, setRunFade] = useState(false);

  const {target, model, interactions} = typeProps;
  const targetID = target.source + "_" + questState.scene;

  const targetProps = {
    ...target,
    source: Resources.get(target.source)
  };

  const modelProps = {
    ...model,
    source: Resources.get(model.source),
    resources: model.resources.map(r => Resources.get(r))
  };

  const hasInteractionsLeft = (state) => {
    const objectState = state.objects[id] ?? 0;
    const interactionN = interactions.length;
    return interactionN - 1  >= objectState;
  };

  useEffect(() => {
    if(!hasInteractionsLeft(questState)) {
      setIsVisible(false);
    }

    const targets = {};
    targets[targetID] = targetProps;
    console.log("Creating:", targetID);
    ViroARTrackingTargets.createTargets(targets);

    return () => {
      console.log("Removing:", targetID);
      ViroARTrackingTargets.deleteTarget(targetID);
    };
  }, [questState.scene]);

  const onClick = () => {
    if(!hasInteractionsLeft(questState)) {
      return;
    }

    const interact = (name, state, params) => {
      const ctx = {
        state,
        global: globalCtx,
      };
      return Interactions[name](ctx, ...params);
    };

    const objectState = questState.objects[id] ?? 0;
    const objects = {
      ...questState.objects
    };
    objects[id] = objectState + 1;
    const inputState = {
      ...questState,
      objects
    };

    const newState = interactions[objectState].reduce((prevState, int) => {
      return interact(int.name, prevState, int.params) || prevState;
    }, inputState);

    if(!hasInteractionsLeft(newState)) {
      setRunFade(true);
    }

    dispatch(Quest.actions.set(newState));
  };

  return (
    <ViroARImageMarker 
      target={targetID}
      onAnchorFound={() => {setPauseUpdates(true);}}
      pauseUpdates={pauseUpdates}
    >
      <ViroAmbientLight color="#ffffff"/>
      <Viro3DObject 
        visible={visible} 
        onClick={onClick} 
        {...modelProps} 
        animation={{
          name: "fade", 
          run: runFade, 
          loop: false, 
          onFinish: () => {setIsVisible(false);}
        }}
      />
    </ViroARImageMarker>
  );
}


ViroAnimations.registerAnimations({
  fade: {
    properties: {
      opacity: "-=1"
    },
    duration: 2000
  }
});
