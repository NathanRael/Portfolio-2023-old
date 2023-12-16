export const hoverVariant = {
    hover : {
      scale : 1.2,
      transition : {duration : 0.2}
    }
  }

export const heroTextVariant = {
    visible: i => ({
      opacity :1,
      x : 0,
      transition : {
        duration : 0.5,
        delay : i * 0.3
      }
    }),
    hidden : {opacity : 0, x : -100},
}

export const heroImageVariant = {
  visible : (i) => ({
    opacity : 1,
    scale : 1,
    transition : {
      duration : 0.7,
      delay : i * 0.5
    }
  }),
  hidden : {opacity : 0, scale : 0.8}
}

export const subtitleTextVariant = {
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: i,
    },
  }),

  hidden: { opacity: 0, scale: 0.8 },
};
export const aboutMeVariant = {
  visible: i => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: i,
    },
  }),

  hidden: { opacity: 0},
};
