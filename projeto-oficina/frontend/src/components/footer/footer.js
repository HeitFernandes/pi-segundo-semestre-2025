import React from 'react';
import { FaHeart, FaRegCopyright, FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { CiLinkedin } from 'react-icons/ci';
import {
  FooterDiv,
  NexBit,
  FooterName,
  FooterC,
  FooterIcons,
  Svg,
  PathSvg,
  Wavecontainer,
} from './styled';

export default function Footer() {
  return (
    <FooterDiv>
      <Wavecontainer>
        <Svg viewBox="0 0 120 20" preserveAspectRatio="none">
          <PathSvg d="M0,10 C30,28 90,0 120,18 L120,0 L0,0 Z" fill="#7a0000" />
        </Svg>
      </Wavecontainer>
      <NexBit />
      <FooterName>
        <FooterIcons>
          <FaGithub />
          <GrInstagram />
          <FaWhatsapp />
          <CiLinkedin />
        </FooterIcons>
        <h4>
          Feito com <FaHeart className="Heart" /> pela equipe NexBit.
        </h4>
      </FooterName>
      <FooterC>
        <h4>About</h4>
        <span>
          NexBit é uma empresa dedicada ao desenvolvimento de software
        </span>
        <FooterIcons />
        <h4>
          <FaRegCopyright /> 2025 todos os direitos reservados.
        </h4>
      </FooterC>
    </FooterDiv>
  );
}
