"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import SubCollections from "../Subcollections";
import FilterBar from "../FilterBar";
import CollectionGrid from "../CollectionGrid";
import SortCollections from "../SortCollections";
import useTheme from "@/contexts/theme/ThemeContext";
import SortProducts from "../SortedProductList";
import SortByFieldBar from "../SortByFieldBar";
const index = () => {
    const { collectionsProductsViewStyle,sortedProducts } = useTheme();

    console.log("sortedProducts",sortedProducts)
    return (
        <>
            <Breadcrumb />
            <SubCollections />
            <FilterBar />
            <SortByFieldBar />
            {collectionsProductsViewStyle === "grid" ? <CollectionGrid /> :<SortCollections />}
        </>
    );
};

export default index;
