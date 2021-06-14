import ProductCategoryRow from "./ProductCategoryRow";
import _, { groupBy } from "lodash";
import ProductRow from "./ProductRow";
import db from "./../../utils/firebase";
import { useEffect, useState } from "react";
import Loading from "../Loading";

export default function ProductTale({ filteredText}) {

    const [products, setProducts ] = useState(null);
    let content = null;
    useEffect(() => {
        const products = [];
        db.collection("items").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const item = {
                    id: doc.id,
                    category: doc.data().category,
                    name: doc.data().name,
                    price: doc.data().price
                }
                products.push(item);
            });
        })
        .then(() => {
            setProducts(products);
        })
        
    }, [])

    if( products ) {
        content = products.map( item => {
            return <ProductRow itemName={item.name} itemPrice={item.price} key={item.id} />
        })
    } else {
        content = <Loading />
    }

    return (
        <div>
            <div className="mb-4 text-uppercase d-flex justify-content-between align-items-center border-bottom">
                <span className="h4">Name</span>
                <span className="h4">Price</span>
            </div>
            { content }
        </div>
    )
}