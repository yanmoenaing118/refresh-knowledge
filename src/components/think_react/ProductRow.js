export default function ProductRow({itemName, itemPrice}) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {itemName}
            <span className="text-secondary">${itemPrice}</span>
        </li>
    )
}