import { useSelector } from "react-redux";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const UserForm = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">
        Isi Data Pemesan
      </h2>
      <div className="flex flex-col bg-neutral-1 border border-neutral-2 rounded-lg shadow-2xs">
        <div className="flex justify-center items-center px-4 py-2 rounded-t-lg bg-primary-4">
          <span className="font-medium text-base text-neutral-1">
            Data Diri Pemesan
          </span>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-1">
            <Label id="name" className="font-medium text-sm">Nama Lengkap</Label>
            <Input type="text" variant="secondary" name="name" hookForm={false} value={user?.data?.name ?? ""} placeholder="Pilih title" readOnly disabled />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="email" className="font-medium text-sm">Email</Label>
            <Input type="email" variant="secondary" name="email" hookForm={false} value={user?.data?.email ?? ""} placeholder="contoh@gmail.com" readOnly disabled />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="phone_number" className="font-medium text-sm">Nomor Telepon</Label>
            <Input type="number" variant="secondary" name="phone_number" hookForm={false} value={user?.data?.phone_number ?? ""} placeholder="+62 ." readOnly disabled />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserForm;