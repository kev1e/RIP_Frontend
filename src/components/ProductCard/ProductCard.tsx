import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import mockImage from "assets/mock.png";
import {Link} from "react-router-dom";
import {T_Product} from "modules/types.ts";

interface ProductCardProps {
    product: T_Product,
    isMock: boolean
}

const ProductCard = ({product, isMock}: ProductCardProps) => {
    return (
        <Card key={product.id} style={{width: '18rem', margin: "0 auto 50px" }}>
            <CardImg
                src={isMock ? mockImage as string : product.image}
                style={{"height": "200px"}}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {product.name}
                </CardTitle>
                <CardText>
                    Цена: {product.price} руб.
                </CardText>
                <Link to={`/products/${product.id}`}>
                    <Button color="primary">
                        Открыть
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default ProductCard