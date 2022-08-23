import styled from "styled-components";

export const ProductMainWrapper = styled.div`
  background-color: #fff;
  border-radius: 0.5em;
  padding: 0.7em 0.7em 0 0.7em;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;

  width: 40%;
  justify-content: space-between;
`;

export const ProductMainImage = styled.div`
  padding: 0.2em;

  width: fit-content;
  border-radius: 0.3em;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ProductMainImageContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

export const ProductMainTitle = styled.div`
  color: #000;
  padding: 0 0.7em 0.7em 0.7em;
  display: flex;
  flex-direction: row;

  width: 100%;

  font-size: large;
  justify-content: center;
  align-items: center;
`;

export const ProductMainInfo = styled.div`
  color: #000;

  padding: 0 0.7em 0.7em 0.7em;
  display: flex;
  flex-direction: column;

  width: 100%;

  font-size: large;
  justify-content: center;
  align-items: center;
`;

export const ProductMainDescription = styled.div`
  color: #000;

  padding: 0 0 0.7em 0;
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ProductMainPrice = styled.div`
  color: #000;

  display: flex;
  flex-direction: column;

  padding: 0 0 0.7em 0;
  width: 100%;
  font-size: larger;
`;
export const ProductMainNoteTitle = styled.div`
  color: #000;

  padding: 0 0 0.7em 0;
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ProductMainNoteInput = styled.input`
  color: #000;

  padding: 0.7em;
  font-size: large;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.6em;
  height: 50px;
`;

export const ProductMainSelectAddContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  color: #000;
  justify-content: space-between;
`;

export const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.7em 0;

  width: 70%;
`;
