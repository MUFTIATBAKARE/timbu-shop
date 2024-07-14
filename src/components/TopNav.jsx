import Drop from "./HeaderDrop";


function TopNav() {
    return (
        <div className="hidden lg:flex items-center justify-between bg-custom-green ">
            <div className=" flex gap-4 text-white w-2/3 ml-auto">
                <p>Join our community for special discounts on selected items</p>
                <p>Subscribe to Newsletter</p>
            </div>
            <Drop />
        </div>
    )
}

export default TopNav
