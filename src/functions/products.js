
//Constants
import * as productConst from "../constants/productsConst";

const axios = require('axios');

//====================================== GET PRODUCTS ======================================
export async function GetProducts() {
    try {
        const res = await axios({
            method: 'get',
            url: `${productConst.DUMMY_PRODUCTS_API}`
        });

        return res.data;
    } catch (err) {
        console.log(err);
        return err
    }
}
//====================================== GET PRODUCTS ======================================