import Link from 'next/link'

const LinkComponent = ({ children, withIcon, to, className }) => {
    return (
            <Link
                className={`text-[15px] leading-[22px] font-semibold ${className}`}
                href={to}
            >
             <div className='flex items-center gap-x-1'> {children} {withIcon}</div>
            </Link>
    )
}

export default LinkComponent