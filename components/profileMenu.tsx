import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import SignIn from "./SignIn";
import Avatar from "./avatar";

export default function ProfileMenu() {
  return (
    <Popover className="relative">
      <PopoverButton>
        <Avatar />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute right-0 z-10 mt-3 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-60 flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-2">
            <SignIn />
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}