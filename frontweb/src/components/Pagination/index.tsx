import { ReactComponent as ArrowIcon } from 'assets/images/Seta.svg';
import './styles.css'

const Pagination = () => {
  return (
    <>
      <div className="pagintion-container">
        <ArrowIcon className='arrow-previous arrow-inactive'/>
        <div className="pagination-item active" >1</div>
        <div className="pagination-item">2</div>
        <div className="pagination-item">3</div>
        <div className="pagination-item">...</div>
        <div className="pagination-item">10</div>
        <ArrowIcon className='arrow-active'/>
      </div>
    </>
  );
};

export default Pagination;
