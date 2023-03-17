import {shopData} from "./shopData";
import Product from "./components/Product/Product";

const Test = () => {

    return(
        <div>
            {shopData.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    )
}
