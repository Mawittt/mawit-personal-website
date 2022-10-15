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
    }
    showDown(){
        if(!this.current) return
        this.clearEffectStyles()
        this.current.classList.add("open-down")
    }
    closeUp(){
        if(!this.current) return
        this.clearEffectStyles()
        this.current.classList.add("close-up")
    }
    closeDown(){
        if(!this.current) return
        this.clearEffectStyles()
        this.current.classList.add("close-down")
    }

    clearEffectStyles(){
        if(!this.current) return
        this.current.classList.remove("open-up")
        this.current.classList.remove("open-down")
        this.current.classList.remove("close-up")
        this.current.classList.remove("close-down")
        
    }
}