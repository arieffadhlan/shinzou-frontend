import Image from "next/image";
import Link from "next/link";

import InputSearch from "@/components/forms/InputSearch";
import ButtonLink from "@/components/ButtonLink";

import logo from "@/assets/images/logo.webp";

const Navbar = () => {
  return (
		<nav className="fixed z-20 top-0 left-0 w-full py-4 bg-white shadow-xs">
			<div className="flex flex-col gap-5 max-w-8xl px-5 mx-auto sm:px-16 md:px-32">
				<div className="flex flex-wrap items-center justify-between">
					<div className="flex items-center gap-[34px]">
						<Link href="/">
							<Image src={logo} alt="Logo" />
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
					<div className="flex items-center gap-5">
						<button 
							type="button" 
							data-collapse-toggle="navbar-search" 
							aria-controls="navbar-search" 
							aria-expanded="false"  
							className="material-icons-round lg:!hidden !text-[32px] text-[#8A8A8A]"
						>
							search
						</button>
						<ButtonLink 
							href="/auth/login" 
							size="sm" 
							variant="primary" 
							className="!px-4 py-3.5 rounded-xl"
						>
							<span className="material-icons-round !text-[20px]">login</span>
							Masuk
						</ButtonLink>
					</div>
				</div>
				
				{/* Navbar Collapse Contents */}
				<div id="navbar-search" className="hidden lg:hidden">
					<div className="relative w-full">
						<InputSearch 
							name="search-flight" 
							placeholder="Cari di sini ..."
							className="w-full lg:hidden"
							iconClassName="!inline-block lg:!hidden"
						/>
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Navbar;