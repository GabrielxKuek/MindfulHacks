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
  '2023-10-01': [{name: 'item 2 - any js object', height: 80, day: "Tuesday", info: { Meals: 1, Sleep: 6, Special: "Only Went to buy food" }}],
  '2023-10-02': [{name: 'item 3 - any js object', height: 80, day: 'Tuesday', info: { Meals: 3, Sleep: 3, Special: "Stayed at home all day :(" }}],
  '2023-10-03': [{name: 'item 4 - any js object', height: 80, day: 'Tuesday', info: { Meals: 3, Sleep: 2, Special: "Stayed at home all day :(" }}],
  '2023-10-04': [{name: 'item 5 - any js object', height: 80, day: 'Tuesday', info: { Meals: 2, Sleep: 7, Special: "Had some me time! ✅ " }}],
  '2023-10-05': [{name: 'item 2 - any js object', height: 80, day: "Tuesday", info: { Meals: 1, Sleep: 8, Special: "Stayed at home all day :(" }}],
  '2023-10-06': [{name: 'item 3 - any js object', height: 80, day: 'Tuesday', info: { Meals: 2, Sleep: 7, Special: "Went for a run! ✅" }}],
  '2023-10-07': [{name: 'item 4 - any js object', height: 80, day: 'Tuesday', info: { Meals: 0, Sleep: 8, Special: "Played Soccer with Friends ✅" }}],
}

function markdays(databyDates) {
  const MarkedDate = {}
  for (const date in databyDates){
    const meals = databyDates[date][0]?.info?.Meals || 0;
    const sleep = databyDates[date][0]?.info?.Sleep || 0;
    if (meals > 1 && sleep > 6) {
        MarkedDate[date] = {marked: true, selectedColor: '#c5e8b3', selected: true}; 
    }
    else {
      MarkedDate[date] = {marked: true, selectedColor: '#edafab', selected: true};
    }
  }
  return MarkedDate
}

export const HeatMapScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function HeatMapScreen(_props) {
    console.log('HeatMapScreen render'); 


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
            <Card heading={`Slept ${item.info.Sleep} hours ${ item.info.Sleep > 6 ? "✅" : (item.info.Meals <= 3 ? "❌" : "")}`}
            content={`Ate ${item.info.Meals} / 3 Meals ${ item.info.Meals === 3 ? "✅" : (item.info.Meals === 0 ? "❌" : "")}`}
            footer={`${item.info.Special}`} />
          </View>;
          }}

          markedDates={markdays(data)}

          onCalendarToggled={calendarOpened => {
            console.log(calendarOpened);
          }}
           />
        </Screen>
      </View>
    );
  }

  

const containerStyle: ViewStyle = {
  flex: 1,
};

