/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReviewProps } from "./Review";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewsOverridesProps = {
    Reviews?: PrimitiveOverrideProps<CollectionProps>;
    Review?: ReviewProps;
} & EscapeHatchProps;
export declare type ReviewsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ReviewProps;
} & {
    overrides?: ReviewsOverridesProps | undefined | null;
}>;
export default function Reviews(props: ReviewsProps): React.ReactElement;
