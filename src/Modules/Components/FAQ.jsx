import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";

const FAQ = () => {
	return (
		<div className="w-full  px-4 h-auto  pt-6 pb-[4rem]">
			<header className="text-center text-green-400 m-5">
				<span className="w-full text-5xl font-semibold text-center capitalize">
					Questions we thought you'd like answered
				</span>
			</header>
			<div className="mx-auto w-full max-w-6xl rounded-2xl bg-gold-400/30 p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className="flex w-full justify-between rounded-lg bg-gold-400 px-4 py-2 text-left text-xl font-medium text-white hover:bg-gold-400 focus:outline-none focus-visible:ring focus-visible:ring-gold-400 focus-visible:ring-opacity-75
                                h-auto
                                "
							>
								<span>Banhart</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-gold-400`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
								If you're unhappy with your purchase for any
								reason, email us within 90 days and we'll refund
								you in full, no questions asked.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gold-400 px-4 py-2 text-left text-xl font-medium text-white hover:bg-gold-400 focus:outline-none focus-visible:ring focus-visible:ring-gold-400 focus-visible:ring-opacity-75">
								<span>What we do?</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-gold-400`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
								No.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gold-400 px-4 py-2 text-left text-xl font-medium text-white hover:bg-gold-400 focus:outline-none focus-visible:ring focus-visible:ring-gold-400 focus-visible:ring-opacity-75">
								<span>Do you offer technical support?</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-gold-400`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-white">
								No.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button
								className="flex w-full justify-between rounded-lg bg-gold-400 px-4 py-2 text-left text-xl font-medium text-white hover:bg-gold-400 focus:outline-none focus-visible:ring focus-visible:ring-gold-400 focus-visible:ring-opacity-75
                                h-auto"
							>
								<span>Do you offer technical support?</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-gold-400`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
								No.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
};

export default FAQ;
