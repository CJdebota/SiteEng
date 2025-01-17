import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Section = styled.div`
  padding: 50px 0;
  align-items:center;
  display:flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;;
  margin: 0 auto;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1%;
  padding-left: 1%;
  padding-right: 1%;
  margin-top: 30px;
`;

export const Item = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 2%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
`;
export const Card = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 5%;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const CardContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #fff;
  color: #007bff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
`;
export const CardContentText = styled.div`
  max-width: 90%; 
  background: #fff;
  margin: 1%;
  padding: 20px; // Adicione espaçamento interno
  border-radius: 8px; // Ajuste o valor para controlar o arredondamento
  text-align: justify;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Adicione uma sombra suave
`;

export const EventosSection = styled.div`
  background: #fff;
  margin: 1%;
  padding: 20px;
  border-radius: 15px;
  text-align: justify;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 50%;
  margin-left: ${({ marginLeft }) => marginLeft || '45%'}; // Parâmetro marginLeft
  margin-right: ${({ marginRight }) => marginRight || '0%'}; // Parâmetro marginRight
  margin-top: 2%;
  margin-bottom: 2%;
  justify-content: space-evenly;
`;

export const Eventos = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 60%;
`;