
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import SubCollections from "../subcollections";
import FilterBar from "../FilterBar";
import CollectionGrid from "../CollectionGrid";
const index = () => {
    return (
        <>
            <Breadcrumb />
            <SubCollections />
            <FilterBar />
            <CollectionGrid />
       
        </>
    )
}

export default index
