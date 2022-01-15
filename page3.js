import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
export default function Page3() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.backArrow}>--</Text>
        <View style={{ alignSelf: "center" }}>
          <Text style={[styles.profileTxt, { width: windowWidth * 0.7 }]}>
            Upload Your Favourite Photos
          </Text>
          <View style={[styles.profileBox, { width: windowWidth * 0.7 }]}>
            <View style={styles.jcac}>
              <View style={[styles.circle]}>
                <Pressable>
                  <Text>+</Text>
                </Pressable>
              </View>
              <View>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable style={styles.done}>
        <Text style={styles.doneTxt}>Done</Text>
      </Pressable>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181228",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  profileTxt: {
    color: "#fff",
    fontSize: 40,
    paddingLeft: 20,
    paddingTop: 30,
  },
  backArrow: {
    color: "#fff",
    alignContent: "flex-start",
  },
  done: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#243A63",
    height: 50,
  },
  doneTxt: {
    color: "#fff",
    fontSize: 20,
  },
  profileBox: {
    height: 250,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 7,
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,

    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  addPic: {
    color: "#000",
    fontSize: 30,
  },
  addPhoto: {
    marginTop: 50,
    color: "#fff",
    fontSize: 20,
  },
  jcac: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
