import GearIcon from '@rsuite/icons/Gear';

const AppLoader = () => {
  return (
    <div className='fixed w-screen h-screen bg-primary z-50 flex justify-center items-center'>
      <GearIcon spin style={{ fontSize: '4em' }} />
    </div>
  );
};

export default AppLoader;
