export default function Form() {
    return (
        <div className="container">
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-success fs-4">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describe />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fs-4">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary ps-4 pe-4 text-uppercase fs-4">Submit</button>
        </form>
        </div>
    )
}