"use client";

import Container from "./Container";
import Button from "../atoms/Button";
import DestinationCard from "../organisms/cards/DestinationCard";

const FavoriteDestination = () => {
	return(
    <Container className="mt-8 mb-11">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-base text-black">
						Destinasi Favorit
					</h2>
					<div className="snap-x overflow-scroll no-scrollbar flex items-center gap-4">
						<Button type="button" size="md" variant="primary" className="snap-center font-normal hocus:bg-primary-4 active:bg-primary-4">
							<span className="material-icons-round !text-[20px]">search</span>
							Semua
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-3.5 xs:gap-5 2md:grid-cols-3 xl:grid-cols-4">
					<DestinationCard />
				</div>
			</div>
		</Container>
	)
}

export default FavoriteDestination;