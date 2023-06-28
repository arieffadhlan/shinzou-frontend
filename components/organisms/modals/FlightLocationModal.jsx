const FlightLocationModal = () => {
	return (
		<>
			<div id="search-flight" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center">
				<div className="flex flex-col gap-7 w-[700px] p-5 rounded-2xl bg-neutral-1 shadow-xs z-10">
					{/* Search Bar */}
					<div className="flex items-center gap-2.5">
						<div className="relative w-full">
							<input 
								type="text" 
								name="location"
								id="location"
								placeholder="Masukkan Kota atau Negara"
								className="flex items-center gap-2 w-full h-10 px-4 py-2 outline-none border border-neutral-3 rounded bg-neutral-1 indent-8 text-sm text-neutral-3 placeholder:text-sm placeholder:text-neutral-3"
							/>
							<span className="material-icons-round absolute top-2 left-4 text-neutral-2">
								search
							</span>
						</div>
						<span data-modal-hide="search-flight" className="material-icons-round cursor-pointer text-neutral-3">close</span>
					</div>
					{/* Search Result */}
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center py-1">
							<span className="font-medium text-base text-neutral-5">Pencarian terkini</span>
							<span className="cursor-pointer font-medium text-sm text-danger">Hapus</span>
						</div>
						<div className="flex flex-col gap-3">
							<div className="flex justify-between items-center py-2.5 border-b border-neutral-2">
								<span className="text-sm text-neutral-5">Jakarta</span>
								<span className="material-icons-round cursor-pointer !text-[20px] text-neutral-3">close</span>
							</div>
							<div className="flex justify-between items-center py-2.5 border-b border-neutral-2">
								<span className="text-sm text-neutral-5">Bandung</span>
								<span className="material-icons-round cursor-pointer !text-[20px] text-neutral-3">close</span>
							</div>
							<div className="flex justify-between items-center py-2.5 border-b border-neutral-2">
								<span className="text-sm text-neutral-5">Surabaya</span>
								<span className="material-icons-round cursor-pointer !text-[20px] text-neutral-3">close</span>
							</div>
						</div>
					</div>
				</div>
				<div data-modal-hide="search-flight" className="fixed inset-0 opacity-[60%] bg-black"></div>
			</div>
		</>
	);
}

export default FlightLocationModal;