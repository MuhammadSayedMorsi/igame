import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Example() {
  return (
    <div className="pl-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                text-app-basecolor group  py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              {/* <button className="ml-2 flex items-center text-app-basecolor font-bold text-sm"> */}
              <span className="mr-1 bg-black w-4 h-4 rounded-xl text-sm text-white font-bold flex items-center justify-center">
                +
              </span>
              Add a Language
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-48 px-4 mt-3 transform -translate-x-1/2 left-1/2 ">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    <p>long</p>
                    <p>long</p>
                    <p>long</p>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
