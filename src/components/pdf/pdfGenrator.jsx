import ReactToPrint from "react-to-print";
import Button from "../Button";

const PdfGenarator = ({ shear }) => {
    console.log(shear);
  return (
    <div>
      <ReactToPrint
        content={() => shear.current}
        trigger={() => <button>Dowload</button>}
      />
    </div>
  );
};
export default PdfGenarator;
