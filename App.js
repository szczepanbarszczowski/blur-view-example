/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from "react";
import React from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
import LinearGradient from "react-native-linear-gradient";

import Logo from "./assets/logo.png";
import Circle from "./assets/circle.png";

const BluredWidget = ({}) => {
  return (
    <View style={s.bluredWidgetWrapper}>
      <Image source={Circle} style={s.circle} />
      <LinearGradient colors={["rgba(255, 255, 255, 0.1)", "rgba(250, 212, 0, 0.5)"]} useAngle angle={128}
                      angleCenter={{ x: 0.5, y: 0.5 }}>
        <BlurView blurType="xlight" blurAmount={3}>
          {/* Transparent bg needed for android to fix weird children positioning issue*/}
          <View style={s.blurViewInnerWrapper}>
            <Text style={s.availableBalanceText}>Available balance</Text>
            <Text style={s.availableBalanceAmmount}>26.2654125 CASH</Text>
          </View>
        </BlurView>
      </LinearGradient>

      <View style={s.pressableWrapper}>
        <Pressable style={s.sendButton}>
          <Text style={s.sendButtonText}>Send</Text>
        </Pressable>
        <Pressable style={s.receiveButton}>
          <Text style={s.receiveButtonText}>Receive</Text>
        </Pressable>
      </View>
    </View>
  );
};

const App: () => Node = () => {
  return (
    <View style={s.wrapper}>
      <SafeAreaView style={s.wrapper}>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor }}
                    contentContainerStyle={s.wrapper}>
          <View style={s.innerWrapper}>
            <Image source={Logo} style={s.logo} />
            <View style={s.widgetWrapper}>
              <BluredWidget />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const backgroundColor = "#F1F1F1";

const s = StyleSheet.create({
  wrapper: { backgroundColor, flex: 1 },
  innerWrapper: {
    backgroundColor,
    paddingHorizontal: 24,
  },
  logo: { width: 103, height: 103, alignSelf: "flex-end", marginRight: -9 },
  widgetWrapper: { position: "absolute", top: 33, left: 24, right: 24 },
  bluredWidgetWrapper: {
    // border: "1px solid #F7D207",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  circle: { position: "absolute", top: 70, left: 14 },
  availableBalanceText: {
    fontSize: 12,
    lineHeight: 16,
    alignItems: "center",
    color: "#757575",
    marginTop: 16,
    marginLeft: 18,
  },
  availableBalanceAmmount: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24,
    color: "#010533",
    marginTop: 3,
    marginLeft: 18,
    marginBottom: 25,
  },
  pressableWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  sendButton: {
    backgroundColor: "#F1C10A",
    height: 28,
    marginLeft: 16,
    marginVertical: 14,
    marginRight: 8,
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 12,
    color: "#FFFFFF",
  },
  receiveButton: {
    backgroundColor: "#F1C10A",
    height: 28,
    marginRight: 16,
    marginVertical: 14,
    marginLeft: 8,
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  receiveButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 12,
    color: "#FFFFFF",
  },
  blurViewInnerWrapper: { backgroundColor: "transparent", flex: 1 },
});

export default App;
