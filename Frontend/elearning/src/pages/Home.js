import React from 'react'
import welcome from '../assets/welcome.png'
import './Home.css'
import { Tilt } from 'react-tilt'
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import search from '../assets/search.svg';
import search2 from '../assets/search2.svg'
import stat1 from '../assets/homework.png';
import stat2 from '../assets/expert.png';
import stat3 from '../assets/certified.png';
import stat4 from '../assets/graduated.png'
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png'
import cat3 from '../assets/cat3.png'
import cat4 from '../assets/cat4.png'
import course1 from '../assets/course1.jpg'
import profile from '../assets/instruct.jpg'
import lesson from '../assets/lesson.png'
import time from '../assets/time.png'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile5.jpg'


import Button from 'react-bootstrap/esm/Button';


function Home() {

  //call all courses
  const courses = useSelector((state) => state.course?.courselist);
  console.log(courses)

  //call all tags
  const tags = useSelector((state) => state.tag?.taglist);
  console.log(tags)

  return (
    
<>{/* welcome-section */}
<div className='welcome-section'> 
  <div className='welcome'> 
    <div >
      <div className='welcome_text'>
      <h5 style={{color:'#685F78',fontSize:'20px',marginBottom:'25px',fontWeight:'500'}}> The Leader in Online Learning </h5>
      <h1 style={{color:'#002058',fontWeight:'700',fontSize:'48px' ,maxWidth:'500px',lineHeight:'1.2',marginBottom:'40px'}}> Engaging & Accessible Online Courses For All </h1>
      <br/>
      </div>
      <div className="search">
      <img src={search} alt='' style={{height:'30px',width:'30px',marginLeft:'20px'}}></img>
              <input style={{border:'none'}} type="text" placeholder="Search your online course here" />
              <img src={search2} alt='' style={{height:'30px',width:'30px',marginRight:'20px'}}></img>

      </div>
      
    </div>
    <div className='welcome_img'> 
    <Tilt ><img src={welcome} alt='' style={{ height: 500, width: 400 }}/> </Tilt> 
    </div>
  </div>
 
</div>
 <div className='stat'>
<div className='stat-Box'>
  <img src={stat1} alt='' style={{height: 90, width: 90 , objectFit: "cover", borderRadius: "50%"}}/>
  <div>
    <h1 style={{fontSize:'28px',fontWeight:'600'}}> <CountUp  end={10} duration={5}/>k+</h1>
    <h5 style={{color:'#685F78',fontWeight:'400',fontSize:'16px'}}>Online Courses</h5>
  </div>
</div>
<div className='stat-Box'>
  <img src={stat2} alt='' style={{height: 90, width: 90 , objectFit: "cover", borderRadius: "50%"}}/>
  <div>
    <h1 style={{fontSize:'28px',fontWeight:'600'}}><CountUp  end={100} duration={5}/>+</h1>
    <h5 style={{color:'#685F78',fontWeight:'400',fontSize:'16px'}}>Expert Tutors</h5>
  </div>
</div>
<div className='stat-Box'>
  <img src={stat3} alt='' style={{height: 90, width: 90 , objectFit: "cover", borderRadius: "50%"}}/>
  <div>
    <h1 style={{fontSize:'28px',fontWeight:'600'}}><CountUp  end={8} duration={5}/>k+</h1>
    <h5 style={{color:'#685F78',fontWeight:'400',fontSize:'16px'}}>Certified Courses</h5>
  </div>
</div>
<div className='stat-Box'>
  <img src={stat4} alt='' style={{height: 90, width: 90 , objectFit: "cover", borderRadius: "50%"}}/>
  <div>
    <h1 style={{fontSize:'28px',fontWeight:'600'}}><CountUp  end={5} duration={5}/>k+</h1>
    <h5 style={{color:'#685F78',fontWeight:'400',fontSize:'16px'}}>Online Students</h5>
  </div>
</div>
    </div>
    <div>
      <h5 style={{letterSpacing:'0.9px',color:'#FF6575',fontSize:'18px',fontWeight:'700',paddingLeft:'80px'}}>Favourite Course</h5>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <h2 style={{color:'#002058',fontSize:'36px',fontWeight:'700',letterSpacing:'0.9px',paddingLeft:'80px',paddingTop:'20px'}}>Top Category</h2>
  <Button className='btnn'>All Categories</Button>
  </div>
  <p style={{color:'#685F78',fontWeight:'400',fontSize:'18px',lineHeight:'1.6', maxWidth:'700px',paddingLeft:'80px',paddingTop:'20px',paddingBottom:'20px'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
  </p>
  {/* you can map your categories here : i made 4 cards as an exemple */}
  <div className='best-cat'>
<div className='cat-box'>
<img src={cat1} alt=''/>
<h4>Angular</h4>
<p style={{color:'#685F78'}}>4 Courses</p>
</div>
<div className='cat-box'>
<img src={cat2} alt=''/>
<h4>Node</h4>
<p style={{color:'#685F78'}}>6 Courses</p>
</div>
<div className='cat-box'>
<img src={cat3} alt=''/>
<h4>Python</h4>
<p style={{color:'#685F78'}}>8 Courses</p>
</div>
<div className='cat-box'>
<img src={cat4} alt=''/>
<h4>Docker </h4>
<p style={{color:'#685F78'}}>2 Courses</p>
</div>
  </div>
    </div>
    {/* you can map your courses here */}
    <div className='best-courses'>
    <h5 style={{letterSpacing:'0.9px',color:'#FF6575',fontSize:'18px',fontWeight:'700',paddingLeft:'80px'}}>What's New !</h5>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <h2 style={{color:'#002058',fontSize:'36px',fontWeight:'700',letterSpacing:'0.9px',paddingLeft:'80px',paddingTop:'20px'}}>Featured Courses</h2>
  <Button className='btnn'>All Courses</Button>
  </div>
  <p style={{color:'#685F78',fontWeight:'400',fontSize:'18px',lineHeight:'1.6', maxWidth:'700px',paddingLeft:'80px',paddingTop:'20px',paddingBottom:'20px'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
  </p>
<div className='course-box'>
<div  style={{maxWidth:'330px',maxHeight:'350px',overflow:'hidden'}}><img className='zoom' style={{maxWidth:'100%',maxHeight:'100%',borderRadius:'10px'}} src={course1} alt=''/>
</div>
<div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',gap:'5px',paddingRight:'170px'}}>
<img style={{height: 40, width: 40 , objectFit: "cover", borderRadius: "50%",border:'#eae7e7 3px solid'}} src={profile} alt=''/>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
    <h6 >Michael Morgan</h6>
    <p style={{color:'#685F78',fontSize:'12px'}}>Instructor</p>
  </div>
</div>
<h5 style={{paddingLeft:'30px'}} >Advanced Android 12 & Kotlin Development Course</h5>
<div style={{display:'flex',gap:'100px'}}>
<div style={{display:'flex'}}>  
<img style={{width:'20px',height:'20px'}} src={lesson} alt=''/>
<p>9 Lessons</p>
</div>
<div  style={{display:'flex'}}>  
<img style={{width:'20px',height:'20px'}} src={time} alt=''/>
<p>78 hrs 30 mins</p>
</div>
</div>
<button className='btn8' style={{width:'100px'}}>Buy Now</button>
</div>
<h2 style={{color:'#002058',fontSize:'36px',fontWeight:'700',letterSpacing:'0.9px',paddingTop:'50px',textAlign:'center'}}>Featured Instructor</h2>
  
    </div>
    {/* you can map your instructurs here */}
    <div className='best-cat' style={{marginTop:'-100px'}}>
    
    <div >
    <div className='inst-box'>
      <img src={profile2}/>
      <h4>Natalie Portman</h4>
<p style={{color:'#685F78'}}>6 Courses</p>
    </div>
    </div>
    <div>
    <div className='inst-box'>
      <img src={profile}/>
      <h4>Michael Morgan</h4>
<p style={{color:'#685F78'}}>6 Courses</p>
    </div>
    </div>
    <div>
    <div className='inst-box'>
      <img src={profile3}/>
      <h4>James Cordan</h4>
<p style={{color:'#685F78'}}>3 Courses</p>
    </div>
    </div>
    <div>
    <div className='inst-box'>
      <img src={profile4}/>
      <h4>Bruno Major</h4>
<p style={{color:'#685F78'}}>6 Courses</p>
    </div>
    </div>
</div>
<hr></hr>
</>  )
}

export default Home