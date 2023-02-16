import React from "react";

const Page404 = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-4xl font-semibold text-cyan-500">
          Page Not Found
        </h2>
      </div>
      <div className="mx-auto my-auto flex justify-center align-middle pt-4">
        <img src="/images/pagenotfound.svg" alt="Page not found" />
      </div>
    </>
  );
};

export default Page404;
