import React, { FC, useState } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text, AutoImage, Button, Card, Icon, TextField, Toggle, ToggleProps } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"
import { Calendar, CalendarList, Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { string } from "mobx-state-tree/dist/internal"
import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
//import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native';

// this would be a wording or smth that states generate
const welcomeLogo = require("../../assets/images/FormLogo.jpg")


export const FormScreen: FC<DemoTabScreenProps<"DemoCommunity">> = function FormScreen(_props){
    console.log('HeatMapScreen render'); 
    const { navigation } = _props
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(false);
    const [dinner, setDinner] = useState(false);
    const [sleep, setSleep] = useState(false);

    function goNext() {
      navigation.navigate('Generate', { screen: 'Generate',
      params: {
        breakfastConsumption: breakfast, 
        lunchConsumption: lunch, 
        dinnerConsumption: dinner,
        sleepQuantity: sleep ,}
      });
    }

    return(
      <View style = {$container}>
        <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <View style={$topContainer}>
              <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        </View>
          <View style={$buttonContainer}>
              <Button style={breakfast ? $buttonOn : $buttonOff } text="Went outside to touch grass" onPress={() => { setBreakfast(!breakfast )}} />
          </View>

          <View style={$buttonContainer}>
              <Button style={lunch ? $buttonOn : $buttonOff } text="Studied for 2 hours" onPress={() => { setLunch(!lunch )}} />
          </View>

          <View style={$buttonContainer}>
              <Button style={dinner ? $buttonOn : $buttonOff } text="Exercised for 30 minutes" onPress={() => { setDinner(!dinner )}} />
          </View>

          <View style={$buttonContainer}>
              <Button style={sleep ? $buttonOn : $buttonOff } text="Me Time!" onPress={() => { setSleep(!sleep)}} />
          </View>

          <View style={$buttonContainer}>
            {/* @demo remove-block-start */}
            <Button
              testID="next-screen-button"
              preset="reversed"
              text="Submit!"
              onPress={goNext}
              />
            {/* @demo remove-block-end */}
          </View>
        </Screen>
      </View>
      );
}

// @demo remove-file
const $container: ViewStyle = {
  flex: 1,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $buttonOn: ViewStyle = {
  marginBottom: spacing.xs,
  backgroundColor: 'green'
}

const $buttonOff: ViewStyle = {
  marginBottom: spacing.xs,
  backgroundColor: 'red'
}

const $buttonContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  //flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $welcomeLogo: ImageStyle = {
  height: 200,
  width: "100%",
  marginBottom: spacing.xxl,
}