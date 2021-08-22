import React from 'react'
import {connect} from "react-redux";

import "./Featured.css";

import { add_to_cart } from '../../Actions/Actions';
import {setSingle_Product} from "../../reducers/Action";
import Product from "../Product/Product";
const Featured = ({featured}) => {
    console.log('temp featured',featured);
    return (
        <div className="featured">
            <h2 className="text-center">Featured</h2>
            <div className="container">
                    <div className="row">
                        {featured.map(item => (
                            <Product key={item.id} item={item}/>
                        ))}
                    </div>
            </div>
        </div>
    )
}
export default connect(
    (coverdata) => {
    return{
        featured: coverdata.productss.featured
    }
  },{setSingle_Product,add_to_cart})(Featured);