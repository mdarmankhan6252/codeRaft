

const CustomTitle = ({title, subtitle} : {title: string, subtitle: string}) => {
    return (
        <div className="text-center mb-12">
            <h2 data-aos="fade-up" data-aos-duration="1200" className="text-4xl font-semibold text-black/80">
                {title}
            </h2>
            <p data-aos="fade-up" data-aos-duration="1500" className="mt-4 text-gray-500 max-w-2xl mx-auto">
               {subtitle}
            </p>
        </div>
    );
};

export default CustomTitle;