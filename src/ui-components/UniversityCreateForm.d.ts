/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UniversityCreateFormInputValues = {
    UniversityName?: string;
    city?: string;
    state?: string;
};
export declare type UniversityCreateFormValidationValues = {
    UniversityName?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniversityCreateFormOverridesProps = {
    UniversityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UniversityCreateFormProps = React.PropsWithChildren<{
    overrides?: UniversityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UniversityCreateFormInputValues) => UniversityCreateFormInputValues;
    onSuccess?: (fields: UniversityCreateFormInputValues) => void;
    onError?: (fields: UniversityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UniversityCreateFormInputValues) => UniversityCreateFormInputValues;
    onValidate?: UniversityCreateFormValidationValues;
} & React.CSSProperties>;
export default function UniversityCreateForm(props: UniversityCreateFormProps): React.ReactElement;
