const easing = [0.6, -0.05, 0.01, 0.99]

export const stagger = {
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
}

export const staggerLonger = {
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

export const fadeIn = {
  initial: {
    opacity: 0,
    transition: { duration: 1.6, ease: easing },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: easing,
    },
  },
}
