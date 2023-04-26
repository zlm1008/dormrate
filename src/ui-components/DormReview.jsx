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
  Rating,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function DormReview(props) {
  const { ListUniversities, overrides, ...rest } = props;
  const submitButtonOnClick = useDataStoreCreateAction({
    model: Dorm,
    fields: {},
    schema: schema,
  });
  return (
    <View
      width="416px"
      height="644px"
      display=""
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DormReview")}
      {...rest}
    >
      <Card
        width="400.85px"
        height="644px"
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
      <Button
        width="150px"
        height="unset"
        position="absolute"
        border="1px SOLID rgba(13,26,38,1)"
        top="90.22%"
        bottom="3.57%"
        left="8.41%"
        right="55.53%"
        backgroundColor="rgba(191,64,64,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Clear"
        {...getOverrideProps(overrides, "ClearButton")}
      ></Button>
      <Button
        width="150px"
        height="unset"
        position="absolute"
        border="1px SOLID rgba(13,26,38,1)"
        top="90.22%"
        bottom="3.57%"
        left="56.01%"
        right="7.93%"
        backgroundColor="rgba(119,202,133,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Submit"
        onClick={() => {
          submitButtonOnClick();
        }}
        {...getOverrideProps(overrides, "SubmitButton")}
      ></Button>
      <TextAreaField
        width="355px"
        height="234px"
        position="absolute"
        top="42.24%"
        bottom="21.43%"
        left="7.45%"
        right="7.21%"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Review")}
      ></TextAreaField>
      <TextField
        width="355.42px"
        height="105.17px"
        label="Building Name"
        position="absolute"
        top="26.55%"
        bottom="57.12%"
        left="7.45%"
        right="7.11%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "BuildingName")}
      ></TextField>
      <TextField
        width="355.42px"
        height="unset"
        label="University"
        position="absolute"
        top="15.37%"
        bottom="73.45%"
        left="7.45%"
        right="7.11%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "UniversityName")}
      ></TextField>
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
        height="88.44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2.48%"
        bottom="83.78%"
        left="-0.48%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dorm Review"
        {...getOverrideProps(overrides, "New Dorm")}
      ></Text>
      <Rating
        width="212px"
        height="36px"
        position="absolute"
        top="81.52%"
        bottom="12.89%"
        left="24.28%"
        right="24.76%"
        size="large"
        {...getOverrideProps(overrides, "Rating36632745")}
      ></Rating>
      <Rating
        width="212px"
        height="36px"
        position="absolute"
        top="81.52%"
        bottom="12.89%"
        left="24.28%"
        right="24.76%"
        size="large"
        {...getOverrideProps(overrides, "Rating36632780")}
      ></Rating>
    </View>
  );
}
