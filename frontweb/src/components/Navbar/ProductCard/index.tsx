import ProductIMG from 'assets/images/product.png'
import ProductPrice from 'components/ProductPrice/ProductPrice';
import './style-Card.css'

const ProductCard = () =>{
return (

<div className="base-card product-card">

<div className='card-top-container'>

<img src={ProductIMG} alt="Computador" />

</div>

<div className="card-bottom-container">

<h6>Computador Desktop - Intel Core i7</h6>
<ProductPrice/>

</div>



</div>


);
};


export default ProductCard;