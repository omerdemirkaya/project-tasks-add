export default function Button({children, ...props}){
    return(
        <button className="px-8 py-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-100 hover:bg-stone-600 hover:text-stone-50" 
        {...props}>
            {children}    
        </button>
    )
}