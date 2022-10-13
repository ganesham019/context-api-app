import { faker } from "@faker-js/faker";
import React, { useState } from "react";
// import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));
  //   const [cart, setCart] = useState([]);

  const [product] = useState(productArray);

  return (
    <>
      <div className="row p-0 m-0">
        <div className="col-md-3 bg-dark m-0"></div>
        <div className="col-md-9 d-flexs-col my-3">
          {product.map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
