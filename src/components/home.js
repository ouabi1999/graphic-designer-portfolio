import React from 'react'
import styled from "styled-components"
import {data} from "../common/data"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Home() {
  return (
    <Container>
        <Background>
             <img className='back-ground-img' src="../art.png" alt="background"/>
             
             <h1> Ouabi Abdessamad GRAPHIC DESIGNER</h1>
        </Background>
        <div>
          <h2> About me </h2>
        <Fade left>
          <p>
            As a graphic designer, I am passionate about creating visually compelling designs that communicate a message effectively. With several years of experience in the field, I have developed a strong skill set in branding, typography, layout design, and digital illustration.
          </p>
        </Fade>
        <Fade right>
          <p>
            I am highly proficient in industry-standard software such as Adobe Photoshop, Illustrator, and InDesign, and have a keen eye for detail and aesthetics. Whether working on print or digital media, I always strive to create designs that are not only aesthetically pleasing but also functional and user-friendly.
          </p>
        </Fade>
        <Fade left>
          <p>
            In addition to technical skills, I am an excellent communicator and collaborator, and enjoy working closely with clients to understand their design needs and goals. I am committed to delivering high-quality work that exceeds expectations and am always open to feedback and critiques.
          </p>
        </Fade>
        <Fade right>
          <p>
            Ultimately, my goal as a graphic designer is to use my creativity and expertise to help businesses and individuals achieve their objectives through effective visual communication.
          </p>
        </Fade>

      </div>
      <div>
        <h2>Skills</h2>
        <div>
          <h4>Adobe Illustrator</h4>
          <h4>Adobe Photoshop</h4>
          <h4>Adobe InDesign</h4>

        </div>
        <h2>Work experience</h2>
        <FlexBox>
          {data.map((item, index) => {
            return (
              <Zoom>
                <div key={index} className='img-container'>
                    <img src={item.img} alt=""/>
                </div>
                </Zoom>
                )
               })}
            </FlexBox>
        </div>
        <Foter>
          <div>
            <span>All rights reserved copyright</span>
            </div>
          <CopyrightIcon className='icon'/>
           <div>
            <span>2023</span>
            </div>
        </Foter>
       
    </Container>
  )
}

export default Home
const Background = styled.div`
 position:relative;

 .back-ground-img{
    width:100%;
    height:400px;
    object-fit:cover;
    opacity:0.6;
   
  }
  h1{
    position:absolute;
    right:50%;
    left:85%;
    top:10%;
    color:#ffff;
  }
 
`
const FlexBox = styled.div`
     display:flex;
     flex-wrap:wrap;
     justify-content:center;
     justify-content:space-around;

     img{
        width:280px;
        height:280px;
        object-fit:contain;
     }
     .img-container:hover{
      
      cursor:pointer;
      box-shadow: rgba(60, 64, 67, 1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.50) 0px 2px 6px 2px;

      transition:250ms;
      padding:1px;

     }

     .img-container{
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      margin-bottom:10px;
    }
    

`
const Container = styled.div`
       

     p{
      width:55%;
      margin:auto;
      text-align: justify;
      letter-spacing:2px;
      
      
     }
     h2{
        background:#d9dbdb;
        padding:10px 6px;
        border-radius:6px;
        width:25%;
        margin:15px auto
     }

`
const Foter = styled.div`
    background-color:lightpink;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    .icon{
      font-size:18px;
      margin:0 5px;
      margin-top:3px;
    }
`