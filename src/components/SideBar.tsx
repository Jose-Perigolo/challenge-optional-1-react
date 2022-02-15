import { Button } from './Button'

import '../styles/sidebar.scss';
import { memo } from 'react';

interface SideBarProps {
  genres: Array<{
    id: number
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
    title: string
  }>;
  selectedGenreId: number
  handleClickButton: (id: number) => void
}

function SideBarComponent (props: SideBarProps) {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
      {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
      </div>
    </nav>
  )
}

export const SideBar = memo(SideBarComponent)
