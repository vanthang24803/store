
import prismadb from "@/lib/prismadb";
import React from "react";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
};

const DashboardPage : React.FC<DashboardPageProps> = async ({
  params
}) => {
    const store = prismadb.store.findFirst({
      where: {
        id: params.storeId
      }
    })
  return <div>
    Overview
  </div>;
};

export default DashboardPage;
