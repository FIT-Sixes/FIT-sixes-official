import Stat from '../Stat';

export default function StatSection() {
  return (
    <div className="relative h-[100%] col-span-3">
                    <Stat
                        value="3"
                        text="Awards"
                        className="text-[4vw] top-[3vh] left-[11vw]"
                    />
                    <Stat
                        value="50"
                        text="Matches"
                        className="text-[4.5vw] top-[17vh] left-[2vw]"
                    />
                     <Stat
                        value="200"
                        text="Players"
                        className="text-[6vw] top-[34vh] -left-[5vw]"
                    />
                    <Stat
                        value="30"
                        text="Teams"
                        className="text-[4vw] top-[32vh] left-[14vw]"
                    />
                    <Stat
                        value="500"
                        text="Undergraduates"
                        className="text-[3.5vw] top-[64vh] left-[3vw]"
                    />
                    <Stat
                        value="20"
                        text="Companies"
                        className="text-[4.2vw] top-[50vh] left-[14vw]"
                    />
                </div>
  )
}
