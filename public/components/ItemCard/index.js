import {handleChangePage} from "../../index.js";

export class ItemCard {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    render() {
        const html = `
            <div class="col mb-4">
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${"http://localhost:3000/assets/mock.png"}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${this.data.name}</h5>
                        <p class="card-text">Цена: ${this.data.price}₽</p>
                        <button class="btn btn-primary item-btn-${this.data.id}">Открыть</button>
                    </div>
                </div>
            </div>
        `
        this.parent.insertAdjacentHTML('beforeend', html);

        document.querySelector(`.item-btn-${this.data.id}`).addEventListener("click", () => {
            handleChangePage("item", this.data.id)
        })
    }
}