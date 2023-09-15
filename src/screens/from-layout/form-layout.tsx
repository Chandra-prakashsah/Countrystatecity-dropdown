import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Controller, useForm } from "react-hook-form";

const FormLayout = (props: any) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({mode:'all',defaultValues:props.defaultValues});
  return (
    <View>
      <FlatList
        data={props.fields}
        renderItem={({ item }) => {
          return (
            <>
              <Controller
                // key={item.name}
                name={item.name}
                control={control}
                rules={item.rules}
                render={({ field }) => (
                  <>
                    {item.fields === "text" ? (
                      <>
                        <TextInput
                          style={styles.input}
                          placeholder={item?.placeholder}
                          value={field.value}
                          onBlur={field.onBlur}
                          onChangeText={(txt)=>  
                          field.onChange(txt)
                          getchangeData(txt)
                        }
                        />
                        {errors[field.name] && (
                          <Text style={{ color: "red" }}>
                            {errors[field.name].message}
                          </Text>
                        )}
                      </>
                    ) : null}
                  </>
                )}
              />
            </>
          );
        }}
      />
      <TouchableOpacity
        onPress={handleSubmit(props.onSubmit)}
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          marginTop: 20,
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginTop: 12,
  },
});

export default FormLayout;
