interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = (props: CloseButtonProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
      onClick={props.onClick}
      style={{
        cursor: 'pointer',
      }}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.17039 9.23394L1.14007 16.2643L0.432965 15.5572L7.46329 8.52684L0.17041 1.23396L0.877517 0.526856L8.17039 7.81973L15.4633 0.526855L16.1704 1.23396L8.8775 8.52684L15.9078 15.5572L15.2007 16.2643L8.17039 9.23394Z'
        fill='#1B1B1B'
      />
    </svg>
  );
};

export default CloseButton;
