import Card from "./Card";

export default class Navigator{
    card : Card | null

    constructor(){
        const cardIds = ["intro","concerns","projects","skills","contact"]
        let current : Card | null = null
        this.card = null
        for (let i = 0; i < cardIds.length; i++) {
            const id = cardIds[i];
            const element = document.getElementById(id)
            if(!this.card) {
                this.card = new Card(element,null,null,i)
                current = this.card
            }else if(!current){
                current = new Card(element,null,this.card,i)
                this.card.next = current
            }else{
                const temp : Card = new Card(element,null,current,i)
                current.next = temp
                current = temp
            }
        }
        if(this.card) this.render(this.card)
        console.log(this.card)
    }

    render(card : Card ){
        card?.showDown()
    }
    navigateUp(){
        if(!this.card?.prev) return
        this.card.closeDown()
        this.card.prev.showDown()
        this.card = this.card.prev

    }
    navigateDown(){
        if(!this.card?.next) return
        this.card.closeUp()
        this.card.next.showUp()
        this.card = this.card.next
    }
    navigateRight(){
        console.log("navigating right")
    }
    navigateLeft(){
        console.log("navigating left")
    }
    navigateTo(number : 0| 1 | 2| 3 | 4 ){
        if(!this.card) return
        if(number < 0 || number > 4) return 
        if(number === this.card?.number) return
        if(number < this.card?.number){
            this.navigateUp()
            setTimeout(()=>{
                this.navigateTo(number)
            },200)
        }
        if(number > this.card.number){
            this.navigateDown()
            setTimeout(()=>{
                this.navigateTo(number)
            },200)
        }
    }


}

