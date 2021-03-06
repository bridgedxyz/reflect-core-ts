import { BackgroundPaintLike } from "../background";
import { BoxShadowManifest } from "../box-shadow";
import { Container } from "../container";
import { EdgeInsets } from "../ui";
import { Widget, WidgetKey } from "../widget";

export class Stack extends Container {
    readonly _type: "Stack" = "Stack";

    width: number;
    height: number;
    boxShadow?: BoxShadowManifest;

    constructor(p: {
        key: WidgetKey;
        children: Widget[];
        width: number;
        height: number;
        boxShadow?: BoxShadowManifest;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        background?: BackgroundPaintLike[];
    }) {
        super(p);

        this.children = p.children;
        this.width = p.width;
        this.height = p.height;
        this.boxShadow = p.boxShadow;
        this.margin = p.margin;
        this.padding = p.padding;
    }
}
