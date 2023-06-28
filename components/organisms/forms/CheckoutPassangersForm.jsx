"use client";

import { useState } from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const PassangerForm = () => {
  const [familyName, setFamilyName] = useState(false);

  const familyNameHandler = () => {
    setFamilyName(!familyName);
  }
  
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">
        Isi Data Penumpang
      </h2>
      <div className="flex flex-col bg-neutral-1 border border-neutral-2 rounded-lg shadow-2xs">
        <div className="flex justify-center items-center px-4 py-2 rounded-t-lg bg-primary-4">
          <span className="font-medium text-base text-neutral-1">
            Data Diri Penumpang
          </span>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-1">
            <Label id="title" className="font-medium text-sm">Title</Label>
            <Input type="text" variant="secondary" name="title" placeholder="Pilih title" />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="name" className="font-medium text-sm">Nama Lengkap</Label>
            <Input type="text" variant="secondary" name="name" placeholder="Nama lengkap" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Punya nama keluarga?</span>
            <div className="relative flex justify-center">
              <label htmlFor="family_name" className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="family_name" onChange={familyNameHandler} className="sr-only peer" readOnly />
                <div className="peer w-10 h-6 p-0.5 rounded-full bg-neutral-2 after:content-[''] after:absolute after:w-5 after:h-5 after:rounded-[20px] after:bg-white after:transition-all peer-checked:after:-left-[2px] peer-checked:after:border-white peer-checked:bg-primary-5 peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          </div>
          <div className={`${familyName ? "flex" : "hidden"} flex-col gap-1`}>
            <Label id="family_name" className="font-medium text-sm">Nama Keluarga</Label>
            <Input type="text" variant="secondary" name="family_name" placeholder="Nama keluarga" disabled={familyName} />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="phone_number" className="font-medium text-sm">Nomor Telepon</Label>
            <Input type="number" variant="secondary" name="phone_number" placeholder="+62 ." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassangerForm;