import React, { useContext } from 'react';
import './CSS/AllCategory.css';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import { AllContext } from '../context/AllContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const AllCategory = (props) => {
  const { all_products } = useContext(AllContext);

  return (
    <div className="all-category">

      
      <div className="category-text">
        <h2
          className="category-title"
        >
          {props.title}
        </h2>

        {props.description && (
          <p
            className="category-description"
          >
            {props.description}
          </p>
        )}

       
      </div>

      
      <div className="allcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_products.length} products
        </p>
        <div className="drop">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

     
      <div className="allcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
        
      </div>

      <RelatedProducts category={props.category} />

      <div className="allcategory-loadmore">
        Explore More
      </div>

    </div>
  );
};

export default AllCategory;
