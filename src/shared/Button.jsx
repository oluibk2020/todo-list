function Button({ children, buttonType, onClick, buttonClass }) {
  return (
    <button
      type={buttonType}
      className={`btn btn-${buttonClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
Button.defaultProps = {
  buttonClass: "primary",
};
export default Button