import React from 'react'
import { Center, Container } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Title } from '../components/work'

const Others = () => {
  return(
    <Layout>
      <Container></Container>
      <Title>
        En construccion...
      </Title>
      <Center>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='yellow'
          color='blue.500'
          size='xl'
        />
      </Center>
    </Layout>
  );
}

export default Others
export { getServerSideProps } from '../../components/chakra'