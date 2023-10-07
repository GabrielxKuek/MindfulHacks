import { observer } from "mobx-react-lite"
import React, { FC } from "react"
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
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"

const welcomeLogo = require("../../assets/images/Rewards.jpg")
const welcomeFace = require("../../assets/images/welcome-face.png")


export const GenerateScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function GenerateScreen({ route, navigation }) {
    {
        // @demo remove-block-start
        //const { route, navigation } = _props
        const { breakfast, lunch, dinner, sleep } = route.params;
        const {
          authenticationStore: { logout },
        } = useStores()

        function goNext() {
          navigation.navigate("HeatMap")
        }
      
        useHeader(
          {
            rightTx: "common.logOut",
            onRightPress: logout,
          },
          [logout],
        )
        // @demo remove-block-end
      
        const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
      
        return (
          <View style={$container}>
            <View style={$topContainer}>
              <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
              <Text
                testID="welcome-heading"
                style={$welcomeHeading}
                text="It's your 5th day submitting! Good Job!"
                preset="heading"
              />
            </View>
      
            <View /*style={[$bottomContainer, $bottomContainerInsets]}*/>
              <Button
                testID="next-screen-button"
                preset="reversed"
                tx="welcomeScreen.letsGo"
                onPress={goNext}
              />
              {/* @demo remove-block-end */}
            </View>
          </View>
        )
      }
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
  