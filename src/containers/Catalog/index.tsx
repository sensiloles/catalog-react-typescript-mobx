import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TextField, FormControl, Button, makeStyles } from '@material-ui/core/';
// import EditIcon from '@material-ui/icons/Edit';
import useStores from '../../hooks/useStores';
import SelectorCategory from './SelectorCategory';
import ProductList from './ProductList';
// import { IAppStore, ICategories, ICategory } from '../../types';

const useStyles = makeStyles(() => ({
  catalog: {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px 50px'
  },
  formAddProduct: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px'
  },
  productProps: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputSelectCategory: {
    marginLeft: '2px'
  },
  buttonAdd: {
    marginTop: '5px'
  },
  productsList: {
    marginLeft: '50px'
  }
}));

const Catalog = observer(() => {
  const [productName, setProductName] = useState<string>('');
  const [categoryId, selectCategoryId] = useState<number>(0);
  const classes = useStyles();
  const {
    catalogStore: { categories, products }
  } = useStores();

  const handleChangeCategory = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    selectCategoryId(Number(event.target.value));
  };

  const handleClickButtonAdd = () => {
    // products.addProduct({ name: productName, categoryId });
  };

  return (
    <div className={classes.catalog}>
      <div className={classes.formAddProduct}>
        <FormControl className={classes.productProps}>
          <TextField
            type="text"
            variant="outlined"
            placeholder="Enter product name"
            onChange={e => {
              setProductName(e.currentTarget.value);
            }}
            value={productName}
            hiddenLabel
            fullWidth
          />
          <SelectorCategory
            className={classes.inputSelectCategory}
            categories={categories}
            categoryId={categoryId}
            onChangeCategory={handleChangeCategory}
          />
        </FormControl>
        {/* <EditIcon fontSize="small" /> */}
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={handleClickButtonAdd}
          className={classes.buttonAdd}
        >
          Add
        </Button>
      </div>
      <ProductList
        className={classes.productsList}
        categories={categories}
        products={products}
      />
    </div>
  );
});

export default Catalog;
