import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core/';
import useStores from '../../../hooks/useStores';

interface RemoveProductProps {
  removableProduct: number;
  setRemovableProduct: (id: number) => void;
}

const RemoveProduct: React.FC<RemoveProductProps> = observer(
  ({
    removableProduct,
    setRemovableProduct
  }: RemoveProductProps): React.ReactElement => {
    const {
      catalogStore: { removeProduct }
    } = useStores();

    const handleClickCloseDialog = (): void => {
      setRemovableProduct(0);
    };

    const content = removableProduct ? (
      <Dialog
        open={Boolean(removableProduct)}
        onClose={handleClickCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickCloseDialog} color="primary">
            Close
          </Button>
          <Button
            onClick={(): void => {
              if (removableProduct) {
                removeProduct(removableProduct);
              }
              handleClickCloseDialog();
            }}
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    ) : null;

    return <>{content}</>;
  }
);

export default RemoveProduct;
