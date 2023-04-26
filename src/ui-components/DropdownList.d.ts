/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HoverStateProps } from "./HoverState";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DropdownListOverridesProps = {
    DropdownList?: PrimitiveOverrideProps<FlexProps>;
    "Item 1"?: HoverStateProps;
} & EscapeHatchProps;
export declare type DropdownListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DropdownListOverridesProps | undefined | null;
}>;
export default function DropdownList(props: DropdownListProps): React.ReactElement;
