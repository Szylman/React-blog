import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';

const Categories = () => {

    const categories = useSelector(getAllCategories);

    return (
    <section>
        {categories.map(category => (
        <Card key={category}><Link to={"/category/" + category}>{category}</Link></Card>
        ))}
    </section>
    )

}
export default Categories;