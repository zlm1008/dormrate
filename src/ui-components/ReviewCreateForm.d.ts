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
export declare type ReviewCreateFormInputValues = {
    UniversityName?: string;
    UniversityRating?: number;
    DormName?: string;
    DormRating?: number;
    RoomNumber?: string;
    RoomRating?: number;
    Review?: string;
};
export declare type ReviewCreateFormValidationValues = {
    UniversityName?: ValidationFunction<string>;
    UniversityRating?: ValidationFunction<number>;
    DormName?: ValidationFunction<string>;
    DormRating?: ValidationFunction<number>;
    RoomNumber?: ValidationFunction<string>;
    RoomRating?: ValidationFunction<number>;
    Review?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCreateFormOverridesProps = {
    ReviewCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
    UniversityRating?: PrimitiveOverrideProps<TextFieldProps>;
    DormName?: PrimitiveOverrideProps<TextFieldProps>;
    DormRating?: PrimitiveOverrideProps<TextFieldProps>;
    RoomNumber?: PrimitiveOverrideProps<TextFieldProps>;
    RoomRating?: PrimitiveOverrideProps<TextFieldProps>;
    Review?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewCreateFormProps = React.PropsWithChildren<{
    overrides?: ReviewCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReviewCreateFormInputValues) => ReviewCreateFormInputValues;
    onSuccess?: (fields: ReviewCreateFormInputValues) => void;
    onError?: (fields: ReviewCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewCreateFormInputValues) => ReviewCreateFormInputValues;
    onValidate?: ReviewCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewCreateForm(props: ReviewCreateFormProps): React.ReactElement;
