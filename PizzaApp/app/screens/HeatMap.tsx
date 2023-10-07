import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"
import { Calendar, CalendarList, Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { string } from "mobx-state-tree/dist/internal"
import { AutoImage, Button, Card, Icon } from "../components"
import { useStores } from "../models"
import * as Application from "expo-application"

const chainReactLogo = require("../../assets/images/cr-logo.png")
const reactNativeLiveLogo = require("../../assets/images/rnl-logo.png")
const reactNativeRadioLogo = require("../../assets/images/rnr-logo.png")
const reactNativeNewsletterLogo = require("../../assets/images/rnn-logo.png")

const data = {          
  '2023-10-07': [{name: 'item 2 - any js object', height: 80, day: "Tuesday", info: { Meals: 1 }}],
  '2023-10-06': [{name: 'item 3 - any js object', height: 80, day: 'Tuesday', info: { Meals: 100 }}],
  '2023-10-09': [{name: 'item 4 - any js object', height: 80, day: 'Tuesday', info: { Meals: 3 }}],
  '2023-10-08': [{name: 'item 5 - any js object', height: 80, day: 'Tuesday', info: { Meals: 2 }}],
}

function markdays(databyDates) {
  const MarkedDate = {}
  for (const date in databyDates){
    const meals = databyDates[date][0]?.info?.Meals || 0;
    if (meals < 2) {
      MarkedDate[date] = {marked: true, selectedColor: '#edafab', selected: true}; 
    }
    else {
      MarkedDate[date] = {marked: true, selectedColor: '#c5e8b3', selected: true};
    }
  }
  return MarkedDate
}

export const HeatMapScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function HeatMapScreen(_props) {
    console.log('HeatMapScreen render'); 
    const {
      authenticationStore: { logout },
    } = useStores()

    return (
      <View style={containerStyle}>
        <Screen preset="scroll" contentContainerStyle={containerStyle} safeAreaEdges={["top"]}>
          <Agenda style={{ flex: 1 }}
          
          // Max amount of months allowed to scroll to the past
          items={data}

          pastScrollRange={2}
          // Max amount of months allowed to scroll to the future
          futureScrollRange={2}

          renderItem={(item, firstItemInDay) => {
            return <View>  
            <Card heading={item.name}
            content={item.info.Meals}
            footer="Consectetur nulla non aliquip velit." />
          </View>;
          }}

          markedDates={markdays(data)}

          onCalendarToggled={calendarOpened => {
            console.log(calendarOpened);
          }}
           />
           <View style={$buttonContainer}>
              <Button style={$button} tx="common.logOut" onPress={logout} />
          </View>
        </Screen>
      </View>
    );
  }

  

const containerStyle: ViewStyle = {
  flex: 1,
};

const $button: ViewStyle = {
  marginBottom: spacing.xs,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.md,
}