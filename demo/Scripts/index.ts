/// <reference path="animations.ts" />
//Global vars to use
var PageHeight: number = 0;
var PageWidth: number = 0;
var isFlippedX: boolean = false;
var isFlippedY: boolean = false;
var animations: Animations;

//Init function
var CallOnLoad: Function = function () {
    PageHeight = window.innerHeight;
    PageWidth = window.innerWidth;
    animations = new Animations();
    //Div used for rotate function
    var DivToRotate: HTMLDivElement = <HTMLDivElement>document.getElementById('rotateThisDiv');
    DivToRotate.style.height = 0.1 * PageHeight + "px";
    DivToRotate.style.width = 0.1 * PageHeight + "px";
    var DivToFlip: HTMLDivElement = <HTMLDivElement>document.getElementById('flipThisDiv');
    DivToFlip.style.height = 0.1 * PageHeight + "px";
    DivToFlip.style.width = 0.16 * PageHeight + "px";
    var CSSChangeState: HTMLDivElement = <HTMLDivElement>document.getElementById('CSSChangeState');
    CSSChangeState.style.height = 0.1 * PageHeight + "px";
    CSSChangeState.style.width = 0.1 * PageHeight + "px";
    //for this sprite there are 4 frames and 3 states
    //thus the width is 4 * 0.1 * pageheight
    //save for height (3 states), just making it fit into the box
    CSSChangeState.style.backgroundSize = 0.4 * PageHeight + "px " + 0.3 * PageHeight + "px";
    var CSSSpriteDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('CSSSpriteDiv');
    CSSSpriteDiv.style.height = 0.1 * PageHeight + "px";
    CSSSpriteDiv.style.width = 0.1 * PageHeight + "px";
    CSSSpriteDiv.style.backgroundSize = 0.4 * PageHeight + "px " + 0.3 * PageHeight + "px";
    var AnimateWithTranslateDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('AnimateWithTranslateDiv');
    AnimateWithTranslateDiv.style.width = 0.1 * PageHeight + "px";
    AnimateWithTranslateDiv.style.height = 0.1 * PageHeight + "px";
};

//Misc functions
var RotateDiv: Function = function () {
    var transition: number = parseInt((<HTMLInputElement>document.getElementById('rotateInputTransition')).value);
    var delay: number = parseInt((<HTMLInputElement>document.getElementById('rotateInputDelay')).value);
    var degrees: number = parseInt((<HTMLInputElement>document.getElementById('rotateInputDegrees')).value);
    var div: HTMLDivElement = <HTMLDivElement>document.getElementById('rotateThisDiv');
    Animations.Rotate(div, transition, delay, degrees);
};
var FlipDivInX: Function = function () {
    var div: HTMLDivElement = <HTMLDivElement>document.getElementById('flipThisDiv');
    Animations.FlipX(div, isFlippedX);
    isFlippedX = !isFlippedX;
};
var FlipDivInY: Function = function () {
    var div: HTMLDivElement = <HTMLDivElement>document.getElementById('flipThisDiv');
    Animations.FlipY(div, isFlippedY);
    isFlippedY = !isFlippedY;
};
var ChangeCSSState: Function = function () {
    var div: HTMLDivElement = <HTMLDivElement>document.getElementById('CSSChangeState');
    var state: number = (<HTMLSelectElement>document.getElementById('ChangeCSSStateSelect')).selectedIndex;
    animations.CSSChangeState(div, div.offsetHeight, state);
};
var StartCSSSprite: Function = function () {
    var div: HTMLDivElement = <HTMLDivElement>document.getElementById('CSSSpriteDiv');
    animations.CSSSprite(div, div.offsetWidth, 30, 4);
};
var AnimateWithTranslate: Function = function () {
    var translateTypes: TranslateObject[] = [];
    translateTypes.push(new TranslateObject('translateX(400%)'));
    var div: HTMLDivElement = <HTMLDivElement>document.getElementById('AnimateWithTranslateDiv');
    animations.AnimateWithTranslate(div, 1000, translateTypes, 0, AnimationEasing.easeInOutBack);
};
//Init things when page loads
window.addEventListener("load", CallOnLoad());
