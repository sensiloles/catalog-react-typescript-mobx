import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core/';
import FolderIcon from '@material-ui/icons/Folder';
import { useStores } from '../../hooks/useStores';
import { IProduct } from '../../types';

interface ProductListProps {
  className: string;
}

const ProductList = observer(
  ({ className }: ProductListProps): JSX.Element => {
    const { catalogStore } = useStores();
    const { categories, products } = catalogStore;

    const content = products.map((product: IProduct) => (
      <ListItem key={product.id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={categories[product.categoryId].name}
        />
      </ListItem>
    ));

    return (
      <div className={className}>
        <List>{content}</List>
      </div>
    );
  }
);

export default ProductList;
