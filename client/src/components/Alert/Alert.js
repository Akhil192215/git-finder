import { toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const warn =(message)=>{
    console.log(message);
    toast.warn(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        });
}

export {warn}
