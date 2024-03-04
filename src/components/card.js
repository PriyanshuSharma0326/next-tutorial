function Card({ children }) {
    return (
        <div className="p-[80px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] border-[1px] border-[#DDD] flex flex-col gap-4 justify-center items-center">
            {children}
        </div>
    )
}

export default Card;
