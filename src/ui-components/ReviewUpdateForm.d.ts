/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Review as Review0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewUpdateFormInputValues = {
    UniversityName?: string;
    UniversityRating?: number;
    DormName?: string;
    DormRating?: number;
    RoomNumber?: string;
    RoomRating?: number;
    Review?: string;
};
export declare type ReviewUpdateFormValidationValues = {
    UniversityName?: ValidationFunction<string>;
    UniversityRating?: ValidationFunction<number>;
    DormName?: ValidationFunction<string>;
    DormRating?: ValidationFunction<number>;
    RoomNumber?: ValidationFunction<string>;
    RoomRating?: ValidationFunction<number>;
    Review?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewUpdateFormOverridesProps = {
    ReviewUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
    UniversityRating?: PrimitiveOverrideProps<TextFieldProps>;
    DormName?: PrimitiveOverrideProps<TextFieldProps>;
    DormRating?: PrimitiveOverrideProps<TextFieldProps>;
    RoomNumber?: PrimitiveOverrideProps<TextFieldProps>;
    RoomRating?: PrimitiveOverrideProps<TextFieldProps>;
    Review?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReviewUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    review?: Review0;
    onSubmit?: (fields: ReviewUpdateFormInputValues) => ReviewUpdateFormInputValues;
    onSuccess?: (fields: ReviewUpdateFormInputValues) => void;
    onError?: (fields: ReviewUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewUpdateFormInputValues) => ReviewUpdateFormInputValues;
    onValidate?: ReviewUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewUpdateForm(props: ReviewUpdateFormProps): React.ReactElement;
