import { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Disclosure } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const navigation = [
    { name: '焦点', href: '#', current: true },
    { name: '推荐', href: '#', current: false },
    { name: '国内', href: '#', current: false },
    { name: '国际', href: '#', current: false },
    { name: '云南', href: '#', current: false },
]

export default function Header() {
    const [activeStatus, setActiveStatus] = useState(0);
    return (
        <Disclosure as="nav" className="sticky top-0 w-full bg-gray-800 sm:px-20">
            {({ open }) => (
                <>
                    <div className="flex justify-center sm:justify-start">
                        <Disclosure.Button className="absolute p-4 left-0 text-gray-400 sm:hidden">
                            {open ?
                                <XIcon className="block h-6 w-6" aria-hidden="true" /> :
                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            }
                        </Disclosure.Button>
                        <text className="text-2xl py-3 text-yellow-700 font-bold font-mono sm:pr-10">云雀</text>
                        <div className="hidden sm:flex space-x-4 items-center">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'px-3 py-2 rounded-md text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>)}
        </Disclosure>
    );
}