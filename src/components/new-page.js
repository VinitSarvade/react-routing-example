import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
`;

const Tab = styled.div`
  padding: 8px 12px;
  border: thin solid blue;
  border-right-color: grey;
  border-left-color: grey;
  color: #333;

  :first-child {
    border-left-color: blue;
  }

  :last-child {
    border-right-color: blue;
  }

  &.lg {
    font-size: 20px;
    flex: 1;
    text-align: center;
    padding: 12px 16px;
  }
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:30px;
`;

const Input = styled.input`
  border: thin solid #777;
  padding: 12px 16px;
  font-size: 20px;
  color: #333;
  display: block;
  margin: 32px auto;
  width: 80%;
`;

const Note = styled.p`
  margin: 42px auto;
  text-align: center;

`;

const Button = styled.button`
  border: thin solid blue;
  padding: 8px 12px;
  color: ${props => props.primary ? 'white' : 'blue'}
  background-color: ${props => props.primary ? 'blue' : 'white'}
  font-size: 20px;
  flex: 1;
  margin: 0 40px;
  outline: none;

`;

const Flexcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const NewPage = () => {
  return (
    <Container>
      <Tabs>
        <Tab>BTC</Tab>
        <Tab>ETH</Tab>
        <Tab>LTH</Tab>
      </Tabs>
      <Status>
        <p>SENDING</p>
        <p>ICON</p>
        <p>BTC</p>
      </Status>
      <Tabs>
        <Tab className='lg'>Bakkt Users</Tab>
        <Tab className='lg'>External</Tab>
      </Tabs>
      <Input placeholder="Enter BTC Address" />
      <Note>
        Note: Risk associated with sending to external addresses on the chain is higher
      </Note>
      <Flexcontainer>
        <Button primary>Continue</Button>
        <Button>Cancel</Button>
      </Flexcontainer>
    </Container>
  );
}

export default NewPage;
