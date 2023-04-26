/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UniversityProps } from "./University";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniversityListOverridesProps = {
    UniversityList?: PrimitiveOverrideProps<CollectionProps>;
    University?: UniversityProps;
} & EscapeHatchProps;
export declare type UniversityListProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => UniversityProps;
} & {
    overrides?: UniversityListOverridesProps | undefined | null;
}>;
export default function UniversityList(props: UniversityListProps): React.ReactElement;
