import {ItemCard} from "../../components/ItemCard/index.js";

export class ItemsPage {
    constructor(parent) {
        this.parent = parent;
    }

    async render() {

        const result = await fetch('http://localhost:8000/api/items/');

        const data = await result.json()

        const html = `
            <div class="container">
                <div class="row my-5">
                    <form class="row d-flex" id="form">
                        <div class="col-md-6">              
                            <input type="text" class="form-control" id="input" placeholder="Введите название">
                        </div>
                        <div class="col-md-6">                
                            <button type="submit" class="btn btn-primary">Поиск</button>
                        </div>
                    <form>                                
                </div>         
                <div class="row row-cols-3 pt-4" id="cards-container">
                    
                </div>   
            </div>
        `

        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML('beforeend', html);

        const cardsContainer = document.querySelector("#cards-container")

        const cards = data.items.map(item => new ItemCard(cardsContainer, item))

        cards.map(card => card.render())

        document.querySelector("#form").addEventListener("submit", async function(e) {
            e.preventDefault()

            const name = document.querySelector("#input").value

            const result = await fetch(`http://localhost:8000/api/items?item_name=${name}`);

            const data = await result.json()

            cardsContainer.innerHTML = "";
            const cards = data.items.map(item => new ItemCard(cardsContainer, item))

            cards.map(card => card.render())

            history.pushState({}, "", `/items?item_name=${name}`);

        }, true)
    }
}
