import React from 'react';
import { observer } from 'mobx-react-lite';
import { Select, MenuItem } from '@material-ui/core/';
import { ICategories } from '../../../types';

interface SelectCategoryProps {
  className?: string;
  categories: ICategories;
  categoryId: number;
  onChangeCategory: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = observer(
  ({
    className,
    categories,
    categoryId,
    onChangeCategory
  }: SelectCategoryProps): React.ReactElement => {
    const categoriesKeys = Object.keys(categories);

    return (
      <Select
        value={categories[categoryId] ? categoryId : 0}
        onChange={onChangeCategory}
        className={className}
        variant="outlined"
        margin="none"
        fullWidth
        style={{ maxWidth: '40%' }}
      >
        <MenuItem value={0}>Select category</MenuItem>
        {categoriesKeys.map((id: string) => (
          <MenuItem key={id} value={id}>
            {categories[Number(id)].name}
          </MenuItem>
        ))}
      </Select>
    );
  }
);

export default SelectCategory;
