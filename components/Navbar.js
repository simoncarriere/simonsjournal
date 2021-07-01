import { Fragment,useState } from 'react'
import Link from 'next/link'
import { SearchIcon, MenuIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'

const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Journal', href: '/journal' },
    // { name: 'Guides', href: '#' },
    { name: 'Playground', href: '/playground', tooltip: 'NEW' },
    { name: 'About', href: '/about' },
]

// Placeholder for Search
const journal = [
    {
      id: 1,
      subject: 'My First',
      sender: 'Gloria Roberston',
      time: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 2,
      subject: 'Velit placeat sit ducimus non sed',
      sender: 'Gloria Roberston',
      time: '3d ago',
      datetime: '2021-01-22T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
]

const Navbar = () => {

    // Mobile Hamburger
    let [menuIsOpen, setMenuIsOpen] = useState(false)
    // Search Modal
    let [searchIsOpen, setSearchIsOpen] = useState(false)
    

    return (
        <div>

            <nav className="fixed top-8 w-full px-8 z-20 " aria-label="Top">

                <div className="bg-white rounded-xl shadow py-3 px-4 ">
                    <div className="flex justify-between ">
                        <Link href="/">
                            <a>
                                <span className="sr-only">Simons Journal</span>
                                <img
                                    className="animate-pulse h-10"
                                    src="/logo.png"
                                    alt=""
                                />
                            </a>
                        </Link>
                        <div className="hidden md:block">
                            {navigation.map((link) => (
                                <Link key={link.name} href={link.href}>
                                    <a className=" transition duration-400 inline-block text-base font-medium py-2 px-5 tracking-wide hover:opacity-60">
                                        {link.name}
                                        <span className="tooltip uppercase text-blue-600 absolute top-2 ml-0 font-semibold	">{link.tooltip}</span>
                                    </a>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="hidden md:block  py-2 px-4 border border-transparent rounded-md text-gray-700 ">
                            <SearchIcon className="h-5 w-5 cursor-pointer" aria-hidden="true" onClick={() => setSearchIsOpen(!searchIsOpen)}/>
                        </div>

                        {/* MOBILE MENU */}
                        <div className="md:hidden block  py-2 px-4 border border-transparent rounded-md text-gray-700 ">
                            <MenuIcon className="h-5 w-5 cursor-pointer" aria-hidden="true" onClick={() => setMenuIsOpen(!menuIsOpen)}/>
                        </div> 

                    </div>

                    {/* MOBILE MENU */}
                    {menuIsOpen && (
                        <div>

                            <div className="py-4 flex flex-wrap flex-col justify-center  items-center  md:hidden bg-white ">
                                {navigation.map((link) => (
                                    <a key={link.name} href={link.href} className="text-lg font-medium pb-4 ">
                                    {link.name}
                                    </a>
                                ))}
                            </div>

                            <div className="md:hidden py-4 px-4  bg-gray-100 rounded-lg w-full ">
                                <div className="flex justify-center items-center px-4 ">
                                    <SearchIcon className="h-4 w-4 cursor-pointer text-gray-700" aria-hidden="true" onClick={() => setIsOpen(!isOpen)}/>
                                    <input 
                                    className="h-10 w-full pl-5 text-sm focus:outline-none rounded-lg bg-gray-100 text-gray-700 "
                                    type="search" 
                                    name="search" 
                                    placeholder="Search"/>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </nav>
        

            {/* Desktop / Tablet Search Modal */}
            <Transition appear show={searchIsOpen} as={Fragment} className="hidden md:block absolute top-0 justify-center bg-gray-700 bg-opacity-20 z-50 w-full min-h-screen">
                <Dialog as="div" onClose={() => setSearchIsOpen(!searchIsOpen)}>
                    <div className=" flex justify-center ">
                        {/* Overlay */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>
                        
                        {/* Search Bar */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="w-2/3 lg:w-1/2 mt-36  px-8 py-4  transition-all transform bg-white shadow-xl rounded-lg ">
                                <Dialog.Title as='div' className="w-full border-b border-gray-200">
                                    <div className="flex justify-center items-center  ">
                                        <SearchIcon className="h-5 w-5  text-gray-700" aria-hidden="true" onClick={() => setSearchIsOpen(!searchIsOpen)}/>
                                        <input 
                                        className="h-10 w-full pl-5 text-base focus:outline-none text-gray-700 "
                                        type="search" 
                                        name="search" 
                                        placeholder="Search through journal entries"/>
                                    </div>
                                </Dialog.Title>

                                <ul className="divide-y divide-gray-200">
                                    {journal.map((message) => (
                                        <li
                                        key={message.id}
                                        className="relative bg-white py-5  hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                        >
                                        <div className="flex justify-between space-x-3">
                                            <div className="min-w-0 flex-1">
                                            <a href="#" className="block focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                                                <p className="text-sm text-gray-500 truncate">{message.subject}</p>
                                            </a>
                                            </div>
                                            <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                                            {message.time}
                                            </time>
                                        </div>
                                        <div className="mt-1">
                                            <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                                {/*<div className="mt-6">
                                    <a
                                    href="#"
                                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                    View all
                                    </a>
                                </div>*/}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>


        </div>
    )
}


export default Navbar;