import Header from "components/Header/Header.tsx";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs.tsx";
import ProductPage from "pages/ProductPage/ProductPage.tsx";
import ProductsListPage from "pages/ProductsListPage/ProductsListPage.tsx";
import {Route, Routes} from "react-router-dom";
import {Container, Row} from "reactstrap";
import HomePage from "pages/HomePage/HomePage.tsx";
import {useState} from "react";
import {T_Product} from "modules/types.ts";

function App() {

    const [products, setProducts] = useState<T_Product[]>([])

    const [selectedProduct, setSelectedProduct] = useState<T_Product | null>(null)

    const [isMock, setIsMock] = useState(false);

    return (
        <>
            <Header/>
            <Container className="pt-4">
                <Row className="mb-3">
                    <Breadcrumbs selectedProduct={selectedProduct}/>
                </Row>
                <Row>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products/" element={<ProductsListPage products={products} setProducts={setProducts} isMock={isMock} setIsMock={setIsMock} />} />
                        <Route path="/products/:id" element={<ProductPage selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} isMock={isMock} setIsMock={setIsMock} />} />
                    </Routes>
                </Row>
            </Container>
        </>
    )
}

export default App
