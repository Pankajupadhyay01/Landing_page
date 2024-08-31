import { useState } from "react"
import Heading from "../Components/Headings"
import { question } from "../Data"

const Faq = () => {
    const [selected, setSelected] = useState<number | null>(null)

    const toogle = (i: number) => {
        if (selected == i) {
            setSelected(null)
        }
        else {
            setSelected(i)
        }
    }
    return (
        <div className="flex flex-col gap-8 mx-7">
            <Heading title={"Frequently Asked Questions"} />

            <div className="flex md:flex-row flex-col flex-wrap justify-between gap-2 px-4 w-full text-white">
                {
                    question.map((obj, i) => (

                        <div className="flex flex-col gap-2 md:w-[calc(50%-10px)] text-lg justify-center">
                            <div
                                className="flex justify-between pr-8 text-white bg-gray-600 p-2 rounded-md cursor-pointer"
                                onClick={() => toogle(i)}
                            >
                                {obj.question}
                                <div className="transition-all duration-500 ease-[cubic-bezier(0.86,0,0.07,1)]">
                                    {selected === i ? "-" : "+"}
                                </div>
                            </div>

                            <div
                                className={`overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] ${selected === i ? "max-h-[500px]" : "max-h-0"
                                    }`}
                            >
                                <div className="bg-gray-600 p-2 rounded-md">{obj.answer}</div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div >
    )
}

export default Faq