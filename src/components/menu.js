import React, { useState, useRef, useEffect } from "react"
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

const Menu = ({ menuState, setMenuState, x, y }) => {
  return (
    <AnimatePresence>
      {menuState && (
        <>
          <motion.div
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible", transition: { delay: 1 } }}
            exit={{ visibility: "hidden", transition: { delay: 1 } }}
            className="products"
          >
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
                      <List key={product.id} product={product} x={x} y={y} />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
          <Panels />
        </>
      )}
    </AnimatePresence>
  )
}

const List = ({ product, x, y }) => {
  const [hoverState, setHoverState] = useState(false)
  const [listPosition, setListPosition] = useState({ top: 0, left: 0 })
  let list = useRef()
  useEffect(() => {
    setListPosition({
      top: list.current.getBoundingClientRect().top,
      left: list.current.getBoundingClientRect().left,
    })
  }, [hoverState])
  return (
    <motion.li ref={list}>
      <Link to={`/product/${product.id}`}>
        <div className="wrapper">
          <div className={`line left flex-${product.leftLineFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>

          <motion.div
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            className="title"
          >
            <h2>
              <motion.div
                variants={titleSlideUp}
                transition={transition}
                className="text"
              >
                {product.title}
              </motion.div>
            </h2>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - listPosition.left + product.offset,
              y: y - listPosition.top,
            }}
            transition={{ ease: "linear" }}
            className="floating-image"
          >
            <Image src={product.src} />
          </motion.div>
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

const Panels = () => {
  const [panelComplete, setPanelComplete] = useState(false)
  return (
    <>
      <motion.div
        style={{
          background: panelComplete ? "#e7e7de" : "#e7dee7",
        }}
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="left-panel-background"
      ></motion.div>
      <motion.div
        style={{
          background: panelComplete ? "#e7e7de" : "#e7dee7",
        }}
        className="right-panel-background"
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        onAnimationComplete={() => setPanelComplete(!panelComplete)}
      ></motion.div>
    </>
  )
}

export default Menu
