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
export declare type RatingCreateFormInputValues = {
    UniversityName?: string;
    UniversityRating?: number;
    DormName?: string;
    DormRating?: number;
    RoomNumber?: string;
    RoomRating?: number;
    Rating?: string;
};
export declare type RatingCreateFormValidationValues = {
    UniversityName?: ValidationFunction<string>;
    UniversityRating?: ValidationFunction<number>;
    DormName?: ValidationFunction<string>;
    DormRating?: ValidationFunction<number>;
    RoomNumber?: ValidationFunction<string>;
    RoomRating?: ValidationFunction<number>;
    Rating?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RatingCreateFormOverridesProps = {
    RatingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
    UniversityRating?: PrimitiveOverrideProps<TextFieldProps>;
    DormName?: PrimitiveOverrideProps<TextFieldProps>;
    DormRating?: PrimitiveOverrideProps<TextFieldProps>;
    RoomNumber?: PrimitiveOverrideProps<TextFieldProps>;
    RoomRating?: PrimitiveOverrideProps<TextFieldProps>;
    Rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RatingCreateFormProps = React.PropsWithChildren<{
    overrides?: RatingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RatingCreateFormInputValues) => RatingCreateFormInputValues;
    onSuccess?: (fields: RatingCreateFormInputValues) => void;
    onError?: (fields: RatingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RatingCreateFormInputValues) => RatingCreateFormInputValues;
    onValidate?: RatingCreateFormValidationValues;
} & React.CSSProperties>;
export default function RatingCreateForm(props: RatingCreateFormProps): React.ReactElement;
