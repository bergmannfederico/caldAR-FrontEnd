import React from "react";
import { Form, Field } from "react-final-form";
import styles from "./characterForm.module.css";

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
                component="input"
                type="text"
                placeholder="ID"
                validate={require}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Name</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
                validate={require}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Address</label>
              <Field
                name="address"
                component="input"
                type="text"
                placeholder="Address"
                validate={require}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Phone</label>
              <Field
                name="phone"
                component="input"
                type="text"
                placeholder="Phone"
                validate={require}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Customer ID</label>
              <Field
                name="customerId"
                component="input"
                type="text"
                placeholder="CustomerID"
                validate={require}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Customer Name</label>
              <Field
                name="customerName"
                component="input"
                type="text"
                placeholder="Customer Name"
                validate={require}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Installed Boilers</label>
              <Field
                name="installedBoilers"
                component="select"
                validate={require}
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
