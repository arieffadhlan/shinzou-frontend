'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import PaymentOpt from "@/assets/images/paymentopt.png"

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const Dropdown = () => {
  return (
    <>
        <Menu as="div" className="relative block text-left pb-10">
            <div>
                <Menu.Button className="inline-flex w-[28rem] h-[50px] gap-x-1.5 rounded-md bg-neutral-4 px-3 py-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                Gopay
                <ChevronDownIcon className="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <input type="text" />
                </div>
                </Menu.Items>
            </Transition>
        </Menu>
        <Menu as="div" className="relative block text-left pb-10">
            <div>
                <Menu.Button className="inline-flex w-[28rem] h-[50px] gap-x-1.5 rounded-md bg-neutral-4 px-3 py-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                Virtual Account
                <ChevronDownIcon className="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <input type="text" />
                </div>
                </Menu.Items>
            </Transition>
        </Menu>
        <Menu as="div" className="relative block text-left pb-10">
            <div>
                <Menu.Button className="inline-flex w-[28rem] h-[50px] gap-x-1.5 rounded-md bg-neutral-4 px-3 py-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                Credit Card
                <ChevronDownIcon className="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute left-0 z-10 mt-2 w-[28rem] origin-top-right rounded-md bg-white"
                >
                    <Image
                        src={PaymentOpt}
                        alt = "Payment Option"
                        className="mx-auto py-4 mb-2"
                    />
                    <div className="px-20 ">
                        <div className="px-2 pb-7">
                            <label
                            htmlFor="">
                                Card number
                            </label>
                            <input 
                                type="text" 
                                className="block border-b-2 w-[17rem] focus:border-0"
                            />
                        </div>
                        <div className="px-2 pb-7">
                            <label 
                            htmlFor="">
                                Card holder name
                            </label>
                            <input 
                                type="text" 
                                className="block border-b-2 w-[17rem] focus:border-0"
                            />
                        </div>
                        <div className="px-2 pb-7 mb-3 flex flex-wrap gap-2">
                            <div>
                                <label 
                                htmlFor="">
                                    CVV
                                </label>
                                <input 
                                    type="text" 
                                    className="block border-b-2 w-[8.25rem] focus:border-0"
                                />
                            </div>
                            <div>
                                <label 
                                htmlFor="">
                                    Expiry date
                                </label>
                                <input 
                                    type="text" 
                                    className="block border-b-2 w-[8.25rem] focus:border-0"
                                />
                            </div>
                        </div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    </>
  )
}

export default Dropdown;