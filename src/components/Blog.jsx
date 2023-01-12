import React from 'react'
import m7  from "../assets/m7.png";
import mev from '../assets/mev.png'
import kd from "../assets/kedt.png";
import marka from "../assets/marka.png"
import flv from "../assets/flv.png";

const Blog = () => {
  return (
    <>
    <section className='p-10 m-15  bg-overlay'>
       <div className=" flex m-8 bg-transparent   shadow-2xl mt-20 md:flex-row flex-col   rounded-md  ">
        <div className="col-lg-4 col-md-4 col-sm-12 image">
        <img src={marka} alt="avatar" className="w-60 h-30" />
        </div>
        <div className="flex flex-col m-4 p-4 pl-4 col-lg-6 col-md-6 col-sm-12 detail">
          <a href="https://www.tourism-of-india.com/markha-valley-trek.html"><h3 className='flex pl-3 text-2xl text-center'>The Markha Valley Trek</h3></a>
          <p className="duration pl-3">
            <img className="lazy " data-original="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" width={22} height={22} alt="Duration" src="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" style={{display: 'inline'}} />
            <span className='text-red-400 pl-4'>12 Nights / 13 days </span>
          </p>
          <p className="destination pl-3">
            <span className="destimg">
              <img data-original="https://toim.b-cdn.net/images/tour-package/map-marker.svg" className="lazy" alt="Destination" width={30} height={30} src="https://toim.b-cdn.net/images/tour-package/map-marker.svg" style={{display: 'inline'}} />
            </span>
            <span className="destitext pl-3">Delhi - Leh - Zinchen - Yurutse - Skiu - Markha - Hankar - Nimaling - Shang Sumdo - Hemis - Leh - Delhi</span>
          </p>
          <div className="clearfix" />
        </div>
      </div>
      
          {/*img-2*/}
          <div className=" flex m-8 bg-transparent   shadow-2xl mt-20 md:flex-row flex-col   rounded-md  ">
        <div className="col-lg-4 col-md-4 col-sm-12 image">
        
        <img src={kd} alt="avatar" className="w-60 h-30" />
        </div>
        <div className="flex flex-col m-4 p-4 pl-4 col-lg-6 col-md-6 col-sm-12 detail">
          <a href="https://www.tourism-of-india.com/markha-valley-trek.html"><h3 className='flex pl-3 text-2xl text-center'>The Kedarkantha </h3></a>
          <p className="duration pl-3">
            <img className="lazy " data-original="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" width={22} height={22} alt="Duration" src="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" style={{display: 'inline'}} />
            <span className='text-red-400 pl-4'> 4Nights / 5 days </span>
          </p>
          <p className="destination pl-3">
            <span className="destimg">
              <img data-original="https://toim.b-cdn.net/images/tour-package/map-marker.svg" className="lazy" alt="Destination" width={30} height={30} src="https://toim.b-cdn.net/images/tour-package/map-marker.svg" style={{display: 'inline'}} />
            </span>
            <span className="destitext pl-3"> Dehradun –  Sankri – Juda Ka Talab - Kedarkantha Base Camp – Summit – Kedarkantha Base Camp -Sankri – Dehradun.t</span>
          </p>
          <div className="clearfix" />
        </div>
      </div>
        {/*img-2*/}
       
       
        {/*img-3*/}
        <div className=" flex m-8 bg-transparent   shadow-2xl mt-20 md:flex-row flex-col   rounded-md  ">
        <div className="col-lg-4 col-md-4 col-sm-12 image">
        
        <img src={mev} alt="avatar" className="w-60 h-30" />
        </div>
        <div className="flex flex-col m-4 p-4 pl-4 col-lg-6 col-md-6 col-sm-12 detail">
          <a href="https://www.tourism-of-india.com/markha-valley-trek.html"><h3 className='flex pl-3 text-2xl text-center'>The Mount Everest </h3></a>
          <p className="duration pl-3">
            <img className="lazy " data-original="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" width={22} height={22} alt="Duration" src="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" style={{display: 'inline'}} />
            <span className='text-red-400 pl-4'> 12Nights / 11 days </span>
          </p>
          <p className="destination pl-3">
            <span className="destimg">
              <img data-original="https://toim.b-cdn.net/images/tour-package/map-marker.svg" className="lazy" alt="Destination" width={30} height={30} src="https://toim.b-cdn.net/images/tour-package/map-marker.svg" style={{display: 'inline'}} />
            </span>
            <span className="destitext pl-3">Lukla - Monju - Namche Bazzar- tenguboche- Pangboche- Dingboche - Lobunche- Kalla pather- Base camp - Lukal airport</span>
          </p>
          <div className="clearfix" />
        </div>
      </div>
        {/*img-2*/}
        <div className=" flex m-8 bg-transparent   shadow-2xl mt-20 md:flex-row flex-col   rounded-md  ">
        <div className="col-lg-4 col-md-4 col-sm-12 image">
        
        <img src={flv} alt="avatar" className="w-60 h-30" />
        </div>
        <div className="flex flex-col m-4 p-4 pl-4 col-lg-6 col-md-6 col-sm-12 detail">
          <a href="https://www.tourism-of-india.com/markha-valley-trek.html"><h3 className='flex pl-3 text-2xl text-center'>Valley Of Flowers trek </h3></a>
          <p className="duration pl-3">
            <img className="lazy " data-original="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" width={22} height={22} alt="Duration" src="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" style={{display: 'inline'}} />
            <span className='text-red-400 pl-4'> 12Nights / 11 days </span>
          </p>
          <p className="destination pl-3">
            <span className="destimg">
              <img data-original="https://toim.b-cdn.net/images/tour-package/map-marker.svg" className="lazy" alt="Destination" width={30} height={30} src="https://toim.b-cdn.net/images/tour-package/map-marker.svg" style={{display: 'inline'}} />
            </span>
            <span className="destitext pl-3">Lukla - Monju - Namche Bazzar- tenguboche- Pangboche- Dingboche - Lobunche- Kalla pather- Base camp - Lukal airport</span>
          </p>
          <div className="clearfix" />
        </div>
      </div>
        {/*img-2*/}
        <div className=" flex m-8 bg-transparent   shadow-2xl mt-20 md:flex-row flex-col   rounded-md  ">
        <div className="col-lg-4 col-md-4 col-sm-12 image">
        
        <img src={m7} alt="avatar" className="w-60 h-30" />
        </div>
        <div className="flex flex-col m-4 p-4 pl-4 col-lg-6 col-md-6 col-sm-12 detail">
          <a href="https://www.tourism-of-india.com/markha-valley-trek.html"><h3 className='flex pl-3 text-2xl text-center'>The Markha Valley Trek</h3></a>
          <p className="duration pl-3">
            <img className="lazy " data-original="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" width={22} height={22} alt="Duration" src="https://toim.b-cdn.net/images/tour-package/outlined_time.svg" style={{display: 'inline'}} />
            <span className='text-red-400 pl-4'> Nights / 13 days </span>
          </p>
          <p className="destination pl-3">
            <span className="destimg">
              <img data-original="https://toim.b-cdn.net/images/tour-package/map-marker.svg" className="lazy" alt="Destination" width={30} height={30} src="https://toim.b-cdn.net/images/tour-package/map-marker.svg" style={{display: 'inline'}} />
            </span>
            <span className="destitext pl-3">Delhi - Leh - Zinchen - Yurutse - Skiu - Markha - Hankar - Nimaling - Shang Sumdo - Hemis - Leh - Delhi</span>
          </p>
          <div className="clearfix" />
        </div>
      </div>
    </section>

</>
  )
}

export default Blog
