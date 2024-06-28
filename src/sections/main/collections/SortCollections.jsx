
import { useState, useEffect } from "react"
import Container from "@/components/ui/container/Container"
import { products } from "@/assets/data/products"
import SortByFieldBar from "./SortByFieldBar"
import SortedProductList from "./SortedProductList"
import useTheme from "@/contexts/theme/ThemeContext"

const sortProducts = (products, criterion) => {
    switch (criterion) {
        case 'popularity':
            return [...products].sort((a, b) => b.popularity - a.popularity);
        case 'relevance':
            return [...products].sort((a, b) => b.relevance - a.relevance);
        case 'priceLowToHigh':
            return [...products].sort((a, b) => a.price - b.price);
        case 'priceHighToLow':
            return [...products].sort((a, b) => b.price - a.price);
        case 'newest':
            return [...products].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        default:
            return products;
    }
};

const SortCollections = () => {
    const [sortedProducts, setSortedProducts] = useState(products);
    const { sortCriterion } = useTheme()
    useEffect(() => {
        setSortedProducts(sortProducts(products, sortCriterion));
    }, [sortCriterion]);

    return (
        <Container className="flex  flex-col gap-y-3">
            <SortedProductList sortedProducts={sortedProducts} />
        </Container>
    )
}

export default SortCollections


