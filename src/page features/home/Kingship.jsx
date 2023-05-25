import { Link } from "react-router-dom";
import { styles } from "../../utils/styles";

const Kingship = () => {

    return (
        <div className={`${styles.paddingX} ${styles.paddingY} relative bg-benefits-banner bg-no-repeat bg-fixed bg-cover flex flex-col items-center gap-y-10`}>
            {/* <div className=" overlay"></div> */}
            <div className=" flex flex-col items-center gap-y-5 z-30">
                <h1 className=" text-3xl font-bold text-white">
                    Why Choose Us
                </h1>
                {/*  */}
            </div>

            <div className=" flex flex-col items-center gap-y-5 lg:flex-row lg:gap-x-20 z-30">
                <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                    <h3 className=" font-medium text-xl">
                        Goal Oriented
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                    </p>
                </div>

                {/* <div className=" flex flex-col gap-y-5"> */}
                    <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                        <h3 className=" font-medium text-xl">
                            Promising
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                        </p>
                    </div>
                    <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                        <h3 className=" font-medium text-xl">
                            Fun
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                        </p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Kingship;