import { useRef } from "react";

import { useInView } from "framer-motion";

import { styles } from "../../utils/styles";

const CyberSecurity = () => {

    const ref = useRef(null)
    const isInView = useInView(ref);
    return ( 
        <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center gap-y-8 lg:flex-row lg:gap-x-10`}>
            <h1 className={`${styles.sectionHeading} basis-1/2`}>
                Why Cyber Security Career?
            </h1>
            <p className=" text-sm text-center basis-1/2 md:text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus et fugit, aliquid doloremque sapiente vel commodi quia molestiae, dolorum repellat, nihil aliquam quas vero accusamus. Reprehenderit doloremque sit, cupiditate expedita, perferendis laudantium iusto nulla earum, odit dolor reiciendis incidunt explicabo distinctio necessitatibus corporis. Veniam sint excepturi dolore sed minus porro.
            </p>
        </div>
     );
}
 
export default CyberSecurity;