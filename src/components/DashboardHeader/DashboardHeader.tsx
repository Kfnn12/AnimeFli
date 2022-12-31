import Header from '../../styles/typography/Header'
import ProfileBar from '../ProfileBar/ProfileBar'
import SearchBar from '../SearchBar/SearchBar'
import { DashboardHeaderWrapper } from './styles'

export default function DashboardHeader() {
  return (
    <DashboardHeaderWrapper >
      <p>TV Series</p>
      <p className='text-[#3C4358]'>Movies</p>
      <p>Anime</p>
    </DashboardHeaderWrapper>
  )
}
