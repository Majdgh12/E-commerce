import React from 'react';
import "./NewCollection.css"
import new_collection from "../Assests/new_collections"
import Item from '../item/item';
const NewCollection = () => {
    return (
        <div className='newcollection'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i}
                        id={Item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price} />
                })}

            </div>
        </div>
    );
}

export default NewCollection;
