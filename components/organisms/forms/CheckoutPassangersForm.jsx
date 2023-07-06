"use client";

import { useState } from "react";

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const PassangerForm = ({ totalPassengers, passengers, setPassengers }) => {
  const [familyNameToogle, setFamilyNameToogle] = useState(
    Array.from(Array(totalPassengers), (_, index) => ({
      id: index,
      toggle: false
    }))
  );

  const familyNameToggleHandler = (_, index) => {
    let newArray = [...familyNameToogle];

    newArray[index].toggle = !familyNameToogle[index].toggle; 
    setFamilyNameToogle(newArray);
  }

  const handleInputChange = (event, index) => {
    let newArray = [...passengers];
    const name = event.target.name.split("-");
    const value = event.target.value;

    newArray[index][name[0]] = value; 
    setPassengers(newArray);
  }
  
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">
        Isi Data Penumpang
      </h2>
      <div className="flex flex-col gap-7">
        {Array.from(Array(totalPassengers), (_, index) => (
          <div key={index} className="flex flex-col bg-neutral-1 border border-neutral-2 rounded-lg shadow-2xs">
            <div className="flex justify-center items-center px-4 py-2 rounded-t-lg bg-primary-4">
              <span className="font-medium text-base text-neutral-1">
                Data Diri Penumpang {index + 1}
              </span>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-1">
                <Label id={`title-${index}`} className="font-medium text-sm">Title</Label>
                <select onChange={(event) => handleInputChange(event, index)} name={`title-${index}`} id={`title-${index}`} placeholder="Pilih title" className="input py-2.5 rounded-lg h-10">
                  <option value="" hidden></option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <Label id={`name-${index}`} className="font-medium text-sm">Nama Lengkap</Label>
                <Input onChange={(event) => handleInputChange(event, index)} type="text" variant="secondary" name={`name-${index}`} hookForm={false} placeholder="Nama lengkap" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Punya nama keluarga?</span>
                <div className="relative flex justify-center">
                  <label htmlFor={`toggle-${index}`} className="relative inline-flex items-center cursor-pointer">
                    <input onChange={(event) => familyNameToggleHandler(event, index)} type="checkbox" id={`toggle-${index}`} className="sr-only peer" readOnly />
                    <div className="checkbox-toggle"></div>
                  </label>
                </div>
              </div>
              <div className={`${familyNameToogle[index].toggle ? "flex" : "hidden"} flex-col gap-1`}>
                <Label id={`family_name-${index}`} className="font-medium text-sm">Nama Keluarga</Label>
                <Input onChange={(event) => handleInputChange(event, index)} type="text" variant="secondary" name={`family_name-${index}`} hookForm={false} placeholder="Nama keluarga" disabled={!familyNameToogle[index].toggle} />
              </div>
              <div className="flex flex-col gap-1">
                <Label id={`identity_number-${index}`} className="font-medium text-sm">Nomor Identitas</Label>
                <Input onChange={(event) => handleInputChange(event, index)} type="number" variant="secondary" name={`identity_number-${index}`} hookForm={false} placeholder="KTP/Paspor" />
              </div>
              <div className="flex flex-col gap-1">
                <Label id={`phone_number-${index}`} className="font-medium text-sm">Nomor Telepon</Label>
                <Input onChange={(event) => handleInputChange(event, index)} type="number" variant="secondary" name={`phone_number-${index}`} hookForm={false} placeholder="+62 ." />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PassangerForm;