import React from "react";
import WithImageRecognition from "./objects/WithImageRecognition";

export function parseScene(scene) {
  return (props) => {
    return scene.objects.map((o, key) => parseObject(o, {...props, key, id: key}));
  };
}


function parseObject(object, props) {
  const components = {
    "WithImageRecognition": WithImageRecognition
  };
  const component = components[object.type] ?? undefined;

  if (!component)
    throw Error(`Invalid object type: ${object.type}`);

  return <ARObject component={component} {...props} {...object} />;
}


function ARObject({component, ...props}) {
  return React.createElement(component, props);
}
