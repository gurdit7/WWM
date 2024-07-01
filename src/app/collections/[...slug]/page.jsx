import Collections from '@/sections/main/collections/view'

export async function generateMetadata({ params }) {
  return {
    title: `${toUpCase(params?.slug)}`,
  }
}
const toUpCase = (value) => {  
  if(value){
    return value[value.length - 1].charAt(0).toUpperCase() + value[value.length - 1].slice(1);
  }
}
const page = () => {
  return (
    <>
      <Collections />
    </>
  )
}

export default page;
