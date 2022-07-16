
import { formatPrice } from 'util/formatters';
import './ProductPrice.css'


type Props = {

price: number;

}


const ProductPrice = ({price}: Props) =>{
  return (


<div className='product-price-conteiner'>

<span>R$</span>
<h3>{formatPrice(price)}</h3>

</div>


  );
}

export default ProductPrice;