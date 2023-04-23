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
export declare type NewReviewInputValues = {
    UniversityName?: string;
    UniversityRating?: number;
    DormName?: string;
    DormRating?: number;
    RoomNumber?: string;
    RoomRating?: number;
    Review?: string;
};
export declare type NewReviewValidationValues = {
    UniversityName?: ValidationFunction<string>;
    UniversityRating?: ValidationFunction<number>;
    DormName?: ValidationFunction<string>;
    DormRating?: ValidationFunction<number>;
    RoomNumber?: ValidationFunction<string>;
    RoomRating?: ValidationFunction<number>;
    Review?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewReviewOverridesProps = {
    NewReviewGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    UniversityName?: PrimitiveOverrideProps<TextFieldProps>;
    UniversityRating?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    DormName?: PrimitiveOverrideProps<TextFieldProps>;
    DormRating?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    RoomNumber?: PrimitiveOverrideProps<TextFieldProps>;
    RoomRating?: PrimitiveOverrideProps<TextFieldProps>;
    Review?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewReviewProps = React.PropsWithChildren<{
    overrides?: NewReviewOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewReviewInputValues) => NewReviewInputValues;
    onSuccess?: (fields: NewReviewInputValues) => void;
    onError?: (fields: NewReviewInputValues, errorMessage: string) => void;
    onChange?: (fields: NewReviewInputValues) => NewReviewInputValues;
    onValidate?: NewReviewValidationValues;
} & React.CSSProperties>;
export default function NewReview(props: NewReviewProps): React.ReactElement;
