import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button
} from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import useStores from '../../../hooks/useStores';
import { ICategory } from '../../../types';

interface EditCategoryProps {
  categoryId: number;
  selectCategoryId: (id: number) => void;
}

const EditCategory: React.FC<EditCategoryProps> = observer(
  ({ categoryId, selectCategoryId }: EditCategoryProps): React.ReactElement => {
    const {
      catalogStore: { categories, removeCategory, editCategory, addCategory }
    } = useStores();

    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const category: ICategory = categories[categoryId];
    const currentName = category ? category.name : '';
    const [categoryName, setCategoryName] = useState<string>(currentName);

    useEffect(() => {
      setCategoryName(currentName);
    }, [currentName]);

    const handleClickOpenDialog = (): void => {
      if (!categoryId) setCategoryName('');
      setOpenDialog(true);
    };

    const handleClickCloseDialog = (): void => {
      setOpenDialog(false);
      setCategoryName(currentName);
    };

    const handleClickButtonDelete = (): void => {
      removeCategory(categoryId);
      setOpenDialog(false);
      selectCategoryId(0);
    };

    const handleClickButtonEdit = (): void => {
      editCategory(categoryId, { name: categoryName });
      setOpenDialog(false);
    };

    const handleClickButtonAdd = (): void => {
      if (!categoryName) return;
      addCategory({ name: categoryName });
      setOpenDialog(false);
      setCategoryName('');
    };

    const editCurrentCategory = (
      <Dialog
        open={openDialog}
        onClose={handleClickCloseDialog}
        aria-labelledby="form-dialog-edit-category"
      >
        <DialogTitle id="form-dialog-edit-category">Edit category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a new name or delete this category via buttons below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New category name"
            type="text"
            fullWidth
            value={categoryName}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ): void => {
              setCategoryName(e.currentTarget.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickButtonDelete} color="secondary">
            Delete
          </Button>
          <Button onClick={handleClickButtonEdit} color="primary">
            Save name
          </Button>
        </DialogActions>
      </Dialog>
    );

    const addNewCategory = (
      <Dialog
        open={openDialog}
        onClose={handleClickCloseDialog}
        aria-labelledby="form-dialog-add-category"
      >
        <DialogTitle id="form-dialog-add-category">
          Add new category
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a name for the new category
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category name"
            type="text"
            fullWidth
            value={categoryName}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ): void => {
              setCategoryName(e.currentTarget.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickCloseDialog} color="secondary">
            Close
          </Button>
          <Button
            onClick={handleClickButtonAdd}
            color="primary"
            disabled={!categoryName}
          >
            Add category
          </Button>
        </DialogActions>
      </Dialog>
    );

    return (
      <div>
        <IconButton
          color="primary"
          aria-label="Edit category"
          size="small"
          onClick={handleClickOpenDialog}
        >
          <EditIcon />
        </IconButton>
        {category ? editCurrentCategory : addNewCategory}
      </div>
    );
  }
);

export default EditCategory;
