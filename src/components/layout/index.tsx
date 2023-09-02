import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-20 max-w[100vw] py-2">
            {children}
        </div>
    )
}
export default Layout
