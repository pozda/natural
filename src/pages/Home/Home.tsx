import withLogger from '../../components/withLogger/withLogger'
import { Heading } from '../../components/Heading/Heading'
import forest from '../../assets/forest.svg'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <Heading />
      <p>
        There is no much on our home page, but feel free to check out our{' '}
        <Link to={'/posts'}>Wanderlust Diary (it&apos;s just a simple blog)</Link>.
      </p>

      <div className="forest" style={{ backgroundImage: `url(${forest})` }}></div>
    </div>
  )
}

export const Home: React.FC = withLogger(HomePage, 'Greetings from')
