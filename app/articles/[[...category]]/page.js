import ResultsList from "../components/resultsList";
import CategoryHeader from "../components/categoryHeader";
import { getCategories, getPostSearch } from "@/sanity/queries"

export default async function Articles({ params }) {
    const allCategoriesQuery = getCategories();
    const getPostSearchQuery = getPostSearch(params.category);
    const [allCategories, articles] = await Promise.all([allCategoriesQuery, getPostSearchQuery])

    const currentCategory = allCategories.filter(category => category.slug == params.category)[0] || { name: 'Anything', categoryColor: '#cecece' };

    if (articles.length === 0) {
        throw new Error('Invalid category');
    }

    return (
        <>
            <CategoryHeader allCategories={allCategories} category={currentCategory}/>
            <ResultsList articles={articles}/>
        </>
    );
}