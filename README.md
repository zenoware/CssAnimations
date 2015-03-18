## Background
This is a fairly simple and easy to use script that will allow creating dynamic CSS transitions/translations with ease. This library was initially made a while ago to distribute among some personal apps using phonegap. If anyone has ever tried to create animations using jQuery, you will quickly find out the issues of changing styles dynamically on a timer is just not very efficient on mobile devices. This is a way around that issue. This library also supplies a simple implementation for Sprites.

##Usage
There are many functions provided with this library. Below will show examples of each.

###Static Variables
AnimationEasing - this is a class that provides a large majority of common easing functions as static strings.

###Static Functions

####AnimateCss(divElement, cssAnimation, transitionTimeInSec, [infiniteAnimation], [timingFunction])
	Description:
		- A simple call to run a pre-defined css animation on a div.
	Arguments:
		- divElement: the element you wish to animate.
		- cssAnimation (string): the css animation you wish to run.
		- transitionTimeInSec: transition time in seconds
		- infiniteAnimation: Optional parameter that will set the animation to run infinitely if set to true.
		- timingFunction: Optional parameter that will set the timing function for the animation if set. Uses linear    timing function otherwise.
	 
####TypeScript Example:
    Animations.AnimateCss(<HTMLDivElement>document.getElementById('id'), 'loadSpin', 2, true, AnimationEasing.linear);

####JavaScript Example:
    Animations.AnimateCss(document.getElementById('id'), 'loadSpin', 2, true, AnimationEasing.linear);
		
####Rotate(divElement, transitionTimeInSec, delay, rotation)
	Description:
		- Perform a CSS rotate on a div.
		- NOTE: rotates to a set degree.  If performing a second rotation you will need to use the cumulative degree for the rotation variable.
	Arguments:
		- divElement: the element you wish to animate.
		- transitionTimeInSec: transition time in seconds.
		- delay: the numeric value to delay any rotation.
		- finalDegrees: degree mark to which to rotate.
	

####TypeScript Example:
	Animations.Rotate(<HTMLDivElement>document.getElementById('id'), 2, 0, 360);
	
####JavaScript Example:
	Animations.Rotate(document.getElementById('id'), 2, 0, 360);
	
####FlipX(divElement, [isFlipped])
	Description:
		- Flips a div on its X axis.
	Arguments:
		- divElement: the element you wish to flip.
		- isFlipped: Optional boolean if the div has already been flipped. If so, reset.

####TypeScript Example:
	Animations.FlipX(<HTMLDivElement>document.getElementById('id'));
	
####JavaScript Example:
	Animations.FlipX(<HTMLDivElement>document.getElementById('id'));
	
####FlipY(divElement, [isFlipped])
	Description:
		- Flips a div on its Y axis.
	Arguments:
		- divElement: the element you wish to flip.
		- isFlipped: Optional boolean if the div has already been flipped. If so, reset.
	
####TypeScript Example:
	Animations.FlipY(<HTMLDivElement>document.getElementById('id'));
	
####JavaScript Example:
	Animations.FlipY(<HTMLDivElement>document.getElementById('id'));


###Public Functions

####CSSChangeState(divElement, elementHeight, state)
	Description:
		- Changes the sprite state of a given div. The div should have a background associated to it that would be a sprite. For example:
		div.style.background = 'transparent url(' + imgSrc + '_left.png) 0 0 no-repeat';
		div.style.backgroundSize = '<Display Element Width>px  <Display Element Height>px';
	
	Arguments:
		- divElement: the element you wish to run the sprite on.
		- elementHeight: the height of the element.
		- state: which state to display.
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	animations.CSSSprite(divElement, divElement.offsetHeight, 1);
	
####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	animations.CSSSprite(divElement, divElement.offsetHeight, 1);
	

####CSSSprite(divElement, elementWidth, fps, numFrames, [completionTimes])
	Description:
		- Runs a sprite against a div. The div should have a background associated to it that would be a sprite. For     example:
		div.style.background = 'transparent url(' + imgSrc + '_left.png) 0 0 no-repeat';
		div.style.backgroundSize = '<ElementWidth>px  <ElementHeight>px';
	
	Arguments:
		- divElement: the element you wish to run the sprite on.
		- elementWidth: the width of the element.
		- fps: frames per second (interval).
		- numFrames: number of frames in the sprite.
		- completionTimes: Optional parameter for how many times the sprite should execute. Default is 10.
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	animations.CSSSprite(divElement, divElement.offsetWidth, interval, 4, 1000);
	
####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	animations.CSSSprite(divElement, divElement.offsetWidth, interval, 4, 1000);
	
####CSSSpriteStop()
	Description:
		- Stops all sprites running associated with the instance of animations.
	
	Arguments: None
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	animations.CSSSpriteStop();
	
####JavaScript Example:
	
	var animations = new Animations();
	animations.CSSSpriteStop();

####StopAnimations(divElement, [currentLeft], [timerFunction])
	Description:
		- Stops all css transition animations. Will set the currentLeft and clear the timer if applicable.
	
	Arguments:
		- divElement: the element you wish to stop any animation.
		- currentLeft: Optional parameter that will set the div's left style to the input number.
		- timerFunction: Optional  parameter that will clear any timer passed in.
		
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	animations.StopAnimations(divElement, -divElement.offsetWidth, timer);
	
