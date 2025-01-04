
const Footer = ()=>{
    const today = new Date();

// Format the date as YYYY-MM-DD
const formattedDate = today.toISOString().split('T')[0];

console.log("Today's date:", formattedDate);
    // const date = day().getYear()
    return(
        <div className="bg-black w-full absolute bottom-0  font-titleFont px-8 py-20 h-auto mt-10">


<div className="grid grid-cols-4 text-white">
    <div>
        <h1 className="text-white font-titleFont text-[20px] ">Contacts</h1>
    </div>

    <div>
        <h2>About</h2>
    </div>

    <div>
        <h2>Terms</h2>
    </div>

    <div>
        <h2>Help</h2>
    </div>
</div>

<div className="text-white absolute bottom-0">
   <h1></h1> {formattedDate}
</div>
        </div>
    )
}
export default Footer