import React from 'react';
import { observer } from 'mobx-react-lite';
import { Select, MenuItem } from '@material-ui/core/';
import { ICategories } from '../../types';

interface SelectorCategoryProps {
  className: string;
  categories: ICategories;
  categoryId: number;
  onChangeCategory: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}

const SelectorCategory = observer(
  ({
    className,
    categories,
    categoryId,
    onChangeCategory
  }: SelectorCategoryProps) => {
    const categoriesKeys = Object.keys(categories);

    return (
      <Select
        value={categoryId}
        onChange={onChangeCategory}
        className={className}
        variant="outlined"
        margin="none"
        fullWidth
        style={{ maxWidth: '40%' }}
      >
        <MenuItem value={0} disabled>
          Category
        </MenuItem>
        {categoriesKeys.map((id: string) => (
          <MenuItem key={id} value={id}>
            {categories[Number(id)].name}
          </MenuItem>
        ))}
      </Select>
    );
  }
);

export default SelectorCategory;
