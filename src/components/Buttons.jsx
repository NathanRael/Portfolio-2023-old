import { motion } from "framer-motion";
import '../animation/animation.css';

export const buttonVariant = {

  hover: {
    backgroundColor: 'transparent',
    scale: 1.1,
    transition: { duration: 0.2 },
  },

  tap: {
    scale: 0.9,
  },

  constraint: {
    top: 5,
    left: 5,
    bottom: 5,
    right: 5,
  },
};

const IconFs = {
  fontSize: "24px",
};

export function BigButton({
  name = "Button",
  icon = "bi bi-arrow-right",
  color = "btn-primary",
  inverseIcon = false,
  handleClick,
}) {
  return (
    <motion.button
      drag
      dragConstraints={buttonVariant.constraint}
      variants={buttonVariant}
      whileHover="hover"
      whileTap="tap"
      className={`btn ${color}  btn-lg  px-32 py-16 text-ligh d-flex align-items-center justify-content-center _body shadow _animButton`}
      style={{ width: "max-content" }}
      onClick={handleClick}
    >
      {inverseIcon ? <i className={`${icon} me-16`} style={IconFs}></i> : ""}
      <span>{name}</span>
      {!inverseIcon ? <i className={`${icon} ms-16`} style={IconFs}></i> : ""}
    </motion.button>
  );
}
export function MdButton({
  name = "Button",
  icon = "bi bi-arrow-right",
  color = "btn-primary",
  inverseIcon = false,
  handleClick,
}) {
  return (
    <motion.button
      drag
      dragConstraints={buttonVariant.constraint}
      variants={buttonVariant}
      whileTap="tap"
      whileHover="hover"
      className={`btn ${color} px-24  py-12 text-ligh d-flex align-items-center justify-content-center _body shadow _animButton`}
      onClick={handleClick}
    >
      {inverseIcon ? <i className={`${icon} me-12`} style={IconFs}></i> : ""}
      <span>{name}</span>
      {!inverseIcon ? <i className={`${icon} ms-12`} style={IconFs}></i> : ""}
    </motion.button>
  );
}

export function IconButton({
  icon = "bi bi-plus-lg",
  color = "btn-primary",
  href,
  handleClick,
}) {
  return (
    <motion.a
      drag
      dragConstraints={buttonVariant.constraint}
      variants={buttonVariant}
      whileHover="hover"
      whileTap="tap"
      onClick={handleClick}
      className={`btn ${color} p-12 rounded-5 d-flex align-items-center justify-content-center _body shadow _animButton`}
      style={{ width: "48px", height: "48px" }}
      href={href}
    >
      <i className={icon} style={{ fontSize: "24px" }}></i>
    </motion.a>
  );
}