####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	animations.StopAnimations(divElement, -divElement.offsetWidth, timer);
	
####AnimateWithTranslate(divElement, transitionTimeInMS, items, [transitionDelayinMS], [timingFunction], [callback], [callbackParams])
	Description:
		- Runs a CSS Transform on the div against the items passed in.
		
	Arguments: 
		- divElement: the element you wish to perform a transform on.
		- transitionTimeInMS: transition time based off of milliseconds.
		- items: TranslateObject[]: An array that contains translate values.
		- transitionDelayinMS: Optional parameter for delay in milliseconds. Default to 0.
		- timingFunction: Optional parameter to set for the timing function used by the transform. Default to linear.
		- callback: Optional parameter for a function to call when the translate completes.
		- callbackParams: Optional parameter to pass anything with the callback function.
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	
	var translateTypes: TranslateObject[] = [];
	translateTypes.push(new TranslateObject('translateX(' + divElement.offsetWidth + 'px)'));
	
	animations.AnimateWithTranslate(divElement, 500, translateTypes, 0, AnimationEasing.linear, callback, this);

####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	
	var translateTypes = [];
	translateTypes.push(new TranslateObject('translateX(' + divElement.offsetWidth + 'px)'));
	
	animations.AnimateWithTranslate(divElement, 500, translateTypes, 0, AnimationEasing.linear, callback, this);
	
####AnimateWithTransitions(divElement, transitionTimeInMS, items, [transitionDelayinMS], [timingFunction], [callback], [callbackParams], [keepTransitions])
	Description:
		- Performs an animate on the properties. This is an alternative to JQuery Animate
	
	Arguments:
		- divElement: the element you wish to perform a transform on.
		- transitionTimeInMS: transition time based off of milliseconds.
		- items: TransitionObject[]: An array that contains translate values.
		- transitionDelayinMS: Optional parameter for delay in milliseconds. Default to 0.
		- timingFunction: Optional parameter to set for the timing function used by the transform. Default to linear.
		- callback: Optional parameter for a function to call when the translate completes.
		- callbackParams: Optional parameter to pass anything with the callback function.
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	
	var transTypes: TransitionObject[] = [];
	 transTypes.push(new TransitionObject('opacity', '1'));
	
	animations.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, '', callback, this);
	
####JavaScript Example:
	
	var animations = new Animations();
	var transTypes = [];
	transTypes.push(new TransitionObject('opacity', '1'));

	animations.AnimateWithTransitions(divElement, milliseconds, transTypes, 0, '', callback, this);

####ClearTransitions(divElement)
	Description:
		- Stops all transitions.
		
	Arguments:
		- divElement: the element you wish to stop any transition.
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	animations.ClearTransitions(divElement);
	
####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	animations.ClearTransitions(divElement);
	
####FadeIn(divElement, milliseconds, [callback], [display], [callbackObj])
	Description:
		- Fades in a div and will set the display option if applicable.
		
	Arguments:
		- divElement: the element you wish to fade in.
		- milliseconds: time in milliseconds to fade in.
		- callback: Optional parameter function to fire when fade in completes. Useful for allowing the view to take in user input.
		- display: Optional string to set the display to (IE: 'inline').
		- callbackObj: Optional parameter to pass with the callback
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	animations.FadeIn(divElement, 10, null, 'inline');
	
####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	animations.FadeIn(divElement, 10, null, 'inline');

####FadeOut(divElement, milliseconds, [callback], [displayNone])
	Description:
		- Fades out a div and will set the display option if applicable.
		
	Arguments:
		- divElement: the element you wish to fade out.
		- milliseconds: time in milliseconds to fade out.
		- callback: Optional parameter function to fire when fade in completes. Useful for allowing the view to take in user input.
		- displayNone: Optional boolean to set the display to none when fade out is completed.
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	animations.FadeOut(divElement, 500);
	
####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	animations.FadeOut(divElement, 500);
	
####SlideDown(divElement, milliseconds, difference, [timingFunction])
	Description:
		- Slide Down and display the div. Must be a relative or absolute div!
		
	Arguments:
		- divElement: the element you wish to slide down.
		- milliseconds: time in milliseconds to slide down.
		- difference: the value to add from the current top value of the div.
		- timingFunction: Optional string for the timing function. Default to linear.
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	animations.SlideDown(divElement, 500, 500);
	
####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	animations.SlideDown(divElement, 500, 500);
	
####SlideUp(divElement, milliseconds, difference, [timingFunction])
	Description:
		- Slide Up and hide the div. Must be a relative or absolute div!
		
	Arguments:
		- divElement: the element you wish to slide down.
		- milliseconds: time in milliseconds to slide down.
		- difference: the value to subtract from the current top value of the div.
		- timingFunction: Optional string for the timing function. Default to linear.
		
####TypeScript Example:
	
	var animations: Animations = new Animations();
	var divElement: HTMLDivElement = <HTMLDivElement>document.getElementById('id');
	animations.SlideUp(divElement, 500, 500);
	
####JavaScript Example:
	
	var animations = new Animations();
	var divElement = document.getElementById('id');
	animations.SlideUp(divElement, 500, 500);



##Notes on Contributing
This code was originally written in TypeScript. The generated JavaScript file is provided. If changes are made, it would be best to do it in TypeScript and also commit the generated JavaScript for those who do not wish to mess with it.

