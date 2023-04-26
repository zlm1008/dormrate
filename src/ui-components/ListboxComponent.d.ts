/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListboxComponentOverridesProps = {
    ListboxComponent?: PrimitiveOverrideProps<ViewProps>;
    "ListBox title"?: PrimitiveOverrideProps<ViewProps>;
    "ListBox Main"?: PrimitiveOverrideProps<ViewProps>;
    ListBoxBG?: PrimitiveOverrideProps<ViewProps>;
    Chevron?: PrimitiveOverrideProps<IconProps>;
    "Placeholder Text"?: PrimitiveOverrideProps<ViewProps>;
    "Clip List"?: PrimitiveOverrideProps<ViewProps>;
    "Dropdown List"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ListboxComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Default" | "Variant2" | "Variant3" | "Variant4" | "Variant5" | "Variant6";
} & {
    overrides?: ListboxComponentOverridesProps | undefined | null;
}>;
export default function ListboxComponent(props: ListboxComponentProps): React.ReactElement;
