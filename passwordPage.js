import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import Input from "./Components/input";
import { useState } from "react";
import Button from "./Components/button";

export default function PasswordPage() {
  const [forgotForm, setForgotForm] = useState({ email: "" });
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 40 }}>
        <View>
          <Input
            value={forgotForm.email}
            placeholder={"Your Email"}
            type={"email"}
            onChange={(e) => {
              setForgotForm({ email: e.target.value });
            }}
          />
        </View>
        <View>
          <Button text="Get OTP" />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181228",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
