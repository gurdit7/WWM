"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import SubCollections from "../subcollections";
import FilterBar from "../FilterBar";
import CollectionGrid from "../CollectionGrid";
import SortCollections from "../SortCollections";
import useTheme from "@/contexts/theme/ThemeContext";
import SortByFieldBar from "../SortByFieldBar";
import QuickView from "../../quick-view/QuickView";
import { useEffect } from "react";
const index = () => {
    const { collectionsProductsViewStyle, quickViewProduct, setHideHeader, setHideFooter } = useTheme();
    
    useEffect(()=>{
        setHideHeader(false);
        setHideFooter(false);
    },[])

    return (
        <>
            <Breadcrumb />
            <SubCollections />
            <FilterBar />
            <SortByFieldBar />
            {collectionsProductsViewStyle === "grid" ? <CollectionGrid /> :<SortCollections />}
            {quickViewProduct && collectionsProductsViewStyle === "grid" && <QuickView product={quickViewProduct} />}
        </>
    );
};

export default index;
