import React from "react";
import { 
  Modal, 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  ScrollView
} from "react-native";


export default function HintModal({style, visible, hint, onClose}) {
  return (
    <Modal
      style={style}
      animationType="slide"
      statusBarTranslucent={false}
      transparent={true}
      visible={visible}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Hint</Text>
          </View>
          <View style={styles.bodyContainer}>
            <ScrollView>
              <Text style={styles.hintText}>{hint}</Text>
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  container: {
    /* borderTopRightRadius: 25, */
    /* borderTopLeftRadius: 25, */
    margin: "3%",
    borderRadius: 25,
    backgroundColor: "white",
    width: "94%",
    height: "30%",
  },

  titleContainer: {

  },

  content: {
    width: "100%",
    height: "100%",
    padding: "5%"
  },

  bodyContainer: {
    marginTop: "5%",
    height: "66%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "space-between"
  },

  titleText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 30
  },

  hintText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 20
  },

  closeButton: {
    borderRadius: 25,
    backgroundColor: "lightblue",
    height: 50,
    width: "50%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
  },

  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
