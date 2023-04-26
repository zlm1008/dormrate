/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NewUniversityFormProps } from "./NewUniversityForm";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormsOverridesProps = {
    Forms?: PrimitiveOverrideProps<CollectionProps>;
    NewUniversityForm?: NewUniversityFormProps;
} & EscapeHatchProps;
export declare type FormsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NewUniversityFormProps;
} & {
    overrides?: FormsOverridesProps | undefined | null;
}>;
export default function Forms(props: FormsProps): React.ReactElement;
