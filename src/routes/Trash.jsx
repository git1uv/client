import React, { useState } from 'react';
import * as T from "../components/Trash/Trash.style";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const card1Variants = {
  hidden: { y: '100%', opacity: 0, rotate: -6},
  visible: { 
    y: 0, 
    opacity: 1,
    rotate: -6, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 10, 
      bounce: 0.1,
    } 
  },
  exit: {
    opacity: 0,
    rotate: -6, 
    transition: { ease: 'easeOut', duration: 0.5 } 
  }
};

const card2Variants = {
  hidden: { y: '100%', opacity: 0, rotate: 6},
  visible: { 
    y: 0, 
    opacity: 1,
    rotate: 6, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 10, 
      bounce: 0.1,
    } 
  },
  exit: {
    opacity: 0,
    rotate: 6, 
    transition: { ease: 'easeOut', duration: 0.5 } 
  }
};

function Trash() {
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const navigate = useNavigate();


  const handleTrashClick = () => {
    setIsCard1Visible(true);
    setIsCard2Visible(true);
  };
  const handleCard2ButtonClick = () => {
    setIsCard1Visible(false);
    setIsCard2Visible(false);
    setTimeout(() => {
      navigate('/trashpaper');
    }, 500); 
  };

  return (
    <T.Container>
      <T.CenterSection>
        <AnimatePresence mode="wait">
          {isCard1Visible && (<T.Card1 
              as={motion.div}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={card1Variants}
              key="card1"/>)}
          {isCard2Visible && (
          <T.Card2 
            as={motion.div}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={card2Variants}
            key="card2">
            <T.Card2Button onClick={handleCard2ButtonClick} />
          </T.Card2>
        )}
        </AnimatePresence>
      </T.CenterSection>
      <T.BottomSection>
      <T.Trash onClick={handleTrashClick}>
          <T.TrashFront />
        </T.Trash>
      </T.BottomSection>
    </T.Container>
  );
}

export default Trash;