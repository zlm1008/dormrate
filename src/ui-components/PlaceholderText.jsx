/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PlaceholderText(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="184px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PlaceholderText")}
      {...rest}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="16px"
        fontWeight="400"
        color="rgba(102,102,102,1)"
        lineHeight="19.503999710083008px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="19.57%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Select Occupation"
        {...getOverrideProps(overrides, "Select Occupation")}
      ></Text>
    </View>
  );
}
