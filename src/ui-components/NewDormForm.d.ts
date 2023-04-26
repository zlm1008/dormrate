/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { University } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewDormFormOverridesProps = {
    NewDormForm?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    UniversityName?: PrimitiveOverrideProps<SelectFieldProps>;
    BuildingName?: PrimitiveOverrideProps<TextFieldProps>;
    ClearButton?: PrimitiveOverrideProps<ButtonProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    "New Dorm"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewDormFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    ListUniversities?: University;
} & {
    overrides?: NewDormFormOverridesProps | undefined | null;
}>;
export default function NewDormForm(props: NewDormFormProps): React.ReactElement;
