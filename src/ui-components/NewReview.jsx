/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { University } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NewReview(props) {
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
  const { tokens } = useTheme();
  const initialValues = {
    UniversityName: "",
    UniversityRating: "",
    DormName: "",
    DormRating: "",
    RoomNumber: "",
    RoomRating: "",
    Rating: "",
    city: "",
    state: "",
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
  const [Rating, setRating] = React.useState(initialValues.Rating);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUniversityName(initialValues.UniversityName);
    setUniversityRating(initialValues.UniversityRating);
    setDormName(initialValues.DormName);
    setDormRating(initialValues.DormRating);
    setRoomNumber(initialValues.RoomNumber);
    setRoomRating(initialValues.RoomRating);
    setRating(initialValues.Rating);
    setCity(initialValues.city);
    setState(initialValues.state);
    setErrors({});
  };
  const validations = {
    UniversityName: [{ type: "Required" }],
    UniversityRating: [],
    DormName: [],
    DormRating: [],
    RoomNumber: [],
    RoomRating: [],
    Rating: [],
    city: [{ type: "Required" }],
    state: [{ type: "Required" }],
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
      rowGap={tokens.space.xs.value}
      columnGap="20px"
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
          Rating,
          city,
          state,
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
          const modelFieldsToSave = {
            UniversityName: modelFields.UniversityName,
            city: modelFields.city,
            state: modelFields.state,
          };
          await DataStore.save(new University(modelFieldsToSave));
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
      {...getOverrideProps(overrides, "NewReview")}
      {...rest}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
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
                Rating,
                city,
                state,
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
          label="Label"
          value={UniversityRating}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                UniversityName,
                UniversityRating: value,
                DormName,
                DormRating,
                RoomNumber,
                RoomRating,
                Rating,
                city,
                state,
              };
              const result = onChange(modelFields);
              value = result?.UniversityRating ?? value;
            }
            if (errors.UniversityRating?.hasError) {
              runValidationTasks("UniversityRating", value);
            }
            setUniversityRating(value);
          }}
          onBlur={() =>
            runValidationTasks("UniversityRating", UniversityRating)
          }
          errorMessage={errors.UniversityRating?.errorMessage}
          hasError={errors.UniversityRating?.hasError}
          {...getOverrideProps(overrides, "UniversityRating")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
        <TextField
          label="Label"
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
                Rating,
                city,
                state,
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
          label="Label"
          value={DormRating}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                UniversityName,
                UniversityRating,
                DormName,
                DormRating: value,
                RoomNumber,
                RoomRating,
                Rating,
                city,
                state,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <TextField
          label="Label"
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
                Rating,
                city,
                state,
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
          label="Label"
          value={RoomRating}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                UniversityName,
                UniversityRating,
                DormName,
                DormRating,
                RoomNumber,
                RoomRating: value,
                Rating,
                city,
                state,
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
      </Grid>
      <TextAreaField
        label="Label"
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
              city,
              state,
            };
            const result = onChange(modelFields);
            value = result?.Rating ?? value;
          }
          if (errors.Rating?.hasError) {
            runValidationTasks("Rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("Rating", Rating)}
        errorMessage={errors.Rating?.errorMessage}
        hasError={errors.Rating?.hasError}
        {...getOverrideProps(overrides, "Rating")}
      ></TextAreaField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
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
              Rating,
              city: value,
              state,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        value={state}
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
              Rating,
              city,
              state: value,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
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
          gap="20px"
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
