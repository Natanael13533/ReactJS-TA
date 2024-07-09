import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Products() {
    const productsItems = useSelector((state) => state.products);

    return (
        <div className="row container w-50 mx-auto my-5">
            {productsItems.map((product) => (
                <div className="col-sm-4">
                    <div class="card">
                        <img src={product.image} class="card-img-top" alt={product.product_name}/>
                        <div class="card-body">
                            <h5 class="card-title">{product.product_name}</h5>
                            <p class="card-text">{product.sub_description}</p>
                            <Link to={`/redux/${product.id}`} variant="contained" class="btn btn-primary">Detail</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;