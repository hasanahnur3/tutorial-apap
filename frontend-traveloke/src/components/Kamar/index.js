import React from "react";

const Kamar = (props) => {
const { namaKamar, kapasitas } = props;
return (
<div>
 <p>{`${namaKamar} (${kapasitas})`}</p>
 </div>
);
};
export default Kamar;