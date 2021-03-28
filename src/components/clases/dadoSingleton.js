class dadoSingleton{
    constructor(cara1, cara2, cara3, cara4, cara5, cara6){
        this.cara1 = cara1;
        this.cara2 = cara2;
        this.cara3 = cara3;
        this.cara4 = cara4;
        this.cara5 = cara5;
        this.cara6 = cara6;

        if(typeof dadoSingleton.instance === "object"){
            return dadoSingleton.instance;
        }

        dadoSingleton.instance = this;
        return this;

    }   

    randomNumber() {
        var randomdice = (Math.round(Math.random()*5))+1;
        return randomdice;      
    }
}

export default dadoSingleton;