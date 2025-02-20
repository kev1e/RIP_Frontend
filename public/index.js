import {HomePage} from "./pages/HomePage/index.js";
import {ItemsPage} from "./pages/ItemsListPage/index.js";
import {Header} from "./components/Header/index.js";
import {ItemPage} from "./pages/ItemPage/index.js";


const fetchItems = async () => {
    const result = await fetch('http://localhost:8000/api/items/');

    const data = await result.json()

    console.log(data)
}

fetchItems()


let currentPage;

export const handleChangePage = (page, params) => {
    console.log("handleChangePage")
    console.log("page: " + page)

    const root = document.querySelector("#content")

    if (page === "home") {
        currentPage = new HomePage(root);
        history.pushState({}, "", `/home`);
    } else if (page === "items") {
        currentPage = new ItemsPage(root);
        history.pushState({}, "", `/items`);
    } else if (page === "item") {
        currentPage = new ItemPage(root, params);
        history.pushState({}, "", `/items/${params}`);
    }

    currentPage.render()
}

document.addEventListener('DOMContentLoaded', function(){
    const root = document.querySelector("#root")

    const header = new Header(root)
    header.render()

    const content = document.querySelector("#content")
    currentPage = new HomePage(content)
    currentPage.render()
});
