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

/*import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import {
  Button, // @demo remove-current-line
  Text,
} from "../components"
import { isRTL } from "../i18n"
import { useStores } from "../models" // @demo remove-current-line
import { AppStackScreenProps } from "../navigators" // @demo remove-current-line
import { colors, spacing } from "../theme"
import { useHeader } from "../utils/useHeader" // @demo remove-current-line
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"*/

// this would be a wording or smth that states generate
const welcomeLogo = require("../../assets/images/logo.png")


export const FormScreen: FC<DemoTabScreenProps<"DemoCommunity">> = function FormScreen(_props){ 
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
        <View style={containerStyle}>
        <Screen preset="scroll" contentContainerStyle={containerStyle} safeAreaEdges={["top"]}>
          <View style={$buttonContainer}>
              <Button style={breakfast ? $buttonOn : $buttonOff } text="Had Breakfast?" onPress={() => { setBreakfast(!breakfast )}} />
          </View>

          <View style={$buttonContainer}>
              <Button style={lunch ? $buttonOn : $buttonOff } text="Had Lunch?" onPress={() => { setLunch(!lunch )}} />
          </View>

          <View style={$buttonContainer}>
              <Button style={dinner ? $buttonOn : $buttonOff } text="Had Dinner?" onPress={() => { setDinner(!dinner )}} />
          </View>

          <View style={$buttonContainer}>
              <Button style={sleep ? $buttonOn : $buttonOff } text="Slept?" onPress={() => { setSleep(!sleep)}} />
          </View>

          <View>
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
const containerStyle: ViewStyle = {
  flex: 1,
};

const $buttonOn: ViewStyle = {
  marginBottom: spacing.xs,
  backgroundColor: '#c5e8b3'
}

const $buttonOff: ViewStyle = {
  marginBottom: spacing.xs,
  backgroundColor: '#edafab'
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.md,
}