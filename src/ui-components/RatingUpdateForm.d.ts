/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Rating as Rating0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RatingUpdateFormInputValues = {
    UniversityName?: string;
    UniversityRating?: number;
    DormName?: string;
    DormRating?: number;
    RoomNumber?: string;
    RoomRating?: number;
    Rating?: string;
};
export declare type RatingUpdateFormValidationValues = {
    UniversityName?: ValidationFunction<string>;
    UniversityRating?: ValidationFunction<number>;
    DormName?: ValidationFunction<string>;
    DormRating?: ValidationFunction<number>;
    RoomNumber?: ValidationFunction<string>;
    RoomRating?: ValidationFunction<number>;
    Rating?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RatingUpdateFormOverridesProps = {
    RatingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
    UniversityRating?: PrimitiveOverrideProps<TextFieldProps>;
    DormName?: PrimitiveOverrideProps<TextFieldProps>;
    DormRating?: PrimitiveOverrideProps<TextFieldProps>;
    RoomNumber?: PrimitiveOverrideProps<TextFieldProps>;
    RoomRating?: PrimitiveOverrideProps<TextFieldProps>;
    Rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RatingUpdateFormProps = React.PropsWithChildren<{
    overrides?: RatingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rating?: Rating0;
    onSubmit?: (fields: RatingUpdateFormInputValues) => RatingUpdateFormInputValues;
    onSuccess?: (fields: RatingUpdateFormInputValues) => void;
    onError?: (fields: RatingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RatingUpdateFormInputValues) => RatingUpdateFormInputValues;
    onValidate?: RatingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RatingUpdateForm(props: RatingUpdateFormProps): React.ReactElement;
