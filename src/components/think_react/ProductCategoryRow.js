import ProductRow from "./ProductRow";
export default function ProductCategoryRow({ category , categoryList}) {
    return (
        <div className="mb-4">
            <p className="h3 text-primary">{category}</p>
            <ul className="list-group">
                {categoryList.map( (item, i) => <ProductRow key={i} itemName={item.name} itemPrice={item.price}/>)}
            </ul>
        </div>
    )
}