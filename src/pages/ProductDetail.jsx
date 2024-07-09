import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const productsItems = useSelector((state) => state.products);
    const productItem = productsItems.find((item) => item.id === parseInt(id, 10));

    if (!productItem) {
        return <h5>Product item not found</h5>
    }

    return (
        <div className="card text-center container my-5">
            <div className="card-header">
                {productItem.product_name}
            </div>
            <img src={productItem.image} class="card-img-top container my-2" alt={productItem.product_name} style={{ width: '500px'}}/>
            <div className="card-body">
                <h5 className="card-title">{productItem.sub_description}</h5>
                <p className="card-text">{productItem.content}</p>
                <p className="card-text">{productItem.date}</p>
                <p className="card-text">{productItem.price}</p>
            </div>
        </div>
    )
}

export default ProductDetail