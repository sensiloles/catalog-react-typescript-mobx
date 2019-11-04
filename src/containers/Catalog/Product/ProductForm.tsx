import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TextField, FormControl, Button, makeStyles } from '@material-ui/core/';
import useStores from '../../../hooks/useStores';
import SelectCategory from '../Category/SelectCategory';
import EditCategory from '../Category/EditCategory';
import { IProduct } from '../../../types/catalog';

const useStyles = makeStyles(() => ({
  productAddForm: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '25%'
  },
  productProps: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  inputSelectCategory: {
    marginLeft: '2px'
  },
  buttonSubmit: {
    marginTop: '5px',
    width: '100%'
  }
}));

interface ProductFormProps {
  action: string;
  productId?: number | null;
  submitForm: (props: IProduct | Omit<IProduct, 'id'>) => void;
  handleClickCloseDialog?: () => void;
}

const ProductForm: React.FC<ProductFormProps> = observer(
  ({
    action,
    productId,
    submitForm,
    handleClickCloseDialog
  }: ProductFormProps): React.ReactElement => {
    const {
      catalogStore: { categories, products }
    } = useStores();
    const classes = useStyles();

    const currentCategory = productId ? products[productId - 1].categoryId : 0;
    const currentProductName = productId ? products[productId - 1].name : '';
    const [productName, setProductName] = useState<string>(
      currentProductName || ''
    );
    const [categoryId, selectCategoryId] = useState<number>(
      currentCategory || 0
    );
    const [errorForm, setErrorForm] = useState<boolean>(false);

    const handleChangeCategory = (
      event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
      }>
    ): void => {
      selectCategoryId(Number(event.target.value));
    };

    const handleClickButtonSubmit = (): void => {
      if (!productName || !categoryId) {
        setErrorForm(true);
        return;
      }
      if (productId) {
        submitForm({ id: productId, name: productName, categoryId });
      } else {
        submitForm({ name: productName, categoryId });
      }
      if (handleClickCloseDialog) handleClickCloseDialog();
      setProductName('');
    };

    return (
      <div className={classes.productAddForm}>
        <FormControl className={classes.productProps}>
          <TextField
            type="text"
            variant="outlined"
            placeholder="Enter product name"
            onChange={(e): void => {
              setProductName(e.currentTarget.value);
              if (e.currentTarget.value) {
                setErrorForm(false);
              } else {
                setErrorForm(true);
              }
            }}
            value={productName}
            hiddenLabel
            fullWidth
            error={errorForm}
          />
          <SelectCategory
            className={classes.inputSelectCategory}
            categories={categories}
            categoryId={categoryId}
            onChangeCategory={handleChangeCategory}
          />
          <EditCategory
            categoryId={categoryId}
            selectCategoryId={selectCategoryId}
          />
        </FormControl>
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={handleClickButtonSubmit}
          className={classes.buttonSubmit}
          disabled={errorForm || !categoryId}
        >
          {action}
        </Button>
      </div>
    );
  }
);

export default ProductForm;
