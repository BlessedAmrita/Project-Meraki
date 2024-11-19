import { useState } from 'react';
import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react';
// import Image from 'next/image';
// import { List } from '../../shared/Typography/Lists';
// import { closeIcon, mapSize } from '@/config/content/Footer';

export default function MapModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li onClick={onOpen} className="relative hover-line cursor-pointer">
                    NIT Rourkela,769002{" "}
                  </li>
                  <img
                    src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1719914768/icons8-google-maps-old_kj59jx.svg"
                    className="cursor-pointer h-10 hover-glow"
                    onClick={onOpen}
                  />
      <Modal
        size='5xl'
        isOpen={isOpen}
        onClose={onClose}
        backdrop='blur'
        hideCloseButton={true}
      >
        <ModalContent className='relative'>
          {(onClose) => (
            <>
              <Button
                color='danger'
                variant='light'
                onPress={onClose}
                className='absolute top-1 right-0'
              >
                <img src='https://res.cloudinary.com/dpmlrxlzr/image/upload/v1726844038/icons8-close_cydpjh.svg' alt='close' width={30} height={30} />
              </Button>
              <ModalBody className='p-2'>
                <div className='w-full'>
                  <iframe
                    width='100%'
                    height='600'
                    src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=National%20Institute%20of%20Technology%20Rourkela+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}