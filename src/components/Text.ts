import {Component, Entity} from "aframe";
import {AbstractComponentController} from "aframe-typescript-boilerplate/built/component/AbstractComponentController";
import {ComponentControllerDefinition} from "aframe-typescript-boilerplate/built";
import {UiElement} from "./UiElement";

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

    init(): void {
        const width = this.getWidth();
        this.entity.setAttribute("color", this.colorTheme.surfaceOn);
        this.entity.setAttribute("wrap-count", 400 * width * 1 / this.data.fontSize);

        /*this.addEventListener("textfontset", () => {
            console.log((this.entity.components["text"] as any).currentFont.widthFactor);
        })*/
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

    update(data: any, oldData: any): void {
        super.update(data, oldData);
    }


    tick(time: number, timeDelta: number): void {
        super.tick(time, timeDelta);
    }
}