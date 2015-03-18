/* The MIT License (MIT)
 * Copyright (c) 2015 Jason Pugh and Justin Allen
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */

var AnimationEasing = (function () {
    function AnimationEasing() {
    }
    AnimationEasing.linear = 'linear';
    AnimationEasing.easeInQuad = 'cubic-bezier(0.55, 0.085, 0.68, 0.53)';
    AnimationEasing.easeOutQuad = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    AnimationEasing.easeInOutQuad = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    AnimationEasing.easeInCubic = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
    AnimationEasing.easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    AnimationEasing.easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    AnimationEasing.easeInQuart = 'cubic-bezier(0.895, 0.03, 0.685, 0.22)';
    AnimationEasing.easeOutQuart = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
    AnimationEasing.easeInOutQuart = 'cubic-bezier(0.77, 0, 0.175, 1)';
    AnimationEasing.easeInQuint = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
    AnimationEasing.easeOutQuint = 'cubic-bezier(0.23, 1, 0.32, 1)';
    AnimationEasing.easeInOutQuint = 'cubic-bezier(0.86, 0, 0.07, 1)';
    AnimationEasing.easeInExpo = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
    AnimationEasing.easeOutExpo = 'cubic-bezier(0.19, 1, 0.22, 1)';
    AnimationEasing.easeInOutExpo = 'cubic-bezier(1, 0, 0, 1)';
    AnimationEasing.easeInSine = 'cubic-bezier(0.47, 0, 0.745, 0.715)';
    AnimationEasing.easeOutSine = 'cubic-bezier(0.39, 0.575, 0.565, 1)';
    AnimationEasing.easeInOutSine = 'cubic-bezier(0.445, 0.05, 0.55, 0.95)';
    AnimationEasing.easeInCirc = 'cubic-bezier(0.6, 0.04, 0.98, 0.335)';
    AnimationEasing.easeOutCirc = 'cubic-bezier(0.075, 0.82, 0.165, 1)';
    AnimationEasing.easeInOutCirc = 'cubic-bezier(0.785, 0.135, 0.15, 0.86)';
    AnimationEasing.easeInBack = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)';
    AnimationEasing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    AnimationEasing.easeInOutBack = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    return AnimationEasing;
})();
var TransitionObject = (function () {
    function TransitionObject(property, value) {
        this.Property = property;
        this.Value = value;
    }
    return TransitionObject;
})();
var TranslateObject = (function () {
    function TranslateObject(translateValue) {
        this.TranslateValue = translateValue;
    }
    return TranslateObject;
})();
var Animations = (function () {
    function Animations() {
        this.StopSprite = false;
    }
    Animations.StopSlide = function (divElement) {
        //Animations.Slide(divElement, Direction.Left, 0.2, center, 0, null); 
        divElement.style.animation = '';
        divElement.style.setProperty('-webkit-animation', '');
        divElement.style.setProperty('-moz-animation', '');
        divElement.style.setProperty('-o-animation', '');
    };
    Animations.AnimateCss = function (divElement, cssAnimation, transitionTimeInSec, infiniteAnimation, timingFunction) {
        if (infiniteAnimation === void 0) { infiniteAnimation = false; }
        if (timingFunction === void 0) { timingFunction = ''; }
        var infinite = '';
        if (infiniteAnimation) {
            infinite = 'infinite';
        }
        if (timingFunction.length == 0) {
            timingFunction = AnimationEasing.linear;
        }
        divElement.style.animation = cssAnimation + ' ' + transitionTimeInSec + 's ' + infinite + ' ' + timingFunction;
        divElement.style.setProperty('-webkit-animation', cssAnimation + ' ' + transitionTimeInSec + 's ' + infinite + ' ' + timingFunction);
        divElement.style.setProperty('-moz-animation', cssAnimation + ' ' + transitionTimeInSec + 's ' + infinite + ' ' + timingFunction);
        divElement.style.setProperty('-o-animation', cssAnimation + ' ' + transitionTimeInSec + 's ' + infinite + ' ' + timingFunction);
    };
    Animations.Rotate = function (divElement, transitionTimeInSec, delay, finalDegrees) {
        divElement.style.transition = 'all ' + transitionTimeInSec + 's ease-in-out';
        divElement.style.setProperty('-webkit-transition', 'all ' + transitionTimeInSec + 's ease-in-out');
        divElement.style.setProperty('-moz-transition', 'all ' + transitionTimeInSec + 's ease-in-out');
        divElement.style.setProperty('-o-transition', 'all ' + transitionTimeInSec + 's ease-in-out');
        setTimeout(function () {
            divElement.style.transform = 'rotate(' + finalDegrees + 'deg)';
            divElement.style.setProperty('-webkit-transform', 'rotate(' + finalDegrees + 'deg)');
            divElement.style.setProperty('-moz-transform', 'rotate(' + finalDegrees + 'deg)');
            divElement.style.setProperty('-o-transform', 'rotate(' + finalDegrees + 'deg)');
        }, delay);
    };
    Animations.FlipX = function (divElement, isFlipped) {
        if (isFlipped === void 0) { isFlipped = false; }
        if (isFlipped) {
            divElement.style.transform = 'scaleX(1)';
            divElement.style.setProperty('-webkit-transform', 'scaleX(1)');
            divElement.style.setProperty('-moz-transform', 'scaleX(1)');
            divElement.style.setProperty('-o-transform', 'scaleX(1)');
        }
        else {
            divElement.style.transform = 'scaleX(-1)';
            divElement.style.setProperty('-webkit-transform', 'scaleX(-1)');
            divElement.style.setProperty('-moz-transform', 'scaleX(-1)');
            divElement.style.setProperty('-o-transform', 'scaleX(-1)');
        }
    };
    Animations.FlipY = function (divElement, isFlipped) {
        if (isFlipped === void 0) { isFlipped = false; }
        if (isFlipped) {
            divElement.style.transform = 'scaleY(1)';
            divElement.style.setProperty('-webkit-transform', 'scaleY(1)');
            divElement.style.setProperty('-moz-transform', 'scaleY(1)');
            divElement.style.setProperty('-o-transform', 'scaleY(1)');
        }
        else {
            divElement.style.transform = 'scaleY(-1)';
            divElement.style.setProperty('-webkit-transform', 'scaleY(-1)');
            divElement.style.setProperty('-moz-transform', 'scaleY(-1)');
            divElement.style.setProperty('-o-transform', 'scaleY(-1)');
        }
    };
    /**
    * Performs a State change on an image div that has stacked images. This is the CSS equivalent to Spritely
    */
    Animations.prototype.CSSChangeState = function (divElement, elementHeight, state) {
        divElement.style.backgroundPositionY = -state * elementHeight + 'px';
    };
    Animations.prototype.CSSSprite = function (divElement, elementWidth, fps, numFrames, completionTimes) {
        if (completionTimes === void 0) { completionTimes = 10; }
        var frame = 0;
        var completionTime = 0;
        var StopSprite = this.StopSprite;
        var Loop = this.Loop = setInterval(function () {
            if (completionTimes == completionTime || StopSprite == true) {
                clearInterval(Loop);
                StopSprite = false;
            }
            if (frame == numFrames - 1) {
                frame = 0;
                completionTime++;
            }
            else {
                frame++;
            }
            divElement.style.backgroundPositionX = -frame * elementWidth + 'px';
        }, numFrames / fps * 1000);
    };
    Animations.prototype.CSSSpriteStop = function () {
        clearInterval(this.Loop);
        this.StopSprite = true;
    };
    Animations.prototype.StopAnimations = function (divElement, currentLeft, timerFunction) {
        if (currentLeft === void 0) { currentLeft = null; }
        if (timerFunction === void 0) { timerFunction = null; }
        if (divElement != null) {
            if (currentLeft != null) {
                divElement.style.left = currentLeft + 'px';
            }
            divElement.style.transition = '';
            divElement.style.setProperty('-webkit-transition', '');
            divElement.style.setProperty('-moz-transition', '');
            divElement.style.setProperty('-o-transition', '');
            divElement.style.transform = '';
            divElement.style.setProperty('-webkit-transform', '');
            divElement.style.setProperty('-moz-transform', '');
            divElement.style.setProperty('-o-transform', '');
        }
        if (timerFunction != null) {
            window.clearTimeout(timerFunction);
        }
    };
    Animations.prototype.StopAnimationsPercent = function (divElement, currentLeft, timerFunction) {
        divElement.style.transition = '';
        divElement.style.setProperty('-webkit-transition', 'none');
        divElement.style.setProperty('-moz-transition', '');
        divElement.style.setProperty('-o-transition', '');
        divElement.style.transform = '';
        divElement.style.setProperty('-webkit-transform', '');
        divElement.style.setProperty('-moz-transform', '');
        divElement.style.setProperty('-o-transform', '');
        window.clearTimeout(timerFunction);
        divElement.style.left = currentLeft + '%';
    };
    /**
    * Performs an animate on translate. This is an alternative to JQuery Animate
    */
    Animations.prototype.AnimateWithTranslate = function (divElement, transitionTimeInMS, items, transitionDelayinMS, timingFunction, callback, callbackParams) {
        if (transitionDelayinMS === void 0) { transitionDelayinMS = 0; }
        if (timingFunction === void 0) { timingFunction = ''; }
        if (callback === void 0) { callback = null; }
        if (callbackParams === void 0) { callbackParams = null; }
        var propsArray = [];
        if (timingFunction.length == 0) {
            timingFunction = AnimationEasing.linear;
        }
        for (var i = 0; i < items.length; i++) {
        }
        divElement.style.transition = 'transform ' + transitionTimeInMS + 'ms ' + timingFunction + ' ' + transitionDelayinMS + 'ms';
        divElement.style.setProperty('-webkit-transition', '-webkit-transform ' + transitionTimeInMS + 'ms ' + timingFunction + ' ' + transitionDelayinMS + 'ms');
        divElement.style.setProperty('-moz-transition', '-moz-transform ' + transitionTimeInMS + 'ms ' + timingFunction + ' ' + transitionDelayinMS + 'ms');
        divElement.style.setProperty('-o-transition', '-o-transform ' + transitionTimeInMS + 'ms ' + timingFunction + ' ' + transitionDelayinMS + 'ms');
        for (var i = 0; i < items.length; i++) {
            divElement.style.transform = items[i].TranslateValue;
            divElement.style.setProperty('-webkit-transform', items[i].TranslateValue);
            divElement.style.setProperty('-moz-transform', items[i].TranslateValue);
            divElement.style.setProperty('-o-transform', items[i].TranslateValue);
        }
        if (callback != null) {
            return setTimeout(function () {
                callback(callbackParams);
            }, transitionTimeInMS);
        }
        return 0;
    };
    /**
    * Performs an animate on the properties. This is an alternative to JQuery Animate
    */
    Animations.prototype.AnimateWithTransitions = function (divElement, transitionTimeInMS, items, transitionDelayinMS, timingFunction, callback, callbackParams, keepTranisitions) {
        if (transitionDelayinMS === void 0) { transitionDelayinMS = 0; }
        if (timingFunction === void 0) { timingFunction = ''; }
        if (callback === void 0) { callback = null; }
        if (callbackParams === void 0) { callbackParams = null; }
        if (keepTranisitions === void 0) { keepTranisitions = false; }
        var propsArray = [];
        if (timingFunction.length == 0) {
            timingFunction = AnimationEasing.linear;
        }
        var props = '';
        if (keepTranisitions && divElement.style.transition != null && divElement.style.transition.length > 0) {
            props = divElement.style.transition;
        }
        for (var i = 0; i < items.length; i++) {
            if (props.length > 0) {
                //TODO: JP: May need to do a string replace if this property already exists.
                //var exists: number = props.indexOf(items[i].Property); 
                //if (exists) {
                //}
                props += ', ' + items[i].Property + ' ' + transitionTimeInMS + 'ms ' + timingFunction + ' ' + transitionDelayinMS + 'ms';
            }
            else {
                props = items[i].Property + ' ' + transitionTimeInMS + 'ms ' + timingFunction + ' ' + transitionDelayinMS + 'ms';
            }
        }
        divElement.style.transition = props;
        divElement.style.setProperty('-webkit-transition', props);
        divElement.style.setProperty('-moz-transition', props);
        divElement.style.setProperty('-o-transition', props);
        for (var i = 0; i < items.length; i++) {
            divElement.style.setProperty(items[i].Property, items[i].Value);
        }
        if (callback != null) {
            setTimeout(function () {
                callback(callbackParams);
            }, transitionTimeInMS);
        }
    };
    Animations.prototype.ClearTransitions = function (divElement) {
        divElement.style.transition = '';
        divElement.style.setProperty('-webkit-transition', '');
        divElement.style.setProperty('-moz-transition', '');
        divElement.style.setProperty('-o-transition', '');
    };
    /**
    * Fade in the DisplayElement
    */
    Animations.prototype.FadeIn = function (divElement, milliseconds, callback, display, callbackObj) {
        if (callback === void 0) { callback = null; }
        if (display === void 0) { display = ''; }
        if (callbackObj === void 0) { callbackObj = null; }
        var transTypes = [];
        transTypes.push(new TransitionObject('opacity', '1'));
        this.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, '', function () {
            if (display.length > 0) {
                divElement.style.display = display;
            }
            if (callback != null) {
                callback(callbackObj);
            }
        });
    };
    /**
    * Fade out the DisplayElement
    */
    Animations.prototype.FadeOut = function (divElement, milliseconds, callback, displayNone) {
        if (callback === void 0) { callback = null; }
        if (displayNone === void 0) { displayNone = false; }
        var transTypes = [];
        transTypes.push(new TransitionObject('opacity', '0'));
        this.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, '', function () {
            if (displayNone) {
                divElement.style.display = 'none';
            }
            if (callback != null) {
                callback();
            }
        });
    };
    /**
    * Slide Down and display the DisplayElement. Must be a relative or absolute element!
    */
    Animations.prototype.SlideDown = function (divElement, milliseconds, difference, timingFunction) {
        if (timingFunction === void 0) { timingFunction = 'linear'; }
        var originalTop = divElement.offsetTop;
        var newTop = (originalTop + difference);
        var transTypes = [];
        transTypes.push(new TransitionObject('top', newTop + 'px'));
        transTypes.push(new TransitionObject('opacity', '1'));
        this.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, timingFunction, function () {
            divElement.style.top = newTop + 'px';
        });
    };
    /**
    * Slide Up and hide the DisplayElement. Must be a relative or absolute element!
    */
    Animations.prototype.SlideUp = function (divElement, milliseconds, difference, timingFunction) {
        if (timingFunction === void 0) { timingFunction = 'linear'; }
        var originalTop = divElement.offsetTop;
        var newTop = (originalTop - difference);
        var transTypes = [];
        transTypes.push(new TransitionObject('top', newTop + 'px'));
        transTypes.push(new TransitionObject('opacity', '0'));
        this.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, timingFunction, function () {
            divElement.style.top = newTop + 'px';
        });
    };
    return Animations;
})();
//# sourceMappingURL=Animations.js.map
