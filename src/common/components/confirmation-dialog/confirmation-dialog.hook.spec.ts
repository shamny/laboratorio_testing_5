import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  it('should return an object with isOpen equals "false"  ', () => {
    //Arrange
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should return an object with itemToDelete is Lookup empty"  ', () => {
    //Arrange
    const itemTest: Lookup = { id: '', name: '' };
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    expect(result.current.itemToDelete).toEqual(itemTest);
  });

  it('should return an object with onAccept() is a Function"  ', () => {
    //Arrange
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    expect(result.current.onAccept).toEqual(expect.any(Function));
  });

  it('should return an object with onClose() is a Function"  ', () => {
    //Arrange
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    expect(result.current.onClose).toEqual(expect.any(Function));
  });

  it('should return an object with onOpenDialog() is undefined"  ', () => {
    //Arrange
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    expect(result.current.onOpenDialog).toEqual(expect.anything());
  });

  it('should update isOpen when it calls onOpenDialog()"  ', () => {
    //Arrange
    const itemTest: Lookup = { id: '123', name: 'Item Name' };
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(itemTest);
    });
    //Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(itemTest);
  });

  it('should update isOpen when it calls onClose()"  ', () => {
    //Arrange
    const itemTest: Lookup = { id: '123', name: 'Item Name' };
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(itemTest);
    });

    act(() => {
      result.current.onClose();
    });
    //Assert
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should update empty item when it calls onAccept()"  ', () => {
    //Arrange
    const itemTest: Lookup = { id: '123', name: 'Item Name' };
    const emptyItemTest: Lookup = { id: '', name: '' };
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(itemTest);
    });

    act(() => {
      result.current.onAccept();
    });
    //Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(emptyItemTest);
  });
});
