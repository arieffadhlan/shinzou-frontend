import Button from "./Button"
import Container from "./layouts/Container"


const OrderHistoryCard = () => {
    return (
        <>
            <Container>
                <div className="flex flex-col gap-4 w-[468px] h-[204px] mt-[32px]">
                    <div className="flex flex-col px-4 py-2.5 border-2 border-[#F2F2F2] rounded-lg bg-white shadow-2xs hocus:border-primary-4/50">
                        <div className="flex flex-col-reverse lg:flex-col">
                            <div className="flex justify-between items-center py-2 border-t-[1px] border-[#D0D0D0] lg:py-1.5 lg:border-0">
                                <div className="flex items-center gap-2">
                                    <Button
                                        size="sm"
                                        variant="success"
                                        className="w-[70px] h-[28px]"
                                    >
                                        Issued
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col-reverse justify-between items-end gap-4 pb-4 2xs:flex-row 2xs:items-start xs:gap-16 2md:gap-10 lg:items-center lg:pb-1.5 xl:gap-16">
                                <div className="flex items-center gap-4 w-full px-0 py-0 lg:py-2.5 lg:px-[20px]">
                                    <div className="flex items-center gap-3 w-full">
                                        <div className="flex justify-center gap-2">
                                            <span class="material-icons-round">
                                                location_on
                                            </span>
                                            <div className="flex flex-1 flex-col justify-start gap-1 ">
                                                <span className="font-bold text-sm text-neutral-5">Jakarta</span>
                                                <span className="font-medium text-xs text-neutral-5">5 Maret 2023</span>
                                                <span className="font-medium text-xs text-neutral-5">19.10</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-2 flex-col justify-center items-center">
                                            <span className="font-medium text-xs text-neutral-3">4h 0m</span>
                                            <div className="flex items-center w-full">
                                                <div className="w-full h-[1px] bg-[#8A8A8A]"></div>
                                                <span className="material-icons-round -ml-[2px] !font-bold !text-[8px] text-neutral-3">chevron_right</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center gap-2">
                                            <span class="material-icons-round">
                                                location_on
                                            </span>
                                            <div className="flex flex-1 flex-col justify-start gap-1 ">

                                                <span className="font-bold text-sm text-neutral-5">Melbourne</span>
                                                <span className="font-medium text-xs text-neutral-5">5 Maret 2023</span>
                                                <span className="font-medium text-xs text-neutral-5">21.10</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b-2"></div>
                            <div>

                            <div className="flex flex-col-reverse justify-between items-end gap-4 pb-4 2xs:flex-row 2xs:items-start xs:gap-16 2md:gap-10 lg:items-center lg:pb-1.5 xl:gap-16">
                                <div className="flex items-center gap-4 w-full px-0 py-0 lg:py-2.5 lg:px-[20px]">
                                    <div className="flex items-center gap-3 w-full">
                                        <div className="flex justify-center gap-2">
                                
                                            <div className="flex flex-1 flex-col justify-start gap-1 ">
                                                <span className="font-bold text-sm text-neutral-5">Booking Code</span>
                                                <span className="font-medium text-xs text-neutral-5">6723y2GHK</span>
                                                
                                            </div>
                                        </div>
                                        <div className="flex flex-2 flex-col justify-center items-center">
                                            <span className="font-bold text-xs text-neutral-5">Class :</span>
                                            <span className="font-medium text-xs text-neutral-3">Ekonomi</span>
                                        </div>
                                        <div className="flex justify-center gap-2">
                                           
                                            <div className="flex flex-1 flex-col justify-start gap-1 ">

                                                <span className="font-bold text-sm text-primary-5">IDR 9.850.000</span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OrderHistoryCard