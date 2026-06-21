import coffee from '../assets/coffee-2.png'
import BlurCircle from '../utils/BlurCircle';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-20 flex items-center justify-between gap-10 flex-col-reverse sm:flex-row">

            <div className="space-y-6">
                <h1 data-aos="fade-up" data-aos-duration="1200" className="text-4xl md:text-5xl font-semibold text-black/80 tracking-wider leading-14 md:leading-16">Your Daily Coffee Ritual on <span className="text-primary">Rant-Coffee</span></h1>
                <p data-aos="fade-up" data-aos-duration="1500" className="mt-4 text-gray-600/80 text-lg max-w-2xl font-light">
                    Discover the perfect blend of rich flavors and comforting aromas. At Rant-Coffee, every cup is carefully crafted to transform your daily coffee ritual into a moment of pure enjoyment.
                </p>

                <div data-aos="fade-up" data-aos-duration="1800">
                    <a  href='#featured-coffee'  className="text-white bg-primary rounded-full text-sm tracking-wider py-2.5 px-6 hover:bg-primary/95 duration-300 transition-colors">Get Your Coffee</a>
                </div>

            </div>

            <div data-aos="zoom-in" data-aos-duration="1600" className='relative'>
                <img src={coffee} alt="" className='w-xl' />
                <BlurCircle  bottom='-100px' right='70px'/>

            </div>

        </div>
    );
};

export default Banner;