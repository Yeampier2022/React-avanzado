import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  // eslint-disable-next-line react/jsx-no-undef, no-undef
  return <Button onClick={onClick}>
    <Icon size='32px' /> {likes} likes!
  </Button>
}
