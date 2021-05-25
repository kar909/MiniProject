
    import React, { Component } from 'react';
    import ProductServices from './ProductServices'
    class ListProduct extends Component {
        constructor(){
            super();
            this.state={
                products :[]
            }
        }

        componentDidMount(){
            ProductServices.getProduct().then((res)=>
            {
                this.setState({products: res.data})
            }
            );
        }

        render() {
            return (
                <div>
                <h2 className="text-center"> List of Products</h2>
                    <div className="row">
                        <table className="table table-bordered">
                            <tbody>
                                <tr className="text-center">
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Product Description</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product=>
                                        <tr className="text-center" key={product.id}>
                                            <td>{product.productName}</td>
                                            <td>{product.productPrice}</td>
                                            <td>{product.productDescription}</td>
                                        </tr>
                                    )
                                }                                
                            </tbody>
                        </table>
                    </div>           
                </div>
            );
        }
    }
    
    export default ListProduct;
