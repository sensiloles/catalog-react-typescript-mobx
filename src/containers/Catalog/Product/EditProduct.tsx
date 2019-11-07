import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles
} from '@material-ui/core/';
import useStores from '../../../hooks/useStores';
import ProductForm from './ProductForm';

const useStyles = makeStyles(() => ({
  dialogActions: {
    justifyContent: 'center',
    marginBottom: '5px'
  }
}));

interface EditProductProps {
  editableProduct: number | null;
  setEditableProduct: (id: number) => void;
}

const EditProduct: React.FC<EditProductProps> = observer(
  ({
    editableProduct,
    setEditableProduct
  }: EditProductProps): React.ReactElement => {
    const {
      catalogStore: { editProduct }
    } = useStores();
    const styles = useStyles();

    const handleClickCloseDialog = (): void => {
      setEditableProduct(0);
    };

    const content = editableProduct ? (
      <Dialog
        open={Boolean(editableProduct)}
        onClose={handleClickCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Change data of this product and click to save button. Or close this
            window
          </DialogContentText>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <ProductForm
            action="edit"
            productId={editableProduct}
            submitForm={editProduct}
            handleClickCloseDialog={handleClickCloseDialog}
            fullWidth
          />
        </DialogActions>
      </Dialog>
    ) : null;

    return <>{content}</>;
  }
);

export default EditProduct;
