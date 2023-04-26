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
import {
  Button,
  Card,
  Divider,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function Review(props) {
  const { university, review, overrides, ...rest } = props;
  const buttonOnClick = useDataStoreDeleteAction({
    model: University,
    id: university?.id,
    schema: schema,
  });
  return (
    <View
      width="814px"
      height="302px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Review")}
      {...rest}
    >
      <Card
        width="813px"
        height="302px"
        position="absolute"
        padding="15px 15px 15px 15px"
        top="0%"
        bottom="0%"
        left="0%"
        right="0.12%"
        border="1px SOLID rgba(99,99,99,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="15px"
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
        width="203.4px"
        height="27.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="10.86%"
        bottom="80.07%"
        left="59.31%"
        right="15.7%"
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
        width="90.4px"
        height="27.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="11.29%"
        bottom="79.64%"
        left="85.97%"
        right="2.92%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={university?.state}
        {...getOverrideProps(overrides, "State36572543")}
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
        width="247.4px"
        height="26.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.48%"
        bottom="72.78%"
        left="3.66%"
        right="65.95%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="<Dorm>"
        {...getOverrideProps(overrides, "State36612545")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="746px"
        height="163px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="38.74%"
        bottom="7.28%"
        left="3.93%"
        right="4.42%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={review?.review}
        {...getOverrideProps(overrides, "Review36572542")}
      ></Text>
      <Divider
        width="813px"
        height="20px"
        position="absolute"
        top="26.49%"
        bottom="66.89%"
        left="0.12%"
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
        width="550px"
        height="52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="3.81%"
        bottom="78.97%"
        left="3.38%"
        right="29.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={university?.UniversityName}
        {...getOverrideProps(overrides, "UniversityName")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="79.47%"
        bottom="7.28%"
        left="86.36%"
        right="3.44%"
        backgroundColor="rgba(191,64,64,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Delete"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Rating
        width="212px"
        height="36px"
        position="absolute"
        top="79.47%"
        bottom="8.61%"
        left="3.93%"
        right="70.02%"
        size="large"
        {...getOverrideProps(overrides, "Rating")}
      ></Rating>
    </View>
  );
}
