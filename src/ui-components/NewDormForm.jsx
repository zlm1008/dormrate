/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Dorm } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Card,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function NewDormForm(props) {
  const { ListUniversities, overrides, ...rest } = props;
  const submitButtonOnClick = useDataStoreCreateAction({
    model: Dorm,
    fields: {},
    schema: schema,
  });
  return (
    <View
      width="416px"
      height="469px"
      display=""
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NewDormForm")}
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
        children={ListUniversities}
        {...getOverrideProps(overrides, "UniversityName")}
      ></SelectField>
      <TextField
        width="355.42px"
        height="76.59px"
        label="Building Name"
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
        {...getOverrideProps(overrides, "BuildingName")}
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
        onClick={() => {
          submitButtonOnClick();
        }}
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
        children="New Dorm"
        {...getOverrideProps(overrides, "New Dorm")}
      ></Text>
    </View>
  );
}
