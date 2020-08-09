export const slideLeftAnim = {
  initial: {
    x: 100,
    transform: 'rotateZ(0deg)',
  },
  animate: {
    x: 0,
    transform: 'rotateZ(90deg)',
    transition: {
      delay: 1,
    },
  },
  hover: { scale: 1.1, transform: 'rotateZ(90deg)' },
  tap: { scale: 0.95 },
}
