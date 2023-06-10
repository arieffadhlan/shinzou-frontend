import Image from "next/image"
import BoxIcon from "../assets/fi_box.png"
import HeartIcon from "../assets/fi_heart.png"
import DollarIcon from "../assets/fi_dollar-sign.png"

const BoxFilter = () => {
    return (
        <>
            <div className="BoxFilter ml-12 my-[100px] text-base ">
                <div className=" border-2 shadow-md w-[268px] h-[248px] rounded-lg">
                    <div className="font-bold pl-6 pt-6  ">
                    <p>Filter</p>
                    </div>

                    <div className="flex gap-2.5 border-b mt-6 mx-7">
                        <Image src={BoxIcon} alt="BoxIcon">
                                
                        </Image>
                        Transit 
                    </div>

                    <div className="flex gap-2.5 border-b mt-6 mx-7" >
                        <Image src={HeartIcon} alt="HeartIcon">
                                
                        </Image>
                        Fasilitas
                    </div>

                    <div className="flex gap-2.5 border-b mt-6 mx-7">
                        <Image src={DollarIcon} alt="DollarIcon">
                                
                        </Image>
                        Harga
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxFilter