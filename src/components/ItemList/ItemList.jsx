import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productList}) => {
    //const {productList}=props
    return(
        <div>
            <h3>Productos:</h3>
            <div>
                {productList.map((product)=><Item key={product.id} product={product}/>)}   
            </div>
        </div>
    );
}; 

export default ItemList;