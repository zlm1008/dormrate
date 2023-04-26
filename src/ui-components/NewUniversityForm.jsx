/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { University } from "../models";
import { schema } from "../models/schema";
import { Button, Card, Text, TextField, View } from "@aws-amplify/ui-react";
export default function NewUniversityForm(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeSixFourSixTwoSixEightNineValue,
    setTextFieldThreeSixFourSixTwoSixEightNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFourSixTwoSevenZeroThreeValue,
    setTextFieldThreeSixFourSixTwoSevenZeroThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFourSixTwoSixNineSixValue,
    setTextFieldThreeSixFourSixTwoSixNineSixValue,
  ] = useStateMutationAction("");
  const buttonThreeSixFourSixTwoSevenOneTwoOnClick = useNavigateAction({
    type: "reload",
  });
  const buttonThreeSixFourSixTwoSevenTwoZeroOnClick = useDataStoreCreateAction({
    model: University,
    fields: {
      UniversityName: textFieldThreeSixFourSixTwoSixEightNineValue,
      city: textFieldThreeSixFourSixTwoSevenZeroThreeValue,
      state: textFieldThreeSixFourSixTwoSixNineSixValue,
    },
    schema: schema,
  });
  return (
    <View
      width="416px"
      height="469px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NewUniversityForm")}
      {...rest}
    >
      <Card
        width="400.85px"
        height="469px"
        position="absolute"
        padding="15px 15px 15px 15px"
        top="0%"
        bottom="0%"
        left="1.7%"
        right="1.94%"
        border="1px SOLID rgba(99,99,99,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="15px"
        variation="default"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <TextField
        width="355.42px"
        height="76.59px"
        label="University Name"
        position="absolute"
        top="20.58%"
        bottom="63.09%"
        left="7.28%"
        right="7.28%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeSixFourSixTwoSixEightNineValue}
        onChange={(event) => {
          setTextFieldThreeSixFourSixTwoSixEightNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField36462689")}
      ></TextField>
      <TextField
        width="355.42px"
        height="76.59px"
        label="City"
        position="absolute"
        top="40.94%"
        bottom="42.73%"
        left="7.28%"
        right="7.28%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeSixFourSixTwoSevenZeroThreeValue}
        onChange={(event) => {
          setTextFieldThreeSixFourSixTwoSevenZeroThreeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField36462703")}
      ></TextField>
      <TextField
        width="355.42px"
        height="76.59px"
        label="State"
        position="absolute"
        top="60.85%"
        bottom="22.82%"
        left="7.28%"
        right="7.28%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeSixFourSixTwoSixNineSixValue}
        onChange={(event) => {
          setTextFieldThreeSixFourSixTwoSixNineSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField36462696")}
      ></TextField>
      <Button
        width="137.3px"
        height="unset"
        position="absolute"
        top="84.78%"
        bottom="6.26%"
        left="7.04%"
        right="59.95%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Clear"
        onClick={() => {
          buttonThreeSixFourSixTwoSevenOneTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button36462712")}
      ></Button>
      <Button
        width="137.3px"
        height="unset"
        position="absolute"
        top="84.78%"
        bottom="6.26%"
        left="59.95%"
        right="7.04%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        onClick={() => {
          buttonThreeSixFourSixTwoSevenTwoZeroOnClick();
        }}
        {...getOverrideProps(overrides, "Button36462720")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="300"
        color="rgba(0,0,0,0.9)"
        lineHeight="60px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="418px"
        height="64.95px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5.54%"
        bottom="80.61%"
        left="-0.24%"
        right="-0.24%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="New University"
        {...getOverrideProps(overrides, "New University")}
      ></Text>
    </View>
  );
}
