import { motion } from 'framer-motion'
import Container from './Container'

const RotatingRectangle = () => {
  return (
    <Container>
      <motion.div
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className="h-12 w-12 bg-blue-400"
      ></motion.div>
    </Container>
  )
}

export default RotatingRectangle
