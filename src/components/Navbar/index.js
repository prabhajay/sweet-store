import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@radix-ui/react-menubar";
import Link from "next/link";
import { FaMagnifyingGlass, FaUsers, FaCartArrowDown } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <Menubar className="flex items-center justify-between p-4 bg-gray-100 ">
        {/* Left Side Menu */}
        <MenubarMenu>
          <Link href="/">
            <MenubarTrigger className="px-4 py-2 font-semibold text-gray-700 hover:text-blue-600">
              Home
            </MenubarTrigger>
          </Link>
          <Link href="/about">
            <MenubarTrigger className="px-4 py-2 font-semibold text-gray-700 hover:text-blue-600">
              About Us
            </MenubarTrigger>
          </Link>

          {/* Sweets Submenu */}
          <MenubarMenu>
            <MenubarTrigger className="px-4 py-2 font-semibold text-gray-700 hover:text-blue-600">
              Sweets
            </MenubarTrigger>

            <MenubarContent className="bg-white shadow-lg rounded-md p-2">
              <Link href="/sweets/all-sweet">
                <MenubarItem className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600">
                  All Sweets
                </MenubarItem>
              </Link>
              <Link href="/sweets/assorted-sweet">
                <MenubarItem className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600">
                  Assorted sweets
                </MenubarItem>
              </Link>
              <Link href="/sweets/badam-sweet">
                <MenubarItem className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600">
                  Badam sweets
                </MenubarItem>
              </Link>
              <Link href="/sweets/cashew-sweet">
                <MenubarItem className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600">
                  Cashew sweets
                </MenubarItem>
              </Link>
              <Link href="/sweets/dry-fruit-sweet">
                <MenubarItem className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600">
                  Dry fruit sweet
                </MenubarItem>
              </Link>
              <Link href="/sweets/ghee-sweet">
                <MenubarItem className="px-4 py-2 hover:bg-gray-200">
                  ghee sweets
                </MenubarItem>
              </Link>
              <Link href="/sweets/karupatti-sweet">
                <MenubarItem className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600">
                  Karupatti sweets
                </MenubarItem>
              </Link>
              <Link href="/sweets/milk-sweet">
                <MenubarItem className="px-4 py-2 hover:bg-gray-200 hover:text-blue-600">
                  Milk sweets
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>

          <Link href="/karas">
            <MenubarTrigger className="px-4 py-2 font-semibold text-gray-700 hover:text-blue-600">
              Karas
            </MenubarTrigger>
          </Link>
        </MenubarMenu>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <Link href="/users/sign-in">
            <button aria-label="Sign In">
              <FaUsers className="cursor-pointer text-gray-700 hover:text-blue-600" />
            </button>
          </Link>
          <Link href="/carts">
            <button aria-label="View Cart">
              <FaCartArrowDown className="cursor-pointer text-gray-700 hover:text-blue-600" />
            </button>
          </Link>
          <Link href="/search">
            <button aria-label="Search">
              <FaMagnifyingGlass className="cursor-pointer text-gray-700 hover:text-blue-600" />
            </button>
          </Link>
        </div>
      </Menubar>
    </div>
  );
}
