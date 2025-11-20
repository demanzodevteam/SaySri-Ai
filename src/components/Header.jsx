import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Img from "../../public/images/Black_logo.png"

const navigation = [
  { name: 'Home', href: '#', current: true },
  {
    name: 'Solutions',
    href: '#',
    current: false,
    children: [
      { name: 'Analytics', href: '#' },
      { name: 'Automation', href: '#' },
      { name: 'Integrations', href: '#' },
    ],
  },
  {
    name: 'Company',
    href: '#',
    current: false,
    children: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
  },
  {
    name: 'Insights',
    href: '#',
    current: false,
    children: [
      { name: 'Blog', href: '#' },
      { name: 'Resources', href: '#' },
      { name: 'Case Studies', href: '#' },
    ],
  },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent backdrop-blur-md pt-4 z-99 sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto container px-4 sm:px-6 !py-0">
            <div className="relative flex h-20 items-center justify-between ">

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden sticky top-0">
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo + Links */}
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                {/* Logo */}
                <div className="flex shrink-0 items-center mr-6">
                  <img src={Img.src} alt="Logo" className="h-10 sm:h-12 w-auto" />
                </div>

                {/* Nav Links - Desktop */}
                <div className="hidden md:flex items-center ms-6 space-x-4 lg:space-x-1">
                  {navigation.map((item) => (
                    item.children ? (
                      <Menu as="div" key={item.name} className="relative inline-block text-left">
                        <div>
                          <MenuButton className={classNames(
                            item.current ? 'text-black font-semibold' : 'text-black hover:text-gray-600',
                            'inline-flex items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none'
                          )}>
                            <span>{item.name}</span>
                            <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                          </MenuButton>
                        </div>

                        <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-black/80 backdrop-blur-md ring-1 ring-black/30 focus:outline-none z-50">
                          <div className="py-1">
                            {item.children.map((child) => (
                              <MenuItem key={child.name}>
                                {({ active }) => (
                                  <a
                                    href={child.href}
                                    className={classNames(
                                      active ? 'bg-white/10 text-white' : 'text-gray-200',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    {child.name}
                                  </a>
                                )}
                              </MenuItem>
                            ))}
                          </div>
                        </MenuItems>
                      </Menu>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'text-black font-semibold' : 'text-black hover:text-gray-600',
                          'px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>

              {/* Right Button - hide text on very small screens, show icon optionally */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center bg-[#8CB183] text-white font-semibold rounded-md px-4 py-2 border-2 border-transparent hover:bg-transparent hover:text-[#8CB183] hover:border-[#8CB183] transition-all duration-200 hover:cursor-pointer"
                >
                  GET A DEMO
                </button>

                {/* Small-screen visible CTA: simple icon button to save space */}
                <a href="#" className="inline-flex sm:hidden items-center justify-center h-10 w-10 rounded-md bg-white/10 text-white hover:bg-white/20">
                  <span className="sr-only">Get a Demo</span>
                  {/* simple dot or icon can be swapped */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2 10a8 8 0 1116 0A8 8 0 012 10zm8-3a1 1 0 100 2 1 1 0 000-2zm1 6a1 1 0 10-2 0v1h2v-1z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu - full width stacked with collapsible children */}
          <Disclosure.Panel className="sm:hidden z-99 sticky top-0">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {/* Parent link */}
                  <Disclosure.Button
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>

                  {/* If there are children, show them collapsed by default but visible stacked */}
                  {item.children && (
                    <div className="pl-5 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA full width */}
              <div className="mt-3 px-2">
                <a href="#" className="block w-full text-center rounded-md bg-white text-black font-semibold px-4 py-2">
                  Get a Demo
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



// import { Fragment } from "react";
// import { Disclosure } from "@headlessui/react";
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
// import {
//   Bars3Icon,
//   XMarkIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/outline";
// import Img from "../../public/images/Black_logo.png";

// const navigation = [
//   { name: "Home", href: "#", current: true },
//   {
//     name: "Solutions",
//     href: "#",
//     current: false,
//     children: [
//       { name: "Analytics", href: "#" },
//       { name: "Automation", href: "#" },
//       { name: "Integrations", href: "#" },
//     ],
//   },
//   {
//     name: "Company",
//     href: "#",
//     current: false,
//     children: [
//       { name: "About Us", href: "#" },
//       { name: "Careers", href: "#" },
//       { name: "Press", href: "#" },
//     ],
//   },
//   {
//     name: "Insights",
//     href: "#",
//     current: false,
//     children: [
//       { name: "Blog", href: "#" },
//       { name: "Resources", href: "#" },
//       { name: "Case Studies", href: "#" },
//     ],
//   },
//   { name: "Contact", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   return (
//     <Disclosure
//       as="nav"
//       className="bg-transparent backdrop-blur-md pt-4 z-50 sticky top-0"
//     >
//       {({ open }) => (
//         <>
//           <div className="mx-auto container px-4 sm:px-6">
//             {/* Top row: left | center | right */}
//             <div className="flex items-center h-20 justify-between">
//               {/* LEFT: Logo aligned to the far left */}
//               <div className="flex items-center flex-shrink-0">
//                 <a href="#" className="inline-flex items-center">
//                   <img src={Img.src} alt="Logo" className="h-10 sm:h-12 w-auto" />
//                 </a>
//               </div>

//               {/* CENTER: Nav (centered) */}
//               <div className="flex-1 flex justify-center">
//                 {/* Desktop links only (hidden on small screens) */}
//                 <div className="hidden md:flex items-center space-x-4 lg:space-x-1">
//                   {navigation.map((item) =>
//                     item.children ? (
//                       <Menu
//                         as="div"
//                         key={item.name}
//                         className="relative inline-block text-left"
//                       >
//                         <div>
//                           <MenuButton
//                             className={classNames(
//                               item.current
//                                 ? "text-black font-semibold"
//                                 : "text-black hover:text-gray-600",
//                               "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
//                             )}
//                           >
//                             <span>{item.name}</span>
//                             <ChevronDownIcon
//                               className="ml-1 h-4 w-4"
//                               aria-hidden="true"
//                             />
//                           </MenuButton>
//                         </div>

//                         <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-black/80 backdrop-blur-md ring-1 ring-black/30 focus:outline-none z-50">
//                           <div className="py-1">
//                             {item.children.map((child) => (
//                               <MenuItem key={child.name}>
//                                 {({ active }) => (
//                                   <a
//                                     href={child.href}
//                                     className={classNames(
//                                       active ? "bg-white/10 text-white" : "text-gray-200",
//                                       "block px-4 py-2 text-sm"
//                                     )}
//                                   >
//                                     {child.name}
//                                   </a>
//                                 )}
//                               </MenuItem>
//                             ))}
//                           </div>
//                         </MenuItems>
//                       </Menu>
//                     ) : (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         aria-current={item.current ? "page" : undefined}
//                         className={classNames(
//                           item.current ? "text-black font-semibold" : "text-black hover:text-gray-600",
//                           "px-3 py-2 text-sm font-medium"
//                         )}
//                       >
//                         {item.name}
//                       </a>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* RIGHT: CTA + Mobile Menu Icon (far right) */}
//               <div className="flex items-center space-x-3">
//                 {/* Desktop CTA */}
//                 <button
//                   type="button"
//                   className="hidden sm:inline-flex items-center bg-[#8CB183] text-white font-semibold rounded-md px-4 py-2 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-200"
//                 >
//                   GET A DEMO
//                 </button>

//                 {/* Small-screen visible CTA: icon button (hidden on sm+) */}
//                 <a
//                   href="#"
//                   className="inline-flex sm:hidden items-center justify-center h-10 w-10 rounded-md bg-white/10 text-white hover:bg-white/20"
//                 >
//                   <span className="sr-only">Get a Demo</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path d="M2 10a8 8 0 1116 0A8 8 0 012 10zm8-3a1 1 0 100 2 1 1 0 000-2zm1 6a1 1 0 10-2 0v1h2v-1z" />
//                   </svg>
//                 </a>

//                 {/* Mobile menu button (hamburger) - shown on small screens */}
//                 <div className="sm:hidden">
//                   <Disclosure.Button className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu Panel (full-width stacked) */}
//           <Disclosure.Panel className="sm:hidden z-50">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <div key={item.name}>
//                   <Disclosure.Button
//                     as="a"
//                     href={item.href}
//                     aria-current={item.current ? "page" : undefined}
//                     className={classNames(
//                       item.current ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-white/10 hover:text-white",
//                       "block rounded-md px-3 py-2 text-base font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </Disclosure.Button>

//                   {item.children && (
//                     <div className="pl-5 mt-1 space-y-1">
//                       {item.children.map((child) => (
//                         <a
//                           key={child.name}
//                           href={child.href}
//                           className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
//                         >
//                           {child.name}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Mobile CTA full width */}
//               <div className="mt-3 px-2">
//                 <a href="#" className="block w-full text-center rounded-md bg-white text-black font-semibold px-4 py-2">
//                   Get a Demo
//                 </a>
//               </div>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }


