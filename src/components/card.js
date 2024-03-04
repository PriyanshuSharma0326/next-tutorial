function Card({ children }) {
    return (
        <div className="p-[100px] m-[10px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] border-[1px] border-[#DDD] flex justify-center items-center">
            {children}
        </div>
    )
}

export default Card;
