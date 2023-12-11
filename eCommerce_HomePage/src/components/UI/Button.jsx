const Button = ({ type, children, className, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-white text-primary text-center rounded-md p-2 px-4 border tracking-wider hover:bg-black/[0.8] hover:text-white hover:brightness-125 hover:shadow-lg active-shadow-inner active-brightness-100 ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
