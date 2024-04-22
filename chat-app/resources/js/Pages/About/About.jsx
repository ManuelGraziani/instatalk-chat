import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {useState} from "react";
import { Footer } from "@/Components/Footer";

const navigation = [
    { name: "Funzioni", href: "/" },
    { name: "Chi siamo", href: "/about" },
];

export default function About({user}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <Head title="Chi siamo" />
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
                                        href="/chat"
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

                <div className="relative isolate px-6 pt-20 lg:px-8 mt-11">
                    <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">Chi siamo</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-800">
                    Benvenuti su InstaTalk, l'app di messaggistica istantanea che mette la comunicazione al centro di tutto. Fondata nel 20XX da un team appassionato di sviluppatori con l'obiettivo di creare un'esperienza di messaggistica intuitiva e sicura per utenti di tutto il mondo, InstaTalk si impegna a rendere la comunicazione online più facile, più veloce e più gratificante che mai.
                    </p>
                </div>

                <div className="relative isolate px-6 pt-10 lg:px-8 mt-11">
                    <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">La Nostra Storia</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-800">
                    La nostra storia ha inizio con una semplice domanda: come possiamo migliorare il modo in cui le persone comunicano online? Affrontando questa sfida con determinazione e creatività, il team di InstaTalk ha lavorato duramente per sviluppare un'app che rendesse la messaggistica istantanea accessibile a tutti, mantenendo al contempo la sicurezza e la privacy degli utenti al centro del nostro lavoro.
                    </p>
                </div>

                <div className="relative isolate px-6 pt-10 pb-20 lg:px-8 mt-11">
                    <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">La Nostra Missione</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-800">
                    La missione di InstaTalk è semplice ma potente: vogliamo rendere la comunicazione online più umana, più autentica e più significativa. Ci impegniamo a fornire agli utenti un ambiente di messaggistica in cui possano connettersi con amici e familiari in modo autentico e senza soluzione di continuità, ovunque si trovino nel mondo.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
