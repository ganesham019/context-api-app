import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Cart } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div className="product-card card shadow">
      <img src={prod.image} alt={prod.name} />
      <p className="mb-0 pname">{prod.name}</p>
      <p className="mb-0 price">{prod.price}₹ </p>
      <div className=" my-2">
        {cart.includes(prod) ? (
          <Button
            variant="outline-danger"
            className="shadow-sm"
            size=""
            onClick={() => {
              setCart(cart.filter((e) => e.id !== prod.id));
            }}
          >
            Remove From Cart
            {/* <AiFillDelete classname="p-0" size="20px" /> */}
          </Button>
        ) : (
          <Button
            variant="outline-success"
            className="shadow-sm "
            onClick={() => {
              setCart([...cart, prod]);
            }}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
