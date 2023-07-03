"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import InputSearch from "@/components/molecules/InputSearch";
import ButtonLink from "@/components/atoms/ButtonLink";

import logo from "@/assets/images/logo.webp";

const Navbar = () => {
	const pathname = usePathname();
	const token = localStorage.getItem("token");
	
  return (
		<nav className="fixed z-20 top-0 left-0 w-full py-4 bg-white shadow-xs">
			<div className="flex flex-col gap-5 max-w-8xl px-5 mx-auto sm:px-16 md:px-32">
				<div className="flex flex-wrap items-center justify-between">
					<div className="flex items-center gap-[34px]">
						<Link href="/">
							<Image 
								src={logo} 
								alt="Logo" 
								priority={true}
								className="w-20 lg:w-24" 
							/>
						</Link>
						<div className="relative">
							<InputSearch 
								name="search-flight" 
								placeholder="Cari di sini ..."
								className="hidden lg:flex lg:w-[444px]"
								iconClassName="!hidden lg:!inline-block"
							/>
						</div>
					</div>
					<div className="flex items-center gap-4">
						{token ? (
							<>
								<Link href="/order-history" className={`${pathname === "/order-history" ? "text-primary-4" : ""} material-icons-round`}>
									format_list_bulleted
								</Link>
								<Link href="/notifications" className={`${pathname === "/notifications" ? "text-primary-4" : ""} material-icons-round`}>
									notifications
								</Link>
								<Link href="/account" className={`${pathname === "/account" ? "text-primary-4" : ""} material-icons-round`}>
									person
								</Link>
							</>
						) : (
							<ButtonLink 
								href="/auth/login" 
								size="md" 
								variant="primary" 
								className="hidden px-4 rounded-xl lg:flex"
							>
								<span className="material-icons-round !text-[20px]">login</span>
								Masuk
							</ButtonLink>
						)}
						<Link href="/" className="material-icons-round !text-[32px] lg:!hidden">
							menu
						</Link>
					</div>
				</div>
				
				{/* Navbar Collapse Contents */}
				<div className="hidden lg:hidden">
					<div className="flex flex-col gap-5">
						<div className="relative w-full">
							<InputSearch 
								name="search-flight" 
								placeholder="Cari di sini ..."
								className="w-full lg:hidden"
								iconClassName="!inline-block lg:!hidden"
							/>
						</div>
						{token ? (
							<>
								<Link href="/order-history" className={`${pathname === "/order-history" ? "text-primary-4" : ""} material-icons-round`}>
									format_list_bulleted
								</Link>
								<Link href="/notifications" className={`${pathname === "/notifications" ? "text-primary-4" : ""} material-icons-round`}>
									notifications
								</Link>
								<Link href="/account" className={`${pathname === "/account" ? "text-primary-4" : ""} material-icons-round`}>
									person
								</Link>
							</>
						) : (
							<ButtonLink 
								href="/auth/login" 
								size="md" 
								variant="primary" 
								className="px-4 rounded-xl lg:hidden"
							>
								<span className="material-icons-round !text-[20px]">login</span>
								Masuk
							</ButtonLink>
						)}
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Navbar;