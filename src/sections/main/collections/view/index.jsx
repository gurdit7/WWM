"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import SubCollections from "../Subcollections";
import FilterBar from "../FilterBar";
import CollectionGrid from "../CollectionGrid";
import SortCollections from "../SortCollections";
import useTheme from "@/contexts/theme/ThemeContext";
const index = () => {
  const { collectionsProductsViewStyle } = useTheme();
  return (
    <>
      <Breadcrumb />
      <SubCollections />
      <FilterBar />
      <SortCollections />
      {collectionsProductsViewStyle === "grid" && <CollectionGrid />}
    </>
  );
};

export default index;
