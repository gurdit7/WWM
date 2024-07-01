import Products from "@/sections/main/products/view"


export async function generateMetadata({ params }) {
    return {
      title: `${params?.slug}`,
    }
  }
const page = () => {

    return (
        <>
        <Products/>
        </>
    )
}
export default page