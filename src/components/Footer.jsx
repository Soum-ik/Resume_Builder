import styles from "../style/Style";

const Footer = () => (
  <div
    className={`${styles.marginX} ${styles.flexCenter} bg-primary/5 font-semibold text-[14px] rounded-xl xs:text-[14px] ss:text-[16px] sm:text-[18px] lg:text-[20px] mb-1 `}
  >
    Degin and Develop by {" " + " "}
    <a
      className=" text-primary pl-2"
      href="https://soumik-info.netlify.app/"
      target="_blank"
    >
      {"  "}Soumik{" "}
    </a>
  </div>
);
export default Footer;
