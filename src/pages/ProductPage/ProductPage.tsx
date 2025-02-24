import * as React from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {CardImg, Col, Container, Row} from "reactstrap";
import mockImage from "assets/mock.png";
import {T_Product} from "modules/types.ts";
import {ProductMocks} from "modules/mocks.ts";

type Props = {
    selectedProduct: T_Product | null,
    setSelectedProduct: React.Dispatch<React.SetStateAction<T_Product | null>>,
    isMock: boolean,
    setIsMock: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductPage = ({selectedProduct, setSelectedProduct, isMock, setIsMock}: Props) => {
    const { id } = useParams<{id: string}>();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/products/${id}`)
            const data = await response.json()
            setSelectedProduct(data)
        } catch {
            createMock()
        }
    }

    const createMock = () => {
        setIsMock(true)
        setSelectedProduct(ProductMocks.find(product => product?.id == parseInt(id as string)) as T_Product)
    }

    useEffect(() => {
        if (!isMock) {
            fetchData()
        } else {
            createMock()
        }

        return () => setSelectedProduct(null)
    }, []);

    if (!selectedProduct) {
        return (
            <div>

            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col md="6">
                    <CardImg src={isMock ? mockImage as string : selectedProduct.image} className="mb-3" />
                </Col>
                <Col md="6">
                    <h1 className="mb-3">{selectedProduct.name}</h1>
                    <p className="fs-5">Описание: {selectedProduct.description}</p>
                    <p className="fs-5">Цена: {selectedProduct.price} руб.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductPage