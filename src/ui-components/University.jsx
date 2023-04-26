/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { University } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Card, Divider, Text, View } from "@aws-amplify/ui-react";
export default function University1(props) {
  const { university, overrides, ...rest } = props;
  const buttonThreeSixSixOneTwoFiveEightSixOnClick = useDataStoreDeleteAction({
    model: University,
    id: university?.id,
    schema: schema,
  });
  return (
    <View
      width="806px"
      height="126px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "University")}
      {...rest}
    >
      <Card
        width="806px"
        height="126px"
        position="absolute"
        padding="15px 15px 15px 15px"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(99,99,99,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        variation="default"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="201.4px"
        height="32.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="10.16%"
        bottom="64.13%"
        left="61.51%"
        right="13.5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={university?.city}
        {...getOverrideProps(overrides, "City")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="88.4px"
        height="33.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="10.95%"
        bottom="62.54%"
        left="87.69%"
        right="1.34%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={university?.state}
        {...getOverrideProps(overrides, "State")}
      ></Text>
      <Divider
        width="806px"
        height="8px"
        position="absolute"
        top="43.65%"
        bottom="50%"
        left="0%"
        right="0%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,0.9)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="544px"
        height="44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9.13%"
        bottom="55.95%"
        left="1.92%"
        right="30.58%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={university?.UniversityName}
        {...getOverrideProps(overrides, "UniversityName")}
      ></Text>
      <Button
        width="127px"
        height="unset"
        position="absolute"
        top="57.94%"
        bottom="10.32%"
        left="2.36%"
        right="81.89%"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Add Dorm"
        {...getOverrideProps(overrides, "Button36612579")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="57.94%"
        bottom="10.32%"
        left="87.26%"
        right="2.44%"
        backgroundColor="rgba(149,4,4,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Delete"
        onClick={() => {
          buttonThreeSixSixOneTwoFiveEightSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button36612586")}
      ></Button>
    </View>
  );
}
