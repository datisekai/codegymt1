import React, { useEffect, useState } from "react";
import AppInput1 from "../../components/AppInput1";

const BasicInformationPage = () => {
  const [information, setinformation] = useState({
    fullName: "",
    age: "",
    email: "",
    address: "",
  });
  const [fillTrigger, setFillTrigger] = useState(false);
  const [resetStatus, setResetStatus] = useState(false);

  const basicInfo = {
    fullName: "Nguyen Van A",
    age: 23,
    email: "codegym-trainee1@gmail.com",
    address: "Hanoi, Vietnam",
  };

  const onTriggerFill = () => {
    setFillTrigger(!fillTrigger);
  };

  useEffect(() => {
    setinformation(basicInfo);
  }, []);

  useEffect(() => {
    setinformation(basicInfo);
  }, [fillTrigger]);

  useEffect(() => {
    //
    console.log(information);
    return () => {
        setinformation({ fullName: "", age: "", email: "", address: "" });
    };
  }, []);

  const onChangeFill = (e, fieldName) => {
    setinformation({ ...information, [fieldName]: e.target.value });
  };
  return (
    <div>
      {!resetStatus && (
        <div>
          <AppInput1
            label="Name"
            type="text"
            value={information.fullName}
            onChangeCallBack={(e) => onChangeFill(e, "fullName")}
          />
          <AppInput1
            label="Age"
            type="number"
            value={information.age}
            onChangeCallBack={(e) => onChangeFill(e, "age")}
          />
          <AppInput1
            label="Email"
            type="email"
            value={information.email}
            onChangeCallBack={(e) => onChangeFill(e, "email")}
          />
          <AppInput1
            label="Address"
            type="text"
            value={information.address}
            onChangeCallBack={(e) => onChangeFill(e, "address")}
          />
        </div>
      )}
      <button onClick={() => onTriggerFill()}>Click here</button>
      <button onClick={() => setResetStatus(true)}>
        Click here to reset form
      </button>
    </div>
  );
};

export default BasicInformationPage;
