import './style.scss';

export const Loader = () => {
  return (
    <div className='loader-overlay'>
      <div className='loader-container'>
        <span className='loader'></span>
      </div>
    </div>
  );
};