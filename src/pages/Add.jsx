import React, { useState } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("SPOTIFY");
   const [subCategory, setSubCategory] = useState("Topwear");
   const [bestseller, setBestseller] = useState(false);
   const [sizes, setSizes] = useState([]);

   const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
   }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <div>
          <p className='mb-2'>Subir imagen</p>

          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
            </label>
            <label htmlFor="image2">
              <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
            </label>
            <label htmlFor="image3">
              <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
            </label>
            <label htmlFor="image4">
              <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
            </label>
          </div>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Nombre del producto</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Descripción del Producto</p>
          <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

            <div>
              <p className='mb-2'>Categoría de producto</p>
              <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
                  <option value="SPOTIFY">SPOTIFY</option>
                  <option value="NETFLIX">NETFLIX</option>
                  <option value="DISNEY+">DISNEY+</option>
                  <option value="DISCORD">DISCORD</option>
                  <option value="PLAYSTATION">PLAYSTATION</option>
                  <option value="STEAM WALLET">STEAM WALLET</option>
                  <option value="XBOX LIVE">XBOX LIVE</option>
                  <option value="ADMINVPS">ADMINVPS</option>
                  <option value="AI STUDIO">AI STUDIO</option>
                  <option value="AIRBNB">AIRBNB</option>
                  <option value="AIRO">AIRO</option>
                  <option value="AITARGET">AITARGET</option>
                  <option value="ALIPAY">ALIPAY</option>
                  <option value="ALYTICS">ALYTICS</option>
                  <option value="AMAZON">AMAZON</option>
                  <option value="ANATOMY & PHYSIOLOGY">ANATOMY & PHYSIOLOGY</option>
                  <option value="ANIME DIGITAL NETWORK">ANIME DIGITAL NETWORK</option>
                  <option value="ANIMELAB">ANIMELAB</option>
                  <option value="ANKETOLOG">ANKETOLOG</option>
                  <option value="APPLE ARCADE">APPLE ARCADE</option>
                  <option value="APPLE FITNESS">APPLE FITNESS</option>
                  <option value="APPLE ICLOUD">APPLE ICLOUD</option>
                  <option value="APPLE ID">APPLE ID</option>
                  <option value="APPLE MUSIC">APPLE MUSIC</option>
                  <option value="APPLE NEWS">APPLE NEWS</option>
                  <option value="APPLE ONE">APPLE ONE</option>
                  <option value="APPLE TV+">APPLE TV+</option>
                  <option value="BADOO">BADOO</option>
                  <option value="BANDCAMP">BANDCAMP</option>
                  <option value="BINANCE">BINANCE</option>
                  <option value="BLIZZARD BATTLE.NET">BLIZZARD BATTLE.NET</option>
                  <option value="BOOKMATE">BOOKMATE</option>
                  <option value="BOOKRAGS">BOOKRAGS</option>
                  <option value="BOOSTY">BOOSTY</option>
                  <option value="BRAZZERS">BRAZZERS</option>
                  <option value="BRITBOX">BRITBOX</option>
                  <option value="BUMBLE">BUMBLE</option>
                  <option value="BUSUU">BUSUU</option>
                  <option value="CALLIBRI.RU">CALLIBRI.RU</option>
                  <option value="CALLTOUCH">CALLTOUCH</option>
                  <option value="CALM">CALM</option>
                  <option value="CANDY AI">CANDY AI</option>
                  <option value="CARROT QUEST">CARROT QUEST</option>
                  <option value="CENTR.COM">CENTR.COM</option>
                  <option value="CHARACTER.AI">CHARACTER.AI</option>
                  <option value="OPENAI">OPENAI</option>
                  <option value="CHECKME">CHECKME</option>
                  <option value="CHESS.COM">CHESS.COM</option>
                  <option value="CHORDIFY">CHORDIFY</option>
                  <option value="CLAUDE.AI">CLAUDE.AI</option>
                  <option value="CODECADEMY">CODECADEMY</option>
                  <option value="CODEIUM"></option>
                  <option value="COURSERA PLUS">COURSERA PLUS</option>
                  <option value="CRM FOR SIMPLE BUSINESS">CRM FOR SIMPLE BUSINESS</option>
                  <option value="CRUNCHYROLL">CRUNCHYROLL</option>
                  <option value="CRYPTO VOUCHER">CRYPTO VOUCHER</option>
                  <option value="CURIOSITYSTREAM">CURIOSITYSTREAM</option>
                  <option value="DASHAMAIL">DASHAMAIL</option>
                  <option value="DATACAMP">DATACAMP</option>
                  <option value="DEEPL">DEEPL</option>
                  <option value="DEEZER">DEEZER</option>
                  <option value="DIGITAL MARKETPLACE">DIGITAL MARKETPLACE</option>
                  <option value="DISNEY">DISNEY</option>
                  <option value="DPD">DPD</option>
                  <option value="DROPBOX">DROPBOX</option>
                  <option value="DROPS">DROPS</option>
                  <option value="DUOCARDS">DUOCARDS</option>
                  <option value="DUOLINGO">DUOLINGO</option>
                  <option value="EASYWEEK">EASYWEEK</option>
                  <option value="ENEBA">ENEBA</option>
                  <option value="ENVATO ELEMENTS">ENVATO ELEMENTS</option>
                  <option value="ENVYBOX">ENVYBOX</option>
                  <option value="ENVYCRM">ENVYCRM</option>
                  <option value="EPIC GAMES STORE">EPIC GAMES STORE</option>
                  <option value="EPIDEMIC SOUND">EPIDEMIC SOUND</option>
                  <option value="ESPN+">ESPN+</option>
                  <option value="ETXT">ETXT</option>
                  <option value="FACEBOOK">FACEBOOK</option>
                  <option value="FIREWORKS AI">FIREWORKS AI</option>
                  <option value="FIRSTVDS">FIRSTVDS</option>
                  <option value="FLATICON">FLATICON</option>
                  <option value="FLIGHTRADAR24">FLIGHTRADAR24</option>
                  <option value="FRAMER">FRAMER</option>
                  <option value="FREEPIK">FREEPIK</option>
                  <option value="FRESHDOC">FRESHDOC</option>
                  <option value="FUBO TV">FUBO TV</option>
                  <option value="FUNIMATION">FUNIMATION</option>
                  <option value="GAMMA.APP">GAMMA.APP</option>
                  <option value="GEFORCE NOW">GEFORCE NOW</option>
                  <option value="GEMINI AI">GEMINI AI</option>
                  <option value="GITBOOK">GITBOOK</option>
                  <option value="GITHUB">GITHUB</option>
                  <option value="GOG">GOG</option>
                  <option value="GOOGLE ADS">GOOGLE ADS</option>
                  <option value="GOOGLE COLAB">GOOGLE COLAB</option>
                  <option value="GOOGLE DRIVE (THE GOOGLE DISK)">GOOGLE DRIVE (THE GOOGLE DISK)</option>
                  <option value="GOOGLE PLAY">GOOGLE PLAY</option>
                  <option value="GROK">GROK</option>
                  <option value="HALLMARK">HALLMARK</option>
                  <option value="HBO">HBO</option>
                  <option value="HELLOTALK">HELLOTALK</option>
                  <option value="HEYGEN">HEYGEN</option>
                  <option value="HISTORY VAULT">HISTORY VAULT</option>
                  <option value="HOTELS">HOTELS</option>
                  <option value="HUD SPEED">HUD SPEED</option>
                  <option value="HULU">HULU</option>
                  <option value="IDAGIO">IDAGIO</option>
                  <option value="iHerb">iHerb</option>
                  <option value="InSales">InSales</option>
                  <option value="InstaForex">InstaForex</option>
                  <option value="Investing.com">Investing.com</option>
                  <option value="iSmart">iSmart</option>
                  <option value="Istock">Istock</option>
                  <option value="ITSM 365">ITSM 365</option>
                  <option value="iTunes">iTunes</option>
                  <option value="JivoSite">JivoSite</option>
                  <option value="kassir.ru">kassir.ru</option>
                  <option value="Kits AI">Kits AI</option>
                  <option value="Kling AI">Kling AI</option>
                  <option value="Krea Ai">Krea Ai</option>
                  <option value="LeadBack">LeadBack</option>
                  <option value="LeadGenic">LeadGenic</option>
                  <option value="Leonardo.ai">Leonardo.ai</option>
                  <option value="Level Travel">Level Travel</option>
                  <option value="Likee">Likee</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Litres">Litres</option>
                  <option value="LPgenerator">LPgenerator</option>
                  <option value="Luma AI">Luma AI</option>
                  <option value="MEGA">MEGA</option>
                  <option value="Meta Quest">Meta Quest</option>
                  <option value="OnlyFans">OnlyFans</option>
                  <option value="Paramount">Paramount</option>
                  <option value="Pornhub Premium">Pornhub Premium</option>
                  <option value="SCRIBD">SCRIBD</option>
                  <option value="Telegram">Telegram</option>
                  <option value="Tinder">Tinder</option>
                  <option value="Twitch">Twitch</option>
                  <option value="WordPress">WordPress</option>
                  <option value="YouTube Music">YouTube Music</option>
                  <option value="YouTube Premium">YouTube Premium</option>
                  <option value="Zoom">Zoom</option>
                  <option value="Windows">Windows</option>
              </select>
            </div>

            <div>
              <p className='mb-2'>Subcategoria</p>
              <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                  <option value="1-MES">1 MES</option>
                  <option value="2-MESES">2 MESES</option>
                  <option value="3-MESES">3 MESES</option>
                  <option value="4-MESES">4 MESES</option>
                  <option value="5-MESES">5 MESES</option>
                  <option value="6-MESES">6 MESES</option>
                  <option value="7-MESES">7 MESES</option>
                  <option value="8-MESES">8 MESES</option>
                  <option value="9-MESES">9 MESES</option>
                  <option value="10-MESES">10 MESES</option>
                  <option value="11-MESES">11 MESES</option>
                  <option value="12-MESES">12 MESES</option>
                  <option value="24-MESES">24 MESES</option>
                  <option value="inf">DE POR VIDA</option>
              </select>
            </div>

            <div>
              <p className='mb-2'>Precio (USD)</p>
              <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='0' />
            </div>

        </div>

        <div>
          <p className='mb-2'>TIPO</p>
          <div className='flex gap-3'>
            <div onClick={()=>setSizes(prev => prev.includes("PRIVADO") ? prev.filter( item => item !== "PRIVADO") : [...prev,"PRIVADO"])}>
              <p className={`${sizes.includes("PRIVADO") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>PRIVADO</p>
            </div>
            
            <div onClick={()=>setSizes(prev => prev.includes("COMPARTIDO") ? prev.filter( item => item !== "COMPARTIDO") : [...prev,"COMPARTIDO"])}>
              <p className={`${sizes.includes("COMPARTIDO") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>COMPARTIDO</p>
            </div>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("CUENTA NUEVA") ? prev.filter( item => item !== "CUENTA NUEVA") : [...prev,"CUENTA NUEVA"])}>
              <p className={`${sizes.includes("CUENTA NUEVA") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>CUENTA NUEVA</p>
            </div>
          </div>
        </div>

        <div className='flex gap-2 mt-2'>
          <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
          <label className='cursor-pointer' htmlFor="bestseller">Añadir al best seller</label>
        </div>
        <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>AGREGAR</button>
    </form>
  )
}

export default Add
