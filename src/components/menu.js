import React from "react"
import { Close } from "../icons/icons"
import { Link } from "gatsby"
import Image from "./gatsby-images/images"
import data from "../data/products.json"

const Menu = ({ menuState, setMenuState }) => {
  return (
    <>
      {menuState && (
        <div className="products">
          <div className="menu-title">Products</div>
          <div onClick={() => setMenuState(false)} className="close">
            <Close />
          </div>
          <div className="menu">
            <div className="container">
              <div className="menu-inner">
                <ul>
                  {data.map(product => (
                    <List key={product.id} product={product} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const List = ({ product }) => {
  return (
    <li>
      <Link to={`/product/${product.id}`}>
        <div className="wrapper">
          <div className={`line left flex-${product.leftLineFlex}`}></div>
          <div className="title">
            <h2>
              <div className="text">{product.title}</div>
            </h2>
          </div>
          <div
            className="thumbnail"
            style={{ left: product.thumbnailPosition }}
          >
            <Image src={product.src} />
          </div>
          <div className="floating-image">
            <Image src={product.src} />
          </div>
          <div className={`line right flex-${product.rightLineFlex}`}></div>
        </div>
      </Link>
    </li>
  )
}

export default Menu
