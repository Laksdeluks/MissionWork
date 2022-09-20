import React from 'react'
import Style from '../Styling/header.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Header (){
  return (
    
   <div className='bodyWrapper'>
    
          <div className="header">
          <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="waihirere"
          // src="https://lh3.googleusercontent.com/dfL7TJ53Ogz4UYB95xyZNBDQMPFziar2VD0Z632pNl2gI7agNVBdr4FGa0If21w60WAN1FduQRI1yhkb9pPOUCiNmKzasCrYHIVLgB1LLMZqpjggzqRU_OrXlvqCoqw3Q5-aZ6uvH49tqWfpdXvYchEU6hYJK4MP8vEnQdlSADp6XeXdfWZyirupnm2nz_6MIfN7-XwQvEYp9_CpDHX0ztKbisOXhgx5F2fsWAAm7cb0495sH4KIoYGmNdNblSL2pzrv9UE7UfLa9REUn4bAfYb1nqVv5gpSzQRmgD5iUvJC1W9l6HLpwnGk8CV0g1sIFkhnngtn6xZ5tJbMfmwhYrdV76IQPSuUa3BOEgqAvIMI8YEXtvm-cJ02qNBmH5OHrlnOOW1p_noi90L3NGuuoGuZA8FkCSN1YCEfoZkCMfJsmg_9z79Aw861WZYB6jvMfXs4RP-jy_SDO_9pOsru2N-JBLBceNWkzPjO_qGuSCUThSlG2dMsfJN5MKPT95NQUrEwEsbKwlaJgymWAd828X7tZLdfdrBlfk6iFLd_ZRqpK_h_Gu4pTBJbmZh33hBZMq_CKA-ggCRnO4cSPMsfOZfZ-qLjSEybmKI1jvivcpnqymQ9sAjO4yZRqgU_AaNa1jkZuKvyoPLGMWHj1Pt6rxsm7QKM9o--jaAYMupyH8g428Qh0rIMnKyUaOzrRplDqLQfZfV-UWS1_iBHyfgp5jh9a8WVSCmxEz-v_B0rzgrgWngs9Q-6SlHZppUvgucDE-uthGP09xlNP8tBmuSQrzLGSKf26R3Jl0TKujqw4M8xMfd4Ggn7qKmu8CC6jS243Q6Foxah2gLc6fCFfQKDMTKEPR8jJH2aXM6hCdKLCnHIzOcTYFEMfmgQKX2viUc_IOULQM4hkAsWlCh78St0_zk59SqtHofhYn21xSP6JQ=w480-h639-no?authuser=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="theBay"
          // src="https://lh3.googleusercontent.com/PaS7TYX5YNUIrRkCXqBjFua_5UXHZBG6blOpG0OmDLE6QfTCGPC6zkT0kWBT7vzueGCUojSL6m3RiHtvXO74RUDiPTDod_OgnvwpRnQTb120RVAvkF5YHp2FwYivmcZ0G6sTPTUKRVtaE5xgPmB9kKualrLj7PR8Z7iJbmGfQev580yy4D1uRGwDyla9-d0q_aiPXgbwn_ZzMN-lqrQpdivNcnyRcw2lDncqtAjUXtleqxv3iWmOsfqai_YoGUxZ6lYISyKNhZ3Y0lnCH-6KR-fNLLMd7Lc3E5HI9CpWtZlt_LLw71_13i7NGKK36Et1TRGD--Bn4wIAvqevcXtI0jO62o2htNYaqVplsqwFb0-jBozm0OrrXK-GfgajtdPI21QbtqG12eete_Uf7pLxWlO_uFuYHYTYK6qQ2c1N8uFlR6FTxJofpiFmsVORdpXlpoIJ5umZG8T0nXpsU3skAFkhFqrOQX87f0ksGN5qCc3YL-xFeD3nGnltmu7BOfy4_wnqKkd-PG5l2xYRkFoJoulvGjUqzmrcQVPzueV6PJjOUL7KvR1Fzwek3-FxICYw9sDHRIUhvzC1pZB11xDTr68MEJjGNTJ7TvnqsKzF2dmpp1AyMgQgyBu3BkFFzyJSD7uTf2c340hlM12ZrD4E0To-jZOEmmq0B3x2v4HceK25OfxmKE5UWoeIYR6Vqix_GBhCN5xF-P69RdDten77N9MrgfNM50HssqKlhBAiV5C1cJrmNnvoopn2tIyBCQo=w706-h530-no?authuser=0"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Mokoia"
          // src="https://lh3.googleusercontent.com/KMnpgwR9MYflNoi-gg4ir07h3M9Y8pqXzkQLvYEMyviL67cla2HoADaooWJzJHSqjgib4fm5b3iswpBOq-8IbHdj1qeZzHRECSMIGNvTjDW0Bk-NypSqaDeUbHMeJBKfWgvQOA3_uwZ8CupSSY47gUmcYweQWvm0hL9Jl__qncfI4XL9uEaVId8rlmq0cN8m9U-AByr63kkHhJ_oGGSF65u_1OjigWTEiZ-r8vKFqwBHFS7mseQEijifi1A2SHJu2cCDm_aLDGjs4tIV9fMyJ2b5sXRfmmCHINO40kFkTbO41J-9yyzGwzJrgZD5IUr-2mTXHbzNAi01UHGxq9aM8thSEmdd0tGdc5dnLBtF0TZXx8DS8q-5yTufKvGuwJsebnL8HSVoiSh5kDyTsZsajwpgB0kO6REU8EkHHYXizcihZUeujysyIN0gHlXq3Qr3jo9u70uwhY2iWCYahHsE4eruxx76bS9L0IqilpLEC6X4D2pf4m9rM5_GhQlgQrgg_gnE607RJrhQHU9xBrh4fjidAI5UhvPyOQheTJC_tFAEHf5EPziACa8Gu5cblg1ojqMkvshavtHzhPtGOMWYX6JsjXJZ29aQSLBsOYtQkMPTD1Crp7WpQI1_HlokWnDej9dnB7hC8H9K70AxBBkBp80AHM2LOCA3ieyhDMZ4qiecaZ_I8FarLxK8CufplzWoyHNaMZm6AwSyMyjNIryl-qClhDlQe2FlgwINL4bIhj-cJEjgeogzxEy1rQzrBw=w500-h375-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div className="runga">
        <ul>
          <input className="search" type="text" placeholder="Search.." />
          <li><a href="#">Kainga</a></li>
          <li><a href="#">E pā ana</a></li>
          <li><a href="#">Kohinga Mahi</a></li>
          <li className="dropdown">
            <a href="#">Whakapā Mai</a>
            <div className="dropdown-content">
              <ul>
                <li><a href="#">Kalay Rakatairi Udy</a></li>
                <li><a href="#">Īmera: Kalayu@missionreadyhq.com</a></li>
                <li><a href="#">Waea: 0800 83 83 83</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
   </div>
  )
}
