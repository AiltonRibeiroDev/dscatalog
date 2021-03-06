import axios from 'axios';
import ProductCard from 'components/Navbar/ProductCard';
import Pagination from 'components/Pagination';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { AxiosParams } from 'types/vendor/axios';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import CardLoader from './cardLoader';
import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoanding] = useState(false);

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };

    setIsLoanding(true);

    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoanding(false)
      });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálago de produtos</h1>
      </div>
      <div className="row">
        {isLoading ? <CardLoader/> : (
          page?.content.map((product) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
            <Link to={'/products/1'}>
              <ProductCard product={product} />
            </Link>
          </div>
        )))}

        <div className="row">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
