import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <section>
        <div></div>
      </section>
      {children}
    </div>
  );
}

export default Layout;
