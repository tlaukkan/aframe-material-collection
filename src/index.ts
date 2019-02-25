/* global AFRAME */
/**
 * Application entry point
 * @author Shane Harris
 */

import * as Package from '../package.json';
import {registerComponentController, registerSystemController} from "aframe-typescript-boilerplate/built";
import {ExampleUiComponent} from "./component/ExampleUiComponent";
import {MaterialUiSystem} from "./MaterialUiSystem";
import {UiBorder} from "./component/UiBorder";

let version = Package.version;
console.log('aframe-material-collection version '+version);

if (typeof AFRAME === 'undefined') {
    throw 'aframe-material-collection requires AFRAME to be loaded first. - <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>';
}

let UI = import('./ui');

(window as any).UI = UI;

registerSystemController(MaterialUiSystem.DEFINITION);

registerComponentController(ExampleUiComponent.DEFINITION);
registerComponentController(UiBorder.DEFINITION);