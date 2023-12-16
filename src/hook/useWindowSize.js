import { useEffect, useState } from "react"

const useWindowSize = () =>{
    const [windowSize, setWindowSize] = useState({
        width : window.innerWidth,
        heigth : window.innerHeight
    })

    useEffect(() =>{
        const handleResize = () => {
            setWindowSize({
                width : window.innerWidth,
                heigth : window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, [])  

    return windowSize;
}

export default useWindowSize;