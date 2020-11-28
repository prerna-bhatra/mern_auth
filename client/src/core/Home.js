import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import {Link} from 'react-router-dom'
import {getProducts,BookSlot,bookedSlots} from  './apiCore'
import {isAuthenticated} from '../auth'
import axios from 'axios'
import uuid from 'react-uuid'
import {BASE_URL} from "../config.js"


//{JSON.stringify(slots)}
const Home=()=>{
	
	return (
		<Layout className="container" title="reddit"  >
			<div>
				home
			</div>
		</Layout>
		)

}

export default Home













