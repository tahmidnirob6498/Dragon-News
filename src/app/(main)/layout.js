export const revaildate=3600
import BreakingNews from "@/components/BreakingNews";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

import { Suspense } from "react";
import Loading from "../loading";

const MainLayout = async({ children }) => {

  return (
  <div>
      <Suspense fallback={<Loading></Loading>}>
        <Header />
      </Suspense>
         <BreakingNews></BreakingNews>
  <Suspense>
      <Navbar></Navbar>
  </Suspense>
    <main>
      {children}
    </main>
  </div>
  );
};

export default MainLayout;