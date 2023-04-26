/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewRoomFormOverridesProps = {
    NewRoomForm?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    UniversityName?: PrimitiveOverrideProps<SelectFieldProps>;
    BuildingName36472692?: PrimitiveOverrideProps<SelectFieldProps>;
    BuildingName36472685?: PrimitiveOverrideProps<TextFieldProps>;
    ClearButton?: PrimitiveOverrideProps<ButtonProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    "New Room"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewRoomFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewRoomFormOverridesProps | undefined | null;
}>;
export default function NewRoomForm(props: NewRoomFormProps): React.ReactElement;
