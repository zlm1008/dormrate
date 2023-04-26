/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewUniversityFormOverridesProps = {
    NewUniversityForm?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    TextField36462689?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36462703?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36462696?: PrimitiveOverrideProps<TextFieldProps>;
    Button36462712?: PrimitiveOverrideProps<ButtonProps>;
    Button36462720?: PrimitiveOverrideProps<ButtonProps>;
    "New University"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewUniversityFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewUniversityFormOverridesProps | undefined | null;
}>;
export default function NewUniversityForm(props: NewUniversityFormProps): React.ReactElement;
