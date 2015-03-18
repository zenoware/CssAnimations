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
 
class AnimationEasing {
    public static linear: string = 'linear';
    public static easeInQuad: string = 'cubic-bezier(0.55, 0.085, 0.68, 0.53)';
    public static easeOutQuad: string = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    public static easeInOutQuad: string = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    public static easeInCubic: string = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
    public static easeOutCubic: string = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    public static easeInOutCubic: string = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    public static easeInQuart: string = 'cubic-bezier(0.895, 0.03, 0.685, 0.22)';
    public static easeOutQuart: string = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
    public static easeInOutQuart: string = 'cubic-bezier(0.77, 0, 0.175, 1)';
    public static easeInQuint: string = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
    public static easeOutQuint: string = 'cubic-bezier(0.23, 1, 0.32, 1)';
    public static easeInOutQuint: string = 'cubic-bezier(0.86, 0, 0.07, 1)';
    public static easeInExpo: string = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
    public static easeOutExpo: string = 'cubic-bezier(0.19, 1, 0.22, 1)';
    public static easeInOutExpo: string = 'cubic-bezier(1, 0, 0, 1)';
    public static easeInSine: string = 'cubic-bezier(0.47, 0, 0.745, 0.715)';
    public static easeOutSine: string = 'cubic-bezier(0.39, 0.575, 0.565, 1)';
    public static easeInOutSine: string = 'cubic-bezier(0.445, 0.05, 0.55, 0.95)';
    public static easeInCirc: string = 'cubic-bezier(0.6, 0.04, 0.98, 0.335)';
    public static easeOutCirc: string = 'cubic-bezier(0.075, 0.82, 0.165, 1)';
    public static easeInOutCirc: string = 'cubic-bezier(0.785, 0.135, 0.15, 0.86)';
    public static easeInBack: string = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)';
    public static easeOutBack: string = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    public static easeInOutBack: string = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
}


class TransitionObject {
    public Property: string;
    public Value: string;

    public constructor(property: string, value: string) {
        this.Property = property;
        this.Value = value;
    }

}

class TranslateObject {
    public TranslateValue: string;
    public constructor(translateValue: string) {
        this.TranslateValue = translateValue;
    }
}

class Animations {


    static StopSlide(divElement: HTMLDivElement) {

        //Animations.Slide(divElement, Direction.Left, 0.2, center, 0, null); 
        divElement.style.animation = '';
        divElement.style.setProperty('-webkit-animation', '');
        divElement.style.setProperty('-moz-animation', '');
        divElement.style.setProperty('-o-animation', '');
    }

    static AnimateCss(divElement: HTMLDivElement, cssAnimation: string, transitionTimeInSec: number, infiniteAnimation: boolean = false, timingFunction: string = '') {

        var infinite: string = '';
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
    }

    static Rotate(divElement: HTMLDivElement, transitionTimeInSec: number, delay: number, finalDegrees) {
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
    }

    public static FlipX(divElement: HTMLDivElement, isFlipped: boolean = false) {
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
    }

    public static FlipY(divElement: HTMLDivElement, isFlipped: boolean = false) {
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
    }

    /**
    * Performs a State change on an image div that has stacked images. This is the CSS equivalent to Spritely
    */
    public CSSChangeState(divElement: HTMLDivElement, elementHeight: number, state: number) {
        divElement.style.backgroundPositionY = -state * elementHeight + 'px';
    }

    public StopSprite: boolean = false;

    private Loop: number;

    public CSSSprite(divElement: HTMLDivElement, elementWidth: number, fps: number, numFrames: number, completionTimes: number = 10) {
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
    }
    public CSSSpriteStop() {
        clearInterval(this.Loop);
        this.StopSprite = true;
    }

    public StopAnimations(divElement: HTMLDivElement, currentLeft: number = null, timerFunction: number = null) {

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

        

    }

    public StopAnimationsPercent(divElement: HTMLDivElement, currentLeft: string, timerFunction: number) {
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

    }

    /**
    * Performs an animate on translate. This is an alternative to JQuery Animate
    */
    public AnimateWithTranslate(divElement: HTMLDivElement, transitionTimeInMS: number, items: TranslateObject[], transitionDelayinMS: number = 0, timingFunction: string = '', callback: Function = null, callbackParams: any = null): number {

        var propsArray: string[] = [];

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
    }

    /**
    * Performs an animate on the properties. This is an alternative to JQuery Animate
    */
    public AnimateWithTransitions(divElement: HTMLDivElement, transitionTimeInMS: number, items: TransitionObject[], transitionDelayinMS: number = 0, timingFunction: string = '', callback: Function = null, callbackParams: any = null, keepTranisitions: boolean = false) {

        var propsArray: string[] = [];

        if (timingFunction.length == 0) {
            timingFunction = AnimationEasing.linear;
        }

        var props: string = '';

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
    }

    public ClearTransitions(divElement: HTMLDivElement) {
        divElement.style.transition = '';
        divElement.style.setProperty('-webkit-transition', '');
        divElement.style.setProperty('-moz-transition', '');
        divElement.style.setProperty('-o-transition', '');
    }

    /**
    * Fade in the DisplayElement
    */
    public FadeIn(divElement: HTMLDivElement, milliseconds: number, callback: Function = null, display: string = '', callbackObj: any = null) {
        var transTypes: TransitionObject[] = [];

        transTypes.push(new TransitionObject('opacity', '1'));

        this.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, '', function () {
            if (display.length > 0) {
                divElement.style.display = display;
            }
            if (callback != null) {
                callback(callbackObj);
            }
        });
    }

    /**
    * Fade out the DisplayElement
    */
    public FadeOut(divElement: HTMLDivElement, milliseconds: number, callback: Function = null, displayNone: boolean = false) {
        var transTypes: TransitionObject[] = [];

        transTypes.push(new TransitionObject('opacity', '0'));

        this.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, '', function () {
            if (displayNone) {
                divElement.style.display = 'none';
            }
            if (callback != null) {
                callback();
            }
        });
    }

    /**
    * Slide Down and display the DisplayElement. Must be a relative or absolute element!
    */
    public SlideDown(divElement: HTMLDivElement, milliseconds: number, difference: number, timingFunction: string = 'linear') {
        var originalTop: number = divElement.offsetTop;

        var newTop = (originalTop + difference);

        var transTypes: TransitionObject[] = [];

        transTypes.push(new TransitionObject('top', newTop + 'px'));
        transTypes.push(new TransitionObject('opacity', '1'));

        this.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, timingFunction, function () {
            divElement.style.top = newTop + 'px';
        });
    }
    /**
    * Slide Up and hide the DisplayElement. Must be a relative or absolute element!
    */
    public SlideUp(divElement: HTMLDivElement, milliseconds: number, difference: number, timingFunction: string = 'linear') {
        var originalTop: number = divElement.offsetTop;

        var newTop = (originalTop - difference);

        var transTypes: TransitionObject[] = [];

        transTypes.push(new TransitionObject('top', newTop + 'px'));
        transTypes.push(new TransitionObject('opacity', '0'));

        this.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, timingFunction, function () {
            divElement.style.top = newTop + 'px';
        });



    }
} 
