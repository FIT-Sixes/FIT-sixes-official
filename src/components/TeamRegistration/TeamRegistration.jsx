import { useState } from 'react';

const EXTRA_SWAP_POINT = 800;
const DROPDOWN_STYLE = "w-full px-3 py-2 mt-1 bg-transparent border rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1";
const TEXTBOX_STYLE = `${DROPDOWN_STYLE} placeholder:text-gray-400`;
const GRID_4_COLS_STYLE = `grid items-center md:grid-cols-[0.8fr,1fr,1fr,1fr] gap-4`;
const DIVIDER_STYLE = `w-full block h-0.5 bg-[#5882C1] bg-opacity-50 rounded-lg md:hidden mt-2`;

const TeamRegistration = () => {
    const [teams, setTeams] = useState([
        {
            id: 1,
            gender: '',
            teamName: '',
            teamEmail: '',
            leaderName: '',
            leaderNIC: '',
            leaderContactNo: '',
            players: [
                {
                    playerOneName: '',
                    playerOneNIC: '',
                    playerOneContactNo: ''
                },
                {
                    playerTwoName: '',
                    playerTwoNIC: '',
                    playerTwoContactNo: ''
                },
                {
                    playerThreeName: '',
                    playerThreeNIC: '',
                    playerThreeContactNo: ''
                },
                {
                    playerFourName: '',
                    playerFourNIC: '',
                    playerFourContactNo: ''
                },
                {
                    playerFiveName: '',
                    playerFiveNIC: '',
                    playerFiveContactNo: ''
                }
            ],
            extraPlayers: [
                {
                    extraPlayerOneName: '',
                    extraPlayerOneNIC: '',
                    extraPlayerOneContactNo: ''
                },
                {
                    extraPlayerTwoName: '',
                    extraPlayerTwoNIC: '',
                    extraPlayerTwoContactNo: ''
                }
            ]
        }
    ]);

    const [teamCount, setTeamCount] = useState(1);

    const [errorArray, setErrorArray] = useState([]);

    const handleTeamDetails = (e, index) => {
        e.preventDefault();
        const updateTeamDetails = [...teams];
        updateTeamDetails[index][e.target.name] = e.target.value;
        setTeams(updateTeamDetails);
    };

    const handlePlayerDetails = (e, teamIndex, playerIndex) => {
        e.preventDefault();
        const updatePlayerDetails = [...teams];
        updatePlayerDetails[teamIndex].players[playerIndex][e.target.name] =
            e.target.value;
        setTeams(updatePlayerDetails);
    };

    const handleExtraPlayerDetails = (e, teamIndex, extraPlayerIndex) => {
        e.preventDefault();
        const updatePlayerDetails = [...teams];
        updatePlayerDetails[teamIndex].extraPlayers[extraPlayerIndex][
            e.target.name
        ] = e.target.value;
        setTeams(updatePlayerDetails);
    };

    const handleAddTeam = (event) => {
        event.preventDefault();
        if (teamCount < 4) {
            setTeamCount(teamCount + 1);
            setTeams([
                ...teams,
                {
                    id: teamCount + 1,
                    gender: '',
                    teamName: '',
                    teamEmail: '',
                    leaderName: '',
                    leaderNIC: '',
                    leaderContactNo: '',
                    players: [
                        {
                            playerOneName: '',
                            playerOneNIC: '',
                            playerOneContactNo: ''
                        },
                        {
                            playerTwoName: '',
                            playerTwoNIC: '',
                            playerTwoContactNo: ''
                        },
                        {
                            playerThreeName: '',
                            playerThreeNIC: '',
                            playerThreeContactNo: ''
                        },
                        {
                            playerFourName: '',
                            playerFourNIC: '',
                            playerFourContactNo: ''
                        },
                        {
                            playerFiveName: '',
                            playerFiveNIC: '',
                            playerFiveContactNo: ''
                        }
                    ],
                    extraPlayers: [
                        {
                            extraPlayerOneName: '',
                            extraPlayerOneNIC: '',
                            extraPlayerOneContactNo: ''
                        },
                        {
                            extraPlayerTwoName: '',
                            extraPlayerTwoNIC: '',
                            extraPlayerTwoContactNo: ''
                        }
                    ]
                }
            ]);
        }
    };

    // Function to convert numeric indices to words
    const getIndexWord = (index) => {
        const indexWords = ['One', 'Two', 'Three', 'Four', 'Five'];
        if (index >= 0 && index < indexWords.length) {
            return indexWords[index];
        }
        return `Player ${index + 1}`;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorArray([]);
        var teamLength = teams.length;
        for (var i = 0; i < teamLength; i++) {
            if (teams[i].gender === '') setErrorArray('please select gender');
            else if (teams[i].teamName === '') {
                setErrorArray('team name cannot be empty');
            } else if (teams[i].teamEmail === '') {
                setErrorArray('team email cannot be empty');
            } else if (teams[i].leaderName === '') {
                setErrorArray('leader name cannot be empty');
            } else if (teams[i].leaderNIC === '') {
                setErrorArray('leader NIC cannot be empty');
            } else if (teams[i].leaderContactNo === '') {
                setErrorArray('leader contact no cannot be empty');
            } else if (errorArray.length == 0) {
                for (var j = 0; j < 5; j++) {
                    // console.log(teams[i].players[j].playerOneName)
                    if (teams[i].players[j].playerOneName === '') {
                        setErrorArray('player one name cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerOneNIC === '') {
                        setErrorArray('player one NIC cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerOneContactNo === '') {
                        setErrorArray('player one contact no cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerTwoName === '') {
                        setErrorArray('player two name cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerTwoNIC === '') {
                        setErrorArray('player two NIC cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerTwoContactNo === '') {
                        setErrorArray('player two contact no cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerThreeName === '') {
                        setErrorArray('player three name cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerThreeNIC === '') {
                        setErrorArray('player three NIC cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerThreeContactNo === '') {
                        setErrorArray('player three contact no cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerFourName === '') {
                        setErrorArray('player four name cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerFourNIC === '') {
                        setErrorArray('player four NIC cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerFourContactNo === '') {
                        setErrorArray('player four contact no cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerFiveName === '') {
                        setErrorArray('player five name cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerFiveNIC === '') {
                        setErrorArray('player five NIC cannot be empty');
                        return;
                    } else if (teams[i].players[j].playerFiveContactNo === '') {
                        setErrorArray('player five contact no cannot be empty');
                        return;
                    }
                }
            }
        }
        if (errorArray.length > 0) {
            //some fields are empty
            console.log(errorArray);
            return;
        } else if (validateTeamsNICs()) {
            //NICs' are valid
            const checkMobileNumbers = validateTeamsMobileNumbers();
            if (checkMobileNumbers) {
                //contact numbers are valid
                setErrorArray([]);
                setTeamCount(1);
                console.log('registered successfully');
                return;
            } else {
                //contact numbers are not valid
                setErrorArray('please fill all the contact numbers correctly');
                console.log(errorArray);
                return;
            }
        } else {
            //NIC is not valid
            setErrorArray('please fill the NIC numbers correctly');
            console.log(errorArray);
            return;
        }
    };

    const validateTeamsNICs = () => {
        const patternNIC = /^(\d{9}V|\d{12})$/;

        for (let i = 0; i < teams.length; i++) {
            const team = teams[i];

            // Validate leader's NIC
            if (!patternNIC.test(team.leaderNIC)) {
                return false; // Leader's NIC is invalid
            }

            // Validate players' NICs
            for (let j = 0; j < team.players.length; j++) {
                const player = team.players[j];
                const playerNIC = player[`player${getIndexWord(j)}NIC`];

                if (!patternNIC.test(playerNIC)) {
                    return false; // Player's NIC is invalid
                }
            }

            // Validate extra players' NICs

            for (let j = 0; j < team.extraPlayers.length; j++) {
                const extraPlayer = team.extraPlayers[j];
                const extraPlayerNIC = extraPlayer[`extraPlayer${getIndexWord(j)}NIC`];

                if (!patternNIC.test(extraPlayerNIC) && extraPlayerNIC !== '') {
                    return false; // Extra player's NIC is invalid
                }
            }
        }

        return true; // All NICs are valid
    };

    const validateTeamsMobileNumbers = () => {
        const patternMobileNumber = /^\d{10}$|^\d{12}$/; // Allows either 10 or 12 digits

        for (let i = 0; i < teams.length; i++) {
            const team = teams[i];

            // Validate leader's mobile number
            if (!patternMobileNumber.test(team.leaderContactNo)) {
                return false; // Leader's mobile number is invalid
            }

            // Validate players' mobile numbers
            for (let j = 0; j < team.players.length; j++) {
                const player = team.players[j];
                const playerMobileNumber = player[`player${getIndexWord(j)}ContactNo`];

                if (!patternMobileNumber.test(playerMobileNumber)) {
                    return false; // Player's mobile number is invalid
                }
            }

            // Validate extra players' mobile numbers
            for (let j = 0; j < team.extraPlayers.length; j++) {
                const extraPlayer = team.extraPlayers[j];
                const extraPlayerMobileNumber =
                    extraPlayer[`extraPlayer${getIndexWord(j)}ContactNo`];
                const extraPlayerNIC = extraPlayer[`extraPlayer${getIndexWord(j)}NIC`];
                if (
                    !patternMobileNumber.test(extraPlayerMobileNumber) &&
                    extraPlayerNIC !== ''
                ) {
                    return false; // Extra player's mobile number is invalid
                }
            }
        }

        return true; // All mobile numbers are valid
    };

    return (
        <div className="bg-[#1c3a6d] w-[80%] mx-auto rounded-xl text-white my-2 border-[#5882C1] border-2">
            <div className="inline-flex items-center justify-center w-full mt-2 font-serif text-2xl font-bold toggleStepper:hidden">
                {"Players' Details"}
            </div>

            <div className="p-4">
                <form>
                    {teams.map((team, teamIndex) => (
                        <div className={`${GRID_4_COLS_STYLE}`} key={teamIndex}>

                            <div className={`${GRID_4_COLS_STYLE} col-span-4 `}>
                                <label className="">Team :</label>

                                <input
                                    type="text"
                                    placeholder="Team Name"
                                    className={`${TEXTBOX_STYLE}`}
                                    name="teamName"
                                    onChange={(e) => handleTeamDetails(e, teamIndex)}
                                />

                                <input
                                    type="text"
                                    placeholder="Team Email"
                                    className={`${TEXTBOX_STYLE}`}
                                    name="teamEmail"
                                    onChange={(e) => handleTeamDetails(e, teamIndex)}
                                />

                                <select
                                    className={`${DROPDOWN_STYLE}`}
                                    name="gender"
                                    onChange={(e) => handleTeamDetails(e, teamIndex)}
                                >
                                    <option className='bg-[#1c3a6d]' disabled selected value="">Select Team Gender</option>
                                    <option className='bg-[#1c3a6d]' value="male">Male</option>
                                    <option className='bg-[#1c3a6d]' value="female">Female</option>
                                </select>

                                <div className={`${DIVIDER_STYLE}`} />

                                <label className="">Leader</label>
                                <input
                                    type="text"
                                    placeholder="Leader Name"
                                    className={`${TEXTBOX_STYLE}`}
                                    name="leaderName"
                                    onChange={(e) => handleTeamDetails(e, teamIndex)}
                                />
                                <input
                                    type="text"
                                    placeholder="Leader NIC"
                                    className={`${TEXTBOX_STYLE}`}
                                    name="leaderNIC"
                                    onChange={(e) => handleTeamDetails(e, teamIndex)}
                                />
                                <input
                                    type="text"
                                    placeholder="Leader Contact No"
                                    className={`${TEXTBOX_STYLE}`}
                                    name="leaderContactNo"
                                    onChange={(e) => handleTeamDetails(e, teamIndex)}
                                />

                                <div className={`${DIVIDER_STYLE}`} />
                            </div>

                            {team.players.map((player, playerIndex) => (
                                <div key={playerIndex} className={`${GRID_4_COLS_STYLE} col-span-4 `}>
                                    <label className="">
                                        Player 0{playerIndex + 1} :
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className={`${TEXTBOX_STYLE}`}
                                        name={`player${getIndexWord(playerIndex)}Name`}
                                        onChange={(e) => handlePlayerDetails(e, teamIndex, playerIndex)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="ID No"
                                        className={`${TEXTBOX_STYLE}`}
                                        name={`player${getIndexWord(playerIndex)}NIC`}
                                        onChange={(e) => handlePlayerDetails(e, teamIndex, playerIndex)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Contact No"
                                        className={`${TEXTBOX_STYLE}`}
                                        name={`player${getIndexWord(playerIndex)}ContactNo`}
                                        onChange={(e) => handlePlayerDetails(e, teamIndex, playerIndex)}
                                    />

                                    <div className={`${DIVIDER_STYLE}`} />
                                </div>
                            ))}

                            {team.extraPlayers.map((extraPlayer, extraPlayerIndex) => (
                                <div key={extraPlayerIndex} className={`${GRID_4_COLS_STYLE} col-span-4 `}>
                                    <label className="flex">
                                        Extra&nbsp;<span className={`block md:hidden min-[${EXTRA_SWAP_POINT}px]:block`}>
                                            Player&nbsp;
                                        </span>0{extraPlayerIndex + 1} :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className={`${TEXTBOX_STYLE}`}
                                        name={`extraPlayer${getIndexWord(extraPlayerIndex)}Name`}
                                        onChange={(e) => handleExtraPlayerDetails(e, teamIndex, extraPlayerIndex)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="ID No"
                                        className={`${TEXTBOX_STYLE}`}
                                        name={`extraPlayer${getIndexWord(extraPlayerIndex)}NIC`}
                                        onChange={(e) => handleExtraPlayerDetails(e, teamIndex, extraPlayerIndex)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Contact No"
                                        className={`${TEXTBOX_STYLE}`}
                                        name={`extraPlayer${getIndexWord(extraPlayerIndex)}ContactNo`}
                                        onChange={(e) => handleExtraPlayerDetails(e, teamIndex, extraPlayerIndex)}
                                    />

                                    <div className={`${DIVIDER_STYLE} ${extraPlayerIndex === team.extraPlayers.length - 1 ? 'hidden' : ''}`} />
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className="flex justify-center mt-4 space-x-4 md:justify-end">
                        <button className='px-4 py-2 font-bold text-black uppercase bg-white border border-white rounded-lg hover:bg-black hover:text-white' type="submit" onClick={handleSubmit}>
                            Register
                        </button>
                        <button className='px-4 py-2 font-bold text-black uppercase bg-white border border-white rounded-lg hover:bg-black hover:text-white' onClick={(e) => handleAddTeam(e)} disabled={teamCount === 4}>
                            Add New Team
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeamRegistration;
