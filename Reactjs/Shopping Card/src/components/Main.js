import React from 'react'

const Main = () => {
    const base_url = 'https://dummyjson.com/products'

const fetchProducts = async () => {
    try {
        let data = await fetch(base_url)
        let res = data.json()
        return res
    } catch (error) {
        console.log(error, "something is wrong in the API !!!!");
    }
};

  return (
    <div>
    <main className="my-3">
        <div className="container-md">

            <div className="row my-2">
                <div className="col-md-6">
                    <div className="input-group">
                        <input type="text" className="form-control searchinput" placeholder="Search products"/>
                        <button className="btn btn-primary searchbtn" type="submit">Search</button>
                    </div>
                </div>
            </div>


            {/* <!-- products cards 4 columns per row --> */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 products">

               <div className="col">
                    <div className="card h-100 bg-secondary text-light">
                        <img src="https://i.dummyjson.com/data/products/6/1.png" className="product-image"
                            alt="Product Image"/>
                        <div className="card-body">
                            <h5 className="card-title">Product Title</h5>
                            <p className="card-text">Product Description</p>
                            <a href="#" className="btn btn-primary buynow">Buy Now</a>
                        </div>
                    </div>
                </div>
            
               <div className="col">
                    <div className="card h-100 bg-secondary text-light">
                        <img src="https://i.dummyjson.com/data/products/6/1.png" className="product-image"
                            alt="Product Image"/>
                        <div className="card-body">
                            <h5 className="card-title">Product Title</h5>
                            <p className="card-text">Product Description</p>
                            <a href="#" className="btn btn-primary buynow">Buy Now</a>
                        </div>
                    </div>
                </div>
               <div className="col">
                    <div className="card h-100 bg-secondary text-light">
                        <img src="https://i.dummyjson.com/data/products/6/1.png" className="product-image"
                            alt="Product Image"/>
                        <div className="card-body">
                            <h5 className="card-title">Product Title</h5>
                            <p className="card-text">Product Description</p>
                            <a href="#" className="btn btn-primary buynow">Buy Now</a>
                        </div>
                    </div>
                </div>
               <div className="col">
                    <div className="card h-100 bg-secondary text-light">
                        <img src="https://i.dummyjson.com/data/products/6/1.png" className="product-image"
                            alt="Product Image"/>
                        <div className="card-body">
                            <h5 className="card-title">Product Title</h5>
                            <p className="card-text">Product Description</p>
                            <a href="#" className="btn btn-primary buynow">Buy Now</a>
                        </div>
                    </div>
                </div>
               <div className="col">
                    <div className="card h-100 bg-secondary text-light">
                        <img src="https://i.dummyjson.com/data/products/6/1.png" className="product-image"
                            alt="Product Image"/>
                        <div className="card-body">
                            <h5 className="card-title">Product Title</h5>
                            <p className="card-text">Product Description</p>
                            <a href="#" className="btn btn-primary buynow">Buy Now</a>
                        </div>
                    </div>
                </div>

                 {/* <!-- Repeat the above column code for each product card --> */}

            </div>


        </div>

    </main>
    </div>
  )
}

export default Main