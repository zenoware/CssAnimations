/// <reference path="animations.ts" />
//Global vars to use
var PageHeight = 0;
var PageWidth = 0;
var isFlippedX = false;
var isFlippedY = false;
var animations;
//Init function
var CallOnLoad = function () {
    PageHeight = window.innerHeight;
    PageWidth = window.innerWidth;
    animations = new Animations();
    //Div used for rotate function
    var DivToRotate = document.getElementById('rotateThisDiv');
    DivToRotate.style.height = 0.1 * PageHeight + "px";
    DivToRotate.style.width = 0.1 * PageHeight + "px";
    var DivToFlip = document.getElementById('flipThisDiv');
    DivToFlip.style.height = 0.1 * PageHeight + "px";
    DivToFlip.style.width = 0.16 * PageHeight + "px";
    var CSSChangeState = document.getElementById('CSSChangeState');
    CSSChangeState.style.height = 0.1 * PageHeight + "px";
    CSSChangeState.style.width = 0.1 * PageHeight + "px";
    //for this sprite there are 4 frames and 3 states
    //thus the width is 4 * 0.1 * pageheight
    //save for height (3 states), just making it fit into the box
    CSSChangeState.style.backgroundSize = 0.4 * PageHeight + "px " + 0.3 * PageHeight + "px";
    var CSSSpriteDiv = document.getElementById('CSSSpriteDiv');
    CSSSpriteDiv.style.height = 0.1 * PageHeight + "px";
    CSSSpriteDiv.style.width = 0.1 * PageHeight + "px";
    CSSSpriteDiv.style.backgroundSize = 0.4 * PageHeight + "px " + 0.3 * PageHeight + "px";
    var AnimateWithTranslateDiv = document.getElementById('AnimateWithTranslateDiv');
    AnimateWithTranslateDiv.style.width = 0.1 * PageHeight + "px";
    AnimateWithTranslateDiv.style.height = 0.1 * PageHeight + "px";
};
//Misc functions
var RotateDiv = function () {
    var transition = parseInt(document.getElementById('rotateInputTransition').value);
    var delay = parseInt(document.getElementById('rotateInputDelay').value);
    var degrees = parseInt(document.getElementById('rotateInputDegrees').value);
    var div = document.getElementById('rotateThisDiv');
    Animations.Rotate(div, transition, delay, degrees);
};
var FlipDivInX = function () {
    var div = document.getElementById('flipThisDiv');
    Animations.FlipX(div, isFlippedX);
    isFlippedX = !isFlippedX;
};
var FlipDivInY = function () {
    var div = document.getElementById('flipThisDiv');
    Animations.FlipY(div, isFlippedY);
    isFlippedY = !isFlippedY;
};
var ChangeCSSState = function () {
    var div = document.getElementById('CSSChangeState');
    var state = document.getElementById('ChangeCSSStateSelect').selectedIndex;
    animations.CSSChangeState(div, div.offsetHeight, state);
};
var StartCSSSprite = function () {
    var div = document.getElementById('CSSSpriteDiv');
    animations.CSSSprite(div, div.offsetWidth, 30, 4);
};
var AnimateWithTranslate = function () {
    var translateTypes = [];
    translateTypes.push(new TranslateObject('translateX(400%)'));
    var div = document.getElementById('AnimateWithTranslateDiv');
    animations.AnimateWithTranslate(div, 1000, translateTypes, 0, AnimationEasing.easeInOutBack);
};
//Init things when page loads
window.addEventListener("load", CallOnLoad());
//# sourceMappingURL=index.js.map
