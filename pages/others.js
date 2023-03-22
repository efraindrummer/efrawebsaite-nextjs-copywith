import React from 'react'
import { 
  AspectRatio, 
  Progress
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Title } from '../components/work'
import { RiFlutterFill } from "react-icons/ri"
import { FaAngular, FaNodeJs, FaUbuntu } from "react-icons/fa"
import { IoLogoJavascript, IoLogoAndroid, IoLogoFirebase } from "react-icons/io5"
import { TbBrandNextjs } from "react-icons/tb"
import { SiKalilinux } from "react-icons/si"

const Others = () => {
  return (
    <Layout>
      <Title>Knowledges & Skills</Title>

      <span>
        Flutter
        <RiFlutterFill size={30} color='teal' />
        <Progress value={90} colorScheme='blue' />
      </span>

      <span>
        Angular
        <FaAngular size={30} color='red' />
        <Progress value={50} colorScheme='red' />
      </span>

      <span>
        Node
        <FaNodeJs size={30} color='green' />
        <Progress value={85} colorScheme='green' />
      </span>

      <span>
        Javascript
        <IoLogoJavascript size={30} color='yellow'/>
        <Progress value={60} colorScheme='yellow' />
      </span>

      <span>
        Android
        <IoLogoAndroid size={30} color='teal'/>
        <Progress value={60} colorScheme='teal' />
      </span>

      <span>
        Firebase
        <IoLogoFirebase size={30} color='pink'/>
        <Progress value={60} colorScheme='pink' />
      </span>

      <span>
        NextJS
        <TbBrandNextjs size={30} color='cyan'/>
        <Progress value={50} colorScheme='cyan' />
      </span>

      <span>
        Ubuntu
        <FaUbuntu size={30} color='orange'/>
        <Progress value={80} colorScheme='orange' />
      </span>

      <span>
        Kali Linux
        <SiKalilinux size={30} color='black'/>
        <Progress value={80} />
      </span>
      

      <AspectRatio maxW="full" ratio={1}  margin={10}>
        <iframe
          src="https://www.youtube.com/embed/V7I3BI1pg28"
          title="Spotify UI Clone Flutter Web"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </AspectRatio>
    </Layout>
  )
}

export default Others
