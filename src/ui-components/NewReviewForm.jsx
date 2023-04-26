/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Review } from "../models";
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
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function NewReviewForm(props) {
  const { universities, overrides, ...rest } = props;
  const submitButtonOnClick = useDataStoreCreateAction({
    model: Review,
    fields: {},
    schema: schema,
  });
  return (
    <View
      width="416px"
      height="601px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NewReviewForm")}
      {...rest}
    >
      <Card
        width="416px"
        height="595.85px"
        position="absolute"
        padding="15px 15px 15px 15px"
        top="0%"
        bottom="0.86%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(99,99,99,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="15px"
        variation="default"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <Button
        width="137.3px"
        height="unset"
        position="absolute"
        top="87.02%"
        bottom="5.99%"
        left="9.13%"
        right="57.86%"
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
        top="87.02%"
        bottom="5.99%"
        left="57.69%"
        right="9.3%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        onClick={() => {
          submitButtonOnClick();
        }}
        {...getOverrideProps(overrides, "SubmitButton")}
      ></Button>
      <TextAreaField
        width="356px"
        height="226.67px"
        label="Review"
        position="absolute"
        top="46.42%"
        bottom="15.86%"
        left="7.21%"
        right="7.21%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "ReviewText")}
      ></TextAreaField>
      <SelectField
        width="355.42px"
        height="98.15px"
        label="Building Name"
        position="absolute"
        top="30.12%"
        bottom="53.55%"
        left="7.21%"
        right="7.35%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "BuildingName")}
      ></SelectField>
      <SelectField
        width="355.42px"
        height="98.15px"
        label="University Name"
        position="absolute"
        top="15.97%"
        bottom="67.7%"
        left="7.21%"
        right="7.35%"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        resource={universities?.UniversityName}
        {...getOverrideProps(overrides, "UniversityName")}
      ></SelectField>
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
        height="82.67px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5.59%"
        bottom="80.65%"
        left="-0.24%"
        right="-0.24%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dorm Review"
        {...getOverrideProps(overrides, "New Dorm")}
      ></Text>
    </View>
  );
}
