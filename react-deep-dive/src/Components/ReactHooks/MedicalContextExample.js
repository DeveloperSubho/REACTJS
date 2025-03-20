import React, { useContext } from "react";

const MedicalContext = React.createContext({});

const MedicalContextExample = () => {
  const medicalData = useContext(MedicalContext);
  return (
    <div>
      <p>Medication Supplier Name: {medicalData.supplierName}</p>
      <p>Medication Product Name: {medicalData.product}</p>
    </div>
  );
};

const App = () => (
  <MedicalContext.Provider
    value={{ supplierName: "Bayer", product: "Aspirin" }}
  >
    <MedicalContextExample />
  </MedicalContext.Provider>
);

export default App;
