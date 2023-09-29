import React, { useEffect, useState } from 'react';

const Registration = () => {
  const [teams, setTeams] = useState([
    {
      id: 1,
      gender: '',
      teamName: '',
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

  const handleTeamDetails = (e, index) => {
    e.preventDefault();
    const updateTeamDetails = [...teams];
    updateTeamDetails[index][e.target.name] = e.target.value;
    setTeams(updateTeamDetails);
  };

  const handlePlayerDetails = (e, teamIndex, playerindex) => {
    e.preventDefault();
    const updatePlayerDetails = [...teams];
    updatePlayerDetails[teamIndex].players[playerindex][e.target.name] =
      e.target.value;
    setTeams(updatePlayerDetails);
  };

  const handleExtraPlayerDetails = (e, teamIndex, extraPlayerindex) => {
    e.preventDefault();
    const updatePlayerDetails = [...teams];
    updatePlayerDetails[teamIndex].extraPlayers[extraPlayerindex][
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
  function getIndexWord(index) {
    const indexWords = ['One', 'Two', 'Three', 'Four', 'Five'];
    if (index >= 0 && index < indexWords.length) {
      return indexWords[index];
    }
    return `Player ${index + 1}`;
  }
  const [errorArray, setErrorArray] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorArray([]);
    var teamLength = teams.length;
    for (var i = 0; i < teamLength; i++) {
      if (teams[i].gender === '') setErrorArray('please select gender');
      else if (teams[i].teamName === '') {
        setErrorArray('team name cannot be empty');
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
        console.log('registered succcessfully');
        return;
      } else {
        //contact numbers are not valid
        setErrorArray('please fill all the contact numberrs correctly');
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
    <div>
      <div>Players' Details</div>
      <form>
        {teams.map((team, teamIndex) => (
          <div className="table-row-group" key={teamIndex}>
            {/* team name row */}
            <div className="table-row">
              <div className="table-cell w-1/4 ml-3">Gender :</div>
              <div className="table-cell w-1/4 ml-3">
                <select
                  className="form-control"
                  name="gender"
                  onChange={(e) => handleTeamDetails(e, teamIndex)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="table-cell w-1/4 ml-3">Team name :</div>
              <div className="table-cell w-1/4 ml-3">
                <input
                  className="form-control"
                  name="teamName"
                  type="text"
                  placeholder="Team Name"
                  onChange={(e) => handleTeamDetails(e, teamIndex)}
                />
              </div>
            </div>
            {/* leader details row */}
            <div className="table-row">
              <div className="table-cell w-1/4  ml-3">Leader</div>
              <div className="table-cell w-1/4 ml-3">
                <input
                  className="form-control"
                  name="leaderName"
                  type="text"
                  placeholder="Leader Name"
                  onChange={(e) => handleTeamDetails(e, teamIndex)}
                />
              </div>
              <div className="table-cell  w-1/4 ml-3">
                <input
                  className="form-control"
                  name="leaderNIC"
                  type="text"
                  placeholder="Leader NIC"
                  onChange={(e) => handleTeamDetails(e, teamIndex)}
                />
              </div>
              <div className="table-cell  w-1/4 ml-3">
                <input
                  className="form-control"
                  name="leaderContactNo"
                  type="text"
                  placeholder="Leader Contact No"
                  onChange={(e) => handleTeamDetails(e, teamIndex)}
                />
              </div>
            </div>

            {team.players.map((player, playerIndex) => (
              //player row
              //   <div key={playerIndex}>
              <div className="table-row ml-3 ml-3">
                <div className="table-cell  w-1/4 ml-3">
                  Player 0{playerIndex + 1} :
                </div>
                <div className="table-cell  w-1/4 ml-3">
                  <input
                    className="form-control"
                    name={`player${getIndexWord(playerIndex)}Name`}
                    type="text"
                    placeholder="Name"
                    onChange={(e) =>
                      handlePlayerDetails(e, teamIndex, playerIndex)
                    }
                  />
                </div>
                <div className="table-cell  w-1/4 ml-3">
                  <input
                    className="form-control"
                    name={`player${getIndexWord(playerIndex)}NIC`}
                    type="text"
                    placeholder="ID No"
                    onChange={(e) =>
                      handlePlayerDetails(e, teamIndex, playerIndex)
                    }
                  />
                </div>
                <div className="table-cell  w-1/4 ml-3">
                  <input
                    className="form-control"
                    name={`player${getIndexWord(playerIndex)}ContactNo`}
                    type="text"
                    placeholder="Contact No"
                    onChange={(e) =>
                      handlePlayerDetails(e, teamIndex, playerIndex)
                    }
                  />
                </div>
              </div>
            ))}

            {team.extraPlayers.map((extraPlayer, extraPlayerIndex) => (
              //extra players row
              //   <div key={extraPlayerIndex}>
              <div className="table-row ml-3">
                <div className="table-cell  w-1/4 ml-3">
                  Extra Player 0{extraPlayerIndex + 1} :
                </div>
                <div className="table-cell w-1/4 ml-3">
                  <input
                    className="form-control"
                    name={`extraPlayer${getIndexWord(extraPlayerIndex)}Name`}
                    type="text"
                    placeholder="Name"
                    onChange={(e) =>
                      handleExtraPlayerDetails(e, teamIndex, extraPlayerIndex)
                    }
                  />
                </div>
                <div className="table-cell w-1/4 ml-3">
                  <input
                    className="form-control"
                    name={`extraPlayer${getIndexWord(extraPlayerIndex)}NIC`}
                    type="text"
                    placeholder="ID No"
                    onChange={(e) =>
                      handleExtraPlayerDetails(e, teamIndex, extraPlayerIndex)
                    }
                  />
                </div>
                <div className="table-cell w-1/4 ml-3">
                  <input
                    className="form-control"
                    name={`extraPlayer${getIndexWord(
                      extraPlayerIndex
                    )}ContactNo`}
                    type="text"
                    placeholder="Contact No"
                    onChange={(e) =>
                      handleExtraPlayerDetails(e, teamIndex, extraPlayerIndex)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* button row */}
        <div class="table-row">
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
          <button onClick={(e) => handleAddTeam(e)} disabled={teamCount === 4}>
            Add New Team
          </button>
          {/* <button onClick={(e)=>submitAll(e)}>validate</button> */}
        </div>
      </form>
    </div>
  );
};

export default Registration;
