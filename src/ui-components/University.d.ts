/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { University } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, DividerProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniversityOverridesProps = {
    University?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    City?: PrimitiveOverrideProps<TextProps>;
    State?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    UniversityName?: PrimitiveOverrideProps<TextProps>;
    Button36612579?: PrimitiveOverrideProps<ButtonProps>;
    Button36612586?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UniversityProps = React.PropsWithChildren<Partial<ViewProps> & {
    university?: University;
} & {
    overrides?: UniversityOverridesProps | undefined | null;
}>;
export default function University(props: UniversityProps): React.ReactElement;
