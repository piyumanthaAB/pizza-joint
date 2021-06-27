import React,{useState,useEffect }from 'react';
import { motion,AnimatePresence } from 'framer-motion';


const containerVarients = {
  hidden: {
    opacity: 0,
    x:'100vw'
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      damping:8,
      when: "beforeChildren",
      staggerChildren:0.2
    }
  },
  exit: {
    x: '-100vw',
    transition: {ease:'easeInOut'}
  }
}

const childVarients = {
  hidden: {
    opacity:0
  },
  visible: {
    opacity:1
  }
}

const buttonVarients = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px  8px rgb(255,255,255)",
    transition: {
      duration:0.3,
      yoyo:Infinity
    }
            
  }
}


const Order = ({ pizza,setShowModel }) => {

  useEffect(() => {
    
    setTimeout(() => {
      setShowModel(true)
    }, 3000);
  }, [setShowModel])
  
  return (

    <motion.div className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
            
          
      <motion.p variants={childVarients}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVarients}>

      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;