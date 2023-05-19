import { CheckCircleIcon } from "@heroicons/react/24/solid"

const Topics = () => {
    return ( 
        <>
        <section className="bg-orange-500 px-4 py-8 rounded-md flex flex-col gap-y-7 mx-5 md:mx-14 md:my-10 md:px-8 md:py-12">
            <h3 className=" text-white text-xl font-bold">
                Topics Covered
            </h3>

            <div className=" flex flex-col gap-y-2 lg:flex-row lg:gap-x-10">
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    HTML
                </p>
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    Basics
                </p>
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    Intermediate
                </p>
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    Expert
                </p>
            </div>

        </section>
        </>
     );
}
 
export default Topics;