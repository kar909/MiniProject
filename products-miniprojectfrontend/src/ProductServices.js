import axios from 'axios'

const PRODUCT_API_BASE_URL = "http://localhost:9090/api/products"

class ProductServices{
    getProduct(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
}

export default new ProductServices();