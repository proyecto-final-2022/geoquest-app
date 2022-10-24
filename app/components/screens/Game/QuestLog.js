import React, { Text } from "react-native";


export default function QuestLog({route}) {
  return (
    <Text>
      {JSON.stringify(route.params.questConfig)}
    </Text>
  );
}
