import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Cart } from "../Context";
import { AiFillDelete } from "react-icons/ai";
const ItemCart = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);

  const addProduct = () => {
    alert(prod.name);
  };
  const deleteProduct = () => {
    alert(prod.name);
  };
  return (
    <tbody>
      <tr class="text-center">
        <td>{prod.name}</td>
        <td>{prod.price}</td>
        <td>
          <img
            className="card text-center mx-auto"
            src={prod.image}
            alt={prod.name}
            style={{ width: 50 }}
          />
        </td>
        <td>
          <div class="btn-group" role="group" aria-label="">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={deleteProduct}
            >
              -
            </button>
            <input
              type="text"
              className=" border-0 "
              placeholder="0"
              style={{ width: 80 }}
            />
            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={addProduct}
            >
              +
            </button>
          </div>
        </td>
        <td>
          <Button
            variant="danger"
            className="shadow-sm"
            size=""
            onClick={() => {
              setCart(cart.filter((e) => e.id !== prod.id));
            }}
          >
            <AiFillDelete classname="p-0" size="20px" />
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default ItemCart;
