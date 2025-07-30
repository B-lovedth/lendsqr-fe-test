import Login from "./login"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Lendsqr Login",
    description: "Login to your Lendsqr account",
}

const loginPage=()=>{
    return(
         <Login/>
        )
}
export default loginPage