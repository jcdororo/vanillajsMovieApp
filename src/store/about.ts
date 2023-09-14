import { Store } from "../core/heropy";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://avatars.githubusercontent.com/u/66819791?v=4',
  name: 'DORORO / JuJiChan',
  email: 'wnwlcks123@gmail.com',
  blog: 'https://velog.io/@wnwlcks123',
  github: 'https://github.com/jcdororo',
  repository: 'https://github.com/jcdororo/vanillajsMovieApp.git'
}) 