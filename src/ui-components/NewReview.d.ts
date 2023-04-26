/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewReviewInputValues = {
    UniversityName?: string;
    UniversityRating?: string;
    DormName?: string;
    DormRating?: string;
    RoomNumber?: string;
    RoomRating?: string;
    Rating?: string;
    city?: string;
    state?: string;
};
export declare type NewReviewValidationValues = {
    UniversityName?: ValidationFunction<string>;
    UniversityRating?: ValidationFunction<string>;
    DormName?: ValidationFunction<string>;
    DormRating?: ValidationFunction<string>;
    RoomNumber?: ValidationFunction<string>;
    RoomRating?: ValidationFunction<string>;
    Rating?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
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
    Rating?: PrimitiveOverrideProps<TextAreaFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
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
