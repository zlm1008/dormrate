/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { University } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, SelectFieldProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewReviewFormOverridesProps = {
    NewReviewForm?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    ClearButton?: PrimitiveOverrideProps<ButtonProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    ReviewText?: PrimitiveOverrideProps<TextAreaFieldProps>;
    BuildingName?: PrimitiveOverrideProps<SelectFieldProps>;
    UniversityName?: PrimitiveOverrideProps<SelectFieldProps>;
    "New Dorm"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewReviewFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    universities?: University;
} & {
    overrides?: NewReviewFormOverridesProps | undefined | null;
}>;
export default function NewReviewForm(props: NewReviewFormProps): React.ReactElement;
