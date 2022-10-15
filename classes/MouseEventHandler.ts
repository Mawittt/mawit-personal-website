import { absoluteValue } from "../utils/utils";
import Navigator from "./Navigator";

export default class MouseEventHandler {
	startX: number;
	startY: number;
	endX: number;
	endY: number;
	navigator: Navigator;
    scrolled : boolean 
    scrolledTimeout : any
    scrollingElement : Element | null

	constructor(navigator: Navigator) {
        window.onmousedown = (e) => this.onMouseDown(e);
		window.onmouseup = (e) => this.onMouseUp(e);
		window.ontouchstart = (e) => this.onTouchStart(e);
		window.ontouchend = (e) => this.onTouchEnd(e);
        window.onwheel = (e)=>this.onWheel(e)
        
		this.navigator = navigator;
		this.startX = 0;
		this.startY = 0;
		this.endX = 0;
		this.endY = 0;
        this.scrolled = false
        this.scrolledTimeout = null
        this.scrollingElement = null
	}

	onMouseDown(this: MouseEventHandler, e: MouseEvent) {
		if (this.isOnScrollingElement(e)) return;
		this.startX = e.clientX;
		this.startY = e.clientY;
	}
	onMouseUp(this: MouseEventHandler, e: MouseEvent) {
		if (this.isOnScrollingElement(e)) return;
		this.endX = e.clientX;
		this.endY = e.clientY;
		this.takeAction();
	}
	onTouchStart(this: MouseEventHandler, e: TouchEvent) {
		if (this.isOnScrollingElement(e)) return;
		this.startX = e.targetTouches[0].clientX;
		this.startY = e.targetTouches[0].clientY;
	}
	onTouchEnd(this: MouseEventHandler, e: TouchEvent) {
		if (this.isOnScrollingElement(e)) return;
		this.endX = e.changedTouches[0].clientX;
		this.endY = e.changedTouches[0].clientY;
		this.takeAction();
	}
    onWheel(this: MouseEventHandler,e : WheelEvent){
        const self = this
        const element = this.scrollingElement
        if(this.isOnScrollingElement(e)) return resetScrolledTimeout()
        if(this.scrolled) return
        if(!isAgainstScrollSpace() && this.scrollingElement) return
        if(e.deltaY > 0 ) this.navigator.navigateDown()
        if(e.deltaY < 0 ) this.navigator.navigateUp()
        resetScrolledTimeout()

        function resetScrolledTimeout(){
            if(self.scrolledTimeout) clearInterval(self.scrolledTimeout)
            self.scrolled = true
            const timeout = setTimeout(()=>{
                self.scrolled = false
                clearInterval(self.scrolledTimeout)
            },500)
            self.scrolledTimeout = timeout
        }
        function isAgainstScrollSpace(): boolean{
            if(!element) return false
            const isUp = element?.scrollTop == 0
            const isDown = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1
            const forceUp = Boolean(isUp && (e.deltaY < 0))
            const forceDown = Boolean(isDown && (e.deltaY > 0))
            return forceUp || forceDown
        }
    }
	takeAction() {
		const direction: "up" | "down" | "left" | "right" | "click" | undefined = this.getDirection();

		switch (direction) {
			case "up":
				this.navigator.navigateDown();
				break;
			case "down":
				this.navigator.navigateUp();
				break;
			case "left":
				this.navigator.navigateRight();
				break;
			case "right":
				this.navigator.navigateLeft();
				break;
			case "click":
				break;
			default:
				break;
		}
	}
	getDirection(): "up" | "down" | "left" | "right" | "click" | undefined {
		const startX: number = this.startX;
		const startY: number = this.startY;
		const endX: number = this.endX;
		const endY: number = this.endY;
		const absoluteX: number = getAbsoluteX();
		const absoluteY: number = getAbsoluteY();
		const vectorX: number = getVectorX();
		const vectorY: number = getVectorY();
		const threshold: number = 3;
		if (absoluteX < threshold && absoluteY < threshold) return "click";
		if (absoluteX > absoluteY) {
			if (vectorX > 0) return "right";
			return "left";
		} else if (absoluteX < absoluteY) {
			if (vectorY > 0) return "down";
			return "up";
		}

		// return "up"

		function getAbsoluteX(): number {
			return absoluteValue(getVectorX());
		}
		function getAbsoluteY(): number {
			return absoluteValue(getVectorY());
		}
		function getVectorX(): number {
			return endX - startX;
		}
		function getVectorY(): number {
			return endY - startY;
		}
	}
	isOnScrollingElement(e: Event): boolean {
		const scrollableElement: Element | null = isOnScrollable(e);
        const self = this

		return isTotallyScrolled(scrollableElement)

		function isOnScrollable(e: Event) {
			const scrollableElements = document.querySelectorAll("[prevent-card-nav=true");
			const targetParents = e.composedPath();

			for (let i = 0; i < scrollableElements.length; i++) {
				const scrollableElement = scrollableElements[i];
				for (let x = 0; x < targetParents.length; x++) {
					const parent = targetParents[x];
					if (scrollableElement === parent) return scrollableElement;
				}
			}
			return null;
		}
		function isTotallyScrolled(element: Element | null) : boolean{
            self.scrollingElement = element
			if (element === null) return false;

            const isAtBottom = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1;
            const isAtTop = element.scrollTop === 0
            return !(isAtBottom || isAtTop)
		}
	}
}
