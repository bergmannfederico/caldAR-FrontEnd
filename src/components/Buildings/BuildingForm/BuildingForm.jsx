import React from "react";
import { Form, Field } from "react-final-form";
import styles from "./characterForm.module.css";
import {
  required,
  name,
  address,
  phone,
  composeValidators,
} from "../../../utils/validations";
import TextInput from "../../../SharedComponents/TextInput";

const BuildingForm = (props) => {
  const onSubmitBuilding = (values) => {
    console.log(values);
    props.addBuilding(values);
  };

  return (
    <div classname={styles.addBuildingContainer}>
      <Form>
        onSubmit={onSubmitBuilding}
        initialValues=
        {{
          id: "",
          name: "",
          address: "",
          phone: "",
          customerId: "",
          customerName: "",
          installedBoilers: "",
        }}
        render
        {({ handleSubmit, form, submitting, pristine, values }) => (
          <form onsUbmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <label>ID</label>
              <Field
                name="id"
                component={TextInput}
                type="text"
                placeholder="ID"
                validate={required}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Name</label>
              <Field
                name="name"
                component={TextInput}
                type="text"
                placeholder="Name"
                validate={composeValidators(required, name)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Address</label>
              <Field
                name="address"
                component={TextInput}
                type="text"
                placeholder="Address"
                validate={composeValidators(required, address)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Phone</label>
              <Field
                name="phone"
                component={TextInput}
                type="text"
                placeholder="Phone"
                validate={composeValidators(required, phone)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Customer ID</label>
              <Field
                name="customerId"
                component={TextInput}
                type="text"
                placeholder="CustomerID"
                validate={required}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Customer Name</label>
              <Field
                name="customerName"
                component={TextInput}
                type="text"
                placeholder="Customer Name"
                validate={required}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Installed Boilers</label>
              <Field
                name="installedBoilers"
                component="select"
                validate={required}
              >
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
              </Field>
            </div>
            <div className={styles.buttonWrapper}>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default BuildingForm;
