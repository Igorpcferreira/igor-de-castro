import React from 'react';
import {AbsoluteFill, Composition, Img, Sequence, interpolate, registerRoot, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

// Fonte adicional de motion graphics. O site principal não depende deste módulo.
const looks = [
  {file:'IMG_3555.jpg', label:'ALFAIATARIA'},
  {file:'IMG_3932.jpg', label:'EDITORIAL'},
  {file:'c71f15af.jpg', label:'TEXTURAS'},
];

const Look: React.FC<{file:string;label:string}> = ({file,label}) => {
  const frame=useCurrentFrame();
  const {width,height}=useVideoConfig();
  const vertical=height>width;
  const enter=interpolate(frame,[0,14],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const exit=interpolate(frame,[78,89],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <AbsoluteFill style={{opacity:enter*exit,backgroundColor:'#111210',color:'#eeece7',padding:vertical?70:65,fontFamily:'Arial, sans-serif'}}>
    <div style={{fontSize:vertical?28:22,letterSpacing:4}}>IGOR DE CASTRO / MODELO</div>
    <div style={{position:'absolute',left:vertical?70:width*.43,right:vertical?70:65,top:vertical?230:65,bottom:vertical?250:65,transform:`perspective(1800px) rotateY(${(1-enter)*-9}deg) translateY(${(1-enter)*24}px)`}}>
      <Img src={staticFile('assets/'+file)} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
    </div>
    <div style={{position:'absolute',left:vertical?70:65,bottom:vertical?85:110,maxWidth:vertical?width-140:width*.35}}>
      <div style={{fontSize:vertical?48:50,fontWeight:700,letterSpacing:-1,lineHeight:1.1}}>{label}</div>
      <div style={{height:3,width:interpolate(frame,[0,75],[0,vertical?300:220],{extrapolateRight:'clamp'}),backgroundColor:'#df7354',margin:'25px 0'}}/>
      <div style={{fontSize:vertical?27:21,color:'#aaa9a2'}}>Goiânia, GO · @igor_cferreira</div>
    </div>
  </AbsoluteFill>;
};

export const IgorEditorial:React.FC=()=> <AbsoluteFill style={{backgroundColor:'#111210'}}>{looks.map((look,index)=><Sequence key={look.file} from={index*90} durationInFrames={90}><Look {...look}/></Sequence>)}</AbsoluteFill>;

const Root:React.FC=()=> <><Composition id="IgorEditorialDesktop" component={IgorEditorial} durationInFrames={270} fps={30} width={1920} height={1080}/><Composition id="IgorEditorialReels" component={IgorEditorial} durationInFrames={270} fps={30} width={1080} height={1920}/></>;
registerRoot(Root);
