import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const modelVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
    
}

const model = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "200px", opacity: 1 },
    transition:{delay:0.5}
}

const Model = ({showModel, setShowModel}) => {
    
    return (
        <AnimatePresence exitBeforeEnter>
        {showModel &&
            (<motion.div
                className="backDrop"
                variants={modelVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                
            >
                
                <motion.div
                    className="modal"
                    variants={model}
                    initial="hidden"
                    animate="visible"

                >
                    <p>Want to make another Pizza?</p>
                    <Link to='/'>
                        <button>Start Again</button>
                    </Link>
                </motion.div>

            </motion.div>)
        }
    </AnimatePresence>
    )
    
}

export default Model;