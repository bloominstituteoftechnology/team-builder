export const FrontEnd = 'Frontend Engineer'
export const BackEnd = 'Backend Engineer'
export const UIDesign = 'UI Designer'
export const UXDesign = 'UX Designer'
export const ProjectManager = 'Project Manager'

export const TeamRoles = {
    FrontEnd,
    BackEnd,
    UIDesign,
    UXDesign,
    ProjectManager
} as const

export interface TeamMemberModel {
    id: string
    name: string
    email: string
    role: typeof TeamRoles[keyof typeof TeamRoles]
}

export type CreateTeamMemberModel = Omit<TeamMemberModel, 'id'>