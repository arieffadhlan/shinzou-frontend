import BoxFilter from "@/components/BoxFilter"
import CardListTicket from "@/components/CardListTicket"
import ModalButton from "@/components/ModalButton"
import PilihPenerbangan from "@/components/PilihPenerbangan"
import Navbar from "@/components/navbar"

const BerandaHasilPencarian = () => {
    return (
        <>
        <Navbar></Navbar>
        <PilihPenerbangan></PilihPenerbangan>
        <ModalButton></ModalButton>
        <BoxFilter></BoxFilter>
        <CardListTicket></CardListTicket>
        <CardListTicket></CardListTicket>
        <CardListTicket></CardListTicket>
        <CardListTicket></CardListTicket>
        </>
    )
}

export default BerandaHasilPencarian