export default class Card{
    number : number
    current : HTMLElement | null
    next : Card | null
    prev : Card | null

    constructor(current : HTMLElement | null, next : Card | null, prev : Card | null,number : number){
        this.current = current
        this.next = next
        this.prev = prev
        this.number = number
    }

    showUp(){
        if(!this.current) return
        this.clearEffectStyles()
        this.current.classList.add("open-up")
        setTimeout(()=>{
            // * this is so that the position properties of this element's children should 
            // * should behave normally
            this.current?.classList.add("cancel-animation-property")
        },500)
    }
    showDown(){
        if(!this.current) return
        this.clearEffectStyles()
        this.current.classList.add("open-down")
        setTimeout(()=>{
            // * this is so that the position properties of this element's children should 
            // * should behave normally
            this.current?.classList.add("cancel-animation-property")
        },500)
    }
    closeUp(){
        if(!this.current) return
        this.clearEffectStyles()
        this.current.classList.add("close-up")
        setTimeout(()=>{
            this.current?.classList.remove("close-up")
        },500)
    }
    closeDown(){
        if(!this.current) return
        this.clearEffectStyles()
        this.current.classList.add("close-down")
        setTimeout(()=>{
            this.current?.classList.remove("close-down")
        },500)
    }

    clearEffectStyles(){
        if(!this.current) return
        this.current.classList.remove("open-up")
        this.current.classList.remove("open-down")
        this.current.classList.remove("close-up")
        this.current.classList.remove("close-down")
        this.current.classList.remove("cancel-animation-property")
    }
}