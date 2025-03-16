import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import Image from "./Assets/pexels-andrea-piacquadio-920382.jpg";
import Feature from "./Components/Feature";
import { Footer } from "@/Components/Footer";

const navigation = [
    { name: "Funzioni", href: "#functions" },
    { name: "Chi siamo", href: "/about" },
];

export default function HomePage({ user }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="Home" />
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav
                        className="flex items-center justify-between p-6 lg:px-8"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://static-00.iconduck.com/assets.00/chat-icon-1024x1024-o88plv3x.png"
                                    alt=""
                                />
                            </Link>
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="ms-4 text-2xl font-bold">
                                    InstaTalk
                                </span>
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            {user ? (
                                <>
                                    <a
                                        href="/chat"
                                        className="font-semibold text-gray-900 hover:text-blue-500"
                                    >
                                        Chat
                                    </a>
                                    <Link
                                        href="/dashboard"
                                        className="ms-4 font-semibold text-gray-900 hover:text-blue-500"
                                    >
                                        Dashboard
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <a
                                        href={route("dashboard")}
                                        className="font-semibold text-gray-900 hover:text-blue-500"
                                    >
                                        Accedi
                                    </a>

                                    <a
                                        href={route("register")}
                                        className="ms-4 font-semibold text-gray-900  hover:text-blue-500"
                                    >
                                        Registrati
                                    </a>
                                </>
                            )}
                        </div>
                    </nav>
                    <Dialog
                        as="div"
                        className="lg:hidden"
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                    >
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://static-00.iconduck.com/assets.00/chat-icon-1024x1024-o88plv3x.png"
                                        alt=""
                                    />
                                </a>
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="ms-4 text-2xl font-bold">
                                        InstaTalk
                                    </span>
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        {user ? (
                                            <>
                                                <a
                                                    href="/chat"
                                                    className="font-semibold text-gray-900"
                                                >
                                                    Chat
                                                </a>
                                                <Link
                                                    href="/dashboard"
                                                    className="ms-4 font-semibold text-gray-900"
                                                >
                                                    Dashboard
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                <a
                                                    href="/chat"
                                                    className="font-semibold text-gray-900   "
                                                >
                                                    Accedi
                                                </a>

                                                <a
                                                    href={route("register")}
                                                    className="ms-4 font-semibold text-gray-900 hover:text-gray-900"
                                                >
                                                    Registrati
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>

                <div className="relative isolate px-6 pt-14 lg:pt-0 lg:px-8 lg:space-x-6">
                    <div className="mx-auto max-w-4xl sm:pt-36 lg:pt-46 my-10 flex flex-col sm:flex-row items-center justify-between">
                        <div className="text-center sm:w-full lg:w-2/3  lg:me-9">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Connettiti, comunica, instaura connessioni
                                significative
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Unisciti ora e scopri il potere della
                                comunicazione istantanea con InstaTalk
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="/chat"
                                    className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                                >
                                    Chatta ora
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/7 rounded-lg overflow-hidden lg:mt-0  lg:ms-8">
                            {" "}
                            {/* Aggiornato lg:w-1/3 */}
                            <img
                                src={Image}
                                alt=""
                                className="w-full h-full object-cover mt-6 lg:mt-0"
                            />{" "}
                            {/* Aggiunto mt-6 e lg:mt-0 */}
                        </div>
                    </div>
                </div>
                <Feature />
            </div>
            <Footer />
        </>
    );
}
