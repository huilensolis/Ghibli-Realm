const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen h-full w-full max-w[100vw] py-2 pt-20 px-28 bg-cm-white">
            {children}
        </div>
    )
}
export default Layout
