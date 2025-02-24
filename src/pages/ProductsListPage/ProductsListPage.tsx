import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import ProductCard from "components/ProductCard/ProductCard.tsx";
import {ChangeEvent, FormEvent, useEffect} from "react";
import * as React from "react";
import {useAppSelector} from "src/store/store.ts";
import {updateProductName} from "src/store/slices/productsSlice.ts";
import {T_Product} from "modules/types.ts";
import {ProductMocks} from "modules/mocks.ts";
import {useDispatch} from "react-redux";
import "./styles.css"

type Props = {
    products: T_Product[],
    setProducts: React.Dispatch<React.SetStateAction<T_Product[]>>
    isMock: boolean,
    setIsMock: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductsListPage = ({products, setProducts, isMock, setIsMock}:Props) => {

    const dispatch = useDispatch()

    const {product_name} = useAppSelector((state) => state.products)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(updateProductName(e.target.value))
    }

    const createMocks = () => {
        setIsMock(true)
        setProducts(ProductMocks.filter(product => product.name.toLowerCase().includes(product_name.toLowerCase())))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        await fetchProducts()
    }

    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/products/?product_name=${product_name.toLowerCase()}`)
            const data = await response.json()
            setProducts(data.products)
            setIsMock(false)
        } catch {
            createMocks()
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <Container>
            <Row className="mb-5">
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs="8">
                                <Input value={product_name} onChange={handleChange} placeholder="Поиск..."></Input>
                            </Col>
                            <Col>
                                <Button color="primary" className="w-100 search-btn">Поиск</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                {products?.map(product => (
                    <Col key={product.id} sm="12" md="6" lg="4">
                        <ProductCard product={product} isMock={isMock} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductsListPage