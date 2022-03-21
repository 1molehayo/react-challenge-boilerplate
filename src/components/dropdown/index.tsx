import React, { useState, useRef } from 'react';
import useOnClickOutside from 'services/useOnClickOutside';
import { isObjectEmpty, isArrayEmpty } from 'utility';
import Checkbox from 'components/checkbox';
import {
  DropdownHeader,
  DropdownIcon,
  DropdownList,
  SelectedPill,
  StyledDropdown
} from './Dropdown.styled';
import Icon from 'components/icon';
import { colors } from 'styles/global/Constants';

interface IDropdown {
  items: any[];
  multiSelect?: boolean;
  selection: any;
  setSelection: any;
  title: string;
}

const Dropdown: React.FC<IDropdown> = ({
  title,
  items,
  multiSelect = false,
  selection,
  setSelection
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const dropdownRef = useRef(null);
  const [selected, setSelected] = useState<any>();
  const [selectAll, setSelectAll] = useState(false);
  // const [searchItems, setSearchItems] = useState(items);

  useOnClickOutside(dropdownRef, () => setOpen(false));

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleOnChange = (item: any) => {
    console.log(item);
    if (!multiSelect) {
      setSelection(item.value);
      setSelected(item);
      setOpen(false);
      return;
    }

    // if its multiselect
    if (!item.value && item.label.toLowerCase('all')) {
      if (!selectAll) {
        const arr: any = [];

        items.map((obj) => {
          if (obj.value) {
            arr.push(obj.value);
          }
          return obj;
        });

        setSelection(arr);
      } else {
        setSelection([]);
      }

      toggleSelectAll();
      return;
    }

    if (!selection.some((current: any) => current === item.value)) {
      setSelection([...selection, item.value]);
    } else {
      const selectionAfterRemoval = selection.filter(
        (current: any) => current !== item.value
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemInSelection = (item: any) => {
    if (isArrayEmpty(selection)) {
      return false;
    }

    if (selection.some((current: any) => current === item.value)) {
      return true;
    }

    return false;
  };

  return (
    <StyledDropdown ref={dropdownRef}>
      {multiSelect && !isArrayEmpty(selection) && (
        <SelectedPill>{`${selection.length} selected`}</SelectedPill>
      )}

      <DropdownHeader
        tabIndex={0}
        role="button"
        onKeyPress={toggle}
        onClick={toggle}
      >
        <p>{isObjectEmpty(selected) ? title : selected.label}</p>

        <DropdownIcon>
          <Icon
            icon={open ? 'angle-up' : 'angle-down'}
            size="10px"
            color={colors.blue}
          />
        </DropdownIcon>
      </DropdownHeader>

      {open && (
        <DropdownList>
          {items.map((item, index) => (
            <li key={index}>
              <button type="button" onClick={() => handleOnChange(item)}>
                {multiSelect ? (
                  <Checkbox
                    value={item.value}
                    checked={isItemInSelection(item) || selectAll}
                  >
                    {item.label}
                  </Checkbox>
                ) : (
                  item.label
                )}
              </button>
            </li>
          ))}
        </DropdownList>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
