import React, { useState } from "react";
import { View, Button } from "react-native";
import { useForm } from "react-hook-form";
import FormLayout from "../from-layout/form-layout";
import { formFields } from "../../components/form-filed";

const Form: React.FC = () => {
  const [defaultVaues, setDefaultVaues] = useState({
    firstName: "chandra",
    lastName: "prakash",
    email: "ch@sjj",
    password: "",
    confirmPassword: "",
  });
  console.log(defaultVaues);
  const onSubmit = (data: any) => {
    console.log("---onSubmit---");
    console.log(data);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginLeft: 15,
        marginRight: 20,
      }}
    >
      <FormLayout
        fields={formFields}
        onSubmit={onSubmit}
        defaultValues={defaultVaues}
        setDefaultVaues={setDefaultVaues}
      />
    </View>
  );
};

export default Form;
