import Link from "next/link"
import IconSearch from "../../../../public/icons/IconSearch"

const SearchIconButton = () => {
  return (
    <Link href='/search'>
    <IconSearch size='24px' className='fill-dark-100' />
    </Link>
  )
}

export default SearchIconButton
