import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import classes from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [icon, setIcon] = useState(true);
  const navitems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Book a Session", path: "/booksession" },
    { id: 3, name: "Become a Tutor", path: "/becometutor" },
    {
      id: 4,
      name: "503-342-7214",
      href: "tel:503-342-7214",
      className: "font-semibold text-[#a52a2a]",
      class: "font-semibold text-white",
    },
  ];

  return (
    <div className={classes.navbar}>
      <div className={classes.nav}>
        <img src={Logo} className={classes["img"]} />
        <h1 className={classes["h1"]}>Learnhall</h1>
      </div>

      <div className={classes.div}>
        <ul className={classes["ul"]}>
          {navitems.map((ni) => (
            <li className={`${classes.li} ${ni.className}`} key={ni.id}>
              <Link to={ni.path}>
                <a href={ni.href}>{ni.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.icon} onClick={() => setIcon(!icon)}>
        {icon ? <RxHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      <AnimatePresence>
        {!icon && (
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{
              opacity: 0,
              y: "-50%",
              transition: { duration: "0.35" },
            }}
            transition={{
              type: "just",
              stiffness: "100",
              duration: "0.75",
            }}
            className={classes.mobilenav}
          >
            <motion.ul
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{
                opacity: 0,
                y: "-50%",
                transition: { duration: "0.35" },
              }}
              transition={{
                type: "spring",
                stiffness: "100",
                duration: "0.75",
              }}
              className={classes["ul"]}
            >
              {navitems.map((ni) => (
                <li className={`${classes.li} ${ni.class}`} key={ni.id}>
                  <Link onClick={() => setIcon(!icon)} to={ni.path}>
                    <a href={ni.href}>{ni.name}</a>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

{
  /* <ul className={classes["ul"]}>
  
</ul>; */
}
