const PrimaryBtn = ({ children, onClick, disabled }) => {
    const defaultStyles =
        'flex gap-2 items-center justify-center bg-cm-black py-2 px-10 border-2 border-cm-black text-white font-bold w-max rounded-md hover:scale-105 transition-all delay-75'

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
export default PrimaryBtn
