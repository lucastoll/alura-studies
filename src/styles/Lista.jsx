import styled from "styled-components";

export const ListaWrapper = styled.aside`
  grid-area: tarefas;
  height: 100%;
  margin-bottom: 100px;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  ul {
    max-height: 350px;
    overflow-y: scroll;
  	scrollbar-width: thin;
  }

  @media screen and (min-width:1280px) {
    
  h2{
    text-align: center;
    font-size: 2.25rem;
    margin-bottom: 24px;
  }

  ul {
    overflow: auto;
    max-height: 500px;
  }
  }

.item {
  background-color: #4D4D4D;
  border-radius: 8px;
  box-shadow: 2px 4px 4px #0000009F;
  padding: 12px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; 

  &:hover{
    background-color: #292929;
  }

  h3 {
    margin-bottom: 8px;
    word-break: break-all;
  }

  span {
    color: #D0D0D0;
  }

  @media screen and (min-width:1280px) {
    font-size: 1.8rem;
  }
}

.itemSelecionado {
  background-color: #292929;
  
}

.itemCompletado {
  background-color: #051D3B;
  cursor: auto;

  &:hover{
    background-color: #051D3B;
  }


.concluido {
  display: block;
  background-repeat: no-repeat;
  background-size: 38px 38px;
  background-image: url('check-mark.svg');
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 42px;
  height: 43px;
  
}
}
`