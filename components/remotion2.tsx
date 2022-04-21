import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, spring, interpolate, Easing, Sequence } from 'remotion'; 





 import styled from 'styled-components';


 export const Story11: React.FC <{url:string, someText:string, color:string, color2:string}> = ({url, color,color2, someText}) => {


return (
<AbsoluteFill
style={{

justifyContent: 'center', alignItems: 'center', 
}}>

{/* <OpacityBlau/> */}
<Img src={url} height='100%'  />

<SvgCircle color={color} />
<TextNormal color2={color2} someText={someText}/>


</AbsoluteFill>
)}




 
 const SvgCircle: React.FC <{color:string}> = ({color}) => {

    const config = useVideoConfig();
    const frame = useCurrentFrame();
    const Skalier = interpolate(frame, [20,70],[2,1.8],
        {extrapolateLeft:'clamp', extrapolateRight:'clamp'})
    
    return (
    <AbsoluteFill
    style={{
    justifyContent: 'center', 
    alignItems: 'center', 
    }}>
    
    <svg style={{position:'absolute' ,transform: `scale(${Skalier})`, opacity:'0.2'}}
     width="1000px" height='600px' fill={color} >
      <circle cx="500" cy="300"  r="50"/>
    </svg>
    
    <svg style={{position:'absolute' ,transform: 'scale(2)', opacity:'0.2'}} width="1000px" height='600px' >
      <circle fill="transparent" strokeWidth="5" stroke={color} cx="500" cy="300" r="50"/>
    </svg>
    
    <svg style={{position:'absolute' ,transform: 'scale(2)', opacity:'0.2'}} width="1000px" height='600px' >
      <circle fill="transparent" strokeWidth="5" stroke={color} cx="500" cy="300" r="50"/>
    </svg>
    
    
    </AbsoluteFill>
    )}


 const Textros = styled.p`
 /* color: whitesmoke; */
 font-size: 50px;
 position: absolute;
 font-weight: 800;
 padding-left:30px ;
 padding-right:30px ;
 transform: translateY(-15px);
 font-family: Arial, Helvetica, sans-serif;

 `
 
 
const TextNormal: React.FC <{someText: string, color2:string}> = ({someText,color2}) => {


  const config = useVideoConfig();
  const frame = useCurrentFrame();

  

return (
<AbsoluteFill
style={{

justifyContent: 'center', alignItems: 'center', padding :'100px, 120px, 100px,120px' 
}}>



<Textros style={{color:color2, opacity:0.8}}>
{someText}
</Textros>



</AbsoluteFill>
)}