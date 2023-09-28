import Stat from './Stat';

export default function StatSection() {
  return (
    <div className="relative h-[100%] col-span-3">
                    <Stat
                        value="3"
                        text="Awards"
                        textSize="5rem"
                        className="top-[3vh] left-[11vw]"
                    />
                    <Stat
                        value="50"
                        text="Matches"
                        textSize="4rem"
                        className="top-[17vh] left-[2vw]"
                    />
                     <Stat
                        value="200"
                        text="Players"
                        textSize="6rem"
                        className="top-[34vh] -left-[5vw]"
                    />
                    <Stat
                        value="30"
                        text="Teams"
                        textSize="3rem"
                        className="top-[32vh] left-[14vw]"
                    />
                    <Stat
                        value="500"
                        text="Undergraduates"
                        textSize="3rem"
                        className="top-[64vh] left-[3vw]"
                    />
                    <Stat
                        value="20"
                        text="Companies"
                        textSize="4rem"
                        className="top-[50vh] left-[14vw]"
                    />
                </div>
  )
}
