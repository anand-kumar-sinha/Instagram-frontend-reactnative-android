import { StyleSheet } from "react-native";
import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";

const Alert = ({ alert, hideAlertHandler, message }) => {
  return (
    <AwesomeAlert
      show={alert}
      showProgress={false}
      title="Alert!"
      closeOnTouchOutside={true}
      message={message}
      showCancelButton={false}
      showConfirmButton={true}
      confirmText="Confirm"
      confirmButtonColor="#3797EF"
      onConfirmPressed={hideAlertHandler}
      animatedValue={5}
      titleStyle={{
        color: "red",
        fontSize: 18,
        fontWeight: "bold",
      }}
      contentContainerStyle={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    />
  );
};

export default Alert;

const styles = StyleSheet.create({});
