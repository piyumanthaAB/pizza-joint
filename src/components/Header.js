import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: {
    rotate:-180
  },
  visible: {
    rotate: 0,
    transition: {duration:1}
  }
}

const pathVarients = {
  hidden: {
    opacity: 0,
    pathLength:0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease:"easeInOut"
    }
  }
}
const pathVarients2 = {
  hidden: {
    opacity: 0,
    pathLength:0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay:1
    }
  }
}

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
          variants={pathVarients}
          initial="hidden"
          animate="visible"
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
          variants={pathVarients2}
          initial="hidden"
          animate="visible"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{delay:0.2, type:'spring' ,stiffness:120}}
      >
        <h1>Pizza Joint Deploy branch</h1>
      </motion.div>
    </header>
  )
}

export default Header;