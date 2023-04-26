/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { University } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, RatingProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DormReviewOverridesProps = {
    DormReview?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    ClearButton?: PrimitiveOverrideProps<ButtonProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    Review?: PrimitiveOverrideProps<TextAreaFieldProps>;
    BuildingName?: PrimitiveOverrideProps<TextFieldProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
    "New Dorm"?: PrimitiveOverrideProps<TextProps>;
    Rating36632745?: PrimitiveOverrideProps<RatingProps>;
    Rating36632780?: PrimitiveOverrideProps<RatingProps>;
} & EscapeHatchProps;
export declare type DormReviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    ListUniversities?: University;
} & {
    overrides?: DormReviewOverridesProps | undefined | null;
}>;
export default function DormReview(props: DormReviewProps): React.ReactElement;
