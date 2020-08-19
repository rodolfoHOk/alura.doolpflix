import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: #141414;
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll}
    `};
`;

export default function PageDefault({ children, paddingAll, isHome }) {
  return (
    <>
      <Menu isHome={isHome} />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  isHome: false,
  paddingAll: '20px',
};

PageDefault.propTypes = {
  isHome: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
  paddingAll: PropTypes.string,
};
