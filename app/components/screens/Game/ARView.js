import React, { useState } from "react";
import { 
  ViroARSceneNavigator
} from "@viro-community/react-viro";
import { View, StyleSheet } from "react-native";
import HintModal from "./HintModal";
import Scene from "./Scene";


export default function ARView({route}) {
  const [ showHint, setShowHint ] = useState(false);
  const [ hintText, setHintText ] = useState("");

  const hint = (text) => {
    setHintText(text);
    setShowHint(true);
  };

  const globalCtx = { 
    hint,
  };

  return (
    <View style={{height: "100%", width: "100%"}}>
      <ViroARSceneNavigator 
        initialScene={{scene: Scene}} 
        viroAppProps={{questConfig: route.params.questConfig, globalCtx}}
      />
      <HintModal 
        style={styles.hintModal} 
        visible={showHint} 
        hint={hintText} 
        onClose={() => setShowHint(false)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  hintModal: {

  },
});
