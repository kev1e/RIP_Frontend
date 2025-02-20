import {handleChangePage} from "../../index.js";

export class Header{
    constructor(parent) {
        this.parent = parent;
    }

    openItemsPage() {
        handleChangePage("items")
    }

    openHomePage() {
        handleChangePage("home")
    }

    render() {
        const html = `
            <header>
                <div class='nav navbar p-3'>
                    <div class='container'>
                        <div class='row w-100'>
                            <div class='col-md-6 d-flex align-items-center'>
                                <a href="/" class="navbar-brand" id="home-page-link">
                                    Электронная таможня                         
                                </a>                            
                            </div>
                            <div class='col-md-6 d-flex justify-content-end align-items-center'>
                                <ul class="navbar-nav fs-5 gap-3">
                                    <li class="navbar-nav">
                                        <a class="nav-link" href="/items" id="items-page-link">
                                            Вещи
                                        </a>                                         
                                    </li>                            
                                </ul>      
                            </div>
                        </div>
                    </div>
               </div>
            </header>
        `

        this.parent.insertAdjacentHTML('beforebegin', html);

        document.querySelector("#items-page-link").addEventListener("click", (event) => {
            console.log("asdfsadfds")
            event.preventDefault();
            this.openItemsPage();
        })

        document.querySelector("#home-page-link").addEventListener("click", (event) => {
            event.preventDefault();
            this.openHomePage();
        })
    }
}