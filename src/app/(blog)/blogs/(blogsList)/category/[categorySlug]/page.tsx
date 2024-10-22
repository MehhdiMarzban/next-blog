const CategoryPage : React.FC<{params : {categorySlug : string}}> = ({params}) => {
    return <h1>{params.categorySlug}</h1>
} 

export default CategoryPage;