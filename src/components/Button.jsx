const Button = ({ text, width }) => (

  <button
    className={`botton p-2 xxxS:px-4 xxxS:py-3 rounded-lg font-semibold text-[17px] list-none ${width}`}
  >
    <a href="">{text}</a>
  </button>
);
export default Button;
