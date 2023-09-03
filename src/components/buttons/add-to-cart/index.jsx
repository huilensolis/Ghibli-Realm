const PrimaryBtn = ({ children }) => {
    return (
        <button className="bg-cm-tomato py-2 px-6 text-cm-black font-bold w rounded-md hover:brightness-110 transition-all delay-75">
            {children}
        </button>
    )
}
export default PrimaryBtn
