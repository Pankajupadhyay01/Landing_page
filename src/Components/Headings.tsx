interface title {
    title: String
}


const Heading: React.FC<title> = ({ title }) => {
    return (
        <div className="w-full m-auto text-center flex justify-center">
            <span className="md:text-2xl text-lg font-bold text-white relative before:absolute before:-bottom-1 before:content-['_'] before:h-1 before:bg-white before:w-[80%] before:right-0 before:left-0 ">
                {title}
            </span>
        </div>
    )
}

export default Heading