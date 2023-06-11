import Image from "next/image";
import Link from "next/link";

import InputSearch from "@/components/forms/InputSearch";
import ButtonLink from "@/components/ButtonLink";

import loginIcon from "@/assets/icons/log-in.svg";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 shadow-xs bg-white">
			<div className="mx-auto flex flex-wrap justify-between items-center px-32 py-4">
				<div className="flex items-center gap-[34px]">
					<Link href="/">
						<Image src={logo} alt="Logo" />
					</Link>
					<InputSearch 
						name="search-flight" 
						placeholder="Cari di sini ..."
						className="w-[444px]"
					/>
				</div>
				<ButtonLink href="/auth/login" size="sm" variant="primary" className="gap-2 !px-4 py-3.5 rounded-xl">
					<Image src={loginIcon} alt="Login" />
					Masuk
				</ButtonLink>
			</div>
		</nav>
  )
}

export default Navbar;