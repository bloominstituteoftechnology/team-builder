import { TeamMemberModel } from './TeamMember'

export interface TeamModel {
    id: string
    name: string
    teamMembers: TeamMemberModel[]
}