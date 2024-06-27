
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import SubCollections from "../subcollections";
import FilterBar from "../FilterBar";
import CollectionGrid from "../CollectionGrid";
import SortCollections from "../SortCollections";
const index = () => {
    return (
        <>
            <Breadcrumb />
            <SubCollections />
            <FilterBar />
            <SortCollections/>
            <CollectionGrid />
        </>
    )
}

export default index
