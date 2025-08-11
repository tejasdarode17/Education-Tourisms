import Features from './Features'
import Headline from './Headline'
import Stats from './Stats'
import Reviews from './Reviews'
import Action from './Action'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Headline></Headline>
      {/* <Stats></Stats> */}
      <Features></Features>
      <Reviews></Reviews>
      <Action></Action>
    </div>
  )
}

export default Home
