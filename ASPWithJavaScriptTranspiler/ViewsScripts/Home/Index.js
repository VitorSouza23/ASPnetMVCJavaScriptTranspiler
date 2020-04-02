function teste() {
    console.log(Array.from(arguments));
}

class Teste {
    constructor() {
        this._juliana = "Juliana";
    }
    

    cadeMeuOculus() {
        console.log(`${this._juliana} vc viu meu óculos?`);
    }
}

$(document).ready((e) => {
    console.log("deu certo");
    teste(1, 2, 3);

    let t = new Teste();
    t.cadeMeuOculus();
});
