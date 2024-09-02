import { StyleSheet } from "react-native";
import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";

const Alert = ({ alert, hideAlertHandler, message, tittle = 'Alert !', }) => {

  return (
    <AwesomeAlert
      show={message == '100%' ? false : alert}
      showProgress={false}
      title={tittle}
      closeOnTouchOutside={true}
      message={message == '100%' ? 'Uploaded' : message}
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
      messageStyle={{
        fontSize: 18,
        fontWeight: "bold",
      }}
    />
  );
};

export default Alert;

const styles = StyleSheet.create({});
