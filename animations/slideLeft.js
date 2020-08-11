export const slideLeftAnim = {
  initial: {
    x: 100,
    transform: 'rotateZ(0deg)',
  },
  animate: {
    x: [100, -12, 9, -2, 0, 0, 0, 0, 0],
    scale: [1, 1, 1, 1, 1.1, 1.1, 1, 1],
    rotate: [0, 0, 0, 0, 0, 270, 270, 0],
    borderRadius: ['50%', '50%', '50%', '50%', '50%', '20%', '20%', '50%'],
    transition: {
      delay: 1,
      duration: 1.6,
    },
  },
  hover: { scale: 1.1, rotate: 90 },
  tap: { scale: 0.95, rotate: 90 },
}
