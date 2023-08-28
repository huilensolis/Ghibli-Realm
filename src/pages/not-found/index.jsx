import notFoundSvg from '../../assets/404.svg'

const NotFound = () => {
    return (
        <section className="w-screen h-[calc(100vh-80px)] flex flex-col items-center justify-center">
            <h1 className='text-9xl text-slate-300'>404</h1>
            <img src={notFoundSvg} alt="404 not found" className="w-96" />
        </section>
    )
}

export default NotFound
