import styled from "styled-components";

export const HomeStyled = styled.div`
  @media (max-width: 600px) {
    nav {
      width: 100%;
      height: auto;
    }
  }
`;
export const HeaderStyled = styled.header`
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
`;
export const NavStyled = styled.nav`
  float: left;
  width: 30%;
  background: #ccc;
  padding: 20px;
  ul {
    list-style-type: none;
    padding: 0;
  }
`;
export const FooterStyled = styled.footer`
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
`;
export const SectionStyled = styled.section`
  ::after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const ContentStyled = styled.div`
  float: left;
  padding: 20px;
  width: 70%;
  background-color: #f1f1f1;
  overflow:hidden;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;
