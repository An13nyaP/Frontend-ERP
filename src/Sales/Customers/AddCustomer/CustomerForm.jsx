import * as React from "react";
import { useState } from "react";
import { FormInput } from "./FormInput";
import { AddressInput } from "./AddressInput";
import API_ENDPOINTS from "../../../constants/apiEndPoints";

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    emailAddress: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    gstNumber: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINTS.customer.createCustomer}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      alert("Customer added successfully!");
      console.log("Response:", result);

      // Reset form
      setFormData({
        customerName: "",
        emailAddress: "",
        phoneNumber: "",
        addressLine1: "",
        addressLine2: "",
        gstNumber: "",
        city: "",
        state: "",
        pinCode: "",
      });
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("Failed to add customer.");
    }
  };

  const cityStateFields = [
    { label: "City", id: "city" },
    { label: "State", id: "state" },
    { label: "Pin Code", id: "pinCode" },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col rounded-none">
      <div className="flex flex-col px-20 pt-11 pb-32 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 w-full max-w-[979px] max-md:mb-2.5 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <FormInput
                    label="Customer Name"
                    id="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                  />
                  <AddressInput
                    label="Address Line 1"
                    id="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-[33%] max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <FormInput
                    label="Email Address"
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                  <AddressInput
                    label="Address Line 2"
                    id="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-[33%] max-md:w-full">
                <div className="flex flex-col text-sm font-light leading-none text-sky-950 max-md:mt-10">
                  <FormInput
                    label="Phone Number"
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="GST Number"
                    id="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    className="mt-9"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 mt-9 text-sm font-light leading-none text-sky-950 max-md:max-w-full">
            {cityStateFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col flex-1 whitespace-nowrap min-h-[65px]"
              >
                <FormInput
                  label={field.label}
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="flex flex-col justify-center items-center self-center px-5 py-3 mt-20 text-l leading-none text-white bg-blue-700 rounded-xl min-h-[20px] w-[220px] max-md:mt-10"
          >
            Add to list
          </button>
        </div>
      </div>
    </form>
  );
}
