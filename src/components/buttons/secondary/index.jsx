const SecondaryBtn = ({ children, onClick, disabled }) => {
    const defaultStyles =
        'flex gap-2 break-all xl:break-normal items-center justify-center bg-transparent py-2 xl:px-10 px-5 border-2 border-black text-black font-bold w-max rounded-md hover:bg-cm-tomato hover:text-white hover:border-transparent hover:scale-105 transition-all delay-75'
    const disabledStyles = `${defaultStyles} brightness-75`
    return (
        <button
            className={disabled ? disabledStyles : defaultStyles}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
export default SecondaryBtn
