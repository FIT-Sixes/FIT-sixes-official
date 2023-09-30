import {Intro,Awards,Sponsors} from "../../components"

export default function HomePage() {
  return (
    <div className=" bg-[url('/src/assets/background.png')] bg-blue-800">
      <Intro/>
      <Awards/>
      <Sponsors/>
    </div>
  )
}
