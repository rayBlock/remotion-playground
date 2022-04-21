import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, spring, interpolate, Easing, Sequence } from 'remotion'; 

import styled from 'styled-components';

import img from "../assets/some.jpg"



export const Story10: React.FC <{someText:string, color: string}> = ({someText, color}) => {


    const frame = useCurrentFrame();
    
    const Mover1 = interpolate(frame, [20,80],[-700,20], 
      {extrapolateLeft:'clamp',
       extrapolateRight:'clamp'})
    
       const Mover2 = interpolate(frame, [25,80],[-700,60], 
        {extrapolateLeft:'clamp',
         extrapolateRight:'clamp'})
      
         const Mover3 = interpolate(frame, [30,80],[-700,40], 
          {extrapolateLeft:'clamp',
           extrapolateRight:'clamp'})
        
    const ScalerBild = interpolate(frame, [80,100],[1,1.2],
    {extrapolateLeft:'clamp',
      extrapolateRight:'clamp',
      easing: Easing.ease,
    })

  return (

  <AbsoluteFill
  style={{

  justifyContent: 'center', 
  alignItems: 'center', 
  }}>
  

<Img src="https://images.unsplash.com/photo-1565087467572-f2889d5b1e75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2028&q=80" width='1240' height="720" z-index="-2" style={{transform:`scale(${ScalerBild})`}}/>
  <SvgHexagon Skalier={Mover1} color={color}/>

  <SvgHexagon Skalier={Mover2} color={color}/>

  <SvgHexagon Skalier={Mover3} color={color}/> 
 
<TextNormal color={color} someText={someText}/>

  </AbsoluteFill>
  )}

  

  const SvgHexagon: React.FC <{Skalier:number, color: string}> = ({Skalier, color}) => {


    const config = useVideoConfig();
    const frame = useCurrentFrame();
    const Farb = interpolate(frame, [90, 120],[0,1], 
      {extrapolateLeft: 'clamp', 
      extrapolateRight:'clamp'})
    
    return (
    <AbsoluteFill
    style={{
    backgroundColor: 'transparent',
    justifyContent: 'left',  
    alignItems: 'left', 
    }}>
    
    
    <div style={{  
          justifyContent: 'left',
          alignContent: 'left',
          alignItems: 'left',
          display: 'flex',
          position: 'absolute'
           }}>
         
    
    <svg  width="720" 
          height="1280" 
        
          style={{
        
          zIndex:'4',
          justifyContent: 'left',
          alignContent: 'left',
          alignItems: 'left',
          display: 'flex',
          color:'red', 
          
         }}>
     
    
     <filter id="discrete" x="0-1" y="0-1" width="120%" height="120%">
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues={`1${Farb}${Farb}${Farb}`}></feFuncR>
            <feFuncG type="discrete" tableValues="0 0 0 1"></feFuncG>
            <feFuncB type="discrete" tableValues={` ${Farb}${Farb}${Farb}${Farb}`}></feFuncB>
          </feComponentTransfer>
        </filter>
    
    <polygon  
    style={{
    transformBox: 'fill-box',
    transformOrigin: 'center'    ,
    transform: `translateY(${Skalier}px) translateX(0px) scale(0.5)`,
    
    }}
    filter= "url(#discrete)"
    strokeWidth="8"  
    stroke="YELLOW" 
    fill="transparent" 
    points="135 0, -10 75,-60 220 ,-10 365, 135 440,280 365, 340 220,290 75"/>
    
    
    </svg>
    
    </div> 
    
    
    </AbsoluteFill>
    )}
    






 const Textros = styled.p`
 /* color: whitesmoke; */
 font-size: 30px;
 position: absolute;
 font-weight: 800;
 padding-left:30px ;
 padding-right:30px ;
 transform: translateY(-145px);
 font-family: Arial, Helvetica, sans-serif;

 `
 
 
const TextNormal: React.FC <{someText: string, color:string}> = ({someText,color}) => {


  const config = useVideoConfig();
  const frame = useCurrentFrame();

  const Opac = interpolate(frame, [80,100],[0,1],  
    {extrapolateLeft: 'clamp', 
  extrapolateRight:'clamp'})

return (
<AbsoluteFill
style={{

justifyContent: 'center', alignItems: 'center', padding :'100px, 120px, 100px,120px' 
}}>



<Textros style={{color:color, opacity: Opac}}>
{someText}
</Textros>



</AbsoluteFill>
)}