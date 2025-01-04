import { useState, useEffect } from 'react'
import Sneak0 from '../assets/Sneak0.png'
import Sneak1 from '../assets/Sneak1.png'
import Sneak2 from '../assets/Sneak2.png'
import Sneak3 from '../assets/Sneak3.png'
import Sneak4 from '../assets/Sneak4.png'
import Tro0 from '../assets/Tro0.png'
import Tro1 from '../assets/Tro1.png'
import Tro2 from '../assets/Tro2.png'
import Tro3 from '../assets/Tro3.png'
import Tro4 from '../assets/Tro4.png'
import Tro5 from '../assets/Tro5.png'
import Tro6 from '../assets/Tro6.png'
import Tro7 from '../assets/tro7.png'
import Tro8 from '../assets/Tro8.png'

const Hero = ()=>{

    const images = [Sneak0,Sneak1,Sneak2, Sneak3,Sneak4,Tro0,Tro1,Tro2,Tro3,Tro4,Tro5,Tro6,Tro7,Tro8]
    const [index, setIndex] = useState(0);

    const handleImageChange = ()=>{
        setIndex((image) => (image + 1) % images.length)
    } 

    useEffect(() => {
        const intervalId = setInterval(handleImageChange, 3000);
    
        return  () => clearInterval(intervalId);
        }, []);

    return(
        <div className='bg-slate-100'>

            {/* image view starts her */}
                <div>
                <img src={images[index]} alt="" />
                </div>
                {/* Image view ends here */}
           


            {/* Right Div */}
            <div className="absolute top-60 left-[700px] bg-slate-100">

                <div>
                    <h1 className="text-[50px] font-bold">UP TO</h1>
                </div>

                <div>
                    <h1 className="text-[90px]">50% OFF</h1>
                </div>

                <div className="font-bold">
                    SELECT STYLES
                </div>

                <div>
                    <p>Stock up on bestsellers while
the prices are extra nice.
</p>
                </div>

                <div className="flex">
                <h1 className="bg-black text-white font-listFont mr-2 p-3 w-36 text-center rounded-xl font-semibold">Men</h1>
                <h2 className="bg-black text-white font-listFont p-3 w-36 text-center rounded-xl font-semibold">Women</h2>
            </div>
            </div>

           
           
                   </div>
    )
}
export default Hero