import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import { TeamModel } from '../models/team.model'

interface HomeProps {
    teams: TeamModel[]
}

const Home: FC<HomeProps> = ({ teams }) => {
    return (
        <Container>
            <h1>Teams</h1>
            <ListGroup>
                {teams.map(team => {
                    return (
                        <ListGroupItem key={team.id}>
                            <Link to={`/teams/${team.id}`}>
                                {team.name}
                            </Link>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </Container>
    )
}

export default Home