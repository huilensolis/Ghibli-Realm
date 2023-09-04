const PrimaryBtn = ({ children }) => {
    return (
        <button className="bg-transparent py-2 px-10 border-2 border-cm-black text-cm-black font-bold w-max rounded-md hover:bg-cm-black hover:text-cm-white hover:scale-105 transition-all delay-75">
            {children}
        </button>
    )
}
export default PrimaryBtn
