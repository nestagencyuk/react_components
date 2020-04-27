import { ISocialFeed } from './types'
import * as React from 'react'
import { useEffect, useState } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
// import '@nestagencyuk/scss_lib/dist/socialfeed.scss'

/**
 * Components
 */
import { Grid, GridItem } from '../Grid'
import { Image } from '../Image'
import { Loader } from '../Loader'
import { Box } from '../Box'

/**
 * Variants
 */
const variants = {
  Instagram: 'socialfeed--instagram'
}

/**
 * Fetch instagram
 */
const fetchInstagramToken = async (username: string) => {
  const res = await fetch(`https://${username.replace('@', '')}-token.herokuapp.com/token.json`, { method: 'GET' })
  const json = await await res.json()
  return json.token
}

/**
 * Fetch insta items
 */
const fetchInstagramItems = async (token: string) => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${token}`,
    { method: 'GET' }
  )
  const json = await await res.json()
  return json
}

/**
 * Sizes
 */
const sizes = {
  Small: 4,
  Medium: 3,
  Large: 2
}

/**
 * My component
 */
const SocialFeed = ({ className, variant = 'Instagram', size = 'Medium', username, limit = 9 }: ISocialFeed.IProps) => {
  const [items, setItems] = useState([])

  /**
   * Set items
   */
  const getItems = async (username: string) => {
    switch (variant) {
      case 'Instagram': {
        const token = await fetchInstagramToken(username)
        const items = await fetchInstagramItems(token)
        const final = items.data?.map((x: any) => ({
          permalink: x.permalink,
          type: x.media_type,
          src: x.media_url,
          alt: x.caption
        }))
        setItems(final.slice(0, limit))
        break
      }
      default:
        break
    }
  }

  /**
   * Fetch posts
   */
  useEffect(() => {
    getItems(username)
  }, [])

  /**
   * Render posts
   */
  const renderPosts = () => {
    switch (variant) {
      case 'Instagram':
        return (
          <Grid gutter>
            {items.map((x, i) => (
              <GridItem key={`griditem-${i}`} span={12 / sizes[size]}>
                <a href={x.permalink} target="_blank" rel="noopener noreferrer">
                  {(x.type === 'IMAGE' || x.type === 'CAROUSEL_ALBUM') && <Image aspect="1x1" src={x.src} alt={x.alt} />}
                  {x.type === 'VIDEO' && <video style={{ width: '100%' }} src={x.src} />}
                </a>
              </GridItem>
            ))}
          </Grid>
        )
    }
  }

  return (
    <div className={cx(className, 'socialfeed', variants[variant])}>
      {renderPosts()}
      {items.length === 0 && (
        <Box className="p--xxxl" align={{ x: 'Center', y: 'Center' }}>
          <Loader />
        </Box>
      )}
    </div>
  )
}

export default SocialFeed
