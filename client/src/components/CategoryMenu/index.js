import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Button, Container, Row, Card } from 'react-bootstrap' 

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <Container>
    <Row>
    <h1 className="mt-4">Support our Mission</h1>
         <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>
            <h3>By donating money, or buying our branded products, you can help keep this website running.</h3>
            </Card.Body>
          </Card>
        </Row>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <Button
        className='mx-2, mb-4'
        variant="outline-success"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }} 
        >
          {item.name}
        </Button>
        
      ))}
    </Container>
  );
}

export default CategoryMenu;
