import React from 'react';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/';
import useStores from '../../hooks/useStores';
import ProductList from './Product/ProductList';
import ProductForm from './Product/ProductForm';

const useStyles = makeStyles(theme => ({
  catalog: {
    display: 'flex',
    margin: '20px 0px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: '10px 0px'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '20px 100px'
    }
  }
}));

const Catalog: React.FC<{}> = observer(
  (): React.ReactElement => {
    const {
      catalogStore: { categories, products, addProduct }
    } = useStores();
    const classes = useStyles();

    return (
      <div className={classes.catalog}>
        <ProductForm action="add" submitForm={addProduct} fullWidth={false} />
        <ProductList categories={categories} products={products} />
      </div>
    );
  }
);

export default Catalog;
