// eslint-disable-next-line react/jsx-no-undef
<MyComponent
  counter={3}
  text="example"
  showStatus={true}
  config={{ uppercase: true }}
  biggerNumber={Math.max(27, 35)}
  arbitraryNumbers={[1, 4, 28, 347, 1538]}
  dateObject={Date}
  dateInstance={new Date()}
  icon={
    <svg x="0px" y="0px" width="32px" height="32px">
      <circle fill="#CC3300" cx="16" cy="16" r="16" />
    </svg>
  }
  callMe={() => {
    console.log("Somebody called me");
  }}
/>;
