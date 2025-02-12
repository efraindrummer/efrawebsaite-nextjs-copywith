import React from 'react';
import { 
  AspectRatio, 
  Box, 
  Flex, 
  Text, 
  VStack, 
  Progress, 
  useColorModeValue 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Layout from '../components/layouts/article';
import { Title } from '../components/work';
import { RiFlutterFill } from "react-icons/ri";
import { FaAngular, FaNodeJs, FaUbuntu } from "react-icons/fa";
import { IoLogoJavascript, IoLogoAndroid, IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiKalilinux, SiMicrosoftsqlserver, SiMysql } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const MotionBox = motion(Box);
const MotionProgress = motion(Progress);

const Others = () => {
  const bgCard = useColorModeValue('white', 'gray.800');
  const shadowCard = useColorModeValue('md', 'lg');

  const skills = [
    { name: 'Flutter', icon: RiFlutterFill, value: 90, colorScheme: 'blue' },
    { name: 'Angular', icon: FaAngular, value: 50, colorScheme: 'red' },
    { name: 'Node', icon: FaNodeJs, value: 85, colorScheme: 'green' },
    { name: 'Javascript', icon: IoLogoJavascript, value: 60, colorScheme: 'yellow' },
    { name: 'Android', icon: IoLogoAndroid, value: 60, colorScheme: 'teal' },
    { name: 'Firebase', icon: IoLogoFirebase, value: 60, colorScheme: 'pink' },
    { name: 'NextJS', icon: TbBrandNextjs, value: 50, colorScheme: 'cyan' },
    { name: 'Ubuntu', icon: FaUbuntu, value: 80, colorScheme: 'orange' },
    { name: 'Kali Linux', icon: SiKalilinux, value: 80, colorScheme: 'gray' },
    { name: 'Visual Basic', icon: DiVisualstudio, value: 100, colorScheme: 'purple' },
    { name: 'SQL Server', icon: SiMicrosoftsqlserver, value: 75, colorScheme: 'red' },
    { name: 'MySQL', icon: SiMysql, value: 80, colorScheme: 'blue' },
  ];

  return (
    <Layout>
      <Title>Knowledges & Skills</Title>

      <VStack spacing={6} mt={4}>
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <MotionBox
              key={index}
              w="100%"
              p={4}
              bg={bgCard}
              borderRadius="lg"
              boxShadow={shadowCard}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Flex align="center" justify="space-between">
                <Flex align="center">
                <motion.div 
                whileHover={{ scale: 1.2, rotate: 10, filter: "drop-shadow(0px 0px 10px rgba(255,255,255,0.5))" }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent size={30} color={skill.colorScheme === 'gray' ? 'black' : skill.colorScheme} />
              </motion.div>
                  <Text fontSize="lg" fontWeight="bold" ml={3}>{skill.name}</Text>
                </Flex>
                <Text fontSize="sm" fontWeight="bold">{skill.value}%</Text>
              </Flex>
              
              <MotionProgress 
                mt={2} 
                value={skill.value} 
                colorScheme={skill.colorScheme} 
                initial={{ width: 0 }} 
                animate={{ width: `${skill.value}%` }} 
                transition={{ duration: 1.2 }}
                sx={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}
              />
            </MotionBox>
          );
        })}
      </VStack>

      <AspectRatio maxW="full" ratio={16 / 9} mt={10} borderRadius="lg" overflow="hidden" boxShadow="xl">
        <motion.iframe
          src="https://www.youtube.com/embed/V7I3BI1pg28"
          title="Spotify UI Clone Flutter Web"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </AspectRatio>
    </Layout>
  );
};

export default Others;


