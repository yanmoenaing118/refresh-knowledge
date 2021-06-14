import { useState } from "react";
import db from "./../../utils/firebase";

export default function AddProduct() {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [itemCategory, setItemCategory] = useState("");

    const setItemNameHandler = (e) => {
        setItemName(e.target.value);
    }

    const setItemPriceHandler = (e) => {
        setItemPrice(parseInt(e.target.value));
    }

    const setItemCategoryHandler = (e) => {
        setItemCategory(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const item = {
            name: itemName,
            price: itemPrice,
            category: itemCategory
        }

        db.collection("items").add(item)
        .then((docRef) => {

            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }
  return (
      <div>
          <h1 className="text-uppercase text-primary h4">Add a new item</h1>
          <form onSubmit={submitHandler}>
            <div className="form-group mb-4">
            <label for="exampleFormControlInput1">Item's Name</label>
            <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="football"
                value={itemName}
                onChange={setItemNameHandler}
            />
            </div>

            <div className="form-group mb-4">
            <label for="exampleFormControlInput1">Item's Price</label>
            <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="443$"
                value={itemPrice}
                onChange={setItemPriceHandler}
            />
            </div>

            <div className="form-group mb-4">
            <label for="exampleFormControlSelect1">Select Categories</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={setItemCategoryHandler}>
                <option>Sporting Goods</option>
                <option>Electronics</option>
            </select>
            </div>
            <button type="submit" class="btn btn-primary bg-info border-info ps-4 pe-4 shadow-sm">Submit</button>
        </form>
      </div>
  );
}
