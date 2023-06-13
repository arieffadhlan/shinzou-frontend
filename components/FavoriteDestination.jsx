import Container from "./layouts/Container";
import Button from "./Button";
import DestinationCard from "./DestinationCard";

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
						<Button type="button" size="md" variant="primary" className="snap-center bg-primary-1 font-normal text-neutral-4 hocus:bg-primary-4 active:bg-primary-4 hocustive:text-neutral-1">
							<span className="material-icons-round !text-[20px]">search</span>
							Asia
						</Button>
						<Button type="button" size="md" variant="primary" className="snap-center bg-primary-1 font-normal text-neutral-4 hocus:bg-primary-4 active:bg-primary-4 hocustive:text-neutral-1">
							<span className="material-icons-round !text-[20px]">search</span>
							Amerika
						</Button>
						<Button type="button" size="md" variant="primary" className="snap-center bg-primary-1 font-normal text-neutral-4 hocus:bg-primary-4 active:bg-primary-4 hocustive:text-neutral-1">
							<span className="material-icons-round !text-[20px]">search</span>
							Australia
						</Button>
						<Button type="button" size="md" variant="primary" className="snap-center bg-primary-1 font-normal text-neutral-4 hocus:bg-primary-4 active:bg-primary-4 hocustive:text-neutral-1">
							<span className="material-icons-round !text-[20px]">search</span>
							Eropa
						</Button>
						<Button type="button" size="md" variant="primary" className="snap-center bg-primary-1 font-normal text-neutral-4 hocus:bg-primary-4 active:bg-primary-4 hocustive:text-neutral-1">
							<span className="material-icons-round !text-[20px]">search</span>
							Afrika
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