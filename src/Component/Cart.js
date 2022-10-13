import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Cart } from "../Context";
import ItemCart from "./ItemCart";
// import SingleProduct from "./SingleProduct";

const CartPage = () => {
  const { cart } = useContext(Cart);
  console.log(cart);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((ac, curr) => ac + Number(curr.price), 0));
  }, [cart]);
  return (
    <div className="pt-5 mt-5 container">
      <h2 className="text-center">MY CART</h2>

      <div className=" mt-0">
        <div className="table-responsive  ">
          <Table className="table" striped bordered hover>
            <thead>
              <tr className="text-center">
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Product</th>
                <th scope="col">Qty</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {cart.map((prod) => (
              <ItemCart prod={prod} key={prod.id} />
            ))}
          </Table>
          <p className="text-right float-right" style={{ fontSize: 30 }}>
            Total Rs.{total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
