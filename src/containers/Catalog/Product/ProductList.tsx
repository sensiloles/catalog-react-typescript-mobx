import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  makeStyles
} from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ICategories, IProducts, IProduct } from '../../../types';
import RemoveProduct from './RemoveProduct';
import EditProduct from './EditProduct';
import useStores from '../../../hooks/useStores';

const useStyles = makeStyles(theme => ({
  productList: {
    flexGrow: 1,
    border: `1px solid gray`,
    marginLeft: '20px',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
      marginLeft: '0px'
    }
  },
  productItem: {
    maxWidth: '100%'
  },
  productText: {
    overflowWrap: 'break-word',
    paddingRight: '80px'
  }
}));

interface ProductListProps {
  categories: ICategories;
  products: IProducts;
}

const ProductList: React.FC<ProductListProps> = observer(
  (): React.ReactElement => {
    const {
      catalogStore: { categories, products }
    } = useStores();
    const classes = useStyles();

    const [removableProduct, setRemovableProduct] = useState<number | null>(
      null
    );
    const [editableProduct, setEditableProduct] = useState<number | null>(null);

    const content = products.map((product: IProduct) => (
      <ListItem key={product.id} className={classes.productItem}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          className={classes.productText}
          primary={<Typography>{product.name}</Typography>}
          secondary={
            categories[product.categoryId]
              ? categories[product.categoryId].name
              : 'category not defined'
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            onClick={(): void => {
              if (!product.id) return;
              setEditableProduct(product.id);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={(): void => {
              if (!product.id) return;
              setRemovableProduct(product.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));

    return (
      <div className={classes.productList}>
        {products.length ? (
          <>
            <List>{content}</List>
            <RemoveProduct
              removableProduct={removableProduct}
              setRemovableProduct={setRemovableProduct}
            />
            <EditProduct
              editableProduct={editableProduct}
              setEditableProduct={setEditableProduct}
            />
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            No products
          </div>
        )}
      </div>
    );
  }
);

export default ProductList;
