import styled from 'styled-components';

// HD - Header
// UL - User List
// MG - Message Box
// UI - User Info
// FT - Footer



export const Grid = styled.div`
  display: grid;

  grid-template-columns: 25% auto;
  grid-template-rows: 76px auto 76px;

  grid-template-areas: 
    'HD HD'
    'UL MGB'
    'UI FT';
    height: 100vh;
`;
