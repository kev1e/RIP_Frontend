export class ItemPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    async render() {

        const result = await fetch(`http://localhost:8000/api/items/${this.id}`);

        const data = await result.json()

        this.parent.innerHTML = "";

        const html = `
            <div class="container p-5">
                <div class="row">
                    <div class="col col-md-6">
                        <img src="${data.image}" class="w-100" alt="">           
                    </div>    
                    <div class="col col-md-6">
                        <h1 class="mb-3">${data.name}</h1>
                        <p class="fs-5">Описание: ${data.description}</p>
                        <p class="fs-5">Цена: ${data.price} руб.</p>  
                    </div>          
                </div>
            </div>      
        `

        this.parent.insertAdjacentHTML('beforeend', html);
    }
}
