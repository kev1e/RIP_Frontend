import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {T_Product} from "modules/types.ts";
import "./styles.css"

type Props = {
    selectedProduct: T_Product | null
}

const Breadcrumbs = ({selectedProduct}:Props) => {

    const location = useLocation()

    return (
        <Breadcrumb className="fs-5">
			{location.pathname == "/" &&
				<BreadcrumbItem>
					<Link to="/">
						Главная
					</Link>
				</BreadcrumbItem>
			}
			{location.pathname.includes("/products") &&
                <BreadcrumbItem active>
                    <Link to="/products">
						Вещи
                    </Link>
                </BreadcrumbItem>
			}
            {selectedProduct &&
                <BreadcrumbItem active>
                    <Link to={location.pathname}>
                        { selectedProduct.name }
                    </Link>
                </BreadcrumbItem>
            }
			<BreadcrumbItem />
        </Breadcrumb>
    );
};

export default Breadcrumbs