import Collections from '@/sections/main/collections/view'

export async function generateMetadata({ params }) {
  return {
    title: `${params?.slug}`,
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
