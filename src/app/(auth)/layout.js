import Navbar from "@/components/Navbar";

const RootLayout =({ children })=>{
    return (
<main>
    <Navbar></Navbar>
    {children}
</main>
)}
export default RootLayout;