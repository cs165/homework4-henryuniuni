
class loading {
    constructor(containerElement){
        //const tmp = document.querySelector("#loading");
        this.containerElement = containerElement;
    }
    show(){
        this.containerElement.classList.add('inactive');
    }
    hide(){
        this.containerElement.classList.remove('inactive');
    }
}