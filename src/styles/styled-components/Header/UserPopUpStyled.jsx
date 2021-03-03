import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavUserContainer = styled(motion.div)`
    background-color: white;
    position: absolute;
    top: 25px;
    left: 0px;
    width: 200px;
    height: 150px;
    ul{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: centerl;
        box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
        li{
            padding-left: 30px;
        }
    }
`;
export default NavUserContainer;