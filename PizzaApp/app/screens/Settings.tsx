import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing, colors } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"
import { Calendar, CalendarList, Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { string } from "mobx-state-tree/dist/internal"
import { AutoImage, Button, Card, Icon } from "../components"
import { useStores } from "../models"
import * as Application from "expo-application"

export const SettingsScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function SettingsScreen(_props) {

    const {
        authenticationStore: { logout },
      } = useStores()


    return (
        <View style={$container}>
        <View style={containerStyle}>
          <Screen preset="scroll" contentContainerStyle={containerStyle} safeAreaEdges={["top"]}>
          <View style={$buttonContainer}>
              <Button style={$button} tx="common.logOut" onPress={logout} />
          </View>
          </Screen>
        </View>
      </View>

    )
  }

const containerStyle: ViewStyle = {
    flex: 1,
  };

  const $button: ViewStyle = {
    marginBottom: spacing.xs,
  }
  
  const $buttonContainer: ViewStyle = {
    marginBottom: spacing.md,
    marginTop: 300,
  }

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  }
  
  const $topContainer: ViewStyle = {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: "57%",
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  }
  
  const $bottomContainer: ViewStyle = {
    flexShrink: 1,
    flexGrow: 0,
    flexBasis: "43%",
    backgroundColor: colors.palette.neutral100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-around",
  }
  const $welcomeLogo: ImageStyle = {
    height: 500,
    width: "100%",
    marginBottom: spacing.xxl,
  }

  
  const $welcomeHeading: TextStyle = {
    marginBottom: spacing.md,
    justifyContent: "center",
    alignItems: 'center',
  }
  