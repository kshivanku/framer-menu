import React from "react"
import { Close } from "../icons/icons"
import { Link } from "gatsby"
import Image from "./gatsby-images/images"
import data from "../data/products.json"

import { motion, AnimatePresence } from "framer-motion"

//Transition
const transition = {
  duration: 0.8,
  ease: [0.6, -0.5, 0.01, 0.9],
}

//Variants
const titleSlideUp = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
  },
}

const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
}

const maskAnimation = {
  initial: {
    width: "100%",
  },
  animate: {
    width: 0,
  },
}

const Menu = ({ menuState, setMenuState }) => {
  return (
    <>
      <AnimatePresence>
        {menuState && (
          <motion.div exit={{ opacity: 0 }} className="products">
            <div className="menu-title">Products</div>
            <div onClick={() => setMenuState(false)} className="close">
              <Close />
            </div>
            <div className="menu">
              <div className="container">
                <div className="menu-inner">
                  <motion.ul
                    variants={parent}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {data.map(product => (
                      <List key={product.id} product={product} />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const List = ({ product }) => {
  return (
    <motion.li>
      <Link to={`/product/${product.id}`}>
        <div className="wrapper">
          <div className={`line left flex-${product.leftLineFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>

          <div className="title">
            <h2>
              <motion.div
                variants={titleSlideUp}
                transition={transition}
                className="text"
              >
                {product.title}
              </motion.div>
            </h2>
          </div>
          <div
            className="thumbnail"
            style={{ left: product.thumbnailPosition }}
          >
            <Image src={product.src} />
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <div className="floating-image">
            <Image src={product.src} />
          </div>
          <div className={`line right flex-${product.rightLineFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask right"
            ></motion.div>
          </div>
        </div>
      </Link>
    </motion.li>
  )
}

export default Menu
