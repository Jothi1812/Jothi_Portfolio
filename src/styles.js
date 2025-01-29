import styled from 'styled-components';

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff6f61, #d83a56);
  color: white;
  text-align: center;
`;


export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  margin-top: 1rem;
  a {
    margin: 0 10px;
    color: white;
    font-size: 24px;
    transition: color 0.3s ease;
    &:hover {
      color: #ffd700;
    }
  }
`;

export const Icon = styled.i`
  margin: 0 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ObjectiveText = styled.p`
  background: #ffffffa0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #333;
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const SkillCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background: #f9f9f9;
    transform: scale(1.05);
  }
  
  h3 {
    margin: 0;
    color: #333;
  }
  
  p {
    color: #666;
  }
`;


export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimelineEvent = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  text-align: center;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: -15px;
    width: 10px;
    height: 10px;
    background: #ff6f61;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  h3 {
    margin-top: 0;
  }
  
  a {
    color: #ff6f61;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin: 4rem 0;
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
  font-size: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 4px;
    background: #ff6f61;
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ff6f61;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`;
