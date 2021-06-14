export default function SearchBar({setFilteredText, setInStockOnly,  filteredText, inStockOnly}) {
    const onChangeHandler = (e) => {

        setFilteredText(e.target.value);
    }
    return (
        <div className="mb-4">
            <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white" id="inputGroup-sizing-default">Search</span>
                <input type="text" className="form-control" value={filteredText} onChange={onChangeHandler}/>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={inStockOnly} id="flexCheckDefault" onChange={e => setInStockOnly(e.target.value)} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Only show product in stock
                </label>
            </div>
        </div>
    )
}