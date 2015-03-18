class AnimationEasing {
    public static linear: string = 'linear';
    public static easeInQuad: string = 'easeInQuad';
    public static easeOutQuad: string = 'easeOutQuad';
    public static easeInOutQuad: string = 'easeInOutQuad';
    public static easeInCubic: string = 'easeInCubic';
    public static easeOutCubic: string = 'easeOutCubic';
    public static easeInOutCubic: string = 'easeInOutCubic';
    public static easeInQuart: string = 'easeInQuart';
    public static easeOutQuart: string = 'easeOutQuart';
    public static easeInOutQuart: string = 'easeInOutQuart';
    public static easeInQuint: string = 'easeInQuint';
    public static easeOutQuint: string = 'easeOutQuint';
    public static easeInOutQuint: string = 'easeInOutQuint';
    public static easeInExpo: string = 'easeInExpo';
    public static easeOutExpo: string = 'easeOutExpo';
    public static easeInOutExpo: string = 'easeInOutExpo';
    public static easeInSine: string = 'easeInSine';
    public static easeOutSine: string = 'easeOutSine';
    public static easeInOutSine: string = 'easeInOutSine';
    public static easeInCirc: string = 'easeInCirc';
    public static easeOutCirc: string = 'easeOutCirc';
    public static easeInOutCirc: string = 'easeInOutCirc';
    public static easeInElastic: string = 'easeInElastic';
    public static easeOutElastic: string = 'easeOutElastic';
    public static easeInOutElastic: string = 'easeInOutElastic';
    public static easeInBack: string = 'easeInBack';
    public static easeOutBack: string = 'easeOutBack';
    public static easeInOutBack: string = 'easeInOutBack';
    public static easeInBounce: string = 'easeInBounce';
    public static easeOutBounce: string = 'easeOutBounce';
    public static easeInOutBounce: string = 'easeInOutBounce';
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
