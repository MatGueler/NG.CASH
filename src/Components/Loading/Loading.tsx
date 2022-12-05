import styled from "styled-components";

import { RotatingLines } from "react-loader-spinner";

function LoadingComponent() {
  return (
    <Loading>
      <div className="load-icon">
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </Loading>
  );
}

export default LoadingComponent;

export const Loading = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  .load-icon {
    border-radius: 100%;
    background-color: #00249c;
  }
`;
