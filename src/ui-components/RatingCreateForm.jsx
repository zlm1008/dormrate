/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Rating as Rating0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RatingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    UniversityName: "",
    UniversityRating: "",
    DormName: "",
    DormRating: "",
    RoomNumber: "",
    RoomRating: "",
    Rating: "",
  };
  const [UniversityName, setUniversityName] = React.useState(
    initialValues.UniversityName
  );
  const [UniversityRating, setUniversityRating] = React.useState(
    initialValues.UniversityRating
  );
  const [DormName, setDormName] = React.useState(initialValues.DormName);
  const [DormRating, setDormRating] = React.useState(initialValues.DormRating);
  const [RoomNumber, setRoomNumber] = React.useState(initialValues.RoomNumber);
  const [RoomRating, setRoomRating] = React.useState(initialValues.RoomRating);
  const [rating, setRating] = React.useState(initialValues.Rating);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUniversityName(initialValues.UniversityName);
    setUniversityRating(initialValues.UniversityRating);
    setDormName(initialValues.DormName);
    setDormRating(initialValues.DormRating);
    setRoomNumber(initialValues.RoomNumber);
    setRoomRating(initialValues.RoomRating);
    setRating(initialValues.Rating);
    setErrors({});
  };
  const validations = {
    UniversityName: [{ type: "Required" }],
    UniversityRating: [{ type: "Required" }],
    DormName: [{ type: "Required" }],
    DormRating: [{ type: "Required" }],
    RoomNumber: [{ type: "Required" }],
    RoomRating: [{ type: "Required" }],
    Rating: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          UniversityName,
          UniversityRating,
          DormName,
          DormRating,
          RoomNumber,
          RoomRating,
          Rating: rating,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Rating0(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RatingCreateForm")}
      {...rest}
    >
      <TextField
        label="University name"
        isRequired={true}
        isReadOnly={false}
        value={UniversityName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UniversityName: value,
              UniversityRating,
              DormName,
              DormRating,
              RoomNumber,
              RoomRating,
              Rating: rating,
            };
            const result = onChange(modelFields);
            value = result?.UniversityName ?? value;
          }
          if (errors.UniversityName?.hasError) {
            runValidationTasks("UniversityName", value);
          }
          setUniversityName(value);
        }}
        onBlur={() => runValidationTasks("UniversityName", UniversityName)}
        errorMessage={errors.UniversityName?.errorMessage}
        hasError={errors.UniversityName?.hasError}
        {...getOverrideProps(overrides, "UniversityName")}
      ></TextField>
      <TextField
        label="University rating"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={UniversityRating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              UniversityName,
              UniversityRating: value,
              DormName,
              DormRating,
              RoomNumber,
              RoomRating,
              Rating: rating,
            };
            const result = onChange(modelFields);
            value = result?.UniversityRating ?? value;
          }
          if (errors.UniversityRating?.hasError) {
            runValidationTasks("UniversityRating", value);
          }
          setUniversityRating(value);
        }}
        onBlur={() => runValidationTasks("UniversityRating", UniversityRating)}
        errorMessage={errors.UniversityRating?.errorMessage}
        hasError={errors.UniversityRating?.hasError}
        {...getOverrideProps(overrides, "UniversityRating")}
      ></TextField>
      <TextField
        label="Dorm name"
        isRequired={true}
        isReadOnly={false}
        value={DormName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UniversityName,
              UniversityRating,
              DormName: value,
              DormRating,
              RoomNumber,
              RoomRating,
              Rating: rating,
            };
            const result = onChange(modelFields);
            value = result?.DormName ?? value;
          }
          if (errors.DormName?.hasError) {
            runValidationTasks("DormName", value);
          }
          setDormName(value);
        }}
        onBlur={() => runValidationTasks("DormName", DormName)}
        errorMessage={errors.DormName?.errorMessage}
        hasError={errors.DormName?.hasError}
        {...getOverrideProps(overrides, "DormName")}
      ></TextField>
      <TextField
        label="Dorm rating"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={DormRating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              UniversityName,
              UniversityRating,
              DormName,
              DormRating: value,
              RoomNumber,
              RoomRating,
              Rating: rating,
            };
            const result = onChange(modelFields);
            value = result?.DormRating ?? value;
          }
          if (errors.DormRating?.hasError) {
            runValidationTasks("DormRating", value);
          }
          setDormRating(value);
        }}
        onBlur={() => runValidationTasks("DormRating", DormRating)}
        errorMessage={errors.DormRating?.errorMessage}
        hasError={errors.DormRating?.hasError}
        {...getOverrideProps(overrides, "DormRating")}
      ></TextField>
      <TextField
        label="Room number"
        isRequired={true}
        isReadOnly={false}
        value={RoomNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UniversityName,
              UniversityRating,
              DormName,
              DormRating,
              RoomNumber: value,
              RoomRating,
              Rating: rating,
            };
            const result = onChange(modelFields);
            value = result?.RoomNumber ?? value;
          }
          if (errors.RoomNumber?.hasError) {
            runValidationTasks("RoomNumber", value);
          }
          setRoomNumber(value);
        }}
        onBlur={() => runValidationTasks("RoomNumber", RoomNumber)}
        errorMessage={errors.RoomNumber?.errorMessage}
        hasError={errors.RoomNumber?.hasError}
        {...getOverrideProps(overrides, "RoomNumber")}
      ></TextField>
      <TextField
        label="Room rating"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={RoomRating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              UniversityName,
              UniversityRating,
              DormName,
              DormRating,
              RoomNumber,
              RoomRating: value,
              Rating: rating,
            };
            const result = onChange(modelFields);
            value = result?.RoomRating ?? value;
          }
          if (errors.RoomRating?.hasError) {
            runValidationTasks("RoomRating", value);
          }
          setRoomRating(value);
        }}
        onBlur={() => runValidationTasks("RoomRating", RoomRating)}
        errorMessage={errors.RoomRating?.errorMessage}
        hasError={errors.RoomRating?.hasError}
        {...getOverrideProps(overrides, "RoomRating")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        value={rating}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UniversityName,
              UniversityRating,
              DormName,
              DormRating,
              RoomNumber,
              RoomRating,
              Rating: value,
            };
            const result = onChange(modelFields);
            value = result?.Rating ?? value;
          }
          if (errors.Rating?.hasError) {
            runValidationTasks("Rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("Rating", rating)}
        errorMessage={errors.Rating?.errorMessage}
        hasError={errors.Rating?.hasError}
        {...getOverrideProps(overrides, "Rating")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
