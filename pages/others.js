import React from 'react'
import { 
  AspectRatio, 
  Progress,
  Box,
  Flex,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import Layout from '../components/layouts/article'
import { Title } from '../components/work'
import { RiFlutterFill } from "react-icons/ri"
import { FaAngular, FaNodeJs, FaUbuntu } from "react-icons/fa"
import { IoLogoJavascript, IoLogoAndroid, IoLogoFirebase } from "react-icons/io5"
import { TbBrandNextjs } from "react-icons/tb"
import { SiKalilinux } from "react-icons/si"

// Componente con animación para las barras de progreso
const MotionProgress = motion(Progress);

const Others = () => {
  const skills = [
    { name: 'Flutter', icon: RiFlutterFill, value: 90, colorScheme: 'blue' },
    { name: 'Angular', icon: FaAngular, value: 50, colorScheme: 'red' },
    { name: 'Node', icon: FaNodeJs, value: 85, colorScheme: 'green' },
    { name: 'Javascript', icon: IoLogoJavascript, value: 60, colorScheme: 'yellow' },
    { name: 'Android', icon: IoLogoAndroid, value: 60, colorScheme: 'teal' },
    { name: 'Firebase', icon: IoLogoFirebase, value: 60, colorScheme: 'pink' },
    { name: 'NextJS', icon: TbBrandNextjs, value: 50, colorScheme: 'cyan' },
    { name: 'Ubuntu', icon: FaUbuntu, value: 80, colorScheme: 'orange' },
    { name: 'Kali Linux', icon: SiKalilinux, value: 80, colorScheme: 'gray' }
  ];

  return (
    <Layout>
      <Title>Knowledges & Skills</Title>
      
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <Box key={index} mb={6}>
            <Flex align="center" mb={2}>
              <Text fontSize="lg" fontWeight="bold" mr={2}>{skill.name}</Text>
              <IconComponent size={30} color={skill.colorScheme === 'gray' ? 'black' : skill.colorScheme} />
            </Flex>
            {/* Animación en las barras de progreso */}
            <MotionProgress 
              value={skill.value} 
              colorScheme={skill.colorScheme} 
              initial={{ width: 0 }} 
              animate={{ width: `${skill.value}%` }} 
              transition={{ duration: 1.5 }}
            />
          </Box>
        );
      })}

      <AspectRatio maxW="full" ratio={1} margin={10}>
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

export default Others;
