import React, { useState } from 'react';
import Modal from 'react-modal';

import {
  Tile,
  ImageWrapper,
  ImageContainer,
  Data,
  Item,
  ModalContent,
  CloseModal,
} from './style';

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#main');
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export interface UserTileProps {
  cell: string;
  city: string;
  email: string;
  name: string;
  id: string;
  phone: string;
  postcode: string;
  state: string;
  street: string;
  thumbnail: string;
  userName: string;
}

const UserTile = ({
  cell,
  city,
  email,
  name,
  phone,
  postcode,
  state,
  street,
  thumbnail,
  userName,
}: UserTileProps): JSX.Element => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const basicDataTemplate = (
    <Data>
      {name && (
        <Item>
          First Name:
          <span>{name}</span>
        </Item>
      )}
      {userName && (
      <Item>
        User Name:
        <span>{userName}</span>
      </Item>
      )}
      {email && (
      <Item>
        Email:
        <span>{email}</span>
      </Item>
      )}
    </Data>
  );

  return (
    <>
      <Tile onClick={openModal}>
        <ImageContainer>
          <ImageWrapper>
            <picture>
              <source
                media="(max-width: 1024px)"
                srcSet={`${thumbnail} 2x,
                        ${thumbnail} 1x`}
              />
              <source
                media="(min-width: 1025px)"
                srcSet={`${thumbnail} 2x,
                        ${thumbnail} 1x`}
              />
              <img src={thumbnail} alt={name} />
            </picture>
          </ImageWrapper>
        </ImageContainer>
        {basicDataTemplate}
      </Tile>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Data Modal"
        shouldCloseOnOverlayClick
        ariaHideApp={process.env.NODE_ENV !== 'test'}
      >
        <ModalContent>
          <CloseModal onClick={closeModal}><span>close</span></CloseModal>
          {basicDataTemplate}
          <Data>
            {street && (
              <Item>
                Street:
                <span>{street}</span>
              </Item>
            )}
            {city && (
            <Item>
              City:
              <span>{city}</span>
            </Item>
            )}
            {state && (
            <Item>
              State:
              <span>{state}</span>
            </Item>
            )}
            {postcode && (
            <Item>
              Postcode:
              <span>{postcode}</span>
            </Item>
            )}
            {phone && (
            <Item>
              Phone:
              <span>{phone}</span>
            </Item>
            )}
            {cell && (
            <Item>
              Cell:
              <span>{cell}</span>
            </Item>
            )}
          </Data>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserTile;
