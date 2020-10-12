/* eslint-disable prettier/prettier */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent specs', () => {
  it('ConfirmationDialogComponent not present when isOpen is false ', () => {
    //Arrange
    const props = {
      isOpen: false,
      title: 'My title',
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'Text content',
    };
    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const element = screen.queryByRole('presentation');
    //Assert
    expect(element).not.toBeInTheDocument();
  });

  it('ConfirmationDialogComponent present when isOpen is true ', () => {
    //Arrange
    const props = {
      isOpen: true,
      title: 'My title',
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'Text content',
    };
    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const element = screen.getByRole('presentation');
    //Assert
    expect(element).toBeInTheDocument();
  });

  it('ConfirmationDialogComponent with all props with value all of that are in the document', () => {
    //Arrange
    const props = {
      isOpen: true,
      title: 'My title',
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'Text content',
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const headingElement = screen.getByRole('heading', {
      name: 'My title',
    });
    const textElement = screen.getByText('Text content');

    const acceptButtonElement = screen.getByRole('button', {
      name: 'Accept',
    });
    const closeButtonElement = screen.getByRole('button', {
      name: 'Close',
    });
    //Assert
    expect(headingElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(acceptButtonElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();
  });

  it('ConfirmationDialogComponent click closeButton call onClose method', () => {
    //Arrange
    const props = {
      isOpen: true,
      title: 'My title',
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'Text content',
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButtonElement = screen.getByRole('button', {
      name: 'Close',
    });
    userEvent.click(closeButtonElement);
    //Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('ConfirmationDialogComponent click acceptButton call onAccept method', () => {
    //Arrange
    const props = {
      isOpen: true,
      title: 'My title',
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'Text content',
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const acceptButtonElement = screen.getByRole('button', {
      name: 'Accept',
    });
    userEvent.click(acceptButtonElement);
    //Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('ConfirmationDialogComponent with title null, render without title', () => {
    //Arrange
    const props = {
      isOpen: true,
      title: null,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'Text content',
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const headingElement = screen.getByRole('heading', {
      name: '',
    });

    //Assert
    expect(headingElement).toBeInTheDocument();
  });

  it('ConfirmationDialogComponent with title undefined, render without title', () => {
    //Arrange
    const props = {
      isOpen: true,
      title: undefined,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: 'Text content',
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const headingElement = screen.getByRole('heading', {
      name: '',
    });

    //Assert
    expect(headingElement).toBeInTheDocument();
  });
});
