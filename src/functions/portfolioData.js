export default class PortfolioData{
    #data = [];
    constructor(){

    }

    save(dataName, content){
        localStorage.setItem(dataName, JSON.stringify(content));
    }

    load (dataName){
        this.#data = JSON.parse(localStorage.getItem(dataName));
        return this.#data;
    }
}