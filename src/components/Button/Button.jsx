import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";
import { useUpdateCommentCountMutation } from "../../redux/commentApi";

export const Button = ({ children, counter, role = "thumbsUp", id }) => {
  const [updateCommentCount, { isLoading }] = useUpdateCommentCountMutation();

  const variants = {
    [styles.thumbsUp]: role === "thumbsUp",
    [styles.thumbsDown]: role === "thumbsDown",
  };

  const onBtnHandleClick = () => {
    updateCommentCount({ id, [role]: counter + 1 });
    // console.log("click");
  };

  return (
    <button
      className={classNames(styles.button, variants)}
      type="button"
      counter={counter}
      onClick={onBtnHandleClick}
      id={id}
    >
      {children}

      <span className={styles.counter}>

        <span className={classNames({
          [styles.ping]: isLoading,
        })}></span>
        {counter}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
