import React from 'react'
import {setSingle_Product} from "../../reducers/Action";
import {get_count_item} from "../../Actions/Actions";
// import { PureComponent } from 'react';
import {connect} from "react-redux"  
import Title from "../../components/Title/Title";
import Product from "../../components/Product/Product";
const Products =({storeProducts,get_count_item}) => {
    React.useEffect(()=>{
        get_count_item();
    }); 
        return (
            <>
            <Title title={"Products"}/>
            <div className="container">
                <div className="row">
                {/* Display Products  */}
                {storeProducts.map(item => {
                    return (
                            <Product key={item.id} item={item}/>
                    )
                })}
                </div>
            </div>
            </>
        )   
}
export default connect(
    (coverdata) => {
    return{
       storeProducts: coverdata.productss.storeProducts
    }
  },{setSingle_Product,get_count_item})(Products);
  