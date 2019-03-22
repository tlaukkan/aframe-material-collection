import {Component, Entity} from "aframe";
import {AbstractComponentController} from "aframe-typescript-boilerplate/built/component/AbstractComponentController";
import {ComponentControllerDefinition} from "aframe-typescript-boilerplate/built";
import {UiElement} from "./UiElement";
import {Mesh, PlaneGeometry} from "three";

export class Text extends UiElement {

    public static DEFINITION = new ComponentControllerDefinition(
        /* Name */ "ui-text",
        /* Schema */ {
            fontSize: {type:'number',default: 10},
            width: {type:'number',default: 1},
        },
        /* Multiple */ false,
        /* Receive ticks */ false,
        /* Factory function */ (component: Component, entity: Entity, data: any) =>
            new Text(component, entity, data));

    constructor(component: Component, entity: Entity, data: any) {
        super(component, entity, data);
    }

    wrapCount = 0;
    layoutReady = false;
    onLayoutReady: () => void = () => {};

    init(): void {
        this.entity.setAttribute("color", this.colorTheme.surfaceOn);
        this.wrapCount = 400 * this.getWidth() * 1 / this.data.fontSize;
        this.entity.setAttribute("wrap-count", this.wrapCount);

        const fixedHeight = this.entity.hasAttribute("height");
        const fontLoaded = (this.entity.components["text"] as any).currentFont;

        if (fixedHeight) {
            // Set layout ready as we have fixed height.
            this.layoutReady = true;
        } else {
            if (fontLoaded) {
                // Calculated dynamic height immediately.
                this.setDynamicHeight();
            } else {
                // Delay until font loaded.
                this.addEventListener("textfontset", () => {
                    this.setDynamicHeight();
                })
            }
        }
    }

    async initLayout(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.layoutReady) {
                resolve();
                return;
            }
            this.onLayoutReady = () => {
                resolve();
            }
        });
    }

    update(data: any, oldData: any): void {
        super.update(data, oldData);
    }


    tick(time: number, timeDelta: number): void {
        super.tick(time, timeDelta);
    }

    private setDynamicHeight() {
        const textComponent = this.entity.components["text"] as any;
        const geometry = textComponent.geometry;
        const layout = geometry.layout;

        const widthFactor = (this.entity.components["text"] as any).currentFont.widthFactor;
        const wrapCount = this.wrapCount;

        const textRenderWidth = ((0.5 + wrapCount) * widthFactor);
        const textScale = this.getWidth() / textRenderWidth;

        const height = textScale * (layout.height + layout.descender);

        this.entity.setAttribute("height", height);
        //console.log(height);
        this.layoutReady = true;
        this.onLayoutReady();
    }

    private getWidth() : number {
        if (!this.entity.hasAttribute("width")) {
            const width = this.findWidth(this.entity);
            this.entity.setAttribute("width", width);
        }
        return parseFloat(this.entity.getAttributeNode("width")!!.value);
    }

    private findWidth(element: Element): number {
        if (!element.hasAttribute("width")) {
            return this.findWidth(element.parentElement!!)
        } else {
            return parseFloat(element.getAttributeNode("width")!!.value);
        }
    }
}