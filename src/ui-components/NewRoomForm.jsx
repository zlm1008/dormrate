/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Card,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function NewRoomForm(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "NewRoomForm")}
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
      <SelectField
        width="355.42px"
        height="unset"
        label="University"
        position="absolute"
        top="21.11%"
        bottom="63.54%"
        left="7.21%"
        right="7.35%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "UniversityName")}
      ></SelectField>
      <SelectField
        width="355.42px"
        height="unset"
        label="Dorm / Building"
        position="absolute"
        top="41.36%"
        bottom="43.28%"
        left="7.21%"
        right="7.35%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "BuildingName36472692")}
      ></SelectField>
      <TextField
        width="355.42px"
        height="76.59px"
        label="Room Number"
        position="absolute"
        top="60.55%"
        bottom="23.11%"
        left="7.21%"
        right="7.35%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "BuildingName36472685")}
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
        {...getOverrideProps(overrides, "ClearButton")}
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
        {...getOverrideProps(overrides, "SubmitButton")}
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
        children="New Room"
        {...getOverrideProps(overrides, "New Room")}
      ></Text>
    </View>
  );
}
