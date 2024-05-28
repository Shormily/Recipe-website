/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const CategoryCard = ({ category }) => {
    return (
        <>
          <h1 className="text-center">{category?.title}</h1>  
        </>
    );
};

export default CategoryCard;