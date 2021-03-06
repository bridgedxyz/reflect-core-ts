import { ButtonBaseManifest } from "../button.base/button.base.manifest";
import { ButtonIconManifest } from "../button.icon/button.icon.manifest";
import { ButtonTextManifest } from "../button.text/button.text.manifest";
import { EdgeInsetsManifest } from "../ui";

export enum ButtonVariant {
    flatText = "FlatText",
    flatTextIcon = "FlatTextIcon",
    raisedText = "RaisedText",
    raisedTextIcon = "RaisedTextIcon",
    outlinedText = "OutlinedText",
    outlinedTextIcon = "OutlinedTextIcon",
    icon = "Icon",
    custom = "Custom"
}


/**
 * relfect's button manifest
 * [Flutter#Button](https://api.flutter.dev/flutter/material/OutlineButton-class.html)
 */
export interface ButtonManifest<B = ButtonBaseManifest, T = ButtonTextManifest, I = ButtonIconManifest> {
    base: B
    text?: T | null
    icon?: I | null
    variant: ButtonVariant
    minWidth?: number
    height?: number
    name?: string
    padding?: EdgeInsetsManifest
}