/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { University } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UniversityUpdateFormInputValues = {
    UniversityName?: string;
    city?: string;
    state?: string;
};
export declare type UniversityUpdateFormValidationValues = {
    UniversityName?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniversityUpdateFormOverridesProps = {
    UniversityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UniversityUpdateFormProps = React.PropsWithChildren<{
    overrides?: UniversityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    university?: University;
    onSubmit?: (fields: UniversityUpdateFormInputValues) => UniversityUpdateFormInputValues;
    onSuccess?: (fields: UniversityUpdateFormInputValues) => void;
    onError?: (fields: UniversityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UniversityUpdateFormInputValues) => UniversityUpdateFormInputValues;
    onValidate?: UniversityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UniversityUpdateForm(props: UniversityUpdateFormProps): React.ReactElement;
