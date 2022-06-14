export interface IProject {
    id? :number,
    name: string,
    image: string,
    shortDesc: string,
    desc: string,
    createAt: number,
    categoryProjectId: number
}