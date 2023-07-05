"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import ButtonLink from "@/components/atoms/ButtonLink";

import logo from "@/assets/images/logo.webp";
import { useSelector } from "react-redux";

const Navbar = () => {
	const pathname = usePathname();
	const { notifications } = useSelector((state) => state.notification);
  const { user } = useSelector((state) => state.auth);
	const token = localStorage.getItem("token");

  const userNotifications = token && notifications.filter((notification) => {
		if (notification.user_id === user.data.id) {
			return notification.mark_as_read === false;
		}
  });
	
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
					</div>
					<div className="flex items-center gap-4">
						{token ? (
							<>
								<Link href="/order-history" className={`${pathname === "/order-history" ? "text-primary-4" : ""} material-icons-round`}>
									format_list_bulleted
								</Link>
								<Link href="/notifications" className={`${pathname === "/notifications" ? "text-primary-4" : ""} relative w-min h-6`}>
									<span className="relative material-icons-round">notifications</span>
									<span className={`${userNotifications.length === 0 ? "hidden" : "inline-flex"} absolute top-0 right-0 items-center justify-center px-2 py-1 rounded-full bg-danger font-bold text-xs leading-none text-neutral-1 transform translate-x-1/2 -translate-y-1/2`}>
										{userNotifications.length}
									</span>
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
						{!token && (
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