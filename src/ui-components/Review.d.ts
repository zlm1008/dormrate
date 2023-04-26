/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { University, Review } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, DividerProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewOverridesProps = {
    Review?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    City?: PrimitiveOverrideProps<TextProps>;
    State36572543?: PrimitiveOverrideProps<TextProps>;
    State36612545?: PrimitiveOverrideProps<TextProps>;
    Review36572542?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    UniversityName?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
} & EscapeHatchProps;
export declare type ReviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    university?: University;
    review?: Review;
} & {
    overrides?: ReviewOverridesProps | undefined | null;
}>;
export default function Review(props: ReviewProps): React.ReactElement;
