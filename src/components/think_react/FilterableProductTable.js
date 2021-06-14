import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import ProductTale from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable() {
    const [filteredText, setFilteredText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);



    return (
        <div className="container mt-4">
            <div className="row justify-content-between">
                <div className="col-12 col-md-6  shadow rounded p-4">
                    <SearchBar setFilteredText={setFilteredText} setInStockOnly={setInStockOnly} filteredText={filteredText} inStockOnly/>
                    <ProductTale filteredText={filteredText} inStockOnly />
                </div>
                <div className="col-12 col-md-5 shadow rounded p-4">
                    <AddProduct />
                </div>
            </div>
        </div>
    )
}