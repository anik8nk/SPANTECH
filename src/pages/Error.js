import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'

export default function error() {
  return<Hero>
    <Banner title="Oops! 404" subtitle="Page Not Found">
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </Banner>
  </Hero>
}

